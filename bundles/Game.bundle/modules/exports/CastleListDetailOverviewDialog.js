Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetAquaPoints = require("gge-module:export_C2SGetAquaPoints");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewDialog() {
    return __s1param0.call(this, CastleListDetailOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewDialog, __s1param0);
  CastleListDetailOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.tickEnabled = false;
    this._subLayer = new Map();
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_ECONOMY, new __dep_export_CastleListDetailOverviewSublayerEconomy.CastleListDetailOverviewSublayerEconomy(this.dialogDisp.mc_sublayer_economy));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_MILITARY, new __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary(this.dialogDisp.mc_sublayer_military));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_MISC, new __dep_export_CastleListDetailOverviewSublayerMisc.CastleListDetailOverviewSublayerMisc(this.dialogDisp.mc_sublayer_misc));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_CURRENCY, new __dep_export_CastleListDetailOverviewSublayerCurrency.CastleListDetailOverviewSublayerCurrency(this.dialogDisp.mc_sublayer_currency));
    this.dialogDisp.tab_economy.toolTipText = "dialog_listOverview_tabResource_tt";
    this.dialogDisp.tab_military.toolTipText = "dialog_listOverview_tabMlitary_tt";
    this.dialogDisp.tab_misc.toolTipText = "dialog_listOverview_tabMisc_tt";
    this.dialogDisp.tab_currency.toolTipText = "dialog_listOverview_tabCurrency_tt";
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.tab_economy, this.dialogDisp.tab_military, this.dialogDisp.tab_misc, this.dialogDisp.tab_currency]);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_listOverview_title"));
  };
  CastleListDetailOverviewDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_KINGSTOWERLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_MONUMENTLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_VILLAGELIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.lockDialog();
    this.getData();
  };
  CastleListDetailOverviewDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_KINGSTOWERLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_MONUMENTLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_VILLAGELIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleListDetailOverviewDialog.prototype.onDataUpdated = function (__s11param0 = null) {
    this.unLockDialog();
    if (this._currentSublayer) {
      if (this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
        this.showSublayer(this._currentSublayer, [false]);
      }
    } else {
      this.changeCategory(CastleListDetailOverviewDialog.CAT_ECONOMY);
    }
  };
  CastleListDetailOverviewDialog.prototype.onChangeRessources = function (__s16param0) {
    if (!this.isLocked && this._currentSublayer && this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.showSublayer(this._currentSublayer, [false]);
    }
  };
  CastleListDetailOverviewDialog.prototype.onNewMovement = function (__s19param0) {
    if (__s19param0.mapmovementVO.movementOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID && this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.getData();
    }
  };
  CastleListDetailOverviewDialog.prototype.onSpecialCurrencyChange = function (__s22param0) {
    if (!this.isLocked && this._currentSublayer && this._currentSublayer == this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.showSublayer(this._currentSublayer, [false]);
    }
  };
  CastleListDetailOverviewDialog.prototype.getData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAquaPoints.C2SGetAquaPoints());
    }
  };
  CastleListDetailOverviewDialog.prototype.onClick = function (__s28param0) {
    switch (__s28param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.tab_economy:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_ECONOMY);
        break;
      case this.dialogDisp.tab_military:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_MILITARY);
        break;
      case this.dialogDisp.tab_misc:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_MISC);
        break;
      case this.dialogDisp.tab_currency:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_CURRENCY);
    }
  };
  CastleListDetailOverviewDialog.prototype.changeCategory = function (__s31param0) {
    if (!this.isLocked) {
      if (this._currentCategory == __s31param0) {
        return;
      }
      __s1param0.prototype.changeCategory.call(this, __s31param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [true]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.tab_economy, this._currentCategory == CastleListDetailOverviewDialog.CAT_ECONOMY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.tab_military, this._currentCategory == CastleListDetailOverviewDialog.CAT_MILITARY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.tab_misc, this._currentCategory == CastleListDetailOverviewDialog.CAT_MISC);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.tab_currency, this._currentCategory == CastleListDetailOverviewDialog.CAT_CURRENCY);
    }
  };
  CastleListDetailOverviewDialog.NAME = "CastleListDetailOverview2";
  CastleListDetailOverviewDialog.CAT_ECONOMY = "CAT_ECONOMY";
  CastleListDetailOverviewDialog.CAT_MILITARY = "CAT_MILITARY";
  CastleListDetailOverviewDialog.CAT_MISC = "CAT_MISC";
  CastleListDetailOverviewDialog.CAT_CURRENCY = "CAT_CURRENCY";
  return CastleListDetailOverviewDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleListDetailOverviewDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleListDetailOverviewSublayerCurrency = require("gge-module:export_CastleListDetailOverviewSublayerCurrency");
var __dep_export_CastleListDetailOverviewSublayerEconomy = require("gge-module:export_CastleListDetailOverviewSublayerEconomy");
var __dep_export_CastleListDetailOverviewSublayerMilitary = require("gge-module:export_CastleListDetailOverviewSublayerMilitary");
var __dep_export_CastleListDetailOverviewSublayerMisc = require("gge-module:export_CastleListDetailOverviewSublayerMisc");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
