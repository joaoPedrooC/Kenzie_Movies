import { Link } from 'react-router-dom';
import { User } from '../../../interfaces/UserInterfaces';
import styles from './styles.module.scss';

interface IDesktopNavigationProps {
  user: User | null;
}

export const DesktopNavigation = ({ user }: IDesktopNavigationProps) => {
  return (
    <nav className={user ? 'hidden' : styles.desktopNav}>
      <Link to={'/register'} className='paragraphPoppins'>Cadastrar-se</Link>
      <Link to={'/login'} className='btn sm paragraphPoppins'>Entrar</Link>
    </nav>
  );
}