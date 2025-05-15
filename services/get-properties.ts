const apiDomain: string | null = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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
