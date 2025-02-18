import { useSerachBookStores } from "@/api/BookStoreApi";
import {useParams} from "react-router-dom";




const SearchPage = () => {
    const {city} = useParams ();
    const {results} = useSerachBookStores(city);
    return (
        <span>
             User search for {city} <span>
                {results?.data.map((bookstore) => (
                 <span>
                    found - {bookstore.bookStoreName}, {bookstore.city}
                 </span>
                  ))}
                </span>
        </span>
    )
    
};

export default SearchPage;