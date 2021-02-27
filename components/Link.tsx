import React from "react";
import NextLink from "next/link";
import { isExternal } from "utils";

const Link = (props: { children: any; href: string }) => {
  const link = props.href;

  return (
    <span className="text-yellow-500 hover:text-yellow-400">
      {isExternal(link) ? (
        <a href={link} target="_blank" rel="noreferrer">
          {props.children}
        </a>
      ) : (
        <NextLink href={link}>{props.children}</NextLink>
      )}
    </span>
  );
};

export default Link;
