import { useNavigate } from "react-router-dom";
import { Movie } from "../../../interfaces/MoviesInterfaces"
import styles from './styles.module.scss';

interface MovieCardProps {
  movie: Movie;
}

export const MoviesCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <li className={styles.movieCard}>
      <img src={movie.image} alt="" onClick={() => navigate(`/movie/${movie.id}`)}/>
      <div>
        <h3 className="title sm">{movie.name}</h3>
        <span className="paragraphInter">{`${movie?.type[0].toUpperCase()}${movie?.type.slice(1)}`}</span>
      </div>
    </li>
  )
}