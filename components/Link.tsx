import React from "react";
import NextLink from "next/link";

const Link = (props: { children: any; href: string }) => {
  const link = props.href;

  function isExternal() {
    return true;
  }

  return (
    <span className="text-green-400 hover:text-green-300">
      {isExternal ? (
        <a href={link}>{props.children}</a>
      ) : (
        <NextLink href={link}>{props.children}</NextLink>
      )}
    </span>
  );
};

export default Link;
