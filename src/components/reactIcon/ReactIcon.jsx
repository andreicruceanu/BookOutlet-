import * as ReactIconAI from "react-icons/ai";
import * as ReactIconBI from "react-icons/bi";
import * as ReactIconBs from "react-icons/bs";
import React from "react";

const ReactIcon = ({ icons }) => {
  const iconFolder = icons.slice(0, 2).toLowerCase();
  // Map Icon to Respective Folder by comparing the First two Character of the
  //Icons
  let icon =
    iconFolder === "ai"
      ? ReactIconAI[icons]
      : iconFolder === "bi"
      ? ReactIconBI[icons]
      : iconFolder === "bs"
      ? ReactIconBs[icons]
      : "";
  // return only if the icon Exist
  return icon && React.createElement(icon);
};

export default ReactIcon;
