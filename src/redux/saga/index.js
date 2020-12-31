import { put, all, takeLatest } from "redux-saga/effects";
import { makeGist, fetchUsers, fetchUserByUsername } from "../../consumer";

function* createGist({ payload }) {
  try {
    yield makeGist(
      { [payload.file.filename]: payload.file },
      payload.description
    );
    yield put({ type: "CREATED_GIST" });
  } catch (error) {
    yield put({ type: "CREATED_GIST_ERROR", errorMessage: error.message });
  }
}

function* searchGistByUsername({ username }) {
  try {
    const respone = yield fetchUserByUsername(username);
    yield put({ type: "GIST_USERNAME_RESULT", gists: respone.data });
  } catch (error) {
    yield put({
      type: "GIST_USERNAME_RESULT_ERROR",
      errorMessage: error.message,
    });
  }
}

function* fetchGists() {
  try {
    const respone = yield fetchUsers();

    yield put({ type: "FETCHED_GISTS", gists: respone.data });
  } catch (error) {
    yield put({ type: "FETCHING_GISTS_ERROR", errorMessage: error.message });
  }
}
function* actionWatcher() {
  yield takeLatest("CREATING_GIST", createGist);
  yield takeLatest("FETCHING_GISTS", fetchGists);
  yield takeLatest("SEARCH_GIST_USERNAME", searchGistByUsername);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
