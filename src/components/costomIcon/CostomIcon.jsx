import React from "react";
import { SvgIcon } from "icon-react";

function CustomIcon(props) {
  const { icon, ...otherProps } = props;
  return <SvgIcon {...otherProps}>{icon}</SvgIcon>;
}

export default CustomIcon;
