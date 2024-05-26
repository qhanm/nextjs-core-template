import TextInput from '@/components/text-input';
import { Box } from '@mui/material';

const LoginView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <TextInput label="Username" helperText="Error" />
      </Box>
      <TextInput label="Username" helperText="Error" />
    </Box>
  );
};

export default LoginView;
