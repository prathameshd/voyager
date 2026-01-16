export interface ItemType {
    id: number;
    name: string;
    checked: boolean;
}
export const MockItemChecklist: ItemType[] = [
    { id: 1, name: "Passport / ID", checked: false },
    { id: 2, name: "Wallet", checked: true },
    { id: 3, name: "Phone", checked: true },
    { id: 4, name: "Phone charger", checked: false },
    { id: 5, name: "Power bank", checked: false },
    { id: 6, name: "Travel tickets / reservations", checked: false },
    { id: 7, name: "Clothes", checked: true },
    { id: 8, name: "Underwear", checked: false },
    { id: 9, name: "Sleepwear", checked: false },
    { id: 10, name: "Toiletries", checked: false },
    { id: 11, name: "Toothbrush & toothpaste", checked: false },
    { id: 12, name: "Medications", checked: true },
    { id: 13, name: "Sunscreen", checked: true },
    { id: 14, name: "Sunglasses", checked: true },
    { id: 15, name: "Comfortable shoes", checked: true },
    { id: 16, name: "Jacket / sweater", checked: false },
    { id: 17, name: "Reusable water bottle", checked: false },
    { id: 18, name: "Snacks", checked: false },
    { id: 19, name: "Headphones", checked: false },
    { id: 20, name: "Travel pillow", checked: true }
];