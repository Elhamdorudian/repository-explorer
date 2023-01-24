import {
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  CardActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Repo } from '../../../api/src/models/Repo';
import { IProps } from '../assets/models/IProps';

const ITEM = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FBEAEB',
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const repoItem: React.FC<IProps> = ({
  repoData,
  setRepoData,
  filteredRepo,
  setFilteredRepo,
}) => {
  return (
    <>
      <Box
        sx={{
          width: '90%',
          margin: 'auto',
          marginTop: '1rem',
        }}
      >
        <Grid container={true} rowSpacing={2}>
          {filteredRepo.map((repo: Repo) => (
            <Grid item={true} xs={12} sm={6} md={4} key={repo.id}>
              <ITEM sx={{ margin: 2 }}>
                <Box
                  flexDirection={{ xs: 'column' }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 200,
                  }}
                >
                  <Typography variant="h6" component="div">
                    {repo.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom={true}
                  >
                    {repo.description}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {repo.language}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {repo.forks_count}
                  </Typography>
                  <CardActions>
                    <Button size="small">Details</Button>
                  </CardActions>
                </Box>
              </ITEM>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default repoItem;
