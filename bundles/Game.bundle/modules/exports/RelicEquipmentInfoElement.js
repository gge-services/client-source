Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function RelicEquipmentInfoElement(__s3param0, __s3param1) {
    this._partType = __s3param0;
    this._category = __s3param1;
    this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.ASSET_NAME + "_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s3param0.name), __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent.ASSET_NAME + "_2_0"), null, 0, false);
  }
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "partType", {
    get: function () {
      return this._partType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentInfoElement;
}();
exports.RelicEquipmentInfoElement = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_RelicEquipmentInfoComponent = require("gge-module:export_RelicEquipmentInfoComponent");
