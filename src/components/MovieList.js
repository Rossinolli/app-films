import React, { useState, useEffect } from 'react'; // Importa React e hooks para gerenciamento de estado e efeitos
import axios from 'axios'; // Importa axios para fazer requisições HTTP
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap'; // Importa componentes do Bootstrap para criar a interface
import './MovieList.css'; // Importa o CSS para estilização dos cards de filmes

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Obtém a chave da API 
const BASE_URL = 'https://api.themoviedb.org/3'; // URL base da API do TMDb

function MovieList() {
  const [movies, setMovies] = useState([]); // armazena a lista de filmes
  const [loading, setLoading] = useState(true); // controla o carregamento
  const [error, setError] = useState(null); // armazena erros

  useEffect(() => {
    const fetchMovies = async () => {
      // Função  para buscar filmes
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY, // Adiciona a chave da API como parâmetro
            language: 'pt-BR', 
            page: 1, // Define a página inicial para a requisição
          },
        });
        setMovies(response.data.results); // Atualiza o estado com a lista de filmes
        setError(null); // Limpa erros anteriores
      } catch (error) {
        console.error('Error fetching movies:', error.response ? error.response.data : error.message); // Loga o erro
        setError('An error occurred while fetching the movies.'); // Define a mensagem de erro
      } finally {
        setLoading(false); // Atualiza o estado de carregamento
      }
    };

    fetchMovies(); // Chama a função para buscar filmes
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm movie-card">
            <Card.Body>
              <Card.Title className="text-center mb-4">Popular Movies</Card.Title>
              {loading && <Spinner animation="border" variant="primary" className="d-block mx-auto" />} {/* Exibe um spinner no carregamento */}
              {error && <Alert variant="danger" className="text-center">{error}</Alert>} {/* Exibe uma mensagem de erro, se houver */}
              <Row>
                {movies.map((movie) => (
                  <Col md={6} key={movie.id} className="mb-4">
                    <Card className="movie-card">
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // URL da imagem do filme
                        alt={movie.title}
                      />
                      <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                          {movie.overview ? movie.overview : 'No description available'} {/* Descrição do filme ou mensagem padrão */}
                        </Card.Text>
                        <Button variant="info" href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
                          Saber Mais
                        </Button> {/* Botão para mais informações sobre o filme */}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieList;
