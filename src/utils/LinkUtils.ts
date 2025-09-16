function isExternal(link: string) {
  if (link.match("http") || link.match("mailto:")) {
    return true;
  }
  return false;
}

export { isExternal };
