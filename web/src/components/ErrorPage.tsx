import { Alert, AlertTitle, Box, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <div>
      <Box
        padding={5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '15%',
        }}
      >
        <Alert severity="error" sx={{ maxWidth: '600px', padding: '2rem' }}>
          <AlertTitle sx={{ fontSize: '1.5rem' }}>Error 500</AlertTitle>
          <Typography sx={{ fontSize: '1.2rem' }}>
            Server is not responding — <strong>Please Try Again!</strong>
          </Typography>
        </Alert>
      </Box>
    </div>
  );
}
