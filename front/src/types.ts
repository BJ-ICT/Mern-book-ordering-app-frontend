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
    categeories: any; 
    category: string[];
    bookItems: BookItem[];
    imageUrl : string;
    lastUpdated: string;
}

export type BookStoreSearchResponse = {
    data: BookStore[];
    pagination: {
    total: number;
    page: number;
    pages: number;
    };
};