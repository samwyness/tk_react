export const appInitialState = {
	main_menu: {
		loading: false,
		hasError: false,
		data: null,
	},
	posts: {
		loading: false,
		hasError: false,
		data: [],
	},
};

/**
 * A store reducer for handling actions that are dispatched to the store
 * 
 * @param {Object} state - The stores current state object
 * @param {String} action - The name of action being dispatched
 */
export default (state = appInitialState, action) => {
	switch (action.type) {
			
	// POSTS
	case 'FETCH_POSTS_LOADING':
		return { 
			...state, 
			posts: {
				...state.posts,
				loading: action.payload
			}
		};

	case 'FETCH_POSTS_ERROR':
		return { 
			...state, 
			posts: {
				...state.posts,
				hasError: action.payload
			}
		};

	case 'FETCH_POSTS_SUCCESS':
		return { 
			...state, 
			posts: {
				...state.posts,
				data: action.payload
			}
		};
	
	// MAIN MENU
	case 'FETCH_MAIN_MENU_LOADING':
		return { 
			...state, 
			main_menu: {
				...state.main_menu,
				loading: action.payload
			}
		};

	case 'FETCH_MAIN_MENU_ERROR':
		return { 
			...state, 
			main_menu: {
				...state.main_menu,
				hasError: action.payload
			}
		};

	case 'FETCH_MAIN_MENU_SUCCESS':
		return { 
			...state, 
			main_menu: {
				...state.main_menu,
				data: action.payload
			}
		};
	
	default:
		return state;
	}
};