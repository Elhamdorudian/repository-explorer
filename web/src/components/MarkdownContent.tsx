import { Repo } from '../../../api/src/models/Repo';
import { useState } from 'react';
import MarkdownView from 'react-showdown';
import { getReadMe } from '../api/repos';

interface Irepo {
  filteredRepo: Repo[];

  //----------------------------------------------------------------UPDATE---------------------------------------------------------------//
  repoId: string | undefined;
}

export default function MarkdownContent(props: Irepo) {
  const { filteredRepo, repoId } = props;
  const [readMe, setReadMe] = useState('');

  const selectedRepo = filteredRepo.find(
    (repo) => repo.id.toString() === repoId
  );

  const readMeApi = `https://raw.githubusercontent.com/${selectedRepo?.full_name}/master/README.md`;
  if (selectedRepo) {
    getReadMe(readMeApi)
      .then((res: any) => setReadMe(res.data))
      .catch((err: any) => console.log(err));
  }
  return (
    <MarkdownView markdown={readMe} options={{ tables: true, emoji: true }} />
  );
}
