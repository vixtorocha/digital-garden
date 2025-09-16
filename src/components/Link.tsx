import React from "react";
import NextLink from "next/link";
import { isExternal } from "util/types";

const Link = (props: { children: any; href: string }) => {
  const link = props.href;

  return (
    <span className="text-yellow-400 hover:text-yellow-300 font-medium">
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
