/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchGistByUsername } from "../../redux/actions/gist";
import GistView from "./GistView";
import "./listGist.css";

const SearchGists = () => {
  const searchGist = useSelector((state) => state.gists.searchGist);
  const error = useSelector((state) => state.gists.error);
  const errorMessage = useSelector((state) => state.gists.errorMessage);
  const [submit, setSubmit] = useState(false);
  const [username, setUsername] = useState(null);
  const loading = useSelector((state) => state.gists.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) setSubmit(false);
  }, [loading]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    dispatch(searchGistByUsername(username));
  };

  return (
    <>
      {submit ? (
        <div className="loader" />
      ) : (
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="button"
              className="searchButton"
              onClick={handleOnSubmit}
            />
          </div>
          {searchGist && Array.isArray(searchGist) && searchGist.length ? (
            <GistView gists={searchGist} />
          ) : (
            ""
          )}
          <div className={error ? "error" : ""}>
            {error ? errorMessage : ""}
          </div>
          <div className={!searchGist.length ? "info" : ""}>
            {!searchGist.length
              ? "Nothing to display Pls Try Some Other Username"
              : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchGists;
