import { useState, useEffect } from 'react';

// Store
import { useStore } from 'store';

// Services
import PostsService from 'utils/services/tkr/PostsService';

const Posts = new PostsService();

// App loading class
const app_loading_class = 'tkr-app-loading';

// App loading helper function
const setAppLoadingClass = bool => {
    if (bool) {
        document.body.classList.add(app_loading_class);
    } else {
        document.body.classList.remove(app_loading_class);
    }
};

/*-----------------------------
    POSTS
-----------------------------*/
const fetchPostsLoading = (payload, dispatch) => {
    setAppLoadingClass(payload);

    return dispatch({
        type: 'FETCH_POSTS_LOADING',
        payload: payload
    });
};

const fetchPostsSuccess = (payload, dispatch) => {
    return dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: payload
    });
};

const fetchPostsError = (payload, dispatch) => {
    return dispatch({
        type: 'FETCH_POSTS_ERROR',
        payload: payload
    });
};

/**
 * Sends an API request through the TKR Service to retreive a
 * collection of posts. If there are no posts in the store an
 * XHR request is fired and the store is updated.
 *
 * @version 1.0.0
 */
export const useFetchPosts = () => {
    const { state, dispatch } = useStore();
    const { posts } = state.app;

    useEffect(() => {
        const fetchPosts = async () => {
            fetchPostsLoading(true, dispatch);

            const response = await Posts.getAll();
            const posts = await response.json();

            if (!response.ok) {
                fetchPostsError(true, dispatch);
            }

            fetchPostsSuccess(posts, dispatch);
            fetchPostsLoading(false, dispatch);
        };

        // Only fetch posts data if our stores posts.data state is empty
        if (posts.data.length < 1) {
            !posts.loading && fetchPosts();
        }
    }, [dispatch, posts.data.length, posts.loading]);
};

/**
 * Retrieves a collection of posts from the store.
 *
 * @version 1.0.0
 * @return {Array} A collection of posts
 */
export const usePosts = () => {
    const { state } = useStore();
    const [posts, setPosts] = useState(state.app.posts);

    useFetchPosts();

    useEffect(() => {
        return setPosts(state.app.posts);
    }, [state.app.posts]);

    return posts;
};

/*-----------------------------
    SINGLE POST/PAGE
-----------------------------*/
const addCachedPage = (payload, dispatch) => {
    return dispatch({
        type: 'ADD_CACHED_PAGE',
        payload: payload
    });
};

const fetchCurrentPageLoading = (payload, dispatch) => {
    setAppLoadingClass(payload);

    return dispatch({
        type: 'FETCH_CURRENT_PAGE_LOADING',
        payload: payload
    });
};

const fetchCurrentPageSuccess = (payload, dispatch) => {
    // Handle page caching in the store
    if (payload && payload.post_type === 'page') {
        addCachedPage(payload, dispatch);
    }

    return dispatch({
        type: 'FETCH_CURRENT_PAGE_SUCCESS',
        payload: payload
    });
};

const fetchCurrentPageError = (payload, dispatch) => {
    return dispatch({
        type: 'FETCH_CURRENT_PAGE_ERROR',
        payload: payload
    });
};

/**
 * Sends an API request through the TKR Service to retreive the
 * current page's data and updates our store with the response.
 *
 * @version 1.0.0
 * @param {String} slug - The slug for the current page
 */
export const useFetchCurrentPage = async slug => {
    const { state, dispatch } = useStore();
    const { current_page, posts, pages } = state.app;

    useEffect(() => {
        // Gets the current post data from the TKR Posts Service or
        // from a cached version saved in the store.
        const fetchPost = async () => {
            const cached_post = posts.data.find(post => post.slug === slug);
            const cached_page = pages.data.find(post => post.slug === slug);

            if (cached_post) {
                fetchCurrentPageSuccess(cached_post, dispatch);
            } else if (cached_page) {
                fetchCurrentPageSuccess(cached_page, dispatch);
            } else {
                fetchCurrentPageLoading(true, dispatch);

                const response = await Posts.getSingle({ slug });
                const post = await response.json();

                if (!response.ok) {
                    fetchCurrentPageError(true, dispatch);
                }

                fetchCurrentPageSuccess(post, dispatch);
            }

            fetchCurrentPageLoading(false, dispatch);
        };

        // Only fetch new post data if our stores current_page
        // is null or we have a new slug
        if (!current_page.data || current_page.data.slug !== slug) {
            !current_page.loading && fetchPost(slug);
        }
    });
};

/**
 * Retrieves the current page from the store.
 *
 * @version 1.0.0
 * @return {Object} An object representing the current page's data
 */
export const useCurrentPage = slug => {
    const { state, dispatch } = useStore();
    const [current_page, setCurrentPage] = useState(state.app.current_page);

    // If we have a new slug set current page in the store to null
    // and set the loading flag to true
    if (current_page.data && current_page.data.slug !== slug) {
        fetchCurrentPageSuccess(null, dispatch);
    }

    useFetchCurrentPage(slug);

    useEffect(() => {
        setCurrentPage(state.app.current_page);
    }, [current_page.data, dispatch, slug, state.app.current_page]);

    return current_page;
};
