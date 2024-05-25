import { TextField, TextFieldProps, styled } from '@mui/material';

const TextFieldStyled = styled(TextField)<TextFieldProps>((props) => {
  return {
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiInputBase-root input': {
      padding: props.size === 'medium' ? '14px 10px' : '8px 14px',
    },
    '& .MuiInputLabel-root': {
      transform: 'none',
      position: 'relative',
      marginBottom: '4px',
    },
    '& fieldset legend': {
      width: 0,
    },
  };
});

const TextInput = ({ size = 'medium', ...restProps }: TextFieldProps) => {
  return <TextFieldStyled {...restProps} size={size} focused />;
};

export default TextInput;
