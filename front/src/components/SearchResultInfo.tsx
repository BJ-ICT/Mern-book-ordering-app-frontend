import { Link } from "react-router-dom";

type Props = {
    total: number;
    city:string;
}

const SearchResultInfo = ({total, city}: Props) => {
    return (
        <div className = "text-x1 font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
            <span>
                {total} BookStore found in {city}
                <Link to = "/" className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"> Change Location</Link>
            </span>
            inser sort dropdown here
        </div>
    );
}

export default SearchResultInfo;