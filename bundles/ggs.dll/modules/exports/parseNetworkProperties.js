// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 623
// Export: parseNetworkProperties; preserved source: modules/webpack/exports/parseInstances.js
// Original canonical SHA-256: 023aef07a37b9b8d049e8296e9cbcecfdda507c537dcb9ccfba7a0e72fe21fe0
exports.parseNetworkProperties = function (__s21param0) {
  new DOMParser().parseFromString(__s21param0, "text/xml");
  var __s21local0;
  var __s21local1 = new __dep_class_NetworkProperties.NetworkProperties();
  __s21local0 = __s21param0.attributes.getNamedItem("deployTime");
  __s21local1.deployTime = __s21local0 ? +__s21local0.textContent : 0;
  __s21local0 = __s21param0.attributes.getNamedItem("versionNo");
  __s21local1.versionNumber = __s21local0 ? __s21local0.textContent : "0";
  __s21local0 = __s21param0.attributes.getNamedItem("is_approval");
  __s21local1.isApproval = !!__s21local0 && __s21local0.textContent === "true";
  return __s21local1;
};
