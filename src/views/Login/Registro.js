import React from "react";
import RegistrarseComponent from "../../components/Login/Registro";
import {Link} from "react-router-dom";

export default function Registro() {
    return (
        <React.Fragment>
            <RegistrarseComponent/>
            <Link to="/login">Iniciar Sesión</Link>
        </React.Fragment>
    )
}