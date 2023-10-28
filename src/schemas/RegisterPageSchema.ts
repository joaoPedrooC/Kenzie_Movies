import { z } from "zod";

export const RegisterPageSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Insira um e-mail válido').nonempty('Email é obrigatório'),
  password: z.string().nonempty('Senha é obrigatória'),
  confirmPassword: z.string().nonempty('Confirmar a senha é obrigatório')
})
.refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword']
});