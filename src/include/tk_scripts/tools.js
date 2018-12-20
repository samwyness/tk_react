export default {
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
    },
    cleanDate( date ) {
        return new Date( date ).toLocaleString();
    },
    updateBodyPageClass( page_name ) {
        let prefix = 'tk-page-';
        let new_class = prefix + ( page_name || 'default' );
        let regex = new RegExp( prefix + '(.*)', 'g' );
        let matches = document.body.className.split( ' ' ) || [];

        matches.map( ( item, index ) => {
            if ( regex.test( item ) && item !== new_class ) {
                document.body.classList.remove( item );
            }
        } );

        return document.body.classList.add( new_class );
    }
};
