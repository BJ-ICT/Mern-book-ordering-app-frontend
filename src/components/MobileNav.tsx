import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-custom" /> {/* Fixed typo: text-orange-500 */}
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-blue-custom" />
                            {user?.email}
                        </span>
                    ) : (
                        <span>Welcome To WhisperingPages</span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks /> /* Assuming this component displays links when logged in */
                    ) : (
                        <Button
                            className="flex-1 font-bold bg-blue-custom"
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
