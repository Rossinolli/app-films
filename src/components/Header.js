import React from 'react'; // Importa a biblioteca React
import { Navbar, Container } from 'react-bootstrap'; // Importa componentes do Bootstrap para criar uma barra de navegação
import { FaFilm } from 'react-icons/fa'; // Importa um ícone de filme 
function Header() {
  return (
    <Navbar bg="danger" variant="dark" className="header-navbar">
      {/* Configura a barra de navegação com fundo vermelho e texto claro */}
      <Container>
        {/* Usa um container para centralizar o conteúdo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaFilm className="mr-2" /> {/* Adiciona um ícone de filme ao lado do nome */}
          FilmHub
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
