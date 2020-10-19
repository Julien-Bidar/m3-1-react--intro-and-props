import React from "react";

const Avatar = (props) => {
  console.log("Avatar props ", props);
  return <img src={props.sourc} width={props.width} />;
};

export default Avatar;
