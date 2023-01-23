import { Router, Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { Repo } from '../models/Repo';

export const repos = Router();
let localData: Repo[];
let apiData: Repo[];

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  //Sending GET request to aggregate GitHub repository data
  axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((response) => {
      // Internal data retrieved from repo.json file
      localData = JSON.parse(
        fs
          .readFileSync(path.resolve(__dirname, '../../data/repos.json'))
          .toString()
      );
      apiData = response.data;
      //Merging and filtering internal and retrived data
      const mergedData = apiData
        .concat(localData)
        .filter((repo: Repo) => repo.fork === false);
      // res.setHeader('Content-Type', 'application/json');
      res.set('Content-Type', 'application/json');
      res.json(mergedData);
      res.status(200);
    })
    .catch((err) => res.status(500).json({ message: err.message }));

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  // res.json(datas);
});
