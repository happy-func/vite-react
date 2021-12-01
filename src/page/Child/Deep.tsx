import React from "react";
import Icon from "@material-ui/core/Icon";
import {Box, Button} from "@material-ui/core";

const Deep: React.FC = function () {
  return (
    <div>
      <h1>deep child</h1>
      <Box>
        <Button>
          <Icon>face</Icon>
        </Button>
      </Box>
    </div>
  );
}

export default Deep;
