module.exports = function bind(__s1param0, __s1param1) {
  return function wrap() {
    for (var __s3local0 = new Array(arguments.length), __s3local1 = 0; __s3local1 < __s3local0.length; __s3local1++) {
      __s3local0[__s3local1] = arguments[__s3local1];
    }
    return __s1param0.apply(__s1param1, __s3local0);
  };
};
