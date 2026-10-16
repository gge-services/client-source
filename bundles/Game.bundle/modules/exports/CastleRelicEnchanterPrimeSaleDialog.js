Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_RelicUpgradeDialog = require("gge-module:export_RelicUpgradeDialog");
var __s0local0 = function (__s1param0) {
  function CastleRelicEnchanterPrimeSaleDialog() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRelicEnchanterPrimeSaleDialog, __s1param0);
  CastleRelicEnchanterPrimeSaleDialog.prototype.getCharacterName = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_RELIC_ENCHANTER_PRIME_SALE;
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.setupView();
    this.setTexts();
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.onRemoveEvent = function (__s9param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0.specialEventVO, "EquipmentEnhancerEventVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0.specialEventVO, "EquipmentEnhancerPrimeSaleEventVO")) {
      this.hide();
    }
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_premiumUpgrade")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("showMe"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_booster_container.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_stamp_offer.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.eventVO.discount * -1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_upgradeInfo"));
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.setupView = function () {
    this.dialogDisp.mc_booster_container.visible = true;
    this.dialogDisp.mc_booster_container.relicus_icon.visible = true;
    this.dialogDisp.mc_stamp_offer.visible = true;
    this.dialogDisp.mc_booster_container.mc_bottom_rewards.visible = false;
    this.dialogDisp.mc_booster_container.oval_gold_detail.visible = false;
    this.dialogDisp.mc_percentOff.visible = false;
    this.dialogDisp.mc_limited_offer.gotoAndStop(2);
    this.setButtonCentered(true);
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleRelicEnchanterPrimeSaleDialog.prototype, "eventVO", {
    get: function () {
      return this.properties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelicEnchanterPrimeSaleDialog.prototype.onOkButton = function () {
    if (__dep_export_CastleModel.CastleModel.equipData.hasRelicEnchanter) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_RelicUpgradeDialog.RelicUpgradeDialog);
    } else {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.GOTO_MAIN_CASTLE_UNIQUE_BUILDING, [__dep_export_IsoObjectEnum.IsoObjectEnum.RELIC_ENCHANTER]);
    }
    this.hide();
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.hideLoaded = function (__s24param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleRelicEnchanterPrimeSaleDialog.NAME = "CastleEquipmentEnhancerPrimeSaleDialog";
  return CastleRelicEnchanterPrimeSaleDialog;
}(require("gge-module:export_CastleAbstractPrimeSaleDialog").CastleAbstractPrimeSaleDialog);
exports.CastleRelicEnchanterPrimeSaleDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
