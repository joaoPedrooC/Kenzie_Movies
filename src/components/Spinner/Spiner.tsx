import styles from './styles.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className='spin'></div>
    </div>
  );
}