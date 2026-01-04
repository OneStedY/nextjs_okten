export type ICar = {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
};

export type CarCreate = Omit<ICar, "id">;
