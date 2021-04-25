import React from 'react';
import {Typography} from '@material-ui/core';

const Copyright: React.FC = function () {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © `}
      <a color="inherit" href="https://github.com/happy-func/">
        Happy-func
      </a>{` `}
      {new Date().getFullYear()}
      {`.`}
    </Typography>
  )
};

export default Copyright;
