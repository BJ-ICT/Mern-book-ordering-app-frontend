import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import LogoImage from "../assets/Logo .jpg";  // Ensure path is correct

const Header = () => {
    return (
        <div className="border-b-2 border-b-blue-custom py-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    to="/" 
                    className="text-2xl font-bold tracking-tight text-blue-custom flex items-center">
                    <img 
                        src={LogoImage} 
                        alt="Whispering Pages Logo" 
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-40 lg:h-40 mr-2"  // Responsive sizing
                    />
                    WhisperingPages.com
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    );
};

export default Header;
