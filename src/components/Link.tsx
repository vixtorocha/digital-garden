import React from "react";
import NextLink from "next/link";
import { isExternal } from "util/types";

type LinkProps = {
  children: React.ReactNode;
  href: string;
};

const Link = ({ children, href }: LinkProps) => {
  const link = href;

  return (
    <span className="text-yellow-400 hover:text-yellow-300 font-medium">
      {isExternal(link) ? (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <NextLink href={link}>{children}</NextLink>
      )}
    </span>
  );
};

export default Link;
