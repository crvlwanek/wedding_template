import * as React from "react";

import { IconButton } from "@material-ui/core";

const IconBarItem = (props) => {
  const Icon = props.icon;
  return (
    <IconButton href={props.link} target="_blank" rel="noopener noreferrer">
      {Icon ? <Icon className="icon" /> : null}
    </IconButton>
  );
};

export default IconBarItem;
