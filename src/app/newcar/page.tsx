import { redirect } from "next/navigation";

const API = "http://owu.linkpc.net/carsAPI/v1/cars";

async function createCar(formData: FormData) {
    "use server";

    const carLoad = {
        brand: String(formData.get("brand") ?? "").trim(),
        model: String(formData.get("model") ?? "").trim(),
        year: Number(formData.get("year")),
        price: Number(formData.get("price")),
    };

    const carGen = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carLoad),
    });



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
