import { createBrowserRouter } from "react-router-dom"
import Root from "./root"
import HomePage from "@/pages/home"
import CategoryPage from "@/pages/category"
import ProfilePage from "@/pages/profile"
import Account from "@/pages/account"
import OfferPage from "@/pages/offer"
import NotificationPage from "@/pages/notification"
import AvailablePage from "@/pages/available"
import Search from "@/pages/search/search.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "category/:categoryId",
                element: <CategoryPage />
            },
            {
                path: "profile/:slug",
                element: <ProfilePage />
            },
            {
                path: "account",
                element: <Account />
            },
            {
                path: "offer",
                element: <OfferPage />
            },
            {
                path: "notification",
                element: <NotificationPage />
            },
            {
                path: "available",
                element: <AvailablePage />
            },
            {
                path: "search",
                element : <Search />
            }
        ]
    }
])