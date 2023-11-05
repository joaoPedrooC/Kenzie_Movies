import { User } from '../../../interfaces/UserInterfaces';
import styles from './styles.module.scss';

interface IDesktopNavigationProps {
  user: User | null;
}

export const DesktopNavigation = ({ user }: IDesktopNavigationProps) => {
  return (
    <nav className={user ? 'hidden' : styles.desktopNav}>
      <button className='paragraphPoppins' >Cadastrar-se</button>
      <button className='btn sm paragraphPoppins'>Entrar</button>
    </nav>
  );
}