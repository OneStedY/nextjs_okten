import { redirect } from "next/navigation";
import {postCar} from "@/services/api.service";
import {CarCreate} from "@/models/ICar";


async function createCar(formData: FormData): Promise<void> {
    "use server";

    const carLoad: CarCreate = {
        brand: String(formData.get("brand") ?? "").trim(),
        model: String(formData.get("model") ?? "").trim(),
        year: Number(formData.get("year")),
        price: Number(formData.get("price")),
    };


    await postCar(carLoad);

    redirect("/");
}

export default function NewCarPage() {
    return (
        <div>
            Create car
            <form action={createCar}>
                <input name="brand" placeholder="brand" required />
                <input name="model" placeholder="model" required />
                <input name="year" placeholder="year" type="number" required />
                <input name="price" placeholder="price" type="number" required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
