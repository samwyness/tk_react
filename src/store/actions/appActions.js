import { useState, useEffect } from 'react';

// Util
// import { debug } from 'utils/debug';

// Store
import { useStore } from 'store';

// Services
import { Posts, Menus } from 'utils/services/tkr';

// Main Menu
const fetchPostsLoading = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_POSTS_LOADING',
		payload: payload
	});
};

const fetchPostsError = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_POSTS_ERROR',
		payload: payload
	});
};

const fetchPostsSuccess = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_POSTS_SUCCESS',
		payload: payload
	});
};

/**
 * Sends an API request through the TKR Service to retreive the
 * themes 'main-menu' and updates our store with the response.
 *
 * @version 1.0.0
 */
export const useFetchPosts = () => {
	const { state, dispatch } = useStore();

	useEffect(() => {
		// Get the themes 'main-menu' from the TKR Service
		const fetchPosts = async () => {
			fetchPostsLoading(true, dispatch);

			await Posts.getAll()
				.then(response => {
					fetchPostsSuccess(response, dispatch);
				})
				.catch(err => {
					new Error(err);
					fetchPostsError(true, dispatch);
				});

			fetchPostsLoading(false, dispatch);
		};

		// Only fetch if our stores posts state is empty
		state.app.posts.data.length === 0 && fetchPosts();

	}, [dispatch, state.app.posts.data]);
};

/**
 * Retrieves the main menu from the store
 *
 * @version 1.0.0
 * @return {Object} main_menu - The themes 'main-menu' data
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

// Main Menu
const fetchMainMenuLoading = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_MAIN_MENU_LOADING',
		payload: payload
	});
};

const fetchMainMenuError = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_MAIN_MENU_ERROR',
		payload: payload
	});
};

const fetchMainMenuSuccess = (payload, dispatch) => {
	return dispatch({
		type: 'FETCH_MAIN_MENU_SUCCESS',
		payload: payload
	});
};

/**
 * Sends an API request through the TKR Service to retreive the
 * themes 'main-menu' and updates our store with the response.
 *
 * @version 1.0.0
 */
export const useFetchMainMenu = () => {
	const { state, dispatch } = useStore();

	useEffect(() => {
		// Get the themes 'main-menu' from the TKR Service
		const fetchMainMenu = async () => {
			fetchMainMenuLoading(true, dispatch);

			await Menus.getByLocation('main-menu')
				.then(response => {
					fetchMainMenuSuccess(response, dispatch);
				})
				.catch(err => {
					new Error(err);
					fetchMainMenuError(true, dispatch);
				});

			fetchMainMenuLoading(false, dispatch);
		};

		// Only fetch if our stores main_menu state is null
		!state.app.main_menu.data && fetchMainMenu();

	}, [dispatch, state.app.main_menu.data]);
};

/**
 * Retrieves the main menu from the store
 *
 * @version 1.0.0
 * @return {Object} main_menu - The themes 'main-menu' data
 */
export const useMainMenu = () => {
	const { state } = useStore();
	const [main_menu, setMainMenu] = useState(state.app.main_menu);

	useFetchMainMenu();

	useEffect(() => {
		return setMainMenu(state.app.main_menu);
	}, [state.app.main_menu]);

	return main_menu;
};
