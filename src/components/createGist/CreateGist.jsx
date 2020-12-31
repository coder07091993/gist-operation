/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { creatingGist } from "../../redux/actions/gist";
import "./createGist.css";

const CreateGist = () => {
  const error = useSelector((state) => state.gists.error);
  const errorMessage = useSelector((state) => state.gists.errorMessage);
  const loading = useSelector((state) => state.gists.error);
  const gistCreated = useSelector((state) => state.gists.gistCreated, []);
  const history = useHistory();
  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch();
  const [file, setFile] = useState({
    filename: "",
    content: "",
    description: "",
  });

  useEffect(() => {
    if (gistCreated) {
      setSubmit(false);
      history.push("/list-gists");
    }
  }, [gistCreated, history]);

  const onChangeFile = (event) => {
    setFile({ ...file, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    if (file && file.description && file.filename && file.content) {
      dispatch(creatingGist({ description: file.description, file }));
      setFile({
        filename: "",
        content: "",
        description: "",
      });
    }
  };

  return (
    <>
      {submit ? (
        <div className="loader" />
      ) : (
        <div className="container">
          <form onSubmit={onSubmit}>
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Your Description.."
              onChange={onChangeFile}
              value={file.description}
              required
            />

            <label htmlFor="filename">File Name</label>
            <input
              type="text"
              id="lname"
              name="filename"
              placeholder="Your File name.."
              onChange={onChangeFile}
              required
              value={file.filename}
            />
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              placeholder="Write something.."
              style={{ height: "200px" }}
              onChange={onChangeFile}
              required
              value={file.content}
            />
            <input type="submit" value="Submit" disabled={loading} />
          </form>
        </div>
      )}
      <div className={error ? "error" : ""}>{errorMessage}</div>
      <div className={gistCreated ? "info" : ""}>
        {gistCreated ? "Gist Created Successfully" : ""}
      </div>
    </>
  );
};

export default CreateGist;
