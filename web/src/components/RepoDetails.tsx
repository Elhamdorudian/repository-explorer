import { Repo } from '../../../api/src/models/Repo';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownContent from './MarkdownContent';
import CommitDetails from './CommitDetails';

interface Irepo {
  filteredRepo: Repo[];
}

export default function RepoDetails(props: Irepo) {
  const { repoId } = useParams();
  const { filteredRepo } = props;
  const navigate = useNavigate();
  const handleHomepage = () => {
    navigate('/');
  };

  /* eslint-disable @typescript-eslint/naming-convention */
  const newRepoUrls = filteredRepo.map((repo) => {
    const newCommitUrl = repo.commits_url.replace('{/sha}', '');
    return { ...repo, commits_url: newCommitUrl };
  });
  /* eslint-disable @typescript-eslint/naming-convention */

  return (
    <div>
      <div style={{ margin: '1rem' }}>
        <Button
          variant="contained"
          onClick={handleHomepage}
          style={{ marginBottom: '1rem' }}
        >
          Go to Homepage
        </Button>
        {newRepoUrls &&
          newRepoUrls
            .filter((repo) => repo.id.toString() === repoId)
            .map((repo) => (
              <div key={repo.id}>
                <CommitDetails newRepoUrls={newRepoUrls} repoId={repoId} />
                <MarkdownContent newRepoUrls={newRepoUrls} repoId={repoId} />
              </div>
            ))}
      </div>
    </div>
  );
}
