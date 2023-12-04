export type Developer = { id: number, name: string }
export type DeveloperList = Developer[]

export async function listDevelopers(): Promise<DeveloperList> {
    const url = `${import.meta.env.VITE_API_URL}/developers`
    const data: Record<string, number> = await fetch(url).then(r => r.json())

    return Object.entries(data).map(([name, id]) => ({id, name}))
}

export function orderList(list: DeveloperList): Record<string, Developer[]> {
    const result: Record<string, Developer[]> = {}
    list.forEach((item) => {
        const letter = item.name[0].toUpperCase()
        if (!result[letter]) {
            result[letter] = []
        }
        result[letter].push(item)
    })
    return result
}
