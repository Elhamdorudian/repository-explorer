import axios from 'axios';

interface Auth {
  username: string;
  password: string;
}

export function getRepos(url: string, auth: Auth) {
  return axios.get(url, { auth });
}

export function getReadMe(url: string) {
  return axios.get(url);
}

export function getCommitUrl(url: string) {
  return axios.get(url);
}
