import { connectDB } from "@/config/database";
import Property from "@/models/Property";

interface ParamsProps {
  id: string;
  [key: string]: string | string[];
}

export const GET = async (
  request: Request,
  { params }: { params: Promise<ParamsProps> }
) => {
  try {
    await connectDB();

    const { id } = await params;

    if (!id) {
      return new Response(
        JSON.stringify({ message: "Property ID is required" }),
        {
          status: 400,
        }
      );
    }

    const property = await Property.findById(id);

    if (!property) {
      return new Response(JSON.stringify({ message: "Property not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (e) {
    console.error("Error fetching property:", e);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
};
