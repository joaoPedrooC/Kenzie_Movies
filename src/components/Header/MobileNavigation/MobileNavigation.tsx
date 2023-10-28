import { useState } from 'react';
import styles from './styles.module.scss';

interface IMobileNavigationProps {
  user: {
    name: string;
    email: string;
    id: number;
    age: number
  } | null
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
                <p className='title sm'>{user.name.split(' ')[0]}</p>
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