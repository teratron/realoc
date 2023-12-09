import {FormikProps} from "formik";

export type FormikAware<T> = {
    formik: FormikProps<T>
}

export type CustomLabel = {
    label: string
}

export type MultipleOptions = {
    multiple: boolean
}
