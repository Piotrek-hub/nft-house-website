export interface AccountInterface {
    account: string,
    metamaskConnection: boolean
}

export interface SearchInterface {
    location: string,
    type: string,
    price: string,   
}
export interface HouseProps {
    id: number;
    title: string;
    type: "house" | "apartment";
    location: string;
    price: number;
    imageUrl: string;
    owner: string;
}

export interface ProfileInfo {
    totalHousesBought: string;
    totalHousesSold: string;
    totalMoneySpend: number;
}
