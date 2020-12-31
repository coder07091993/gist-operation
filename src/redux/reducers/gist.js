import * as type from "./types";

const initialState = {
  gists: [],
  error: false,
  errorMessage: "",
  loading: false,
  searchGist: [],
  gistCreated: false,
};

export default function gists(state = initialState, action) {
  switch (action.type) {
    case type.CREATED_GIST:
      return {
        ...state,
        error: false,
        errorMessage: "",
        loading: false,
        gistCreated: true,
      };
    case type.CREATING_GIST:
      return {
        ...state,
        error: false,
        errorMessage: "",
        loading: true,
        gistCreated: false,
      };
    case type.CREATE_GISTS_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
        loading: false,
        gistCreated: false,
      };
    case type.FETCHED_GIST:
      return {
        ...state,
        gists: action.gists,
        gistCreated: false,
      };
    case type.GIST_USERNAME_RESULT:
      return {
        ...state,
        loading: false,
        searchGist: action.gists,
        error: false,
        errorMessage: "",
        gistCreated: false,
      };
    case type.GIST_USERNAME_RESULT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.errorMessage,
        loading: false,
      };
    case type.SEARCH_GIST_USERNAME:
      return { ...state, loading: true };
    default:
      return state;
  }
}
