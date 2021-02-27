function isExternal(link: string) {
  if (link.match("http")) {
    return true;
  }
  return false;
}

export { isExternal };
