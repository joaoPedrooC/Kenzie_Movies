import { useMovieStore } from "../../stores/useMoviesStore";
import styles from './styles.module.scss';
import { Movie } from "../../interfaces/MoviesInterfaces";
import { ReviewsCards } from "./ReviewsCards/ReviewsCards";
import { UserNotReviewed } from "./UserNotReviewed/UserNotReviewed";
import { UserReviewed } from "./UserReviewed/UserReviewed";

interface ReviewSectionProps {
  movie: Movie;
}

export const ReviewSection = ({ movie }: ReviewSectionProps) => {
  const userReview = useMovieStore(store => store.userReview);

  return (
    <section>
      <div className="container">
          { !userReview ? <UserNotReviewed /> : <UserReviewed /> }
        <ul className={styles.reviewsList}>
          { movie.reviews.map(movieReview => <ReviewsCards key={movieReview.id} movieReview={movieReview} />) }
        </ul>
      </div>
    </section>
  );
}