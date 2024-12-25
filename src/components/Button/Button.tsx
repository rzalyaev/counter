import React from 'react';

interface ButtonProps {
    onClick?: () => void
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           children,
                                           type = 'button',
                                           className = '',
                                           disabled = false,
                                           variant = 'primary',
                                       }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;