Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SExtensionTreasureChestVO = require("gge-module:export_C2SExtensionTreasureChestVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTreasureChestBuildingDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureChestBuildingDialog, __s1param0);
  CastleTreasureChestBuildingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasurechestbuilding_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasurechestOpen_desc")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
  };
  CastleTreasureChestBuildingDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this._currentRewardList = null;
    __s1param0.prototype.applyPropertiesLoaded.call(this);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ETC_ARRIVED, this.bindFunction(this.onEtcArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SExtensionTreasureChestVO.C2SExtensionTreasureChestVO(this.dialogProperties.objectID));
  };
  CastleTreasureChestBuildingDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ETC_ARRIVED, this.bindFunction(this.onEtcArrived));
  };
  CastleTreasureChestBuildingDialog.prototype.onEtcArrived = function (__s11param0) {
    if (__s11param0.params) {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0.params[0]);
      this._currentRewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s11local0);
      this.updateRewards();
    } else {
      this.hide();
    }
  };
  CastleTreasureChestBuildingDialog.prototype.getRewardList = function () {
    return this._currentRewardList;
  };
  Object.defineProperty(CastleTreasureChestBuildingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureChestBuildingDialog.__initialize_static_members = function () {
    CastleTreasureChestBuildingDialog.NAME = "CastleTreasureChestOpenBuilding";
  };
  return CastleTreasureChestBuildingDialog;
}(require("gge-module:export_CastleTreasureChestOpenDialog").CastleTreasureChestOpenDialog);
exports.CastleTreasureChestBuildingDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
