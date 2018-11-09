let tools = {
    _version: '0.0.1',
    createHTMLMarkup( input ) {
        input = this.replaceExcerptBrackets( input );


        if (!input)
            input = '';

        return { __html: input };
    },
    decodeHTMLEntities( str ) {
        return str.replace(/&#(\d+);/g, function( match, dec ) {
            return String.fromCharCode( dec );
        } );
    },
    replaceExcerptBrackets( input ) {
        if (!input)
            return false;

        return input.replace( /\[&hellip;]/g, '...' );
    },
    trimUrlBase( url ) {
        if (url === __TK__.urls.base + '/') {
            url = '/';
        } else {
            url = url.replace( __TK__.urls.base, '' );
        }

        return url;
    }
};

export default tools;
