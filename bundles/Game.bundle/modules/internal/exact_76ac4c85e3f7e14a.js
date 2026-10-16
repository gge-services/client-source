module.exports = function spread(__s1param0) {
  return function wrap(__s3param0) {
    return __s1param0.apply(null, __s3param0);
  };
};
