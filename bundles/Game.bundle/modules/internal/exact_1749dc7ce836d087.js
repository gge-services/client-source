var __dep_exact_765815e5f620481c = require("gge-module:exact_765815e5f620481c");
module.exports = function settle(__s1param0, __s1param1, __s1param2) {
  var __s1local0 = __s1param2.config.validateStatus;
  if (__s1param2.status && __s1local0 && !__s1local0(__s1param2.status)) {
    __s1param1(__dep_exact_765815e5f620481c("Request failed with status code " + __s1param2.status, __s1param2.config, null, __s1param2.request, __s1param2));
  } else {
    __s1param0(__s1param2);
  }
};
