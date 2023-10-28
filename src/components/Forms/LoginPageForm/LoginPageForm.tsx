import { Input } from "../Inputs/Input";
import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginPageSchema } from "../../../schemas/LoginPageShema";
import { Link } from 'react-router-dom';

export const LoginPageForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(LoginPageSchema)
  });

  const submit = (formData: any) => {
    console.log(formData);
  }

  return (
    <form className={styles.loginPageForm} onSubmit={handleSubmit(submit)}>
      <h1 className="title lg">Login</h1>
      <div className={styles.inputsContainer}>
        <Input errors={errors} id="email" register={register} placeholder="E-mail" type="email" />
        <Input errors={errors} id="password" register={register} placeholder="Senha" type="password" />
        <button type="submit" className="btn lg paragraphPoppins">Entrar</button>
      </div>
      <div className={styles.orBox}>
        <div></div>
        <p className="paragraphInter">ou</p>
      </div>
      <Link to={'/register'} className="link paragraphPoppins">Cadastre-se</Link>
    </form>
  );
}