import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useMovieStore } from "../../stores/useMoviesStore";
import { useEffect, useState } from 'react';
import { Spinner } from "../../components/Spinner/Spiner";

export const InitialPage = () => {
  const { moviesList, readAllMovies } = useMovieStore((store) => store);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(moviesList.length === 0) {
      readAllMovies(setLoading);
    }
  }, []);

  return (
    <>
      {
        loading ? <Spinner /> : 
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
      }
    </>
  );
}