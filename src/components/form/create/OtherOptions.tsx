import {Form} from "react-bootstrap";
import {CreateType, CustomLabel, FormikAware} from "../../../utils";
import {ChangeEvent} from "react";

type Params = FormikAware<CreateType> & CustomLabel & {
    options: Record<string, string>
}

export function OtherOptions({options, label, formik}: Params) {
    const title = label ? label : 'Alte condiții'

    // @ts-ignore A bit of dynamic magic
    const isChecked = (name: string): boolean => formik.values[name] === '1'

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.checked ? '1' : '0').catch()
    }

    return (
        <Form.Group>
            <Form.Label>{title}</Form.Label>
            {Object.entries(options).map(([name, label]) => (
                <Form.Check
                    key={name}
                    id={name}
                    type="checkbox"
                    label={label}
                    name={name}
                    className="form-cracker"
                    checked={isChecked(name)}
                    onChange={onChange}
                />
            ))}
        </Form.Group>
    )
}
