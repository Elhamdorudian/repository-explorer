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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RepoDetails from './RepoDetails';
/* eslint-disable @typescript-eslint/naming-convention */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FBEAEB',
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
/* eslint-enable @typescript-eslint/naming-convention */

export default function RepoItem(props: IProps) {
  const { filteredRepo } = props;

  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetails = () => {
    setShowDetail(true);
  };
  return (
    <>
      <Box
        sx={{
          width: '90%',
          maxWidth: '500px',
          margin: 'auto',
          marginTop: '1rem',
        }}
      >
        <Grid container={true} rowSpacing={2}>
          {filteredRepo.map((repo: Repo) => (
            <Grid item={true} xs={12} key={repo.id}>
              <Item>
                <Box
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <Box marginBottom={1} sx={{ textAlign: 'left' }}>
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
                    <div style={{ display: showDetail ? 'block' : 'none' }}>
                      <RepoDetails filteredRepo={filteredRepo} />
                    </div>
                    <CardActions>
                      <Button size="small" onClick={handleShowDetails}>
                        <Link to={`/detail/${repo.id.toString()}`}>Detail</Link>
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
    // <Box
    //   sx={{
    //     width: '90%',
    //     margin: 'auto',
    //     marginTop: '1rem',
    //   }}
    // >
    //   <Grid container={true} rowSpacing={2}>
    //     {filteredRepo.map((repo: Repo) => (
    //       <div key={repo.id}>
    //         <Grid item={true} xs={12} sm={6} md={4}>
    //           <Item sx={{ margin: 2 }}>
    //             <Box
    // flexDirection={{ xs: 'column' }}
    // sx={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   height: 200,
    // }}
    //             >
    //               <Typography variant="h6" component="div">
    //                 {repo.name}
    //               </Typography>
    //               <Typography
    //                 sx={{ fontSize: 14 }}
    //                 color="text.secondary"
    //                 gutterBottom={true}
    //               >
    //                 {repo.description}
    //               </Typography>

    //               <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //                 {repo.language}
    //               </Typography>
    //               <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //                 {repo.forks_count}
    //               </Typography>
    //               <div style={{ display: showDetail ? 'block' : 'none' }}>
    //                 <RepoDetails filteredRepo={filteredRepo} />
    //               </div>
    //               <CardActions>
    //                 <Button size="small" onClick={handleShowDetails}>
    //                   <Link to={`/detail/${repo.id.toString()}`}>Detail</Link>
    //                 </Button>
    //               </CardActions>
    //             </Box>
    //           </Item>
    //         </Grid>
    //       </div>
    //     ))}
    //   </Grid>
    // </Box>
  );
}

// export default repoItem;
