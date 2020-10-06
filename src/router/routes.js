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
        exact: false,
        path: "/login",
        component: Login,
    },
    {
        exact: false,
        path: "/registro",
        component: Registro
    }
];