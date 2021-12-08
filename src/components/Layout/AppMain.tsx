import { Box, styled } from '@mui/material';
import React from 'react';

import Aside from '@/components/Layout/Aside';
import Header from '@/components/Layout/Header';

const StyledBox = styled(Box)(({ theme }) => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `flex-end`,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppMain: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: `flex`,
      }}>
      <Header />
      <Aside />
      <Box
        sx={{
          flexGrow: 1,
          padding: (theme) => theme.spacing(3),
          position: `relative`,
        }}>
        <StyledBox />
        {children}
      </Box>
    </Box>
  );
};

export default AppMain;
