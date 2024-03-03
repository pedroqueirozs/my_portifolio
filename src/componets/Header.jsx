import React from "react";
import imgPrincipal from "../assets/imgPrincipal.svg";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div>
        <div className="header-text">
          <NavBar />
        </div>
        <div className="headerContent">
          <img src={imgPrincipal} alt="oi" />
          <h2>@_pedroqueirozs</h2>
          <div className="description">
            <span>💻Apaixonado por Tecnologia.</span>
            <br />

            <span>💡Programador Full Stack.</span>
            <br />
            <span>🌏Conectar, Colaborar e Criar.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
