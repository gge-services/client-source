Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function EilandSlumSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EilandSlumSurroundingsVE, __s1param0);
  EilandSlumSurroundingsVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK3);
  };
  Object.defineProperty(EilandSlumSurroundingsVE.prototype, "assetClipName", {
    get: function () {
      return this.vo.name + "_" + this.vo.group + "_" + this.vo.getAreaKingdomName() + "_1";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EilandSlumSurroundingsVE.prototype, "assetFileName", {
    get: function () {
      return this.assetClipName;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  EilandSlumSurroundingsVE.prototype.onMouseClick = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAquamarineShopDialog.CastleAquamarineShopDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(null));
  };
  return EilandSlumSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.EilandSlumSurroundingsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAquamarineShopDialog = require("gge-module:export_CastleAquamarineShopDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
