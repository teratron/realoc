import {BuildingState, FloorRange, OtherOptions} from "./fields";
import {Form} from "react-bootstrap";

export function WarehouseAdditionalOptions() {
    const reparationOptions: Record<string, string> = {
        'WHITE': 'Varianta albă',
        'GRAY': 'Varianta sură',
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }

    const floorOptions = {
        'parterre': 'Parter',
        'not_plinth': 'Nu plintă',
        'not_basement': 'Nu subsol',
    }

    const otherOptions = {
        'warehouse_heating': 'Încălzire',
        'warehouse_office': 'Oficii',
        'warehouse_wc': 'Bloc sanitar',
        'warehouse_parking': 'Parcare',
    }

    return (
        <>
            <BuildingState label="Stare obiect" reparationOptions={reparationOptions}/>

            <div className="app-card pb-1">
                <FloorRange label="Nivel" options={floorOptions}/>

                <Form.Group>
                    <Form.Label>Clasa spațiu</Form.Label>
                    {[
                        'A', 'B', 'C', 'D'
                    ].map((value, index) => (
                        <Form.Check
                            key={`warehouse-class-${index}`}
                            id={`warehouse-class-${index + 1}`}
                            type="checkbox"
                            label={value}
                            value={value}
                            name="warehouse_class"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                <OtherOptions options={otherOptions}/>
            </div>
        </>
    )
}