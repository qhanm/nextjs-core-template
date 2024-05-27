import { TextField, TextFieldProps, styled } from '@mui/material';

const TextFieldStyled = styled(TextField)<TextFieldProps>(({
  theme,
  ...restProps
}) => {
  return {
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      marginRight: 0,
      color: theme.palette.error.main,
    },
    '& .MuiInputBase-root': {
      borderRadius: 8,
      border: `1px solid rgba(${theme.palette.primary.main}, 0.2)`,
    },
    '& .MuiInputBase-root input': {
      padding: restProps.size === 'medium' ? '8px 12px' : '4px 8px',
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
    '&.Mui-focused': {
      '&.MuiInputBase-colorPrimary': {
        borderColor: theme.palette.primary.main,
      },
    },
  };
});

const TextInput = ({
  size = 'medium',
  variant = 'filled',
  InputLabelProps,
  ...restProps
}: TextFieldProps) => {
  return (
    <TextFieldStyled
      {...restProps}
      variant={variant}
      size={size}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      focused
    />
  );
};

export default TextInput;
