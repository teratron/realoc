import {PriceRange, PriceUnit, TotalAreaRange} from "./fields";

type Params = {
    offertType: string
}

export function CommercialOptions({offertType}: Params) {
    return (
        <div className="app-card">
            <PriceRange offertType={offertType}/>
            <PriceUnit/>
            <TotalAreaRange/>
        </div>
    )
}
