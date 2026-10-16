module.exports = function isAxiosError(__s1param0) {
  return typeof __s1param0 == "object" && __s1param0.isAxiosError === true;
};
