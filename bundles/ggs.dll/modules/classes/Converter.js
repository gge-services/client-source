Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var __s0local1 = function () {
  function Converter(__s9param0) {
    this._commandName = __s9param0;
  }
  Converter.prototype.convert = function (__s11param0) {
    __s11param0.unshift(this._commandName);
    return __s11param0;
  };
  return Converter;
}();
