Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SGetAllianceTowerBuffInfoVO = require("gge-module:export_C2SGetAllianceTowerBuffInfoVO");
var __dep_export_C2SIncreaseAllianceTowerBuffVO = require("gge-module:export_C2SIncreaseAllianceTowerBuffVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleABGTowerEffectsDialog() {
    return __s1param0.call(this, CastleABGTowerEffectsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerEffectsDialog, __s1param0);
  CastleABGTowerEffectsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_IncreaseBuff_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_IncreaseBuff_copy", [0]));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.dialogDisp.mc_discount.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleABGTowerEffectsDialogItem.CastleABGTowerEffectsDialogItem, "ABGTowerEffects_ListItem", __dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME);
    __s5local0.itemPaddingY = 4;
    __s5local0.useSmoothScroll = true;
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider), __s5local0);
  };
  CastleABGTowerEffectsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._list.setVisibility(false);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceTowerBuffInfoVO.C2SGetAllianceTowerBuffInfoVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos, this.dialogProperties.allianceTowerMapObjectVO.ownerInfo.allianceID));
  };
  CastleABGTowerEffectsDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this._list.onHide();
    for (var __s9local0 = 0; __s9local0 < this._list.dataList.length; __s9local0++) {
      var __s9local1 = this._list.dataList[__s9local0][0];
      __s9local1.selectedLevel = __s9local1.currentLevel;
    }
  };
  CastleABGTowerEffectsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceBuffInfoReceived));
  };
  CastleABGTowerEffectsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceBuffInfoReceived));
  };
  CastleABGTowerEffectsDialog.prototype.onAllianceBuffInfoReceived = function (__s17param0) {
    this._currentAllianceTowerBuffInfoVO = __s17param0.params[0];
    var __s17local0 = [];
    for (var __s17local1 = 0; __s17local1 < this._currentAllianceTowerBuffInfoVO.currentEffects.length; __s17local1++) {
      var __s17local2 = this._currentAllianceTowerBuffInfoVO.currentEffects[__s17local1];
      __s17local0.push([__s17local2, this.bindFunction(this.onSelectionChangedCallback)]);
    }
    this._list.setVisibility(true);
    this._list.onShow();
    this._list.updateWithNewData(__s17local0);
  };
  CastleABGTowerEffectsDialog.prototype.onSelectionChangedCallback = function () {
    var __s21local0 = 0;
    var __s21local1 = 0;
    for (var __s21local2 = 0; __s21local2 < this._currentAllianceTowerBuffInfoVO.currentEffects.length; __s21local2++) {
      var __s21local3 = this._currentAllianceTowerBuffInfoVO.currentEffects[__s21local2];
      __s21local0 += __s21local3.getTotalCostForSelectedLevel();
      __s21local1 += __s21local3.selectedLevel - __s21local3.currentLevel;
    }
    this.itxt_cost.textContentVO.numberValue = __s21local0;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_cost, __s21local0);
    this.itxt_desc.textContentVO.textReplacements = [__s21local1];
  };
  CastleABGTowerEffectsDialog.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      switch (__s25param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var __s25local0 = __dep_exact_f855840627e6e145.int(this.itxt_cost.textContentVO.numberValue);
          if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount > __s25local0) {
            var __s25local1 = this._currentAllianceTowerBuffInfoVO.createServerEffectsArray();
            if (__s25local1.length > 0) {
              __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIncreaseAllianceTowerBuffVO.C2SIncreaseAllianceTowerBuffVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos, __s25local1));
            }
            this.hide();
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
          }
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectsDialog.NAME = "CastleABGTowerEffects";
  return CastleABGTowerEffectsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleABGTowerEffectsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleABGTowerEffectsDialogItem = require("gge-module:export_CastleABGTowerEffectsDialogItem");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
