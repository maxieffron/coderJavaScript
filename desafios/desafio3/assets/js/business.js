"use strict";

/*********************************************************************************
 ****** Aquí irá toda la implementación correspondiente a la capa de negocio *****
/*********************************************************************************/

/*****************************************************
 *** Métodos correspondientes al login del usuario ***
 *****************************************************/

function isUserLogged() {
    return localStorage.getItem("user") != null ? true : false;
}

function setUser(nameUser) {
    localStorage.setItem("user", nameUser);
}

function getUser() {
    return localStorage.getItem("user");
}
