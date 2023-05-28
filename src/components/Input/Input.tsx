import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Input.module.css';

export type PropsType = {
    type: string
    value: number
    className?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const Input = ({type, value, className, onChange}: PropsType) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);

    // Защита от ввода отрицательного значения
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {e.key === '-' && e.preventDefault()}

    // Запрет добавления значения из буфера обмена
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => e.preventDefault();

    return (
        <input className={styles.input}
               type={type}
               value={value}
               onChange={handleOnChange}
               onKeyDown={handleKeyDown}
               onPaste={handlePaste}
        />
    );
};