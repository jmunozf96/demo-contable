import React from 'react';
import NavbarComponent from "./components/Navbar";
import RouteConfig from "./router/router";

export default function App() {
    return (
        <div>
            <RouteConfig>
                <NavbarComponent/>
            </RouteConfig>
        </div>
    );
}
