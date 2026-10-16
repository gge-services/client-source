Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRefineryToolsmithDialog = require("gge-module:export_CastleRefineryToolsmithDialog");
var __dep_export_CastleRefineryToolsmithDialogProperties = require("gge-module:export_CastleRefineryToolsmithDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function CraftingPanelButton(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._objectType = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingPanelButton, __s1param0);
  CraftingPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
  };
  CraftingPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(CraftingPanelButton.prototype, "iconClass", {
    get: function () {
      switch (this._objectType) {
        case __dep_export_IsoObjectEnum.IsoObjectEnum.REFINERY:
          return Library.CastleInterfaceElements.Btn_Refinery;
        case __dep_export_IsoObjectEnum.IsoObjectEnum.TOOLSMITH:
          return Library.CastleInterfaceElements.Btn_Toolsmith;
        case __dep_export_IsoObjectEnum.IsoObjectEnum.DRAGONHOARD:
          return Library.CastleInterfaceElements.Btn_DragonHoard;
      }
      return null;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  CraftingPanelButton.prototype.isButtonVisible = function () {
    return !!__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.hasFunctionalBuildingByType(this._objectType);
  };
  CraftingPanelButton.prototype.getButtonTooltip = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.getFunctionalBuildingByType(this._objectType).getNameString();
  };
  CraftingPanelButton.prototype.onButtonClicked = function () {
    var __s18local0 = __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.getFunctionalBuildingByType(this._objectType);
    if (__s18local0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleRefineryToolsmithDialog.CastleRefineryToolsmithDialog, new __dep_export_CastleRefineryToolsmithDialogProperties.CastleRefineryToolsmithDialogProperties(__s18local0.craftingQueueId));
    }
  };
  return CraftingPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.CraftingPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
