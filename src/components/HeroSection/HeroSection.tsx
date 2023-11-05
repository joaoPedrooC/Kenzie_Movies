import { Movie } from "../../interfaces/MoviesInterfaces";
import styles from './styles.module.scss';

interface HeroSectionProps {
  movie: Movie | null
}

export const HeroSection = ({ movie }: HeroSectionProps) => {
  return (
    <section className={styles.heroSection}>
      <img src={movie?.image} alt={`Imagem do filme "${movie?.name}"`} />
      <div>
        <h1 className="title lg">{movie?.name}</h1>
        <div>
          <span className={`paragraphInter`}>Destaque</span>
          <span className="paragraphInter">{`${movie?.type[0].toUpperCase()}${movie?.type.slice(1)}`}</span>
        </div>
      </div>
    </section>
  );
}