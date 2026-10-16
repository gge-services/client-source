Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleSlumDonateCharacterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSlumDonateCharacterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumDonateCharacterDialog, __s1param0);
  CastleSlumDonateCharacterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_donate]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_title"));
    this.dialogDisp.btn_donate.toolTipText = "dialog_season_payRessources_title";
    this.dialogDisp.icon_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.dialogDisp.icon_wood.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.WOOD;
    this.dialogDisp.icon_stone.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.STONE;
  };
  CastleSlumDonateCharacterDialog.prototype.updateResources = function (__s7param0 = null) {
    if (this.payedGoods) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_wood, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD), this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD)]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_stone, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE), this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE)]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1), this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1)]));
    } else {
      this.hide();
    }
  };
  CastleSlumDonateCharacterDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_donate:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSlumDonateDialog.CastleSlumDonateDialog);
    }
  };
  CastleSlumDonateCharacterDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_decoHolder);
    this.dialogDisp.mc_decoHolder.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleSlumDonateCharacterDialog.NAME + "_" + this.kingdomVO.kingdomName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleSlumDonateCharacterDialog.NAME + "_" + this.kingdomVO.kingdomName), null, 0, false).asDisplayObject());
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.updateResources));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onNewSlumLevel));
    switch (this.kingdomVO.kID) {
      case __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_copy_desert"));
        break;
      case __dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_copy_vulcan"));
        break;
      case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_copy_ice"));
    }
    this.updateResources();
  };
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "payedGoods", {
    get: function () {
      if (this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1)) {
        return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateCharacterDialog.prototype.hideLoaded = function (__s25param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s25param0);
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.updateResources));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onNewSlumLevel));
  };
  CastleSlumDonateCharacterDialog.prototype.onNewSlumLevel = function (__s27param0) {
    this.hide();
  };
  CastleSlumDonateCharacterDialog.__initialize_static_members = function () {
    CastleSlumDonateCharacterDialog.NAME = "CastleSlumDonateCharacter";
  };
  return CastleSlumDonateCharacterDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSlumDonateCharacterDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSlumDonateDialog = require("gge-module:export_CastleSlumDonateDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
