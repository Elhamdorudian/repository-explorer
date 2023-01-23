import { useEffect, useState } from 'react';
import { getRepos } from './api/repos';
import { Repo } from '../../api/src/models/Repo';

// interface Sample {
//   id: number;
//   name: string;
// }

export function App() {
  const [repoData, setRepoData] = useState<Repo[]>([]);
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
        // setRepoData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(repoData);
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      {repoData.map((repo: Repo) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '2rem',
          }}
          key={repo.id}
        >
          <p> 1. Name: {repo.name} </p>
          <p> 2. Description: {repo.description} </p>
          <p> 3. Language: {repo.language} </p>
          <p> 4. Fork Count: {repo.forks_count} </p>
        </div>
      ))}
    </div>
  );
}
