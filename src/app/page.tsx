import Link from "next/link";
import {fetchCars} from "@/services/api.service";
import {ICar} from "@/models/ICar";


export default async function CarsPage() {
    const cars: ICar[] = await fetchCars();

    return (
        <div>
            <Link href="/newcar"> <a>Create car</a> </Link>
            <hr />
            <ul>
                {cars.map((c) => (
                    <li key={c.id}>
                        {c.id}. {c.brand} {c.model} ({c.year}) - {c.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
