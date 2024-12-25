import React from 'react';

interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
                                         type = 'text',
                                         value,
                                         onChange,
                                         placeholder = '',
                                         className = '',
                                         disabled = false,
                                     }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
            disabled={disabled}
        />
    );
};

export default Input;