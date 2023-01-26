import { Repo } from '../../../api/src/models/Repo';
import { useState, useEffect } from 'react';
import MarkdownView from 'react-showdown';
import { getReadMe } from '../api/repos';

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
    return <p>this repo does not have a README</p>;
  }
  return (
    <>
      {isLoading ? (
        <p>the page is Loading</p>
      ) : (
        <MarkdownView
          markdown={readMe}
          options={{ tables: true, emoji: true }}
        />
      )}
    </>
  );
}
