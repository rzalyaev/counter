import React, { FC } from 'react';
import styles from './Button.module.css';

export type ButtonPropsType = {
    name: string;
    disabled?: boolean;
    onClick: () => void;
};

export const Button: FC<ButtonPropsType> = ({
                                                name,
                                                disabled = false,
                                                onClick,
                                            }) => {

    return (
        <button className={styles.button} disabled={disabled} onClick={onClick}>
            {name}
        </button>
    );
};