import React from 'react';

import Icon from 'components/Icon';

const Button = props => {
    let button_class = 'tkr-btn';

    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    if (props.className) {
        button_class = `${button_class} ${props.className}`;
    }

    return (
        <button className={button_class} onClick={handleOnClick}>
            {props.icon && <Icon icon={props.icon} />}

            {props.children && (
                <span className="tkr-btn-label">{props.children}</span>
            )}
        </button>
    );
};

export default Button;
