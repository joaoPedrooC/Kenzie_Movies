import { useState, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>
  id: string;
}

export const Input = ({ placeholder, register, errors, id, ...rest }: IInputProps) => {
  const [ isNull, setIsNull ] = useState<boolean>(false);

  return (
    <div className={styles.inputBox}>
      <label htmlFor="input" className={`${styles.label} ${isNull ? styles.active : ''} paragraphPoppins`}>{placeholder}</label>
      <input type="text" id="input" className='paragraphInter' {...rest} {...register(id, 
        { onChange: (e) => setIsNull(e.target.value.length > 0 ? true : false) }
        )}
      />
      { errors ? <p className={styles.errors}>{ errors[id]?.message?.toString() }</p> : null}
    </div>
  );
}