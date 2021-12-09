import { Box, IconButton } from '@mui/material';
import Icon from '@mui/material/Icon';
import React from 'react';

const Deep: React.FC = function () {
  return (
    <div>
      <h1>deep child</h1>
      <Box>
        <IconButton>
          <Icon>face</Icon>
        </IconButton>
      </Box>
    </div>
  );
};

export default Deep;
