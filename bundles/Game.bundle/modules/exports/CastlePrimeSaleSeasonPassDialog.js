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
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAbstractPrimeSaleDialog = require("gge-module:export_CastleAbstractPrimeSaleDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePrimeSaleSeasonPassDialog() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleSeasonPassDialog, __s1param0);
  CastlePrimeSaleSeasonPassDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSeasonPassPriceInfoEventVO.C2SGetSeasonPassPriceInfoEventVO());
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onUpdateInfo));
    var __s5local0 = this.getSaleEventVO();
    if (__s5local0) {
      this.onUpdateInfo();
      this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_header"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_primesale_kingdomsLeague_seasonPass_description"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [__s5local0.discount]));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_questInfo_showMe"));
      var __s5local1 = this.dialogDisp.mc_percentOff;
      __s5local1.visible = true;
      this.textFieldManager.registerTextField(__s5local1.txt_percentOff, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s5local0.discount]));
      var __s5local2 = new __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO();
      var __s5local3 = this.dialogDisp.mc_package_container.mc_package;
      this.dialogDisp.mc_package_container.visible = true;
      this.dialogDisp.mc_package_container.mc_quantity.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_package_container.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local2.getNameTextId())).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local3).addInfoBtn(__s5local3.parent.btn_info), new __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(80, 80)));
    }
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onUpdateInfo = function (__s8param0 = null) {
    var __s8local0 = this.getSaleEventVO();
    if (__s8local0) {
      var __s8local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
      var __s8local2 = __dep_exact_f855840627e6e145.int(__s8local1 / (1 - __s8local0.discount / 100));
      var __s8local3 = (__s8local1 - __s8local2) * -1;
      this.dialogDisp.mc_old_costs.mouseChildren = false;
      this.dialogDisp.mc_old_costs.toolTipText = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [__s8local0.discount]);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s8local2));
      this.dialogDisp.mc_costs.mouseChildren = false;
      this.dialogDisp.mc_costs.toolTipText = __dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s8local1));
      this.dialogDisp.mc_limited_offer.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateOffer_whaleChest_rubySave", [__s8local3]));
    }
  };
  CastlePrimeSaleSeasonPassDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onUpdateInfo));
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getSaleEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS);
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getRemainingTime = function () {
    var __s15local0 = this.getSaleEventVO();
    return __dep_exact_f855840627e6e145.int(__s15local0 ? __s15local0.remainingEventTimeInSeconds : 0);
  };
  CastlePrimeSaleSeasonPassDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getCharacterName = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SWEET_PRINCESS;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onOkButton = function () {
    this.hide();
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueBuyPassesDialog.SeasonLeagueBuyPassesDialog, new __dep_export_SeasonLeagueBuyPassesDialogProperties.SeasonLeagueBuyPassesDialogProperties());
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onRemoveSpecialEvent = function (__s25param0) {
    if (__s25param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS) {
      this.hide();
    }
  };
  CastlePrimeSaleSeasonPassDialog.NAME = "CastlePrimeSaleBoosterDialog";
  return CastlePrimeSaleSeasonPassDialog;
}(__dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleSeasonPassDialog = __s0local1;
var __dep_export_CollectableItemSeasonLeagueSeasonPassVO = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SeasonLeagueBuyPassesDialog = require("gge-module:export_SeasonLeagueBuyPassesDialog");
var __dep_export_SeasonLeagueBuyPassesDialogProperties = require("gge-module:export_SeasonLeagueBuyPassesDialogProperties");
var __dep_export_C2SGetSeasonPassPriceInfoEventVO = require("gge-module:export_C2SGetSeasonPassPriceInfoEventVO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
