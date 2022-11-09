import React from "react";
import { Article } from "../molecules/article";

export const Main = () => {
  return (
    <section className="flex flex-wrap w-full">
      <Article className="flex md:w-1/2"></Article>
      <Article className="flex md:w-1/2"></Article>
    </section>
  );
};
