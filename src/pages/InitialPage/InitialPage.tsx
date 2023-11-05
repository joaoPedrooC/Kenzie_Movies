import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useMovieStore } from "../../stores/useMoviesStore";
import { useEffect } from 'react';

export const InitialPage = () => {
  const { moviesList, readAllMovies } = useMovieStore((store) => store);

  useEffect(() => {
    readAllMovies();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <HeroSection movie={moviesList ? moviesList[0] : null} />
          <MoviesList moviesList={moviesList.slice(1)} />
        </div>
      </main>
      <Footer />
    </>
  );
}