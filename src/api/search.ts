import {FormValues} from "./form-helper.ts";

export async function search(filters: FormValues): Promise<any> {
    console.log('search', filters)
    return {}
    /*
        return (await fetch('/api/search', filters)).json()
     */
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
