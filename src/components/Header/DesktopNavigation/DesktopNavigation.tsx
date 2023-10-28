import styles from './styles.module.scss';

interface IDesktopNavigationProps {
  user: {
    name: string;
    email: string;
    id: number;
    age: number
  } | null
}

export const DesktopNavigation = ({ user }: IDesktopNavigationProps) => {
  return (
    <nav className={user ? 'hidden' : styles.desktopNav}>
      <button className='paragraphPoppins' >Cadastrar-se</button>
      <button className='btn sm paragraphPoppins'>Entrar</button>
    </nav>
  );
}