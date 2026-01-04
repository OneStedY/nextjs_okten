import {CarCreate, ICar} from "@/models/ICar";


const API = "http://owu.linkpc.net/carsAPI/v1/cars";


export async function fetchCars(): Promise<ICar[]> {
    const res = await fetch(API);
    return res.json();
}

export async function postCar(dto: CarCreate): Promise<ICar> {
    const carPost = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
    });
    return carPost.json();
}
