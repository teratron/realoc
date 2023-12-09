import {Form} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'
import {Formik} from "formik";
import {TypeOptions} from "../components/form";
import {CreateType} from "../utils";
import {
    ApartmentAdditionalOptions,
    ApartmentOptions,
    Fee,
    HouseOptions,
    Location,
    HouseAdditionalOptions,
    OfficeOptions,
    OfficeAdditionalOptions,
    CommercialOptions,
    CommercialAdditionalOptions,
    WarehouseOptions,
    WarehouseAdditionalOptions,
    LandOptions,
    LandAdditionalOptions,
    ParkingOptions,
    ParkingAdditionalOptions,
    Photos
} from "../components/form/create";
import {FormEvent} from "react";
import {createProperty} from "../api";

function AddSale() {
    const state: CreateType = {
        offert_type: 'SELL',
        type: 'APARTMENT',
        price_type: 'total',
        apt_building_type: 'NEW',
        land_type: 'AGRO',
        land_area_unit: 'ar',
        price: '',
        area: '',
    }

    const formikSubmitHandler = async () => {}

    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const id = await createProperty(data)
        alert(`Property ID:${id} created`)
    }

    return (
        <Formik onSubmit={formikSubmitHandler} initialValues={state}>
            {formik => (
                <>
                    <Header title="Add Sale"/>
                    <Main>
                        <Form
                            id="add-sale-form"
                            className="app-form"
                            onSubmit={formSubmitHandler}
                        >
                            <h2>Adaugă imobiliare</h2>

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

                            <Photos />

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
