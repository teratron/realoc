export type SearchFilters = Record<string, string | string[]>
export type SearchResult = Record<string, any>

export async function search(filters: SearchFilters): Promise<SearchResult> {
    console.log('search', filters)
    return {}
    /*
        return (await fetch('/api/search', filters)).json()
     */
}

export async function searchCount(filters: SearchFilters): Promise<number> {
    console.log('searchCount', filters)
    return Math.ceil(Math.random() * 1000)
    /*
        const response = await fetch('/api/search-count', filters)
        const {total}: {total: number} = await response.json()
        return total
     */
}

export function formData(form: HTMLFormElement): SearchFilters {
    const data = new FormData(form)
    const payload: Record<string, any> = {}
    data.forEach((value, key) => {
        if (payload.hasOwnProperty(key)) {
            if (Array.isArray(payload[key])) {
                payload[key].push(value)
            } else {
                payload[key] = [payload[key], value]
            }
        } else {
            payload[key] = value
        }
    })
    return payload
}
