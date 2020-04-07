import React from 'react';

// Containers
import Blog from 'containers/Blog';
import FrontPage from 'containers/FrontPage';
import Attachment from 'containers/Attachment';
import Author from 'containers/Author';
import Term from 'containers/Term';
import Search from 'containers/Search';
import Single from 'containers/Single';

const { home_page, blog_page_slug } = __tkr__.settings;
const Home = Number(home_page) === 0 ? Blog : FrontPage;

// NOTE: Route url parameters (eg: :postId) do not support '_' or '-'
export const routes = {
  '/': () => <Home page_id={home_page} />,

  // BLOG

  [`/${blog_page_slug}/page/:offset/`]: ({ offset }) => (
    <Blog offset={offset} />
  ),
  [`/${blog_page_slug}/`]: () => <Blog />,

  // ATTACHMENTS
  '/attachment/:postSlug/:mediaId/': ({ postSlug, mediaId }) => (
    <Attachment post_slug={postSlug} mediaId={mediaId} />
  ),

  // AUTHORS
  '/author/:authorSlug/page/:offset/': ({ authorSlug, offset }) => (
    <Author author_slug={authorSlug} offset={offset} />
  ),
  '/author/:authorSlug/': ({ authorSlug }) => (
    <Author author_slug={authorSlug} />
  ),

  // CATEGORIES
  '/category/:catSlug/page/:offset/': ({ catSlug, offset }) => (
    <Term cat_slug={catSlug} offset={offset} />
  ),
  '/category/:catSlug/': ({ catSlug }) => <Term cat_slug={catSlug} />,

  // TAGS
  '/tag/:tagSlug/': ({ tagSlug }) => <Term tag_slug={tagSlug} />,

  // SEARCHES
  '/search/:query/': ({ query }) => <Search query={query} />,
  '/search/': () => <Search />,

  // ARCHIVES
  '/archives/:postId/': ({ postId }) => <Single post_id={postId} />,

  // POSTS
  '/:year/:month/:day/:postSlug/': ({ postSlug }) => (
    <Single post_slug={postSlug} />
  ),
  '/:year/:month/:postSlug/': ({ postSlug }) => <Single post_slug={postSlug} />,

  '/:postSlug/': ({ postSlug }) => <Single post_slug={postSlug} />,
};
