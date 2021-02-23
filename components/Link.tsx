import React from "react";
import NextLink from "next/link";

const Link = ({ children }, href: string) => {
  const link = href;

  function isExternal() {
    return true;
  }

  return (
    <span className="text-green-400 hover:text-green-300">
      {isExternal ? (
        <a href={link}>{children}</a>
      ) : (
        <NextLink href={link}>{children}</NextLink>
      )}
    </span>
  );
};

export default Link;
