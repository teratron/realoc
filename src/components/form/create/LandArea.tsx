import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Form, InputGroup} from "react-bootstrap";
import {Required} from "./Required.tsx";

export function LandArea({formik, required}:FormikAware<CreateType> & RequiredOptions){
    return (
        <Form.Group>
            <Form.Label htmlFor="area-from">
                Suprafață teren
                {required && <Required dataName="land_area"/>}
            </Form.Label>
            <div className="row">
                <div className="col">
                    <InputGroup>
                        <Form.Control
                            name="land_area"
                            type="text"
                            placeholder="Indicați suprafața"
                            onChange={formik.handleChange}
                        />
                        <InputGroup.Text>ari</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </Form.Group>
    )
}
