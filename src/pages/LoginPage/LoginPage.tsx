import { Footer } from '../../components/Footer/Footer';
import { LoginPageForm } from "../../components/Forms/LoginPageForm/LoginPageForm";
import { Header } from "../../components/Header/Header";
import styles from './styles.module.scss';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <LoginPageForm />
        </div>
      </main>
      <Footer />
    </>
  );
}