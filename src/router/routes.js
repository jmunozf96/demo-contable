import Home from "../views/Home";
import Login from "../views/Login/Login";
import Registro from "../views/Login/Registro";

export const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/registro",
        component: Registro
    }
];