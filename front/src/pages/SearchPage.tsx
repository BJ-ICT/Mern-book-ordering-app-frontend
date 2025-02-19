import { useSerachBookStores } from "@/api/BookStoreApi";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import {useParams} from "react-router-dom";




const SearchPage = () => {
    const {city} = useParams ();
    const {results, isLoading} = useSerachBookStores(city);

    if (isLoading) {
        <span>Loading...</span>;
    }

    if (!results?.data || !city ){
        return <span> No Result Found</span>
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div id="categeory-lists">
            insert categeory here: )
        </div> 
        <div id ="main-content" className = "flex flex-col gap-5">
            <SearchResultInfo total = {results.pagination.total} city = {city}/>
            {results.data.map((bookstore ) => (
                <SearchResultCard bookstore = {bookstore}/>
            ))}
        </div>
      </div>
    );
    
};

export default SearchPage;