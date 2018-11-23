import tools from './tools';

const wp_api = __TK__.urls.wp_api;
const tkr_api = __TK__.urls.tkr_api;

export default {
    _version: '0.0.1',
    users: {
        fetchActiveUser: function() {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api +  '/users/me', {
                    headers: {
                        "X-WP-Nonce": __TK__.settings.nonce
                    }
                } )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        }
    },
    posts: {
        fetchPosts() {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/posts' )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        },
        fetchPostBySlug( post_slug ) {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/posts?slug=' + post_slug )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        },
        fetchPostsByCategoryId( category_id ) {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/posts?categories=' + category_id )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        }
    },
    pages: {
        fetchPages() {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/pages' )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        },
        fetchPageById( page_id ) {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/pages/' + page_id )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        },
        fetchPageBySlug( page_slug ) {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/pages?slug=' + page_slug )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        }
    },
    categories: {
        fetchCategories() {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/categories' )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        },
        fetchCategoryBySlug( category_slug ) {
            return new Promise( ( resolve, reject ) => {
                fetch( wp_api + '/categories?slug=' + category_slug )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        }
    },
    menus: {
        fetchMenu( location ) {
            return new Promise( ( resolve, reject ) => {
                fetch( tkr_api + '/menus/locations/' + location )
                .then( response => response.json() )
                .then( json => {
                    resolve( json )
                } )
                .catch( error => {
                    reject( error )
                } );
            } );
        }
    }
};
