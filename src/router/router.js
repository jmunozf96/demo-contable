import React from "react";
import {routes} from "./routes"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import {RUTA_PRINCIPAL} from "../constants/statics";

export default function RouteConfig({children}) {
    return (
        <Router basename={`${RUTA_PRINCIPAL}`}>
            {children}
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </Router>
    )
}

export function RouteWithSubRoutes(route) {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes}/>
            )}
        />
    )
}