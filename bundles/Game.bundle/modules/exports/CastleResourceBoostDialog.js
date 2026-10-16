Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleBuyResourceBoostDialogProperties = require("gge-module:export_CastleBuyResourceBoostDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleResourceBoostDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleResourceBoostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceBoostDialog, __s1param0);
  CastleResourceBoostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.stonewallBg ||= new __dep_export_CastleStonewallBackgroundComponent.CastleStonewallBackgroundComponent(this.dialogDisp.bg);
    this.stonewallBg.setTitleByTextId("dialog_resourcesBoost_title");
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_resourcesBoost_copy"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.bg.btn_help]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_list.item0, this.dialogDisp.mc_list.item1, this.dialogDisp.mc_list.item2, this.dialogDisp.mc_list.item3, this.dialogDisp.mc_list.item4, this.dialogDisp.btn_minus, this.dialogDisp.btn_plus], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
  };
  CastleResourceBoostDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, this.dialogDisp.mc_charPlaceHolder, 212, 179);
    this.dialogDisp.bg.btn_help.toolTipText = "generic_help";
    this.stonewallBg.update();
  };
  CastleResourceBoostDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.availableBoosters = this.getAvailableBoosters();
    var __s9local0 = this.availableBoosters.length - CastleResourceBoostDialog.MAX_BOOSTERS;
    if (__s9local0 > 0) {
      this.scrollComponent.init(0, __s9local0);
      this.scrollComponent.scrollToValue(0);
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
      this.dialogDisp.mc_list.x = 0;
    } else {
      this.dialogDisp.mc_list.x = -__s9local0 * CastleResourceBoostDialog.ITEM_OFFSET;
      this.scrollComponent.init(0, 0);
      this.scrollComponent.scrollToValue(0);
      this.scrollComponent.setVisibility(false);
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onBoosterDataUpdated));
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.onScroll = function () {
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.onBoosterDataUpdated = function (__s15param0) {
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.updatBoosters = function () {
    for (var __s17local0 = 0; __s17local0 < CastleResourceBoostDialog.MAX_BOOSTERS; __s17local0++) {
      var __s17local1 = this.dialogDisp.mc_list["item" + __s17local0];
      var __s17local2 = __s17local0 + this.scrollComponent.currentValue;
      if (this.availableBoosters.length <= __s17local2) {
        __s17local1.visible = false;
      } else {
        __s17local1.visible = true;
        var __s17local3 = this.availableBoosters[__s17local2];
        __s17local1.resourceType = __s17local3.id;
        var __s17local4 = __dep_exact_f855840627e6e145.int(__s17local3.remainingTimeInSeconds);
        var __s17local5 = __s17local3.id + 1;
        if (__s17local4 > 0) {
          __s17local1.mc_inactive.visible = false;
          __s17local1.mc_active.visible = true;
          __s17local1.mc_active.info_percent.mcIcon.gotoAndStop(__s17local5);
          __s17local1.mc_active.info_time.mcIcon.gotoAndStop(__s17local5);
          this.textFieldManager.registerTextField(__s17local1.mc_active.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s17local4, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text, false, true, true, false)));
          this.textFieldManager.registerTextField(__s17local1.mc_active.info_percent.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BOOST]));
          __s17local1.toolTipText = "dialog_resourcesBoost_extendOverseer";
        } else {
          __s17local1.mc_active.visible = false;
          __s17local1.mc_inactive.visible = true;
          __s17local1.mc_inactive.gotoAndStop(__s17local5);
          __s17local1.toolTipText = "dialog_resourcesBoost_hireOverseer";
        }
        __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(__s17local1.mc_discount, __s17local3.id);
      }
    }
  };
  CastleResourceBoostDialog.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      __s1param0.prototype.onClick.call(this, __s25param0);
      switch (__s25param0.target) {
        case this.dialogDisp.mc_list.item0:
        case this.dialogDisp.mc_list.item1:
        case this.dialogDisp.mc_list.item2:
        case this.dialogDisp.mc_list.item3:
        case this.dialogDisp.mc_list.item4:
          var __s25local0 = __dep_exact_f855840627e6e145.int(__s25param0.target.resourceType);
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyResourceBoostDialog.CastleBuyResourceBoostDialog, new __dep_export_CastleBuyResourceBoostDialogProperties.CastleBuyResourceBoostDialogProperties(__s25local0));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.bg.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_buyResourceBoost"));
      }
    }
  };
  CastleResourceBoostDialog.prototype.getAvailableBoosters = function () {
    var __s29local0 = [];
    for (var __s29local1 = 0, __s29local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES; __s29local1 < __s29local2.length; __s29local1++) {
      var __s29local3 = __s29local2[__s29local1];
      var __s29local4 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(__s29local3);
      if (__s29local4 && __s29local4.isVisible) {
        __s29local0.push(__s29local4);
      }
    }
    return __s29local0;
  };
  CastleResourceBoostDialog.prototype.hideLoaded = function (__s34param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onBoosterDataUpdated));
    __s1param0.prototype.hideLoaded.call(this, __s34param0);
    if (this.scrollComponent) {
      this.scrollComponent.hide();
      this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  CastleResourceBoostDialog.NAME = "CastleRessourceBoostEx_T";
  CastleResourceBoostDialog.MAX_BOOSTERS = 5;
  CastleResourceBoostDialog.ITEM_OFFSET = 56;
  return CastleResourceBoostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResourceBoostDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStonewallBackgroundComponent = require("gge-module:export_CastleStonewallBackgroundComponent");
var __dep_export_CastleBuyResourceBoostDialog = require("gge-module:export_CastleBuyResourceBoostDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
