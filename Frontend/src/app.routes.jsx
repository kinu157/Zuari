import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage";
import Solutionpage from "./pages/Solutionpage";
import Contactpage from "./pages/Contactpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path:"/solutions",
        element: <Solutionpage/>
    },
    {
        path:"/contact",
        element: <Contactpage/>
    }
]) 
