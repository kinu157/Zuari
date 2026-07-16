import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Solutionpage from "./pages/Solutionpage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Privacypage from "./pages/Privacypage"
import Careerpage from "./pages/Careerpage"

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
    },
    {
        path:"/privacy",
        element:<Privacypage/>
    },
    {
        path:"/career",
        element:<Careerpage/>
    }
]) 
