import { Repo } from '../../../api/src/models/Repo';
import { Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownContent from './MarkdownContent';

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

  console.log(filteredRepo);
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
        {filteredRepo &&
          filteredRepo
            .filter((repo) => repo.id.toString() === repoId)
            .map((repo) => (
              <div key={repo.id}>
                <Typography color="text.secondary">
                  {repo.updated_at}
                </Typography>
                <Typography color="text.secondary">
                  {repo.owner.login}
                </Typography>
                <Typography color="text.secondary">{repo.full_name}</Typography>
                <MarkdownContent filteredRepo={filteredRepo} repoId={repoId} />
              </div>
            ))}
      </div>
    </div>
  );
}
