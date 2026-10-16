module.exports = function combineURLs(__s1param0, __s1param1) {
  if (__s1param1) {
    return __s1param0.replace(/\/+$/, "") + "/" + __s1param1.replace(/^\/+/, "");
  } else {
    return __s1param0;
  }
};
