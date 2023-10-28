import { Input } from "../Inputs/Input";
import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPageSchema } from "../../../schemas/RegisterPageSchema";

export const RegisterPageForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(RegisterPageSchema)
  });

  const submit = (formData: any) => {
    const sendFormData = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };
  }

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(submit)}>
      <div>
        <Input placeholder="Nome" register={register} errors={errors} id="name" type="text"/>
        <Input placeholder="E-mail" register={register} errors={errors} id="email" type="email"/>
        <Input placeholder="Senha" register={register} errors={errors} id="password" type="password"/>
        <Input placeholder="Confirmar senha" register={register} errors={errors} id="confirmPassword" type="password"/>
      </div>
      <button type="submit" className="paragraphPoppins btn lg">Cadastrar-se</button>
    </form>
  );
}