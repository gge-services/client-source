Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_FilterAll = require("gge-module:export_FilterAll");
var __s0local0 = function (__s1param0) {
  function CastleMovementOverviewDialog() {
    return __s1param0.call(this, CastleMovementOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMovementOverviewDialog, __s1param0);
  CastleMovementOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_movementAll, this.dialogDisp.btn_movementOwn, this.dialogDisp.btn_movementAttack, this.dialogDisp.btn_movementSpy, this.dialogDisp.btn_movementAllianceOutgoing, this.dialogDisp.btn_movementAllianceIncoming, this.dialogDisp.btn_movementTrade]);
    this.initBasicButtons([this.dialogDisp.bg.btn_help, this.dialogDisp.btn_close, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down]);
    this.initGenerals();
    this.stonewallBg ||= new __dep_export_CastleStonewallBackgroundComponent.CastleStonewallBackgroundComponent(this.dialogDisp.bg);
    this.stonewallBg.setTitleByTextId("dialog_moveOverview_title");
    this.initTooltips();
    this.initScroller();
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleMovementOverviewDialog.prototype.initGenerals = function () {
    this.fieldKnight = this.textFieldManager.registerTextField(this.dialogDisp.infoKnights.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.fieldBaron = this.textFieldManager.registerTextField(this.dialogDisp.infoBarons.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
  };
  CastleMovementOverviewDialog.prototype.initTooltips = function () {
    this.dialogDisp.btn_movementAll.toolTipText = "dialog_castleListOverview_all";
    this.dialogDisp.btn_movementOwn.toolTipText = "dialog_moveOverview_catOwn";
    this.dialogDisp.btn_movementAttack.toolTipText = "dialog_moveOverview_catAttack";
    this.dialogDisp.btn_movementSpy.toolTipText = "dialog_moveOverview_catSpy";
    this.dialogDisp.btn_movementAllianceIncoming.toolTipText = "dialog_moveOverview_catIncomingAlliance";
    this.dialogDisp.btn_movementAllianceOutgoing.toolTipText = "dialog_moveOverview_catOutgoingAlliance";
    this.dialogDisp.btn_movementTrade.toolTipText = "dialog_moveOverview_catTrade";
    this.dialogDisp.bg.btn_help.toolTipText = "generic_help";
    this.dialogDisp.infoBarons.toolTipText = "dialog_recuit_reeves";
    this.dialogDisp.infoKnights.toolTipText = "dialog_recuit_generals";
  };
  CastleMovementOverviewDialog.prototype.initFilterButtons = function () {
    var __s11local0 = this._currentFilter.name;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAll, __s11local0 == __dep_export_FilterAll.FilterAll.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementOwn, __s11local0 == __dep_export_FilterOwn.FilterOwn.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAttack, __s11local0 == __dep_export_FilterAttack.FilterAttack.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementSpy, __s11local0 == __dep_export_FilterSpy.FilterSpy.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAllianceIncoming, __s11local0 == __dep_export_FilterAllianceIncoming.FilterAllianceIncoming.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementAllianceOutgoing, __s11local0 == __dep_export_FilterAllianceOutgoing.FilterAllianceOutgoing.NAME);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_movementTrade, __s11local0 == __dep_export_FilterTrade.FilterTrade.NAME);
  };
  CastleMovementOverviewDialog.prototype.applyPropertiesLoaded = function (__s13param0 = null) {
    this.initFilter();
    this.updateGenerals();
    this.initEventListener();
    this.layoutManager.hideAllIngameUIComponents();
    this.stonewallBg.update();
  };
  CastleMovementOverviewDialog.prototype.updateGenerals = function () {
    this.fieldKnight.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.lordData.numAvailableCommanders, __dep_export_CastleModel.CastleModel.lordData.numAllCommanders];
    this.fieldBaron.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.lordData.numAvailableBarons, __dep_export_CastleModel.CastleModel.lordData.numAllBarons];
  };
  CastleMovementOverviewDialog.prototype.initFilter = function () {
    this.movementOverviewDialogProperties.selectedCategory ||= __dep_export_FilterAll.FilterAll.NAME;
    this.setFilter(this.movementOverviewDialogProperties.selectedCategory);
  };
  CastleMovementOverviewDialog.prototype.setFilter = function (__s19param0) {
    this._currentFilter = CastleMovementOverviewDialog.FILTER_STRATEGIES.get(__s19param0);
    this.initFilterButtons();
    this.updateScroller(0);
  };
  CastleMovementOverviewDialog.prototype.changeFilter = function (__s21param0) {
    if (__s21param0 != this._currentFilter.name) {
      this.setFilter(__s21param0);
    }
  };
  CastleMovementOverviewDialog.prototype.initScroller = function () {
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._itemScrollList.scrollItemClass = __dep_export_CastleMovementItem.CastleMovementItem;
    this._itemScrollList.scrollStep = 3;
  };
  CastleMovementOverviewDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerIntervalSecond));
  };
  CastleMovementOverviewDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerIntervalSecond));
  };
  CastleMovementOverviewDialog.prototype.onTimerIntervalSecond = function (__s30param0) {
    for (var __s30local0 = 0, __s30local1 = this._currentFilter.getFilteredList(); __s30local0 < __s30local1.length; __s30local0++) {
      if (!__s30local1[__s30local0].movement.shouldBeShown()) {
        this.updateScroller();
        return;
      }
    }
    this._itemScrollList.resetItems();
  };
  CastleMovementOverviewDialog.prototype.updateScroller = function (__s35param0 = -1) {
    this._itemScrollList.clear();
    for (var __s35local0 = 0, __s35local1 = this._currentFilter.getFilteredList(); __s35local0 < __s35local1.length; __s35local0++) {
      var __s35local2 = __s35local1[__s35local0];
      this._itemScrollList.pushContent(__s35local2);
    }
    this._itemScrollList.initList(__s35param0 == -1 ? this._itemScrollList.currentStartIndex : __s35param0);
  };
  CastleMovementOverviewDialog.prototype.updateMovements = function () {
    this.updateScroller();
    this.updateGenerals();
  };
  CastleMovementOverviewDialog.prototype.initEventListener = function () {
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMovement));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  CastleMovementOverviewDialog.prototype.removeEventListeners = function () {
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onRemoveMovement));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  CastleMovementOverviewDialog.prototype.onRemoveSpecialEvent = function (__s45param0) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onRefreshSpecialEvent = function (__s47param0) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onRemoveMovement = function (__s49param0) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onNewMovement = function (__s51param0) {
    this.updateMovements();
  };
  CastleMovementOverviewDialog.prototype.onClick = function (__s53param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      __s1param0.prototype.onClick.call(this, __s53param0);
      switch (__s53param0.target) {
        case this.dialogDisp.bg.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_movementOverview"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_movementAll:
          this.changeFilter(__dep_export_FilterAll.FilterAll.NAME);
          break;
        case this.dialogDisp.btn_movementOwn:
          this.changeFilter(__dep_export_FilterOwn.FilterOwn.NAME);
          break;
        case this.dialogDisp.btn_movementAttack:
          this.changeFilter(__dep_export_FilterAttack.FilterAttack.NAME);
          break;
        case this.dialogDisp.btn_movementSpy:
          this.changeFilter(__dep_export_FilterSpy.FilterSpy.NAME);
          break;
        case this.dialogDisp.btn_movementAllianceOutgoing:
          this.changeFilter(__dep_export_FilterAllianceOutgoing.FilterAllianceOutgoing.NAME);
          break;
        case this.dialogDisp.btn_movementAllianceIncoming:
          this.changeFilter(__dep_export_FilterAllianceIncoming.FilterAllianceIncoming.NAME);
          break;
        case this.dialogDisp.btn_movementTrade:
          this.changeFilter(__dep_export_FilterTrade.FilterTrade.NAME);
      }
    }
  };
  CastleMovementOverviewDialog.prototype.hideLoaded = function (__s57param0 = null) {
    this.removeEventListeners();
    this._itemScrollList.clear();
    __s1param0.prototype.hideLoaded.call(this, __s57param0);
  };
  Object.defineProperty(CastleMovementOverviewDialog.prototype, "movementOverviewDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementOverviewDialog.__initialize_static_members = function () {
    var __s61local0;
    (__s61local0 = new Map()).set(__dep_export_FilterAll.FilterAll.NAME, new __dep_export_FilterAll.FilterAll());
    __s61local0.set(__dep_export_FilterOwn.FilterOwn.NAME, new __dep_export_FilterOwn.FilterOwn());
    __s61local0.set(__dep_export_FilterSpy.FilterSpy.NAME, new __dep_export_FilterSpy.FilterSpy());
    __s61local0.set(__dep_export_FilterAllianceOutgoing.FilterAllianceOutgoing.NAME, new __dep_export_FilterAllianceOutgoing.FilterAllianceOutgoing());
    __s61local0.set(__dep_export_FilterAllianceIncoming.FilterAllianceIncoming.NAME, new __dep_export_FilterAllianceIncoming.FilterAllianceIncoming());
    __s61local0.set(__dep_export_FilterAttack.FilterAttack.NAME, new __dep_export_FilterAttack.FilterAttack());
    __s61local0.set(__dep_export_FilterTrade.FilterTrade.NAME, new __dep_export_FilterTrade.FilterTrade());
    CastleMovementOverviewDialog.FILTER_STRATEGIES = __s61local0;
  };
  CastleMovementOverviewDialog.NAME = "CastleMovementOverviewEx_APR25";
  return CastleMovementOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMovementOverviewDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStonewallBackgroundComponent = require("gge-module:export_CastleStonewallBackgroundComponent");
var __dep_export_CastleMovementItem = require("gge-module:export_CastleMovementItem");
var __dep_export_FilterAllianceIncoming = require("gge-module:export_FilterAllianceIncoming");
var __dep_export_FilterAllianceOutgoing = require("gge-module:export_FilterAllianceOutgoing");
var __dep_export_FilterAttack = require("gge-module:export_FilterAttack");
var __dep_export_FilterOwn = require("gge-module:export_FilterOwn");
var __dep_export_FilterSpy = require("gge-module:export_FilterSpy");
var __dep_export_FilterTrade = require("gge-module:export_FilterTrade");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
