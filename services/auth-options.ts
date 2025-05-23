import { connectDB } from "@/config/database";
import User from "@/models/User";
import { getEnvVar } from "@/utils/get-env-var";
import { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getEnvVar("GOOGLE_CLIENT_ID"),
      clientSecret: getEnvVar("GOOGLE_CLIENT_SECRET"),
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const googleProfile = profile as {
        email?: string;
        name?: string;
        picture?: string;
      };
      console.log(profile);
      // Connect to the database
      await connectDB();
      // Check if the user already exists in the database
      const userExists = await User.findOne({ email: googleProfile?.email });
      // If the user not exists, add it to the database
      if (!userExists) {
        const userName = profile?.name?.slice(0, 20);

        await User.create({
          email: googleProfile?.email,
          username: userName,
          image: googleProfile?.picture,
        });
      }
      // Allow the user to sign in
      return true;
    },
    async session({ session }): Promise<ExtendedSession> {
      // Get the user from the database
      const user = await User.findOne({ email: session?.user?.email });

      // Return the extended session
      return {
        ...session,
        user: {
          name: user?.username,
          email: user?.email,
          image: user?.image,
          id: user?.id,
        },
      };
    },
  },
};
