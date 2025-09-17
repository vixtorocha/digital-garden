import React from "react";
import NextLink from "next/link";
import { isExternal } from "util/types";

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Link = ({ children, href, className }: LinkProps) => {
  const link = href;
  const baseClass = "text-yellow-400 hover:text-yellow-300 font-medium";
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <span className={combinedClass}>
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
