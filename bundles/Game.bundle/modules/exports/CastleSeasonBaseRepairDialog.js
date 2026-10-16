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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleSeasonDonateRepairDialogProperties = require("gge-module:export_CastleSeasonDonateRepairDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSeasonBaseRepairDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 ?? CastleSeasonBaseRepairDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonBaseRepairDialog, __s1param0);
  CastleSeasonBaseRepairDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_premiumpayWoodC2, this.dialogDisp.btn_premiumpayStoneC2, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_pay]);
  };
  CastleSeasonBaseRepairDialog.prototype.getPictureClassName = function () {
    return "RepairBridgePicture";
  };
  CastleSeasonBaseRepairDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.bridgePictureHolder);
    var __s9local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.getPictureClassName(), __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getPictureClassName()), this.getClipColor(), 0, false);
    this.dialogDisp.bridgePictureHolder.addChild(__s9local0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_copy"));
    this.dialogDisp.cost_stone.icon_res.gotoAndStop(1);
    this.dialogDisp.cost_wood.icon_res.gotoAndStop(2);
    this.dialogDisp.cost_stone.icon_res.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.STONE;
    this.dialogDisp.cost_wood.icon_res.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.WOOD;
    this.dialogDisp.btn_pay.toolTipText = this.dialogProperties.dialogTextPrefix + "_payNormal";
    this.updatePayButtons();
  };
  CastleSeasonBaseRepairDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleSeasonBaseRepairDialog.prototype.onDataUpdated = function (__s13param0) {
    if (__s13param0.treasureMapVO) {
      if (__s13param0.treasureMapVO.mapID == this.dialogProperties.tMapNodeVO.mapID) {
        this.dialogProperties.tMapNodeVO = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(__s13param0.treasureMapVO.mapID).getNodeById(this.dialogProperties.tMapNodeVO.nodeID);
      }
      if (this.dialogProperties.tMapNodeVO.isDefeated) {
        this.hide();
      } else {
        this.updatePayButtons();
      }
    }
  };
  CastleSeasonBaseRepairDialog.prototype.updatePayButtons = function () {
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s19local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    var __s19local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s19local3 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    this.textFieldManager.registerTextField(this.dialogDisp.cost_wood.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19local2, __s19local0]));
    this.textFieldManager.registerTextField(this.dialogDisp.cost_stone.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19local3, __s19local1]));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_premiumpayWoodC2, this.dialogProperties.tMapNodeVO.costsWoodC2 > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_premiumpayStoneC2, this.dialogProperties.tMapNodeVO.costsStoneC2 > 0);
    this.dialogDisp.btn_premiumpayWoodC2.toolTipText = this.dialogDisp.btn_premiumpayWoodC2.enabled ? "dialog_BeggingKnights_tooltipp" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.tMapNodeVO.costsWoodC2) : null;
    this.dialogDisp.btn_premiumpayWoodC2.gotoAndStop(this.buttonFrame);
    this.dialogDisp.btn_premiumpayStoneC2.toolTipText = this.dialogDisp.btn_premiumpayStoneC2.enabled ? "dialog_BeggingKnights_tooltipp" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.tMapNodeVO.costsStoneC2) : null;
    this.dialogDisp.btn_premiumpayStoneC2.gotoAndStop(this.buttonFrame);
  };
  CastleSeasonBaseRepairDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleSeasonBaseRepairDialog.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      switch (__s23param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_pay:
          this.showDonateDialog();
          break;
        case this.dialogDisp.btn_premiumpayWoodC2:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, 1, 0, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
          break;
        case this.dialogDisp.btn_premiumpayStoneC2:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, 0, 1, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
      }
    }
  };
  CastleSeasonBaseRepairDialog.prototype.showDonateDialog = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleSeasonDonateRepairDialog.CastleSeasonDonateRepairDialog, new __dep_export_CastleSeasonDonateRepairDialogProperties.CastleSeasonDonateRepairDialogProperties(this.dialogProperties.tMapNodeVO, this.dialogProperties.dialogTextPrefix));
  };
  CastleSeasonBaseRepairDialog.prototype.getClipColor = function () {
    return null;
  };
  Object.defineProperty(CastleSeasonBaseRepairDialog.prototype, "buttonFrame", {
    get: function () {
      switch (this.dialogProperties.tMapNodeVO.eventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 8;
      }
      return 8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonBaseRepairDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonBaseRepairDialog.__initialize_static_members = function () {
    CastleSeasonBaseRepairDialog.ASSET_NAME = "CastleSeasonRepair";
  };
  return CastleSeasonBaseRepairDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSeasonBaseRepairDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleSeasonDonateRepairDialog = require("gge-module:export_CastleSeasonDonateRepairDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
