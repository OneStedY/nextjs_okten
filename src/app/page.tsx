import Link from "next/link";

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
};

async function getCars(): Promise<Car[]> {
  const car = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
  });
  return car.json();
}

export default async function CarsPage() {
  const cars = await getCars();

  return (

    <div>
        <Link href={'/newcar'}>  Create car  </Link>
        <hr/>
        <hr/>
        <hr/>
        <ul>
          {cars.map((c) => (
              <li key={c.id}>
                {c.id}. {c.brand} {c.model} ({c.year}) — {c.price}
              </li>
          ))}
        </ul>
      </div>
  );
}

