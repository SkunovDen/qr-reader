import { createBrowserRouter } from "react-router-dom";
import ScanPage from "./input-page/ScanPage";
import ResultPage from "./result-page/ResultPage";
import StartPage from "./start-page/StartPage";

const router = createBrowserRouter([
    {
        path : '/',
        element: <StartPage />
    },
    {
        path : '/input',
        element: <ScanPage />
    },
    {
        path : '/result',
        element: <ResultPage />
    }
])


export default router