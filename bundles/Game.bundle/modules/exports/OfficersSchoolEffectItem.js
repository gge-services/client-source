Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SActivateTrainingProgramVO = require("gge-module:export_C2SActivateTrainingProgramVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernCostConfirmationDialogProperties = require("gge-module:export_ModernCostConfirmationDialogProperties");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function OfficersSchoolEffectItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolEffectItem, __s1param0);
  OfficersSchoolEffectItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.btn_ok, this.itemMc.btn_active, this.itemMc.btn_unlock, this.itemMc.mc_unit0.btn_info, this.itemMc.mc_unit1.btn_info], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  OfficersSchoolEffectItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_event);
    this.itemMc.mc_event.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.vo.eventID, new __s0local0(70, 70)));
    this.itemMc.mc_event.toolTipText = "event_title_" + this.vo.eventID;
    this.itemMc.mc_event.mouseChildren = false;
    for (var __s7local0 = 0; __s7local0 < 2; __s7local0++) {
      var __s7local1 = this.itemMc["mc_unit" + __s7local0];
      if (this.vo.wodIDs.length >= __s7local0 + 1) {
        __s7local1.visible = true;
        __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.vo.wodIDs[__s7local0]), __s7local1.mc_icon, 78, 78, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
        __s7local1.mc_icon.mouseChildren = false;
        __s7local1.mc_icon.toolTipText = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.vo.wodIDs[__s7local0]).getNameString();
      } else {
        __s7local1.visible = false;
      }
    }
    this.itemMc.btn_unlock.visible = !this.vo.isLockedAgainstRefresh;
    this.itemMc.btn_active.visible = this.vo.isLockedAgainstRefresh;
    this.itemMc.btn_unlock.toolTipText = "dialog_trainingProgram_lock_tooltip";
    this.itemMc.btn_unlock.toolTipText = "dialog_trainingProgram_lock_tooltip";
    this.itemMc.btn_ok.toolTipText = "dialog_trainingProgram_activate_tooltip";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_trainingProgram_effect_" + this.vo.effectVO.name, [this.vo.bonusVO.strength]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.vo.getCost().amount));
    this.addCollectableMc(this.itemMc.mc_cost.mc_icon);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_activateEffect_button")));
  };
  OfficersSchoolEffectItem.prototype.addCollectableMc = function (__s13param0) {
    var __s13local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s13local0.tooltip.useAmount = false;
    var __s13local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s13local1.addIconMc(__s13param0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s13local1, this.vo.getCost(), __s13local0);
  };
  Object.defineProperty(OfficersSchoolEffectItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolEffectItem.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.itemMc.btn_ok:
          this.onClickBuy();
          break;
        case this.itemMc.btn_unlock:
          this.sendLockItem();
          break;
        case this.itemMc.btn_active:
          this.sendUnlockItem();
          break;
        case this.itemMc.mc_unit0.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(this.vo.wodIDs[0]).unitVO));
          break;
        case this.itemMc.mc_unit1.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(this.vo.wodIDs[1]).unitVO));
      }
    }
  };
  OfficersSchoolEffectItem.prototype.onClickBuy = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.showDialog(__dep_export_ModernCostConfirmationDialog.ModernCostConfirmationDialog, new __dep_export_ModernCostConfirmationDialogProperties.ModernCostConfirmationDialogProperties("dialog_trainingProgram_activateProgram_header", __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_trainingProgram_activateProgram_desc", [this.vo.prolongDurationInHours]), this.vo.getCost(), this.bindFunction(this.onConfirmBuy)));
  };
  OfficersSchoolEffectItem.prototype.onConfirmBuy = function () {
    __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SActivateTrainingProgramVO.C2SActivateTrainingProgramVO(this.vo.slotID));
  };
  OfficersSchoolEffectItem.prototype.sendLockItem = function () {
    this.vo.isLockedAgainstRefresh = true;
    this.fill();
  };
  OfficersSchoolEffectItem.prototype.sendUnlockItem = function () {
    this.vo.isLockedAgainstRefresh = false;
    this.fill();
  };
  Object.defineProperty(OfficersSchoolEffectItem.prototype, "vo", {
    get: function () {
      return this.data.vo;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolEffectItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.OfficersSchoolEffectItem = __s0local1;
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_ModernCostConfirmationDialog = require("gge-module:export_ModernCostConfirmationDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
