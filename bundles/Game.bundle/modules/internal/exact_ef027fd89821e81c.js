module.exports = function isAbsoluteURL(__s1param0) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(__s1param0);
};
