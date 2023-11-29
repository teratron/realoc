import {PriceRange, PriceUnit, TotalArea} from "./fields";

// @ts-ignore
export function CommercialOptions({offertType}) {
    return (
        <div className="app-card">
            <PriceRange offertType={offertType}/>
            <PriceUnit/>
            <TotalArea/>
        </div>
    )
}
