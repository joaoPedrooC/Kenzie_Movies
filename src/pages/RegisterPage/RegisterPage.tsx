import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FaArrowLeftLong } from 'react-icons/fa6';
import styles from './styles.module.scss';
import { RegisterPageForm } from "../../components/Forms/RegisterPageForm/RegisterPageForm";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div>
            <h1 className="title lg">Cadastro</h1>
            <button className="link paragraphPoppins">
              <FaArrowLeftLong /> Voltar
            </button>
          </div>
          <p className="paragraphInter">Preencha os campos para cadastrar-se</p>
          <RegisterPageForm />
        </div>
      </main>
      <Footer />
    </>
  );
}