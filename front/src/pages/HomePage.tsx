import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate ({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    }
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-blue-custom">
                    Dive into a new story today!
                </h1>
                <span className="text-xl">Books are just a click away!</span>
                <SearchBar placeHolder = "Seach by City" onSubmit = {handleSearchSubmit}/>
            </div>
            <div className="grid md:grid-cols-2 gap-5"> 
                {/* Add width and height classes to limit the image size */}
                <img 
                    src={landingImage} 
                    alt="good books" 
                    className="w-full h-auto max-w-md mx-auto"  // Set max width, full width for responsiveness
                />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Get your favorite books even faster to your Door Step!
                    </span>
                    <span>
                        Download the WhisperingPages App for faster ordering and personalized recommendations.
                    </span>
                    <img 
                        src={appDownloadImage} 
                        alt="Download the app" 
                        className="w-full h-auto max-w-xs mx-auto"  // Limit size of app download image too
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
