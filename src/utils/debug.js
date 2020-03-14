const isProd = process.envNODE_ENV === 'production';

export const debug = (message, color) => {
    if (!isProd) {
        if (color) {
            console.groupCollapsed(
                '%c [TKR-DEBUG]',
                `color: ${color}`,
                message
            );
        } else {
            console.groupCollapsed('[TKR-DEBUG]', message);
        }

        console.trace();
        console.groupEnd();
    }
};
