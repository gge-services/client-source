var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
module.exports = function normalizeHeaderName(__s1param0, __s1param1) {
  __dep_exact_6ce7d38fc7165545.forEach(__s1param0, function processHeader(__s3param0, __s3param1) {
    if (__s3param1 !== __s1param1 && __s3param1.toUpperCase() === __s1param1.toUpperCase()) {
      __s1param0[__s1param1] = __s3param0;
      delete __s1param0[__s3param1];
    }
  });
};
