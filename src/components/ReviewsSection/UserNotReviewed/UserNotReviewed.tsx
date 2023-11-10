import { AiOutlineStar } from "react-icons/ai";
import styles from './styles.module.scss';

export const UserNotReviewed = () => {
  return (
    <div className={styles.titleContainer}>
      <h3 className="title md">Avaliações</h3>
      <button type="button" className="paragraphPoppins btn sm">
        <AiOutlineStar /> Avaliar
      </button>
    </div>
  );
}