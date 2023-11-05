import { Movie } from "../../../interfaces/MoviesInterfaces"
import styles from './styles.module.scss';

interface MovieCardProps {
  movie: Movie;
}

export const MoviesCard = ({ movie }: MovieCardProps) => {
  return (
    <li className={styles.movieCard}>
      <img src={movie.image} alt="" />
      <div>
        <h3 className="title sm">{movie.name}</h3>
        <span className="paragraphInter">{`${movie?.type[0].toUpperCase()}${movie?.type.slice(1)}`}</span>
      </div>
    </li>
  )
}