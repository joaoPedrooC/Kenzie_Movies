import { z } from "zod";

export const LoginPageSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória')
});