import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import { getRepos } from './api/repos';
import { Repo } from '../../api/src/models/Repo';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RepoList from './components/RepoList';
import FilterLang from './components/FilterLang';
import RepoDetails from './components/RepoDetails';

export function App() {
  const [repoData, setRepoData] = useState<Repo[]>([]);
  const [filteredRepo, setFilteredRepo] = useState<Repo[]>(repoData);

  const client =
    '6930f6bd9a04ed01672b:feb171b5171904b0b7918e37d20801b2f3629307';

  const url = 'http://localhost:4000/repos';

  useEffect(() => {
    const auth = {
      username: client,
      password: '',
    };
    getRepos(url, auth)
      .then((res) => {
        setRepoData(res.data);
        setFilteredRepo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterLang
                repoData={repoData}
                filteredRepo={filteredRepo}
                setFilteredRepo={setFilteredRepo}
                setRepoData={setRepoData}
              />
              <RepoList
                repoData={repoData}
                setRepoData={setRepoData}
                filteredRepo={filteredRepo}
                setFilteredRepo={setFilteredRepo}
              />
            </>
          }
        />
        <Route
          path="/detail/:repoId"
          element={<RepoDetails filteredRepo={filteredRepo} />}
        />
      </Routes>
    </Router>
  );
  // console.log(repoData);
  // return (
  //   <Router>
  //     <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
  //       <Routes>
  //         <FilterLang
  //           repoData={repoData}
  //           filteredRepo={filteredRepo}
  //           setFilteredRepo={setFilteredRepo}
  //           setRepoData={setRepoData}
  //         />
  //         <RepoList
  //           repoData={repoData}
  //           setRepoData={setRepoData}
  //           filteredRepo={filteredRepo}
  //           setFilteredRepo={setFilteredRepo}
  //         />
  //       </Routes>
  //       <Routes>
  //         <Route
  //           path="/detail/:repoId"
  //           element={<RepoDetails filteredRepo={filteredRepo} />}
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}
