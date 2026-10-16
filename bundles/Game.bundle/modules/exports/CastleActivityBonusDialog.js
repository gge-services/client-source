Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SOpenActivityChest = require("gge-module:export_C2SOpenActivityChest");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleActivityBonusDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleActivityBonusDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleActivityBonusDialog, __s1param0);
  CastleActivityBonusDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_activityreward_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_activityreward_collect"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_activityreward_copy"));
  };
  CastleActivityBonusDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateRewards();
    __dep_export_CastleModel.CastleModel.activityBonusData.addEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onReadyForCollect));
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus);
    if (__s7local0 > 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_collect, false);
      this.dialogDisp.btn_collect.toolTipText = {
        t: "dialog_activityBonus_canCollectIn",
        p: [__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(__s7local0, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT)]
      };
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_collect.basicButton, true);
      this.dialogDisp.btn_collect.toolTipText = "";
    }
  };
  CastleActivityBonusDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.activityBonusData.removeEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onReadyForCollect));
  };
  CastleActivityBonusDialog.prototype.updateRewards = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.activityBonusData.getNextActivityRewardVO().rewardList;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item"), __s13local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(38, 38)), null, this.bindFunction(this.afterRenderFunc));
  };
  CastleActivityBonusDialog.prototype.afterRenderFunc = function (__s15param0) {
    if (__s15param0.itemVO) {
      this.textFieldManager.registerTextField(__s15param0.clips.textfield, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_MULTIPLIED, [__s15param0.itemVO.amount]));
    }
  };
  CastleActivityBonusDialog.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      switch (__s18param0.target) {
        case this.dialogDisp.btn_collect:
          if (__dep_export_CastleModel.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus <= 0) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOpenActivityChest.C2SOpenActivityChest());
          }
          this.hide();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleActivityBonusDialog.prototype.onReadyForCollect = function (__s23param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_collect, true);
  };
  CastleActivityBonusDialog.__initialize_static_members = function () {
    CastleActivityBonusDialog.NAME = "CastleActivityBonus";
  };
  return CastleActivityBonusDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleActivityBonusDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
