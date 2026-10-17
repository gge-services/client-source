// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 631
// Export: getCountryCodeByDefaultInstance; preserved source: modules/webpack/exports/getCountryCodeByDefaultInstance.js
// Original canonical SHA-256: 1c143fe850a0fdd8cdfd3ba3f53b32696f3e0084c257b5f2ea46595c990bc283
exports.getCountryCodeByDefaultInstance = function (__s17param0) {
  var __s17local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
  if (__s17local0) {
    var __s17local1 = __s17local0.getInstanceById(__s17param0);
    if (__s17local1 && __s17local1.defaultcountry) {
      return __s17local1.defaultcountry;
    }
    __s0local0.error("getCountryCodeByDefaultInstance: unable to select instance by default instance, wrong network.xml?");
  } else {
    __s0local0.error("getCountryCodeByDefaultInstance: NetworkInstancesManager not initialized");
  }
};
