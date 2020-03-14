import React from 'react';
import { A, usePath, setLinkProps } from 'hookrouter';

import Button from 'components/Button';

const ButtonLink = props => {
    const currentPath = usePath();
    let button_class = 'tkr-btn-link';

    // Add an active class to the button if the href matches the current page
    if (props.href === currentPath) {
        button_class = `${button_class} active`;
    }

    return (
        <A {...setLinkProps(props)}>
            <Button className={button_class}>{props.children}</Button>
        </A>
    );
};

export default ButtonLink;
