import { Typography, Grid, Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Repo } from '../../../api/src/models/Repo';
import { IProps } from '../assets/models/IProps';
import { Link } from 'react-router-dom';
import '../assets/styles/RepoItem.css';

/* eslint-disable @typescript-eslint/naming-convention */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#dce0f2',
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  minHeight: '200px',
}));
/* eslint-enable @typescript-eslint/naming-convention */

export default function RepoItem(props: IProps) {
  const { filteredRepo } = props;

  return (
    <>
      <Box
        className="repo-item-box"
        sx={{
          width: '80%',
          maxWidth: '1100px',
          margin: 'auto',
          marginTop: '2rem',
        }}
      >
        <Grid container={true} columnSpacing={2} rowSpacing={2}>
          {filteredRepo.map((repo: Repo) => (
            <Grid item={true} xs={12} md={6} key={repo.id}>
              <Item>
                <div className="item-wrapper">
                  <div>
                    <Typography variant="h6" component="div">
                      Repo Name: {repo.name}
                    </Typography>
                    <Typography component="div">
                      Language: {repo.language}
                    </Typography>
                    {repo.description ? (
                      <Typography component="div">
                        Description: {repo.description}
                      </Typography>
                    ) : (
                      <></>
                    )}

                    <Typography component="div">
                      Fork Count:{repo.forks_count}
                    </Typography>
                  </div>
                  <div className="detail-btn">
                    <Button variant="contained" color="info">
                      <Link
                        to={`/detail/${repo.id.toString()}`}
                        className="detail-link"
                      >
                        Detail
                      </Link>
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
