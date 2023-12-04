export type Developer = { id: number, name: string }
export type DeveloperList = Developer[]

export async function listDevelopers(): Promise<DeveloperList> {
    const url = `${import.meta.env.VITE_API_URL}/developers`
    const data: Record<string, number> = await fetch(url).then(r => r.json())

    return Object.entries(data).map(([name, id]) => ({id, name}))
}
