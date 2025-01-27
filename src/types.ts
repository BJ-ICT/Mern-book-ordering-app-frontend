export type User = {
    _id: string;
    email:string;
    name : string;
    city : string;
    addressLine1 : string;
    mobileNumber : string;

};

export type BookItem = {
    _id: string;
    name: string;
    price: number;
};

export type BookStore = {
    _id: string;
    user: string;
    bookStoreName: string;
    city: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    category: string[];
    bookItem: BookItem[];
    imageUrl : string;
    lastUpdated: string;
}