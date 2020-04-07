export const appInitialState = {
  current_page: {
    loading: false,
    hasError: false,
    data: null,
  },
  posts: {
    loading: false,
    hasError: false,
    data: [],
  },
  pages: {
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
 * @return {Object} The stores updated state object
 */
export default (state = appInitialState, action) => {
  switch (action.type) {
    // POSTS
    case 'FETCH_POSTS_LOADING':
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: action.payload,
        },
      };

    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        posts: {
          ...state.posts,
          hasError: action.payload,
        },
      };

    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: {
          ...state.posts,
          data: action.payload,
        },
      };

    // CURRENT PAGE
    case 'FETCH_CURRENT_PAGE_LOADING':
      return {
        ...state,
        current_page: {
          ...state.current_page,
          loading: action.payload,
        },
      };

    case 'FETCH_CURRENT_PAGE_ERROR':
      return {
        ...state,
        current_page: {
          ...state.current_page,
          hasError: action.payload,
        },
      };

    case 'FETCH_CURRENT_PAGE_SUCCESS':
      return {
        ...state,
        current_page: {
          ...state.current_page,
          data: action.payload,
        },
      };

    case 'ADD_CACHED_PAGE':
      return {
        ...state,
        pages: {
          ...state.pages,
          data: [...state.pages.data, action.payload],
        },
      };

    default:
      return state;
  }
};
