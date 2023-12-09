export async function createProperty(data: FormData): Promise<number> {
    const url = `${import.meta.env.VITE_API_URL}/properties`

    const response: {ID: number} = await (await fetch(url, {
        method: "POST",
        body: data,
    })).json();

    return response.ID
}
