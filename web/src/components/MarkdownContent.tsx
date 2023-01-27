import { Repo } from '../../../api/src/models/Repo';
import { useState, useEffect } from 'react';
import MarkdownView from 'react-showdown';
import { getReadMe } from '../api/repos';
import { Alert } from '@mui/material';
import IsLoading from './IsLoading';

interface Irepo {
  newRepoUrls: Repo[];

  //----------------------------------------------------------------UPDATE---------------------------------------------------------------//
  repoId: string | undefined;
}

export default function MarkdownContent(props: Irepo) {
  const { newRepoUrls, repoId } = props;
  const [readMe, setReadMe] = useState('');
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
    const readMeApi = `https://raw.githubusercontent.com/${selectedRepo?.full_name}/master/README.md`;
    getReadMe(readMeApi)
      .then((res: any) => {
        setReadMe(res.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [newRepoUrls, repoId]);

  if (error) {
    return (
      <Alert severity="warning">
        Sry! The repo details does not contain a README!
      </Alert>
    );
  }
  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <MarkdownView
          markdown={readMe}
          options={{ tables: true, emoji: true }}
        />
      )}
    </>
  );
}
