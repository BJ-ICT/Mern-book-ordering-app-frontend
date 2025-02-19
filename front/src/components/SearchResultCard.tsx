import { BookStore } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Link } from "react-router-dom";



type Props = {
    bookstore: BookStore;

}

const SearchResultCard = ({bookstore}: Props) => {
    return(
        <Link to ={`/detail/${bookstore._id}`} className = "grid lg:grid-cols-[2fr_3fr] gap-5 group"
        >
                <AspectRatio ratio = {16/6}>
                    <img src = {bookstore.imageUrl} className="rounded-md w-full h-full object-cover"/>
                </AspectRatio>
                 <div>
                    <h3 className = "text-2x1 font-bold tracking-tight mb-2 group-hover:underline">
                   {bookstore.bookStoreName} 
                </h3> 
                   
                <div id="card-content" className="grid md:grid-cols-2 gap-2">
                    <div className = "flex flex-row flex-warp">
                        {bookstore.categeories.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: number) => (
                        <span className = "flex">
                            <span> {item} </span>
                            {index < bookstore.categeories.length - 1 && <Dot />}
                            </span>
                        ))}
                    </div>
                    <div className ="flex gap-2 flex-col"> 
                        <div className = "flex items-center gap-1 text-green-600">
                            <Clock className ="text-green-600 "/>
                            {bookstore.estimatedDeliveryTime} mins
                        </div>
                        <div className="flex items-center gap-1">
                            <Banknote/>
                            Delivery from Rs. {(bookstore.deliveryPrice /100 ).toFixed(2)}
                            
                        </div>
                    </div>
                </div>
                </div>
                
        </Link>
    );
};

export default SearchResultCard;