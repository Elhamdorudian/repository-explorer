import { Repo } from '../../../api/src/models/Repo';
import { Button, Card } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownContent from './MarkdownContent';
import CommitDetails from './CommitDetails';
import { Box } from '@mui/system';
import '../assets/styles/RepoDetails.css';

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
    <div className="details-wrapper">
      <Card
        sx={{
          width: '80%',
          margin: 'auto',
          marginTop: '2rem',
          backgroundColor: '#dce0f2',
        }}
      >
        <div className="inside-wrapper">
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
                  <Box padding={3}>
                    <CommitDetails newRepoUrls={newRepoUrls} repoId={repoId} />
                  </Box>
                  <Box padding={3}>
                    <MarkdownContent
                      newRepoUrls={newRepoUrls}
                      repoId={repoId}
                    />
                  </Box>
                </div>
              ))}
        </div>
      </Card>
    </div>
  );
}
