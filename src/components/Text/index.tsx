import React from 'react';

import './styles.css';

const Text: React.FC = (props) => {
    return (
        <div className="component-text">
            <h2 className="text">{props.children}</h2>
        </div>
    )
}

export default Text;
