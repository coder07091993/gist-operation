/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGist } from "../../redux/actions/gist";
import GistView from "./GistView";
import "./listGist.css";

const ListGists = () => {
  const gists = useSelector((state) => state.gists.gists);
  const error = useSelector((state) => state.gists.error);
  const errorMessage = useSelector((state) => state.gists.errorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGist());
  }, [dispatch]);
  return (
    <>
      <div className="wrap">
        <GistView gists={gists || []} />
        <div className={error ? "error" : ""}>{errorMessage}</div>
      </div>
    </>
  );
};

export default ListGists;
