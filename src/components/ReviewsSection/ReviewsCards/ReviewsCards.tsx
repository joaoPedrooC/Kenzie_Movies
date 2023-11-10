import { useEffect, useState } from "react";
import { Reviews } from "../../../interfaces/MoviesInterfaces";
import { useUserStore } from "../../../stores/useUserStore";
import { User } from "../../../interfaces/UserInterfaces";
import { AiOutlineStar } from "react-icons/ai";
import styles from './styles.module.scss';

interface ReviewsCardsInterface {
  movieReview: Reviews;
}

export const ReviewsCards = ({ movieReview }: ReviewsCardsInterface) => {
  const readById = useUserStore(store => store.readUserById);
  const [userFromReview, setUserFromReview] = useState<null | User>(null);

  useEffect(() => {
    const getUser = async () => {
      return await readById(movieReview.userId);
    }

    const setUser = async () => {
      setUserFromReview(await getUser());
    }

    setUser();
  }, [])
  return (
    <li className={styles.reviewsCard}>
      <div>
        <div>
          <span className="paragraphPoppins">
            {userFromReview?.name[0].toUpperCase()}
          </span>
        </div>
        <span className="paragraphPoppins">
          <AiOutlineStar /> { movieReview.score > 5 ? "5.0" : movieReview.score.toFixed(1) }
        </span>
      </div>
      <p className="paragraphInter">{movieReview.description}</p>
      <p className="paragraphPoppins">{userFromReview?.name}</p>
    </li>
  );
}