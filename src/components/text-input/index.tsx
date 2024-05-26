import { TextField, TextFieldProps, styled } from '@mui/material';

const TextFieldStyled = styled(TextField)<TextFieldProps>((props) => {
  console.log(props.theme.palette);
  return {
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiInputBase-root': {
      borderRadius: 8,
    },
    '& .MuiInputBase-root input': {
      padding: props.size === 'medium' ? '8px 12px' : '4px 8px',
      width: '100%',
    },

    '& .MuiInputLabel-root': {
      transform: 'none',
      position: 'relative',
      marginBottom: '4px',
    },
    '& fieldset': {
      borderWidth: '1px !important',
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
