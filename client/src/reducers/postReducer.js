import { ADD_POST, LOADING_POST, GET_POSTS, GET_POST, DELETE_POST, DELETE_COMMENT } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_POST:
      return {
        ...state,
        loading: true
      }
      case ADD_POST:
        return {
          ...state,
          post: action.payload,
          posts: [action.payload, ...state.posts]
        }
        case GET_POSTS:
          return {
            ...state,
            posts: action.payload,
            loading: false
          }
         
            case DELETE_POST:
              return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
              }

            case GET_POST:
              return {
                ...state,
                post: action.payload,
                loading: false
              }
    default:
      return state;
  }
} ;