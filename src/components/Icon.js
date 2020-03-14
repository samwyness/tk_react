import React from 'react';

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('assets/icons/', true, /\.svg$/));

const Icon = props => {
    let icon = props.icon || false;
    let icon_link = icon ? `#${icon}` : false;
    let icon_class = `tkr-icon icon-${icon}`;
    let icon_style = {};

    if (props.className) {
        icon_class = `${icon_class} ${props.className}`;
    }

    if (props.style) {
        icon_style = props.style;
    }

    return (
        <svg className={icon_class} style={icon_style}>
            <use xlinkHref={icon_link}></use>
        </svg>
    );
};

export default Icon;
