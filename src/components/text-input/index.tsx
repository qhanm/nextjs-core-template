import { TextField, TextFieldProps, styled } from '@mui/material';

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  return {
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      marginRight: 0,
    },
  };
});

const TextInput = (props: TextFieldProps) => {
  return <TextFieldStyled {...props} />;
};

export default TextInput;
