import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text, ...rest}) => {
    return (
        <div className="component-button">
            <button className="main-button" {...rest}>
                {text.toUpperCase()}
            </button>
        </div>
    )
}

export default Button;