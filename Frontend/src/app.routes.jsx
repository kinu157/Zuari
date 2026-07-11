import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage";
import Solutionpage from "./pages/Solutionpage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";

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
    },
    {
        path:"/about",
        element:<Aboutpage/>
    }
]) 
