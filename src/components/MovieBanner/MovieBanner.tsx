import { AiOutlineStar } from 'react-icons/ai';
import { Movie } from "../../interfaces/MoviesInterfaces";
import styles from './styles.module.scss';

interface MovieBannerInterface {
  movie: Movie;
}

export const MovieBanner = ({ movie }: MovieBannerInterface) => {
  return (
    <section>
      <div className={`${styles.movieBannerContainer}`}>
        <img src={movie.image} alt={`Capa do filme ${movie.name}`} />
        <div className={styles.movieInfoContainer}>
          <div className={styles.movieRateContainer}>
            <h1 className="title lg">{movie.name}</h1>
            <div>
              <AiOutlineStar />
              <span className='paragraphPoppins'>
                { movie.reviews.length > 0 ?
                  (movie.reviews.reduce((prev, curr) => prev + (curr.score > 5 ? 5 : curr.score), 0)/movie.reviews.length).toFixed(1) :
                  "0.0" }
              </span>
            </div>
          </div>
          <div className={styles.movieDescription}>
            <span className={`paragraphInter ${styles.movieType}`}>{`${movie.type[0].toUpperCase()}${movie.type.slice(1).toLowerCase()}`}</span>
            <span className='paragraphPoppins'>{movie.duration} min</span>
          </div>
        </div>
      </div>
    </section>
  );
}