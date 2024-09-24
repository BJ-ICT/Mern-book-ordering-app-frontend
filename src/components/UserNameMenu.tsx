import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { UserCircle } from "lucide-react"; // Changed to a valid icon
import { Link } from "react-router-dom"; // Correct Link import
import { Button } from "./ui/button";

const UserNameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-blue-custom">
                <UserCircle className="text-blue-custom mr-2" /> {/* Added margin */}
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2"> {/* Added white background and shadow */}
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-blue-custom">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button 
                        onClick={() => logout({})} 
                        className="flex flex-1 font-bold bg-blue-custom"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNameMenu;
