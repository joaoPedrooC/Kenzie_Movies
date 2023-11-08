import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useUserStore } from '../../stores/useUserStore';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import styles from './styles.module.scss';

export const Header = () => {
  const user = useUserStore((store) => store.user);

  return (
    <header className={styles.header}>
      <div className="container">
        <Link to={'/'}>
          <img src={logo} alt="Logo KenzieMovies" />
        </Link>
        <MobileNavigation user={user} />
        <DesktopNavigation user={user} />
      </div>
    </header>
  );
}