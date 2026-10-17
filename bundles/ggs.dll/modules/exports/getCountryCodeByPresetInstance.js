// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 631
// Export: getCountryCodeByPresetInstance; preserved source: modules/webpack/exports/getCountryCodeByDefaultInstance.js
// Original canonical SHA-256: 1c143fe850a0fdd8cdfd3ba3f53b32696f3e0084c257b5f2ea46595c990bc283
exports.getCountryCodeByPresetInstance = function (__s1param0) {
  var __s1local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
  if (__s1local0) {
    if (__s1param0 > 0) {
      var __s1local1 = __s1local0.getInstanceById(__s1param0);
      if (__s1local1 && __s1local1.countries) {
        if (__s1local1.countries.length == 1) {
          return __s1local1.countries[0].ggsCountryCode;
        }
        __s0local0.warn("getCountryCodeByPreselectedInstance: found an instance for the presetInstanceID but could not determine Country because there are more than one,  following steps in CountryDetection will  find the right one");
      } else {
        __s0local0.error("getCountryCodeByPreselectedInstance: unable to select instance by preset instanceId, wrong network.xml?");
      }
    }
  } else {
    __s0local0.error("getCountryCodeByPreselectedInstance: NetworkInstancesManager not initialized");
  }
};
