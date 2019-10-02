import React from 'react';

// Containers
import Blog from 'containers/Blog';
import FrontPage from 'containers/FrontPage';
import Attachment from 'containers/Attachment';
import Author from 'containers/Author';
import Term from 'containers/Term';
import Search from 'containers/Search';
import Single from 'containers/Single';

const blog_path = __tkr__.settings.blog_page_slug;
const blog_routes = {};

blog_routes[`/${ blog_path }/page/:offSet/`] = ({offset}) => <Blog offset={ offset }/>;
blog_routes[`/${ blog_path }/`] = () => <Blog/>;

// NOTE: Route url parameters (eg: :postId) do not support '_' or '-'
export const routes = {
	'/': () => <FrontPage page_id={ __tkr__.settings.home_page } />,
	
	...blog_routes,

	'/attachment/:postSlug/:mediaId/': ({postSlug, mediaId}) => <Attachment post_slug={ postSlug } mediaId={ mediaId}/>,
	
	'/author/:authorSlug/page/:offSet/': ({authorSlug, offset}) => <Author author_slug={ authorSlug } offset={ offset }/>,
	'/author/:authorSlug/': ({authorSlug}) => <Author author_slug={ authorSlug }/>,
	
	'/category/:catSlug/page/:offSet/': ({catSlug, offset}) => <Term cat_slug={ catSlug } offset={ offset }/>,
	'/category/:catSlug/': ({catSlug}) => <Term cat_slug={ catSlug }/>,
	'/tag/:tagSlug/': ({tagSlug}) => <Term tag_slug={ tagSlug }/>,
	
	'/search/:query/': ({query}) => <Search query={ query }/>,
	'/search/': () => <Search/>,
	
	'/archives/:postId/': ({postId}) => <Single post_id={ postId }/>,

	'/:year/:month/:day/:postSlug/': ({postSlug}) => <Single post_slug={ postSlug }/>,
	'/:year/:month/:postSlug/': ({postSlug}) => <Single post_slug={ postSlug }/>,
	'/:postSlug/': ({postSlug}) => <Single post_slug={ postSlug }/>,
};