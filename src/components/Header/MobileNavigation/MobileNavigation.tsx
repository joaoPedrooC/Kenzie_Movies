import { useState } from 'react';
import styles from './styles.module.scss';
import { User } from '../../../interfaces/UserInterfaces';

interface IMobileNavigationProps {
  user: User | null;
}

export const MobileNavigation = ({ user }: IMobileNavigationProps) => {
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
              <button type="button" className='btn md paragraphPoppins'>Sair</button>
            </div>
          ) : (
            <div className={styles.userNotLoggedMenu}>
              <button className='btn md'>Cadastrar-se</button>
              <button className='btn md'>Fazer login</button>
            </div>
          )
        ) : null
      }
     </nav>
    </>
  )
}