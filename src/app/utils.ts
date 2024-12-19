export const createHref = (s: string) => {
  return s.split(" ").join("_").toLowerCase();
};
