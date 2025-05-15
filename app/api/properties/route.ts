import { connectDB } from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
};
