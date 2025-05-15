import { apiDomain } from "@/constants/api-domain";

export async function getProperties() {
  try {
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(`${apiDomain}/properties`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}
