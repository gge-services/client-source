Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonStore() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonStore, __s1param0);
  RingMenuButtonStore.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_store;
    this.updateButtonStatus();
  };
  RingMenuButtonStore.prototype.addEventListeners = function () {
    __s1param0.prototype.addEventListeners.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
  };
  RingMenuButtonStore.prototype.removeEventListeners = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    __s1param0.prototype.removeEventListeners.call(this);
  };
  RingMenuButtonStore.prototype.updateButtonStatus = function () {
    var __s11local0 = this.isButtonVisible();
    this._disp.visible = __s11local0;
    if (__s11local0) {
      var __s11local1 = this.isButtonEnabled();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, __s11local1);
      this._disp.toolTipText = this.disableTextID;
    }
  };
  RingMenuButtonStore.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("store");
  };
  RingMenuButtonStore.prototype.isButtonVisible = function () {
    return !!this.targetBuilding && !!this.targetBuilding.buildingVO && this.targetBuilding.buildingVO.storeable && !this.isBuildingInProgress() && !this.targetBuilding.buildingVO.isDamaged && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
  };
  RingMenuButtonStore.prototype.isButtonEnabled = function () {
    if (this.targetBuilding.buildingVO) {
      if (this.targetBuilding.buildingVO.isDistrict) {
        var __s18local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo;
        var __s18local1 = __dep_exact_f855840627e6e145.int(this.targetBuilding.buildingVO.districtTypeID);
        if (__s18local0 && !__s18local0.isDistrictEmpty(__s18local1)) {
          this.disableTextID = "ringmenu_store_districtNotEmpty";
          return false;
        }
      } else if (this.targetBuilding.buildingVO.isUnique() && __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage().isCapacityFull()) {
        this.disableTextID = "dialog_buildingsStorehouse_capacityFull_tooltip";
        return false;
      }
    }
    this.disableTextID = null;
    return true;
  };
  RingMenuButtonStore.prototype.onClick = function (__s24param0, __s24param1) {
    this.parent.hide();
    __dep_export_Iso.Iso.controller.server.storeBuildingToLocalInventory(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonStore.prototype.onDecoStorageUpdated = function (__s26param0) {
    this.updateButtonStatus();
  };
  return RingMenuButtonStore;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonStore = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
