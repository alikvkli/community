import { createBrowserRouter } from "react-router-dom"
import Root from "./root"
import HomePage from "@/pages/home"
import CategoryPage from "@/pages/category"
import ProfilePage from "@/pages/profile"
import Account from "@/pages/account"
import OfferPage from "@/pages/offer"

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
            }
        ]
    }
])