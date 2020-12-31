export const creatingGist = (data) => ({
  type: "CREATING_GIST",
  payload: data,
});
export const createGistError = (data) => ({
  type: "CREATE_GIST_ERROR",
  payload: data,
});

export const fetchGistError = (data) => ({
  type: "FETCHING_GISTS_ERROR",
  data,
});

export const fetchGist = () => ({
  type: "FETCHING_GISTS",
});

export const searchGistByUsername = (username) => ({
  type: "SEARCH_GIST_USERNAME",
  username,
});

export const usernameResult = (data) => ({
  type: "GIST_USERNAME_RESULT",
  searchResult: data,
});

export const searchGistByUsernameError = (data) => ({
  type: "GIST_USERNAME_RESULT_ERROR",
  data,
});
