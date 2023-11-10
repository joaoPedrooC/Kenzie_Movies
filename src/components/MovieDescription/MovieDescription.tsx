import { Movie } from "../../interfaces/MoviesInterfaces";
import styles from './styles.module.scss';

interface MovieDescriptionInterface {
  movie: Movie;
}

export const MovieDescription = ({ movie }: MovieDescriptionInterface) => {
  return (
    <div className="container">
      <p className={`paragraphInter ${styles.paragraph}`}>"{movie.synopsis}"</p>
    </div>
  );
}