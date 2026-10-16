Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = new RegExp("http?s?://(" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "|" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS_ALIAS + ")/web/([a-zA-Z0-9_/]+)/(release|beta)/");
exports.detectFeatureBranchEnvironment = function (__s1param0) {
  var __s1local0;
  var __s1local1;
  var __s1local2 = false;
  if (__s1param0) {
    var __s1local3 = __s1param0.match(__s0local0);
    if (__s1local3) {
      __s1local2 = true;
      __s1local0 = __s1local3[2];
      __s1local1 = __s1local3[3];
    }
  }
  return {
    isFeatureBranch: __s1local2,
    id: __s1local0,
    environment: __s1local1
  };
};
