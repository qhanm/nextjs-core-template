import TextInput from '@/components/text-input';
import { Box } from '@mui/material';

const LoginView = () => {
  return (
    <Box>
      <Box>
        <TextInput label="Username" helperText="Error" />
      </Box>
    </Box>
  );
};

export default LoginView;
