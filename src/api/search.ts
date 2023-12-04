import {FormValues} from "./form-helper.ts";

export async function search(filters: FormValues): Promise<unknown> {
    const url = `${import.meta.env.VITE_API_URL}/search`
    const params = {
        method: 'POST',
        body: JSON.stringify(filters)
    }
    return (await fetch(url, params)).json()
}

export async function searchCount(filters: FormValues): Promise<number> {
    console.log('searchCount', filters)
    return Math.ceil(Math.random() * 1000)
    /*
        const response = await fetch('/api/search-count', filters)
        const {total}: {total: number} = await response.json()
        return total
     */
}
