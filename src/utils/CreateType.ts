export type CreateType = Partial<{
    offert_type: string
    type: string
    apt_building_type: string
    rooms: string
    price: string
    price_type: string
    area: string
    mortgage: string
    reparation: string | string[]
    level: string
    levels_total: string
    elevator: string
    apt_parking: string
    construction_date: string
    apt_kids_allowed: string
    apt_animals_allowed: string
    furniture: string
    description: string
    transaction_fee: string
    developer: (string|number) | ((string|number)[])
    developer_preview: string
    location: (string|number) | ((string|number)[])
    location_preview: string
    house_type: string | string[]
    owner: string
    owner_vat: string
    office_type_building: string
    office_dedicated_entrance: string
    office_parking: string
    office_parking_lots: string
    commercial_ramp: string
    commercial_second_entrance: string
    warehouse_heating: string
    warehouse_office: string
    warehouse_wc: string
    warehouse_parking: string
    warehouse_class: string
    land_type: string
    land_area_unit: string
    land_electricity: string
    land_gas: string
    land_canalization: string
    land_water: string
    land_quality: string
    parking_type: string
}>
