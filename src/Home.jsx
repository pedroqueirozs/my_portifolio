import Header from "./componets/Header.jsx";
import "./App.css";
import React from "react";
import Section from "./componets/Section.jsx";
import PrimarySection from "./componets/PrimarySection.jsx";
import Footer from "./componets/Footer.jsx";

function Index() {
  return (
    <>
      <div className="home-container">
        <Header />
        <PrimarySection
          title="Hard Skills"
          description="JavaScript, React, React Native, Node Js, Python, C, SQL, etc."
        />
        <Section
          title="Sobre"
          description="Tenho 22 anos e entrei no mundo da programação no início de 2023. Em agosto deste mesmo ano iniciei o curso de Engenharia de Computação onde me encantei pelo mundo da tecnologia. Desde então, busco todos os dias novos desafios, a fim de aprofundar meus conhecimentos e poder contribuir positivamente com a sociedade."
        />
        <Section
          title="Área Profissional"
          description="Engenharia, Tecnologia e Ciência"
        />

        <Section
          title="Propósito"
          description="Utilizar a tecnologia como forma de transformar realidades e contribuir de forma positiva na sociedade."
        />
        <Footer />
      </div>
    </>
  );
}
export default Index;
