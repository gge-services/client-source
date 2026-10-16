Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceBattleGroundGetCentersOfPowerDetailVO = require("gge-module:export_C2SAllianceBattleGroundGetCentersOfPowerDetailVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceCentersOfPowerDialog() {
    return __s1param0.call(this, CastleAllianceCentersOfPowerDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceCentersOfPowerDialog, __s1param0);
  CastleAllianceCentersOfPowerDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleAllianceCentersOfPowerDialogItem.CastleAllianceCentersOfPowerDialogItem, "CastleAllianceCentersOfPowerItem", CastleAllianceCentersOfPowerDialog.NAME);
    __s5local0.itemPaddingY = 10;
    __s5local0.useSmoothScroll = true;
    this._rewardScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider).addItemMc(this.dialogDisp.mc_list.mc_items), __s5local0);
  };
  CastleAllianceCentersOfPowerDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_centersOfPower_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_centersOfPower_desc"));
    this._rewardScrollList.onShow();
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPD_ARRIVED, this.bindFunction(this.onCPDArrived));
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetCentersOfPowerDetailVO.C2SAllianceBattleGroundGetCentersOfPowerDetailVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
  };
  CastleAllianceCentersOfPowerDialog.prototype.onCPDArrived = function (__s9param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPD_ARRIVED, this.bindFunction(this.onCPDArrived));
    var __s9local0 = [];
    var __s9local1 = __s9param0.params[0].AAI;
    if (__s9local1 != null) {
      for (var __s9local2 = 0, __s9local3 = __s9local1; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4 !== undefined) {
          var __s9local5 = [__dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s9local4.AI), __s9local4.PN, __dep_exact_f855840627e6e145.int(Math.max(__dep_exact_f855840627e6e145.int(__s9local4.AMT), __dep_exact_f855840627e6e145.int(__s9local4.AOT), __dep_exact_f855840627e6e145.int(__s9local4.PB))), __dep_export_CachedTimer.CachedTimer.getCachedTimer()];
          __s9local0.push(__s9local5);
        }
      }
    }
    this._rewardScrollList.updateWithNewData(__s9local0);
  };
  CastleAllianceCentersOfPowerDialog.prototype.hideLoaded = function (__s15param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s15param0);
    this._rewardScrollList.onHide();
  };
  CastleAllianceCentersOfPowerDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleAllianceCentersOfPowerDialog.NAME = "CastleAllianceCentersOfPower";
  return CastleAllianceCentersOfPowerDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceCentersOfPowerDialog = __s0local0;
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CastleAllianceCentersOfPowerDialogItem = require("gge-module:export_CastleAllianceCentersOfPowerDialogItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
