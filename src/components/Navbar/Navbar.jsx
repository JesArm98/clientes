import React, { useState } from "react";
import "./Navbar.css";
import MobileMenu from "./MobileMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem } from "@mui/material";

function Navbar() {
  // Definir estilos fijos para el Navbar
  const background = "rgb(27, 28, 60)";
  const color = "white";
  const shadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";

  // Estado para el nombre de usuario y si está activo o no
  const [username, setUsername] = useState("Invitado");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cambioContraseña, setCambioContraseña] = useState("")

  const handleLogin = () => {
    // Simula el inicio de sesión, por ejemplo, si se hace clic en un botón de inicio de sesión
    setUsername("UsuarioEjemplo");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simula el cierre de sesión, por ejemplo, si se hace clic en un botón de cierre de sesión
    setUsername("Invitado");
    setIsLoggedIn(false);
  };

  const handleCambioContraseña = () => {
    // Simula el cambio de contraseña con un console.log
    setCambioContraseña(console.log("CambioContraseña"));

  };

  const handleNavLinkClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const href = e.currentTarget.getAttribute("href");
    const offset = 114; // Ajusta este valor según necesites
    const element = document.getElementById(href.substring(1));

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: background,
        color: color,
        boxShadow: shadow,
        height: "fit-content",
        zIndex: "2000",
      }}
    >
      {/* NavbarWeb */}
      <ul
        className="NavbarWeb"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* Mostrar opciones de usuario solo si está activo */}
        {isLoggedIn && (
          <li>
            {username}
            <Select>
              <MenuItem value={handleCambioContraseña}>Cambiar Contraseña</MenuItem>
              <MenuItem value={handleLogout}>Cerrar Sesión</MenuItem>
            </Select>
          </li>
        )}
        {/* Mostrar opción de inicio de sesión si no está activo */}
        {!isLoggedIn && (
          <li>
            <button onClick={handleLogin}>Iniciar Sesión</button>
          </li>
        )}
        <li>
          <a
            href="#objetivo"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Equipos
          </a>
        </li>
        <li>
          <a
            href="#estancias"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Facturas
          </a>
        </li>
        <li className="habitaciones">
          <a
            href="#habitaciones"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Certificados
          </a>
        </li>
        <li>
          <a
            className="navOpciones"
            href="#instalaciones"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Estado de Cuenta
          </a>
        </li>
        <li>
          <a
            className="navOpciones"
            href="#actividades"
            onClick={handleNavLinkClick}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Firesys
          </a>
        </li>
      </ul>
      <div
        className="cellDiv"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "14px",
        }}
      >
        <a href="#Header">
          {" "}
          <LazyLoadImage
            className="logoCell"
            src="./images/PNG Objetivo/LogoCell.svg"
            alt=""
          />
        </a>

        <MobileMenu></MobileMenu>
      </div>
    </div>
  );
}

export default Navbar;
