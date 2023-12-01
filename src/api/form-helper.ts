export type FormValues = Record<string, string | string[]>

export function formData(form: HTMLFormElement): FormValues {
    const data = new FormData(form)
    const payload: FormValues = {}
    data.forEach((value, key) => {
        if (value instanceof File) {
            return
        }
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
            const existing = payload[key]
            if (Array.isArray(existing)) {
                existing.push(value)
            } else {
                payload[key] = [existing, value]
            }
        } else {
            payload[key] = value
        }
    })
    return payload
}
