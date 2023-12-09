import {Accordion, Form} from "react-bootstrap";
import {Location} from "../../../api";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";

type Params = FormikAware<CreateType> & MultipleOptions & {
    items: Location[],
    level: number
}

export function LocationTree({items, level, formik, multiple}: Params) {
    const isChecked = (id: number): boolean => {
        if (multiple && Array.isArray(formik.values.location)) {
            return formik.values.location.includes(id.toString())
        } else {
            return formik.values.location === id.toString()
        }
    }

    return (
        <>
            {items.map((location: Location) => {
                if(location.children.length === 0) {
                    return (
                        <Form.Check
                            key={`location-${location.id}`}
                            id={`location-${location.id}`}
                            type={multiple ? 'checkbox' : 'radio'}
                            label={location.name}
                            value={location.id}
                            name="location"
                            className="custom-checkbox"
                            checked={isChecked(location.id)}
                            onChange={formik.handleChange}
                        />
                    )
                }
                return (
                    <Accordion flush={level === 0} key={`acc-${location.id}`}>
                        <Accordion.Item eventKey={`${location.id}-${level}`}>
                            <Accordion.Button as="div" className="partially">
                                {location.name}
                                <small>{location.children.length} localități</small>
                            </Accordion.Button>
                            <Accordion.Body>
                                <LocationTree items={location.children} level={level + 1} formik={formik} multiple={multiple}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </>
    )
}
