const BASE_URL = "https://api.github.com";

const allGist = (value) => {
  return `${BASE_URL}/users/${value}/gists`;
};

const singleGist = (id) => {
  return `${BASE_URL}/gists${id}`;
};


export {allGist, singleGist};



