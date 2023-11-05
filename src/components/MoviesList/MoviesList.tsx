import { Movie } from "../../interfaces/MoviesInterfaces"
import { MoviesCard } from "./MoviesCard/MoviesCard";
import styles from './styles.module.scss';

interface MoviesListProps {
  moviesList: Array<Movie>;
}

export const MoviesList = ({ moviesList }: MoviesListProps) => {
  return (
    <ul className={styles.moviesList}>
      { moviesList.map(movie => <MoviesCard movie={movie} /> ) }
    </ul>
  );
}