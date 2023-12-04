export type Location = {
    id: number
    parent_id: number
    type: string
    name: string
    children: Location[]
}

export type LocationList = Record<string, Location[]>

type ApiLocation = {
    name: string
    params: {
        id: number
        parent_id: number
        type: string
    }
}

export async function listLocations(): Promise<Location[]> {
    const url = `${import.meta.env.VITE_API_URL}/locations`
    const data: ApiLocation[] = await fetch(url).then(r => r.json())

    return data.map((l): Location => {
        return {...l.params, name: l.name, children: []}
    })
}

function getChildren(list: Location[], parentId: number): Location[] {
    const result = list.filter(l => l.parent_id === parentId)
    result.forEach(l => {
        l.children = getChildren(list, l.id)
    })

    return result
}

export function reorderLocations(locations: Location[]): LocationList {
    let tree = getChildren(locations, 0)

    const result: LocationList = {}
    const popular = tree.filter(l => [1,2].includes(l.id))
    if (popular) {
        result.popular = popular
    }
    tree = tree.filter(l => ![1,2].includes(l.id))
    tree.forEach(l => {
        const letter = l.name[0].toUpperCase()
        if (!result[letter]) {
            result[letter] = []
        }
        result[letter].push(l)
    })

    return result
}