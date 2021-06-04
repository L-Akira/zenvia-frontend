import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest })=>{
    return(
        <div className="input-component">
            <label htmlFor={name}>{label}</label>
            <p>R$</p>
            <input type="text" id={name} {...rest}/>
            <p>,00</p>
        </div>
    )
}

export default Input;
