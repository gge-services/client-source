Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleDungeonTreasureChestDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleDungeonTreasureChestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDungeonTreasureChestDialog, __s1param0);
  CastleDungeonTreasureChestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_ok.toolTipText = __dep_exact_9e901e8e2483a22f.GenericTextIds.BUTTON_ACCEPT;
    this.dialogDisp.btn_close.toolTipText = __dep_exact_9e901e8e2483a22f.GenericTextIds.BUTTON_CLOSE;
  };
  CastleDungeonTreasureChestDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateRewards();
    this.setPayment();
    this.setRemainingTime();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferDungeonTreasure_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferDungeonTreasure_copy"));
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "dialog_specialOfferDungeonTreasure_payRubiesToOpen";
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
  };
  CastleDungeonTreasureChestDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
  };
  CastleDungeonTreasureChestDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleDungeonTreasureChestDialog.prototype.updateRewards = function () {
    var __s14local0;
    var __s14local1 = this.offerVO.getTotalRewardListFromOfferVO();
    this.destroyCollectableRenderList();
    var __s14local2 = CastleDungeonTreasureChestDialog.REWARD_START_X;
    for (var __s14local3 = 0; __s14local3 < __s14local1.length && __s14local3 < 13; ++__s14local3) {
      __s14local0 = __s14local1.getItemByIndex(__s14local3);
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s14local0, "ACollectableItemEquipmentVO")) {
        this.addEquipmentItem(__s14local0, __s14local2);
      } else {
        this.addRewardItem(__s14local0, __s14local2);
      }
      __s14local2 += CastleDungeonTreasureChestDialog.REWARD_ITEM_DIST;
    }
  };
  CastleDungeonTreasureChestDialog.prototype.addRewardItem = function (__s20param0, __s20param1) {
    var __s20local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("StandardRewardItem"))();
    this.dialogDisp.addChild(__s20local0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s20local0), __s20param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED));
    __s20local0.x = __s20param1;
    __s20local0.y = CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestDialog.prototype.addEquipmentItem = function (__s22param0, __s22param1) {
    var __s22local0 = new __s0local0();
    this.dialogDisp.addChild(__s22local0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s22local0).addIconMc(__s22local0), __s22param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local1(50, 50)));
    __s22local0.x = __s22param1;
    __s22local0.y = CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestDialog.prototype.setPayment = function () {
    var __s24local0 = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s24local0));
  };
  CastleDungeonTreasureChestDialog.prototype.setRemainingTime = function (__s26param0 = null) {
    var __s26local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.remainingSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, __s26local0);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s26local0);
  };
  Object.defineProperty(CastleDungeonTreasureChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDungeonTreasureChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDungeonTreasureChestDialog.__initialize_static_members = function () {
    CastleDungeonTreasureChestDialog.REWARD_ITEM_DIST = 75;
    CastleDungeonTreasureChestDialog.NAME = "CastleDungeonTreasureChestExternal";
  };
  CastleDungeonTreasureChestDialog.REWARD_START_X = -160;
  CastleDungeonTreasureChestDialog.REWARD_ITEM_YPOS = -82;
  return CastleDungeonTreasureChestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDungeonTreasureChestDialog = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
