import React from 'react';
import styles from './Button.module.css';

type PropsType = {
    name: string
    disabled?: boolean
    className?: string
    onClick: () => void
};

export const Button = ({name, disabled = false, className, onClick}: PropsType) => {
    const buttonClassName = `${styles.button} ${className ? className : ''}`

    return (
        <button className={buttonClassName}
                disabled={disabled}
                onClick={onClick}
        >
            {name}
        </button>
    );
};