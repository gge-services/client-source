Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_AdvisorAttackOverviewCancelDialog = require("gge-module:export_AdvisorAttackOverviewCancelDialog");
var __dep_export_AdvisorAttackOverviewCancelDialogProperties = require("gge-module:export_AdvisorAttackOverviewCancelDialogProperties");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackOverviewScrollItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewScrollItem, __s1param0);
  AdvisorAttackOverviewScrollItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc().btn_retreat], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._itxt_remainingTime = __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_progress.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.getItemMc().mc_commander);
  };
  AdvisorAttackOverviewScrollItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.show();
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.fill = function () {
    if (this.vo) {
      this.onTimerUpdate();
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.vo.movementVO.lordVO, this.getItemMc().mc_commander, 30);
      var __s13local0 = __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK;
      this._lordTooltipTrigger.setProperties(this.vo.movementVO.lordVO, null, this.vo.movementVO.targetArea, __s13local0);
      this.getItemMc().mc_arrowDirection.gotoAndStop(this.vo.movementVO.isReturnHome ? 2 : 1);
      this.getItemMc().btn_retreat.visible = this.vo.movementVO.canBeRetreated;
      this.getItemMc().icon_cancelled.visible = this.vo.movementVO.advisorIsLastAttack && this.vo.movementVO.isReturnHome;
      this.getItemMc().mc_kingdom.gotoAndStop(this.vo.movementVO.kingdomID + 1);
      var __s13local1 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this.vo.movementVO.lordVO.id).playerIndex;
      __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_commanderIndex, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__s13local1, "."]));
      __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.vo.movementVO.advisorMovementNumber, this.vo.movementVO.advisorMovementCount]));
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.onTimerUpdate = function (__s16param0 = null) {
    if (this.vo) {
      var __s16local0 = this.vo.movementVO.currentEndTimeInSeconds();
      this._itxt_remainingTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s16local0);
      this.getItemMc().mc_progress.progressbar.scaleX = __dep_exact_9e901e8e2483a22f_2.MathBase.clamp(this.vo.movementVO.currentProgress, 0, 1);
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.getItemMc().btn_retreat:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewCancelDialog.AdvisorAttackOverviewCancelDialog, new __dep_export_AdvisorAttackOverviewCancelDialogProperties.AdvisorAttackOverviewCancelDialogProperties([this.vo.movementVO]));
        break;
      default:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this.vo.movementVO);
    }
  };
  Object.defineProperty(AdvisorAttackOverviewScrollItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackOverviewScrollItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AdvisorAttackOverviewScrollItem = __s0local0;
