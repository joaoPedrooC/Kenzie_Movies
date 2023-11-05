import { Input } from "../Inputs/Input";
import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPageSchema } from "../../../schemas/RegisterPageSchema";
import { useUserStore } from "../../../stores/useUserStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPageForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(RegisterPageSchema)
  });
  
  const [loading, setLoading] = useState<boolean>(false)
  const createUser = useUserStore((store) => store.createUser);

  const navigate = useNavigate();

  const submit = (formData: any) => {
    const sendFormData = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    createUser(sendFormData, setLoading, navigate);
  }

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(submit)}>
      <div>
        <Input placeholder="Nome" register={register} errors={errors} id="name" type="text"/>
        <Input placeholder="E-mail" register={register} errors={errors} id="email" type="email"/>
        <Input placeholder="Senha" register={register} errors={errors} id="password" type="password"/>
        <Input placeholder="Confirmar senha" register={register} errors={errors} id="confirmPassword" type="password"/>
      </div>
      <button type="submit" className="paragraphPoppins btn lg" disabled={loading} >Cadastrar-se</button>
    </form>
  );
}