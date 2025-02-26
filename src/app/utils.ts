export const createHref = (s: string) => {
  return s.replaceAll("'", "").split(" ").join("_").toLowerCase();
};
