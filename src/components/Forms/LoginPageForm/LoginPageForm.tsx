import { Input } from "../Inputs/Input";
import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginPageSchema } from "../../../schemas/LoginPageShema";
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from "../../../stores/useUserStore";
import { useState } from "react";

export const LoginPageForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(LoginPageSchema)
  });

  const [loading, setLoading] = useState<boolean>(false);
  const login = useUserStore((store) => store.login);

  const navigate = useNavigate();

  const submit = (formData: any) => {
    console.log(formData);
    login(formData, setLoading, navigate);
  }

  return (
    <form className={styles.loginPageForm} onSubmit={handleSubmit(submit)}>
      <h1 className="title lg">Login</h1>
      <div className={styles.inputsContainer}>
        <Input errors={errors} id="email" register={register} placeholder="E-mail" type="email" />
        <Input errors={errors} id="password" register={register} placeholder="Senha" type="password" />
        <button type="submit" className="btn lg paragraphPoppins" disabled={loading} >Entrar</button>
      </div>
      <div className={styles.orBox}>
        <div></div>
        <p className="paragraphInter">ou</p>
      </div>
      <Link to={'/register'} className="link paragraphPoppins">Cadastre-se</Link>
    </form>
  );
}