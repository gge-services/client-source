Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleSpecialServerPreBuildCastleSelectionDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._type = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialServerPreBuildCastleSelectionDialogProperties, __s1param0);
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype, "globalServerID", {
    get: function () {
      if (this._type == CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
        return __dep_exact_26a421b704832cff.GlobalServerConst.TEMP_SERVER;
      } else if (this._type == CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
        return __dep_exact_26a421b704832cff.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype.isEvent = function () {
    return this.globalServerID > -1;
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER = "Temp";
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG = "ABG";
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS = "StormIslands";
  return CastleSpecialServerPreBuildCastleSelectionDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleSpecialServerPreBuildCastleSelectionDialogProperties = __s0local0;
