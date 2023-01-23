import axios from 'axios';

interface Auth {
  username: string;
  password: string;
}

export function getRepos(url: string, auth: Auth) {
  return axios.get(url, { auth });
}
