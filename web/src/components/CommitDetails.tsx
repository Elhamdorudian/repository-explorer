import { Repo } from '../../../api/src/models/Repo';
import { useState, useEffect } from 'react';
import { getCommitUrl } from '../api/repos';
import { Commit } from '../../../api/src/models/Commit';
import { Typography } from '@mui/material';

interface Irepo {
  newRepoUrls: Repo[];
  //----------------------------------------------------------------UPDATE---------------------------------------------------------------//
  repoId: string | undefined;
}

export default function CommitDetails(props: Irepo) {
  const { newRepoUrls, repoId } = props;
  const [commitDetails, setCommitDetails] = useState<Commit>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedRepo = newRepoUrls.find(
      (repo) => repo.id.toString() === repoId
    );

    if (!selectedRepo) {
      return;
    }
    setIsLoading(true);
    getCommitUrl(selectedRepo.commits_url)
      .then((res: any) => {
        setCommitDetails({
          sha: res.data[0].sha,
          commit: {
            message: res.data[0].commit.message,
            author: {
              name: res.data[0].commit.author.name,
              email: res.data[0].commit.author.email,
              date: res.data[0].commit.author.date,
            },
          },
          author: {
            login: res.data[0].author.login,
            /* eslint-disable @typescript-eslint/naming-convention */
            avatar_url: res.data[0].author.avatar_url,
            /* eslint-disable @typescript-eslint/naming-convention */
            url: res.data[0].author.url,
          },
        });
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [newRepoUrls, repoId]);

  //   console.log('commit data:');
  //   console.log('noth:', commitUrl);
  if (error) {
    return <p>this repo does not have commit details</p>;
  }
  return (
    <>
      {isLoading ? (
        <p>the page is Loading</p>
      ) : (
        <>
          <Typography>
            Most recent commit date: {commitDetails?.commit.author.date}
          </Typography>
          <Typography>
            Commit message: {commitDetails?.commit.message}
          </Typography>
          <Typography>
            Commit author: {commitDetails?.commit.author.name}
          </Typography>
        </>
      )}
    </>
  );
}
