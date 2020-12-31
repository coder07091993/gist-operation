const { Octokit } = require("@octokit/rest");

// Can Use Process.env.PrivateToken
const octokit = new Octokit({
  auth: "9a5a4302b592da0df8c8cdc5a7da54738e9b1128",
});
export function makeGist(files, description) {
  return octokit.gists.create({
    files,
    description,
    public: true,
  });
}

export function fetchUsers() {
  return octokit.gists.list();
}

export function fetchUserByUsername(username) {
  return octokit.gists.listForUser({
    username,
  });
}
