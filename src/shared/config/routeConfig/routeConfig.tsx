import CalculatorPage from "@/pages/Calculator";
import MainPage from "@/pages/Main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes{
    MAIN = 'main',
    CALCULATOR = 'calculator',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.CALCULATOR]: '/calculator'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />
    },
    [AppRoutes.CALCULATOR]: {
        path: RouterPath.calculator,
        element: <CalculatorPage />
    }
}