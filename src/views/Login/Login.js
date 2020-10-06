import React from "react";
import LoginComponent from "../../components/Login";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <React.Fragment>
            <LoginComponent/>
            <Link to="/registro">Registrarse</Link>
        </React.Fragment>
    )
}