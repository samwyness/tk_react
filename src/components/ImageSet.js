import React from 'react';

const ImageSet = props => {
    const meta = props.meta.alt || props.meta.title;
    let image_class = 'tkr-image';

    if (props.className) {
        image_class = `${image_class} ${props.className}`;
    }

    return <img className={image_class} src={props.src} alt={meta} />;
};

export default ImageSet;
