Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoViewStrategy() {
    this._modes = new Map();
    for (var __s3local0 = 0, __s3local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum); __s3local0 < __s3local1.length; __s3local0++) {
      var __s3local2 = __s3local1[__s3local0];
      this.modes.set(__s3local2, false);
    }
  }
  IsoViewStrategy.prototype.isActive = function (__s7param0) {
    return this.modes.get(__s7param0) == 1;
  };
  Object.defineProperty(IsoViewStrategy.prototype, "isInNormalMode", {
    get: function () {
      if (this.modes != null) {
        for (var __s9local0 = 0, __s9local1 = Array.from(this.modes.keys()); __s9local0 < __s9local1.length; __s9local0++) {
          var __s9local2 = __s9local1[__s9local0];
          if (__s9local2 !== undefined && this.modes.get(__s9local2)) {
            return false;
          }
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewStrategy.prototype, "modes", {
    get: function () {
      return this._modes;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewStrategy;
}();
exports.IsoViewStrategy = __s0local0;
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
