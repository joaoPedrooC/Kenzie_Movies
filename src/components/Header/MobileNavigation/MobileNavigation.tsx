import { useState } from 'react';
import styles from './styles.module.scss';
import { User } from '../../../interfaces/UserInterfaces';
import { useUserStore } from '../../../stores/useUserStore';
import { Link, useNavigate } from 'react-router-dom';

interface IMobileNavigationProps {
  user: User | null;
}

export const MobileNavigation = ({ user }: IMobileNavigationProps) => {
  const logout = useUserStore((store) => store.logout);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleModal = () => {
    if(isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 900);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
    <div className={`${styles.modalHandler} ${user ? styles.show : ''}`} onClick={() => handleModal()} title={isOpen ? 'Fechar' : 'Abrir'}>
     <div className={isOpen && !isClosing ? styles.active : ''}></div>
    </div>
     <nav className={`${isOpen && !isClosing ? 'dropAnimation' : ''} ${isClosing ? 'upAnimation' : ''} ${styles.mobileMenu} ${user ? styles.show : ''}`}>
      {
        isOpen ? (
          user ? (
            <div className={styles.userMenuContainer}>
              <div>
                <div><span className='title sm'>{user.name[0].toUpperCase()}</span></div>
                <p className='title sm'>{user.name.split(' ')[0].length > 20 ? user.name.split(' ')[0].slice(0, 10) + '...' : user.name.split(' ')[0]}</p>
              </div>
              <span className='paragraphPoppins'>{user.email}</span>
              <button type="button" className='btn md paragraphPoppins' onClick={() => logout(navigate)}>Sair</button>
            </div>
          ) : (
            <div className={styles.userNotLoggedMenu}>
              <Link to={'/register'} className='btn md paragraphInter'>Cadastrar-se</Link>
              <Link to={'/login'} className='btn md paragraphInter'>Fazer login</Link>
            </div>
          )
        ) : null
      }
     </nav>
    </>
  )
}