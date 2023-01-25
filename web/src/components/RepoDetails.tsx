import { Repo } from '../../../api/src/models/Repo';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import MarkdownContent from './MarkdownContent';

interface Irepo {
  filteredRepo: Repo[];
}

export default function RepoDetails(props: Irepo) {
  const { repoId } = useParams();
  const { filteredRepo } = props;

  // const handleHomepage = () => {
  //   history.push('/');
  // };

  console.log(filteredRepo);
  return (
    <div>
      <div>
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
                {/* <Button onClick={handleHomepage}>Go to Homepage</Button> */}
              </div>
            ))}
      </div>
    </div>
  );
}
