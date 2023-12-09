import {Form} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'
import * as conf from '../config.ts'
import iconNote from '../media/icon_note_grey_circle.svg'
import iconAddPhoto from '../media/icon_add_photo.svg'
import {Formik, FormikProps} from "formik";
import {TypeOptions} from "../components/form";
import {CreateType} from "../utils";
import {
    ApartmentAdditionalOptions,
    ApartmentOptions,
    Fee,
    HouseOptions,
    Location,
    Required
} from "../components/form/create";
import {HouseAdditionalOptions} from "../components/form/create/HouseAdditionalOptions.tsx";
import {OfficeOptions} from "../components/form/create/OfficeOptions.tsx";
import {OfficeAdditionalOptions} from "../components/form/create/OfficeAdditionalOptions.tsx";
import {CommercialOptions} from "../components/form/create/CommercialOptions.tsx";
import {CommercialAdditionalOptions} from "../components/form/create/CommercialAdditionalOptions.tsx";
import {WarehouseOptions} from "../components/form/create/WarehouseOptions.tsx";
import {WarehouseAdditionalOptions} from "../components/form/create/WarehouseAdditionalOptions.tsx";
import {LandOptions} from "../components/form/create/LandOptions.tsx";
import {LandAdditionalOptions} from "../components/form/create/LandAdditionalOptions.tsx";
import {ParkingOptions} from "../components/form/create/ParkingOptions.tsx";
import {ParkingAdditionalOptions} from "../components/form/create/ParkingAdditionalOptions.tsx";

function AddSale() {
    const state: CreateType = {
        offert_type: 'SELL',
        type: 'APARTMENT',
        price_type: 'total',
        apt_building_type: 'NEW',
        land_type: 'AGRO',
        land_area_unit: 'ar',
    }

    const formSubmitHandler = async (values: CreateType) => {
        console.log('formSubmitHandler', values);
    }

    const data = (formik: FormikProps<CreateType>) => {
        console.log(formik.values);
        return '';
    }
    return (
        <Formik onSubmit={formSubmitHandler} initialValues={state}>
            {formik => (
                <>
                    <Header title="Add Sale"/>
                    <Main>
                        <Form
                            id="add-sale-form"
                            className="app-form"
                            onSubmit={formik.handleSubmit}
                        >
                            <h2>Adaugă imobiliare</h2>

                            <div>{data(formik)}</div>

                            <TypeOptions formik={formik}/>

                            {formik.values.type === "APARTMENT" && <ApartmentOptions formik={formik}/>}
                            {formik.values.type === "HOUSE" &&
                                <HouseOptions formik={formik} multiple={false} required={true}/>}
                            {formik.values.type === "OFFICE" && <OfficeOptions formik={formik} required={true}/>}
                            {formik.values.type === "COMMERCIAL" &&
                                <CommercialOptions formik={formik} required={true}/>}
                            {formik.values.type === "WAREHOUSE" && <WarehouseOptions formik={formik} required={true}/>}
                            {formik.values.type === "LAND" &&
                                <LandOptions formik={formik} required={true} multiple={false}/>}
                            {formik.values.type === "PARKING" &&
                                <ParkingOptions formik={formik} required={true} multiple={false}/>}

                            <div className="app-card">
                                <Location formik={formik} multiple={false}/>
                            </div>

                            {/******************************************************
                             * Photo Block
                             *******************************************************/}
                            <div className="app-card">
                                <Form.Group controlId="add-photo">
                                    <Form.Label>
                                        Fotografie
                                        <Required dataName="addPhoto"/>
                                        <span className="foot">5/{conf.MAX_PHOTOS}</span>
                                    </Form.Label>
                                    <div className="gallery-thumb">
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                    </div>
                                    <Form.Control
                                        type="file"
                                        name="addPhoto"
                                        className="form-add-photo"
                                        multiple
                                    />
                                    <Form.Label><img src={iconAddPhoto} alt=""/>Adaugă fotografie</Form.Label>
                                </Form.Group>

                                <div className="alert alert-light">
                                    <img src={iconNote} alt=""/>
                                    <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
                                </div>
                            </div>

                            {formik.values.type === "APARTMENT" &&
                                <ApartmentAdditionalOptions formik={formik} multiple={false}/>}
                            {formik.values.type === "HOUSE" && <HouseAdditionalOptions formik={formik}/>}
                            {formik.values.type === "OFFICE" &&
                                <OfficeAdditionalOptions formik={formik} multiple={false} required={true}/>}
                            {formik.values.type === "COMMERCIAL" &&
                                <CommercialAdditionalOptions formik={formik} multiple={false} required={true}/>}
                            {formik.values.type === "WAREHOUSE" &&
                                <WarehouseAdditionalOptions formik={formik} multiple={false} required={true}/>}
                            {formik.values.type === "LAND" && <LandAdditionalOptions formik={formik}/>}
                            {formik.values.type === "PARKING" && <ParkingAdditionalOptions formik={formik}/>}


                            <Fee formik={formik}/>

                            <div className="navbar">
                                <div className="app-container">
                                    <button
                                        type="submit"
                                        className="btn btn-primary">
                                        Adaugă anunțe
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </Main>
                </>
            )}
        </Formik>
    )
}

export default AddSale
