// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 273
// Export: initCXF; preserved source: modules/webpack/exports/cxfResetCommandCache.js
// Original canonical SHA-256: e1e3c4ed197739184eae8c740f5b35de38ea6efc618134e6f0008ccc16aaa261
exports.initCXF = function () {
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("CXFregisterServerCommands", __s0local4);
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("setCapToolNotifications", __s0local6);
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("setUnseenOffersCounter", __s0local7);
  var __s22local0 = __dep_exact_81dacdf05bd32292.ExternalInterface.asyncCall("isCXFInitialized");
  if (__s22local0) {
    __s22local0.then(function (__s25param0) {
      if (__s25param0) {
        __s0local0.info("CXF is already ready.  Calling ggsGameInitialized");
        __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsGameInitialized");
      } else {
        __s0local0.info("CXF is not ready yet, waiting for it.");
        __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("cxf.initialized", __s0local8);
      }
    }).catch(function (__s29param0) {
      return __s0local0.warn(__s29param0);
    });
  }
};
