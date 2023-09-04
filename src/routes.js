import AboutMe from "./pages/AboutMe";
import Challenge from "./pages/Challenge";
import { ABOUTME_ROUTE, JS_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: ABOUTME_ROUTE,
        Component: AboutMe
    },

    {
        path: JS_ROUTE,
        Component: Challenge
    }
]
