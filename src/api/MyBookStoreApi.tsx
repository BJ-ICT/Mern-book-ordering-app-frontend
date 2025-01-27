import { BookStore } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyBookStore = ()=> {
    const { getAccessTokenSilently } = useAuth0();

    const useGetMyBookStoreRequest = async ():Promise <BookStore> => {
      const accessToken = await getAccessTokenSilently () ; 

      const response = await fetch (`${API_BASE_URL}/api/my/bookstore`,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
      })

      if (!response.ok) {
        throw new Error ("Faild to get BookStore");
    }

    return response.json();
        
  };


  const {data: bookstore, isLoading} = useQuery (
    "fetchMyBookStore",
     useGetMyBookStoreRequest
  );

  return { bookstore, isLoading};

};

export const useCreateMyBookStore = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Define the mutation function
    const createMyBookStoreRequest = async (bookStoreFormData: FormData): Promise<BookStore> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/bookstore`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: bookStoreFormData, // Ensure FormData is passed as body
        });

        if (!response.ok) {
            const errorData = await response.json(); // Fetch error response
            console.error("Server error response:", errorData); // Log detailed error
            throw new Error("Failed to create BookStore");
        }

        return response.json();
    };

    // Use mutation with react-query
    const { mutate: createBookStore, isLoading, isSuccess, isError, error } = useMutation(createMyBookStoreRequest, {
        onSuccess: () => {
            toast.success("BookStore Created!"); // Trigger toast on success
        },
        onError: () => {
            toast.error("Unable to create BookStore"); // Trigger error toast on failure
        },
    });

    // Return the mutation function and relevant states
    return { createBookStore, isLoading, isSuccess, isError, error };
};
