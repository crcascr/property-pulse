import { apiDomain } from "@/constants/api-domain";
import { ParamValue } from "next/dist/server/request/params";

interface Props {
  id: ParamValue;
}

export async function getProperty({ id }: Props) {
  try {
    if (!apiDomain) {
      return null;
    }
    const response = await fetch(`${apiDomain}/properties/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}
