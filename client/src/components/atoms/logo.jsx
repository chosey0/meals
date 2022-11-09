import React from "react";

export const Logo = (props) => {
  return (
    <a href={props.href}>
      <h1 id={props.id}>{props.name}</h1>
    </a>
  );
};
