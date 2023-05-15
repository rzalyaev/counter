import React, {FC, KeyboardEvent, RefObject} from 'react';
import styles from './Input.module.css';

export type InputPropsType = {
    type: string;
    placeholder: string;
    newValue: RefObject<HTMLInputElement>;
};

export const Input: FC<InputPropsType> = ({type, placeholder, newValue}) => {
    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
        if (e.key === '-') {
            e.preventDefault();
        }
    }

    function handleInput(e: React.FormEvent<HTMLInputElement>): void {
        const value = e.currentTarget.value;
        if (value.startsWith('0')) {
            e.currentTarget.value = value.replace(/[^0-9]/g, '').substring(0, 1);
        } else {
            e.currentTarget.value = value.replace(/[^0-9]/g, '');
        }
    }

    function handlePaste(e: React.ClipboardEvent<HTMLInputElement>): void {
        e.preventDefault();
    }

    return (
        <input className={styles.input}
               min={0}
               type={type}
               ref={newValue}
               placeholder={placeholder}
               onInput={handleInput}
               onKeyDown={handleKeyDown}
               onPaste={handlePaste}
        />
    );
};