import React from "react";
import { ContentText } from "../atoms/contentText";
import { ContentTitle } from "../atoms/contentTitle";

export const Article = (props) => {
  return (
    <article className={props.className}>
      <ContentTitle></ContentTitle>
      <ContentText text="연습용"></ContentText>
    </article>
  );
};
