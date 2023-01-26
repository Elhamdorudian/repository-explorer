import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getRepos } from './api/repos';
import { Repo } from '../../api/src/models/Repo';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RepoList from './components/RepoList';
import FilterLang from './components/FilterLang';
import RepoDetails from './components/RepoDetails';
import ErrorPage from './components/ErrorPage';
import IsLoading from './components/IsLoading';

export function App() {
  const [repoData, setRepoData] = useState<Repo[]>([]);
  const [filteredRepo, setFilteredRepo] = useState<Repo[]>(repoData);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const client =
    '6930f6bd9a04ed01672b:feb171b5171904b0b7918e37d20801b2f3629307';

  const url = 'http://localhost:4000/repos';

  useEffect(() => {
    setIsLoading(true);
    const auth = {
      username: client,
      password: '',
    };
    getRepos(url, auth)
      .then((res) => {
        setRepoData(res.data);
        setFilteredRepo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  console.log(filteredRepo);

  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading ? (
                <IsLoading />
              ) : (
                <>
                  <FilterLang
                    repoData={repoData}
                    setFilteredRepo={setFilteredRepo}
                  />
                  <RepoList
                    repoData={repoData}
                    setRepoData={setRepoData}
                    filteredRepo={filteredRepo}
                    setFilteredRepo={setFilteredRepo}
                  />
                </>
              )}
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
}
