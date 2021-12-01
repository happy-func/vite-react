import React from "react";
import Icon from "@material-ui/core/Icon";
import { Box, IconButton } from "@material-ui/core";

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
}

export default Deep;
