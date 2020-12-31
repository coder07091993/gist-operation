import React from "react";
import PropTypes from "prop-types";

const GistView = ({ gists }) => (
  <>
    <table>
      <tr>
        <th>File Name</th>
        <th>Description</th>
        <th>Content</th>
        <th>Created On</th>
      </tr>
      {gists.map((gist) => {
        const file = Object.keys(gist.files);
        const key = file[0];

        return (
          <tr>
            <td>{gist.files[key].filename}</td>
            <td>{gist.description}</td>
            <td>
              <a
                href={gist.files[key].raw_url}
                target="_blank"
                rel="noreferrer"
              >
                content
              </a>
            </td>
            <td>{gist.created_at}</td>
          </tr>
        );
      })}
    </table>
  </>
);

GistView.propTypes = {
  gists: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(GistView);
