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
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapUnlockObstacleDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureMapUnlockObstacleDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapUnlockObstacleDialog, __s1param0);
  CastleTreasureMapUnlockObstacleDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_pay, this.dialogDisp.btn_premiumpayWoodC2, this.dialogDisp.btn_premiumpayStoneC2, this.dialogDisp.btn_premiumpayCoinC2]);
    this.dialogDisp.cost_stone.icon_res.gotoAndStop(1);
    this.dialogDisp.cost_wood.icon_res.gotoAndStop(2);
    this.dialogDisp.cost_coin.icon_res.gotoAndStop(3);
    this.dialogDisp.cost_stone.icon_res.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.STONE;
    this.dialogDisp.cost_wood.icon_res.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.WOOD;
    this.dialogDisp.cost_coin.icon_res.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.setTexts();
    this.updatePayButtons();
    this.setComponentsVisibility();
    this.setPreviewPicture();
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setPreviewPicture = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.pictureHolder);
    var __s9local0 = "Picture_" + this.pictureKingdomString + "_" + this.dialogProperties.tMapNodeVO.nodeType;
    var __s9local1 = __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.getMovieClipByClassName(__s9local0);
    this.dialogDisp.pictureHolder.addChild(__s9local1);
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setTexts = function () {
    var __s11local0 = this.hackedKingdomString;
    var __s11local1 = this.hackedObstacleType;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_repair" + __s11local0 + __s11local1 + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_repair" + __s11local0 + __s11local1 + "_copy"));
    var __s11local2 = this.dialogProperties.tMapNodeVO.isQuickSand ? "Swamp" : __s11local1;
    this.dialogDisp.btn_pay.toolTipText = "dialog_repair" + __s11local2 + "_payNormal";
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "hackedObstacleType", {
    get: function () {
      if (this.dialogProperties.tMapNodeVO.isQuickSand) {
        return "SAND";
      } else {
        return __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.dialogProperties.tMapNodeVO.nodeType, true);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.prototype.setComponentsVisibility = function () {
    this.dialogDisp.cost_stone.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.cost_wood.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.cost_coin.visible = !this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayWoodC2.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayStoneC2.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayCoinC2.visible = !this.dialogProperties.tMapNodeVO.isBridge;
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.updatePayButtons = function () {
    var __s19local0 = this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList;
    var __s19local1 = this.dialogProperties.tMapNodeVO.payedGoods;
    if (this.dialogProperties.tMapNodeVO.isBridge) {
      var __s19local2 = __dep_exact_f855840627e6e145.int(__s19local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s19local3 = __dep_exact_f855840627e6e145.int(__s19local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
      var __s19local4 = __dep_exact_f855840627e6e145.int(__s19local1.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s19local5 = __dep_exact_f855840627e6e145.int(__s19local1.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_wood.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19local4, __s19local2]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_stone.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19local5, __s19local3]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    } else {
      var __s19local6 = __dep_exact_f855840627e6e145.int(__s19local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
      var __s19local7 = __dep_exact_f855840627e6e145.int(__s19local1.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_coin.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19local7, __s19local6]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
    this.setC2PayButton(this.dialogDisp.btn_premiumpayWoodC2, this.dialogProperties.tMapNodeVO.costsWoodC2);
    this.setC2PayButton(this.dialogDisp.btn_premiumpayStoneC2, this.dialogProperties.tMapNodeVO.costsStoneC2);
    this.setC2PayButton(this.dialogDisp.btn_premiumpayCoinC2, this.dialogProperties.tMapNodeVO.costsC1C2);
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setC2PayButton = function (__s23param0, __s23param1) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s23param0, __s23param1 > 0);
    if (this.dialogProperties.tMapNodeVO.isSwamp || this.dialogProperties.tMapNodeVO.isQuickSand) {
      __s23param0.toolTipText = __s23param0.basicButton.enabled ? {
        t: "dialog_repairSwamp_repairByPremium_tooltip",
        p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s23param1)]
      } : null;
    } else {
      __s23param0.toolTipText = __s23param0.basicButton.enabled ? {
        t: "dialog_BeggingKnights_tooltipp",
        p: [__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s23param1)]
      } : null;
    }
    __s23param0.gotoAndStop(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "hackedKingdomString", {
    get: function () {
      if (this.dialogProperties.tMapNodeVO.isBridge) {
        return "";
      }
      var __s27local0 = "";
      switch (__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
        case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
          __s27local0 = "Ice_";
          break;
        default:
          __s27local0 = "";
      }
      return __s27local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "pictureKingdomString", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID).kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.onDataUpdated = function (__s37param0) {
    if (__s37param0.treasureMapVO) {
      if (__s37param0.treasureMapVO.mapID == this.dialogProperties.tMapNodeVO.mapID) {
        this.dialogProperties.tMapNodeVO = __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.getNodeById(this.dialogProperties.tMapNodeVO.nodeID);
      }
      if (this.dialogProperties.tMapNodeVO.isDefeated) {
        this.hide();
      } else {
        this.updatePayButtons();
      }
    }
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    switch (__s43param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_pay:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureMapDonateDialog.CastleTreasureMapDonateDialog, this.dialogProperties);
        break;
      case this.dialogDisp.btn_premiumpayWoodC2:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, 1, 0, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
        break;
      case this.dialogDisp.btn_premiumpayStoneC2:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, 0, 1, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
        break;
      case this.dialogDisp.btn_premiumpayCoinC2:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, 0, 0, 0, 1, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
    }
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.__initialize_static_members = function () {
    CastleTreasureMapUnlockObstacleDialog.NAME = "CastleTreasureMapUnlock";
  };
  return CastleTreasureMapUnlockObstacleDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTreasureMapUnlockObstacleDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleTreasureMapDonateDialog = require("gge-module:export_CastleTreasureMapDonateDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
