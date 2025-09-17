import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="px-5 md:px-10 lg:max-w-4xl mx-auto">{children}</div>;
};
export default Layout;
