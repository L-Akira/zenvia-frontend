import React from 'react';

import './styles.css';

interface BadgeProps {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    return (
        <div className="component-badge">
            <span className="badge" >
                <p>{text}</p> 
            </span>
        </div>
    )
}

export default Badge;
