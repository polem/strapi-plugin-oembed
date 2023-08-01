export const getService = (name) => {
  // @ts-ignore
  return strapi.plugin("oembed").service(name);
};
