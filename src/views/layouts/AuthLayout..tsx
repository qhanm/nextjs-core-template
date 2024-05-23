import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import ImageWelcome from '/public/images/welcome.png';
import Image from 'next/image';

type TProps = {
  children: React.ReactNode;
};

const LayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',
}));

const AuthLayout = ({ children }: TProps) => {
  return (
    <LayoutWrapper>
      <Box
        sx={{
          height: '100vh',
          widows: '100vw',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f56b9',
            height: '100%',
            width: '50%',
          }}
        >
          <Box>
            <Image
              src={ImageWelcome}
              alt="Welcome"
              style={{
                height: 'auto',
                width: 'auto',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </Box>
    </LayoutWrapper>
  );
};

export default AuthLayout;
