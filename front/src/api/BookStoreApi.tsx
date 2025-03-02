import { BookStoreSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

 export const useSearchBookStores = (city?: string) => {
    const createSearchRequest = async (): Promise<BookStoreSearchResponse> => {
        const response = await fetch (
            `${API_BASE_URL}/api/bookstore/search${city}`
        );
        if (!response.ok) {
            throw new Error ("Failed to get bookstore");
        }

        return response.json();

    };

        const {data: results, isLoading} = useQuery (
            ["searchBookStores"],
            createSearchRequest,
            { enabled: !!city }
    );

    return {
        results, isLoading,
    };

    


};