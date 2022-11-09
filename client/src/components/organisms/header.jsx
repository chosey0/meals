import React from "react";
import { Button } from "../atoms/button";
import { Logo } from "../atoms/logo";
import { Nav } from "../molecules/navigator";

export const Header = (props) => {
  return (
    <header className={props.className}>
      <Logo name="연습용" href="/"></Logo>
      <Nav className="flex items-center justify-between"></Nav>
    </header>
  );
};
