export type FormValues = Record<string, string | string[]>

export function formData(form: HTMLFormElement): FormValues {
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
