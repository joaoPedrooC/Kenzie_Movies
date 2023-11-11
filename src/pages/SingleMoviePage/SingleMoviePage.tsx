import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MovieBanner } from "../../components/MovieBanner/MovieBanner";
import { useMovieStore } from "../../stores/useMoviesStore";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spiner";
import { MovieDescription } from "../../components/MovieDescription/MovieDescription";
import { ReviewSection } from "../../components/ReviewsSection/ReviewsSection";
import { MovieControl } from "../../components/MovieControl/MovieControl";

export const SingleMoviePage = () => {
  const { readMovieById, singleMovie } = useMovieStore(store => store);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  
  useEffect(() => {
    readMovieById(Number(id), setLoading);
    
  }, [])

  return (
    <>
    {
      loading ? <Spinner /> :
      <>
        <Header />
        <main>
          <div className="container">
            <MovieBanner movie={singleMovie!}/>
            <MovieDescription movie={singleMovie!} />
            <ReviewSection movie={singleMovie!} />
            <MovieControl />
          </div>
        </main>
        <Footer />
      </>
    }
    </>
  );
}