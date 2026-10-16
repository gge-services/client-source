Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = function (__s1param0) {
  function AttackDialogLordSelectionItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogLordSelectionItem, __s1param0);
  AttackDialogLordSelectionItem.prototype.initLoaded = function () {
    this._onClickSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.getItemMc().mc_lordHolder);
    this._clickFeedBack = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.getItemMc());
  };
  AttackDialogLordSelectionItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    if (!this._itxt_name || this._itxt_name && !this._itxt_name.textContentVO) {
      this._itxt_name = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    this._lordVO = this.data;
    this.updateLord();
    this._itxt_name.textContentVO.stringValue = this._lordVO.label;
    this.getItemMc().icon_rubies.visible = this._lordVO.id == __dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM;
    this.getItemMc().bgNumber.visible = this._lordVO.id == __dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM;
    this.setSelected(__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord.id == this.lordVO.id);
  };
  AttackDialogLordSelectionItem.prototype.updateLord = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.getItemMc().mc_lordHolder);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this._lordVO, this.getItemMc().mc_lordHolder, 58, -1, null, false);
    try {
      this._lordTooltipTrigger.setProperties(this._lordVO, this.attackVO.sourceArea, this.attackVO.targetArea, this._lordVO.isBaron ? __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVP : __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackVO.targetArea.ownerInfo.playerID, true));
    } catch (__s13local0) {
      if (!this.attackVO.targetArea.ownerInfo) {
        __dep_export_AttackDialogController.AttackDialogController.getInstance().hideDialog.dispatch();
        return;
      }
      throw new Error(__s13local0);
    }
    this.getItemMc().mc_lordHolder.doCache();
  };
  AttackDialogLordSelectionItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._lordTooltipTrigger.show();
    this._clickFeedBack.addEventListener();
  };
  AttackDialogLordSelectionItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._lordTooltipTrigger.hide();
    this._clickFeedBack.removeEventListener();
    this.onClickSignal.removeAll();
    this._lordVO = null;
  };
  AttackDialogLordSelectionItem.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    this.onClickSignal.dispatch(this.lordVO);
  };
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "onClickSignal", {
    get: function () {
      return this._onClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogLordSelectionItem.prototype.onEquipOrRename = function (__s24param0) {
    this.updateLord();
  };
  AttackDialogLordSelectionItem.prototype.setSelected = function (__s26param0) {
    this.getItemMc().mc_selected.visible = __s26param0;
  };
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "attackVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogLordSelectionItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AttackDialogLordSelectionItem = __s0local0;
