Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._jumpToTabId = __s3param0;
    __s3local0._jumpToSkillId = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillDialogProperties, __s1param0);
  Object.defineProperty(CastleLegendSkillDialogProperties.prototype, "jumpToTabId", {
    get: function () {
      return this._jumpToTabId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillDialogProperties.prototype, "jumpToSkillId", {
    get: function () {
      return this._jumpToSkillId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleLegendSkillDialogProperties = __s0local0;
