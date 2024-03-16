import React from 'react';
import styles from './Button.module.css';

type ButtonPropsType = {
  title: string
  onClickHandler: () => void
  className?: string
  disabled?: boolean
}

export const Button = ({title, onClickHandler, className, disabled = false}: ButtonPropsType) => {
  return (
      <button onClick={onClickHandler} className={className} disabled={disabled}>{title}</button>
  );
};