export type Item = {
    id: string;
    name: string;
    amount: number;
    price: number;
    description?: string;
};

export type ItemAction = {
    type: string;
    item: Item;
};
