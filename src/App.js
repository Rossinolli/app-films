import React from 'react'; // Importa a biblioteca React
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa os estilos do Bootstrap
import Header from './components/Header'; // Importa o componente Header
import MovieList from './components/MovieList'; // Importa o componente MovieList

function App() {
  return (
    <div className="App">
      <Header /> {/* Renderiza o cabeçalho */}
      <MovieList /> {/* Renderiza a lista de filmes */}
    </div>
  );
}

export default App;
