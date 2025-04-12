import { useLocation } from "react-router-dom";

import AccountTopBar from "./AccountBar";
import ProfileTopBar from "./ProfileBar";
import CategoryTopBar from "./CategoryBar";
import DefaultTopBar from "./DefaultBar";
import OfferTopBar from "./OfferBar";

export default function TopBar() {
    const location = useLocation();

    return (
        <header className="bg-[#f4f4f4] rounded-b-3xl">
            {location.pathname.includes("/category") ? (
                <CategoryTopBar />
            ) : location.pathname.includes("/profile") ? (
                <ProfileTopBar />
            ) : location.pathname.includes("/account") ? (
                <AccountTopBar />
            ) : location.pathname.includes("offer") ? (
                <OfferTopBar />
            ) : (
                <DefaultTopBar />
            )}
        </header >
    )
}