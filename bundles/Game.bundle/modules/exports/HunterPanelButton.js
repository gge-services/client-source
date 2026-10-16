Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function HunterPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HunterPanelButton, __s1param0);
  HunterPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    this.listenOnXPChanged();
  };
  HunterPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(HunterPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_ActionPanelHunter;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  HunterPanelButton.prototype.isButtonEnabled = function () {
    return (!__dep_export_CastleModel.CastleModel.areaData.activeArea || !!__dep_export_CastleModel.CastleModel.areaData.activeArea.isInAreaWithHunter) && __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && !__dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingUnderConstruction && (__dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingBuilt || __dep_export_CastleModel.CastleModel.hunterData.isAllowedToBuild);
  };
  HunterPanelButton.prototype.getButtonTooltip = function () {
    if (!__dep_export_CastleModel.CastleModel.areaData.activeArea || __dep_export_CastleModel.CastleModel.areaData.activeArea.isInAreaWithHunter && __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO) {
      if (__dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingBuilt) {
        return "dialog_hunter_title";
      } else if (__dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingUnderConstruction) {
        return "hunter_teaser_info_build";
      } else if (__dep_export_CastleModel.CastleModel.hunterData.isAllowedToBuild) {
        return "hunter_teaser_info_ready";
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("hunter_teaser_info", [__dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.requiredLevel]);
      }
    } else {
      return "hunter_teaser_info_blocked";
    }
  };
  HunterPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingBuilt) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleHunterDialog.CastleHunterDialog);
    } else if (__dep_export_CastleModel.CastleModel.hunterData.isAllowedToBuild) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideAllIngameUIComponents();
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s23local0 = __dep_export_CastleComponent.CastleComponent.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
      var __s23local1 = __dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO;
      for (var __s23local2 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s23local1.shopCategory), __s23local3 = 0; __s23local3 < __s23local2.length; __s23local3++) {
        if (__s23local2[__s23local3].wodId == __s23local1.wodId) {
          __s23local0.changeCategory(__s23local1.shopCategory, __dep_exact_f855840627e6e145.int(__s23local3 / __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
          __s23local0.highLightFilteredArrayIndex(__s23local3 % __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE);
          break;
        }
      }
    }
  };
  HunterPanelButton.prototype.onHunterBuildingDataSet = function (__s30param0) {
    this.update();
  };
  return HunterPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.HunterPanelButton = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleHunterDialog = require("gge-module:export_CastleHunterDialog");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleDecoShopItemArrayHelper = require("gge-module:export_CastleDecoShopItemArrayHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
