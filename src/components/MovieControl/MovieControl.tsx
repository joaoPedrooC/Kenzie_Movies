import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styles from './styles.module.scss';

export const MovieControl = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.moviesControllerContainer}>
      <button className="paragraphPoppins link" disabled={Number(id) <= 1} onClick={() => {
        navigate(`/movie/${Number(id)-1}`);
        window.location.reload();
      }}>
        <BsArrowLeft /> Voltar
      </button>
      <button className="paragraphPoppins link" disabled={Number(id) >= 4} onClick={() => {
        navigate(`/movie/${Number(id)+1}`);
        window.location.reload();
      }}>
        Próximo <BsArrowRight />
      </button>
    </div>
  );
}