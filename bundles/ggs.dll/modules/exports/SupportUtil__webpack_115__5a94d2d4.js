// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 115
// Export: SupportUtil; preserved source: modules/webpack/exports/ASupportData.js
// Original canonical SHA-256: 4c5b06c59fe87b0e62b917b793c42b938f67a8b683d6e21e939cf5511a1dd567
var __s0local0 = function () {
  function SupportUtil() {}
  SupportUtil.navigateToSupport = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5) {
    try {
      var __s5local0 = new __dep_export_CSSMouseCursor.URLRequest(SupportUtil.GGS_SUPPORT_URL);
      SupportUtil.supportData.versionText = __s5param1;
      var __s5local1 = SupportUtil.supportData.createUrlVars(__s5param0, __s5param2, __s5param3, __s5param4, __s5param5);
      __s5local0.data = __s5local1;
      __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
    } catch (__s8local0) {
      __dep_exact_14ac9999fc46bb45.fatal("cannot navigate to support form");
    }
  };
  SupportUtil.setRegistrationNetworkId = function (__s10param0) {
    SupportUtil.supportData.networkId = __s10param0;
  };
  SupportUtil.initForWeb = function (__s12param0, __s12param1, __s12param2, __s12param3, __s12param4, __s12param5) {
    SupportUtil.supportData = new __s0local2(__s12param0, __s12param1, __s12param2, __s12param3, __s12param4, __s12param5);
  };
  SupportUtil.initForMobile = function (__s14param0, __s14param1, __s14param2, __s14param3, __s14param4, __s14param5) {
    SupportUtil.supportData = new __s0local3(__s14param0, __s14param1, __s14param2, __s14param3, __s14param4, __s14param5);
  };
  SupportUtil.GGS_SUPPORT_URL = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://support.goodgamestudios.com/";
  return SupportUtil;
}();
exports.SupportUtil = __s0local0;
