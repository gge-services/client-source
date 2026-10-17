// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 476
// Export: ModularityUtilConfigurator; preserved source: modules/classes/Converter.js
// Original canonical SHA-256: d38226468cceeaba480d3085e85720beb431209200ea50ef6efd490b15c0d8bd
var __s0local0 = function () {
  function ModularityUtilConfigurator(__s3param0) {
    this._commandConfigurator = __s3param0;
  }
  ModularityUtilConfigurator.prototype.toCommand = function (__s5param0) {
    this._commandConfigurator.withPayloadConverter(new __s0local1(__s5param0).convert);
  };
  return ModularityUtilConfigurator;
}();
exports.ModularityUtilConfigurator = __s0local0;
