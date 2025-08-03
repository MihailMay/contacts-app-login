import { LoginForm } from '../components/Auth/LoginForm';
import { Box, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}