import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu"; // Consistent import name

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
                <UserNameMenu />
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold hover:text-blue-custom hover:bg-white"
                    onClick={handleLogin}
                >
                    Log in
                </Button>
            )}
        </span>
    );
};

export default MainNav;
