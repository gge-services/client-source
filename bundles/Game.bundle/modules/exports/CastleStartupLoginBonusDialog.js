Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SStartupLoginBonusCollectVO = require("gge-module:export_C2SStartupLoginBonusCollectVO");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleStartupLoginBonusDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStartupLoginBonusDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartupLoginBonusDialog, __s1param0);
  CastleStartupLoginBonusDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect0, this.dialogDisp.btn_collect1, this.dialogDisp.btn_collect2, this.dialogDisp.btn_collect3, this.dialogDisp.btn_collect4, this.dialogDisp.btn_collect5, this.dialogDisp.btn_collect6]);
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_title"));
    __s5local0.autoFitToBounds = true;
    __s5local0.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_loginDays, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_days"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_reward"));
  };
  CastleStartupLoginBonusDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.updateRewards();
    __dep_export_CastleModel.CastleModel.startUpBonusData.addEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusInfoUpdate));
  };
  CastleStartupLoginBonusDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.startUpBonusData.removeEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusInfoUpdate));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleStartupLoginBonusDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    for (var __s11local0 = 0; __s11local0 < __dep_export_CastleModel.CastleModel.startUpBonusData.startupLoginRewardVOs.length; __s11local0++) {
      var __s11local1 = __dep_export_CastleModel.CastleModel.startUpBonusData.startupLoginRewardVOs[__s11local0];
      this.textFieldManager.registerTextField(this.dialogDisp["mc_done" + __s11local0].txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_collected")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp["txt_day" + __s11local0], new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_registerreward_day" + (__s11local0 + 1)));
      this.textFieldManager.registerTextField(this.dialogDisp["btn_collect" + __s11local0].txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rankreward_message_title")).autoFitToBounds = true;
      this.fillRewardRow(__s11local1.rewardList, this.dialogDisp["mc_row" + __s11local0]);
      this.setCollectButton(__s11local0, __s11local1);
    }
  };
  CastleStartupLoginBonusDialog.prototype.fillRewardRow = function (__s15param0, __s15param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s15param1, "mc_item").addTextfields("mc_text.txt_text").addTextfieldBgMcs("mc_text"), __s15param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_STARTUP_LOGIN_BONUS, new __s0local0(33, 30)), function preRenderFunc(__s17param0) {
      if (__s17param0.itemVO) {
        var __s17local0 = __s17param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
        switch (__s17param0.itemVO.itemType) {
          case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS:
          case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE:
          case __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM:
            __s17local0.transform.offset.y = 5.2;
            __s17local0.transform.scale = 1.3;
        }
      }
    });
  };
  CastleStartupLoginBonusDialog.prototype.setCollectButton = function (__s21param0, __s21param1) {
    if (__s21param1.startupLoginBonusRewardID < __dep_export_CastleModel.CastleModel.startUpBonusData.nextStartupLoginBonusID || !__dep_export_CastleModel.CastleModel.startUpBonusData.hasNextStartupLoginBonus) {
      this.dialogDisp["btn_collect" + __s21param0].visible = false;
      this.dialogDisp["mc_done" + __s21param0].visible = true;
      this.dialogDisp["btn_collect" + __s21param0].toolTipText = "";
    } else if (__s21param1.startupLoginBonusRewardID == __dep_export_CastleModel.CastleModel.startUpBonusData.nextStartupLoginBonusID && __dep_export_CastleModel.CastleModel.startUpBonusData.canCollectBonus) {
      this.dialogDisp["btn_collect" + __s21param0].visible = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp["btn_collect" + __s21param0], true);
      this.dialogDisp["btn_collect" + __s21param0].toolTipText = "";
      this.dialogDisp["mc_done" + __s21param0].visible = false;
    } else {
      this.dialogDisp["btn_collect" + __s21param0].visible = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp["btn_collect" + __s21param0], false);
      this.dialogDisp["btn_collect" + __s21param0].toolTipText = "dialog_registerreward_inacitvbutton_tooltip";
      this.dialogDisp["mc_done" + __s21param0].visible = false;
    }
  };
  CastleStartupLoginBonusDialog.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      __s1param0.prototype.onClick.call(this, __s26param0);
      switch (__s26param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect0:
        case this.dialogDisp.btn_collect1:
        case this.dialogDisp.btn_collect2:
        case this.dialogDisp.btn_collect3:
        case this.dialogDisp.btn_collect4:
        case this.dialogDisp.btn_collect5:
        case this.dialogDisp.btn_collect6:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStartupLoginBonusCollectVO.C2SStartupLoginBonusCollectVO());
          __s26param0.target.visible = false;
      }
    }
  };
  CastleStartupLoginBonusDialog.prototype.onLoginBonusInfoUpdate = function (__s30param0) {
    this.updateRewards();
  };
  CastleStartupLoginBonusDialog.__initialize_static_members = function () {
    CastleStartupLoginBonusDialog.NAME = "CastleStartupLoginBonusV2";
    CastleStartupLoginBonusDialog.MAX_REWARDS_PER_ROW = 6;
  };
  return CastleStartupLoginBonusDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStartupLoginBonusDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
