import { BsTrash } from "react-icons/bs";
import { HiPencil } from "react-icons/hi2";
import { useMovieStore } from "../../../stores/useMoviesStore";
import styles from './styles.module.scss';
import { AiOutlineStar } from "react-icons/ai";

export const UserReviewed = () => {
  const userReview = useMovieStore(store => store.userReview);

  return (
    <div className={styles.userReviewedContainer}>
      <h3 className="title md">Avaliações</h3>
      <p className="paragraphPoppins">Sua avaliação</p>
      <div>
        <p className="paragraphInter"> {userReview!.description} </p>
        <div className={styles.actionsContainer}>
          <span className="paragraphPoppins">
            <AiOutlineStar />
            {userReview!.score.toFixed(1)}
          </span>
          <BsTrash />
          <HiPencil />
        </div>
      </div>
    </div>
  );
}