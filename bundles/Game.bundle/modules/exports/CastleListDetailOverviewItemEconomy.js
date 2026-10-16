Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SMarketInfoVO = require("gge-module:export_C2SMarketInfoVO");
var __dep_export_CastleTradeDataEvent = require("gge-module:export_CastleTradeDataEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_CastleSendGoodsDialogProperties = require("gge-module:export_CastleSendGoodsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewItemEconomy(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.offset = 0;
    __s3local0.itxt_wood = __s3local0.textFieldManager.registerTextField(__s3param0.txt_wood, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_woodProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_woodProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_stone = __s3local0.textFieldManager.registerTextField(__s3param0.txt_stone, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_stoneProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_stoneProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_food = __s3local0.textFieldManager.registerTextField(__s3param0.txt_food, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_foodProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_foodProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_coal = __s3local0.textFieldManager.registerTextField(__s3param0.txt_coal, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_coalProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_coalProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_oil = __s3local0.textFieldManager.registerTextField(__s3param0.txt_oil, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_oilProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_oilProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_glass = __s3local0.textFieldManager.registerTextField(__s3param0.txt_glass, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_glassProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_glassProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_iron = __s3local0.textFieldManager.registerTextField(__s3param0.txt_iron, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_ironProd = __s3local0.textFieldManager.registerTextField(__s3param0.txt_ironProd, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_storageCapacity = __s3local0.textFieldManager.registerTextField(__s3param0.mc_storageCapacity.txt_storageCapacity, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    __s3local0.itxt_productivity = __s3local0.textFieldManager.registerTextField(__s3param0.mc_productivity.txt_productivity, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    __s3param0.icon_storage.toolTipText = "dialog_listOverview_tabResourceCurrentlyStored_tt";
    __s3param0.icon_productionPerHour.toolTipText = "dialog_listOverview_tabResourceProduction_tt";
    __s3param0.mc_storageCapacity.toolTipText = "dialog_listOverview_tabResourceStoragen_tt";
    __s3param0.mc_productivity.toolTipText = "dialog_listOverview_tabResourceProductivity_tt";
    __s3param0.mc_storageCapacity.mouseChildren = false;
    __s3param0.mc_productivity.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_visitCastle, __s3param0.btn_trade]);
    __s3param0.btn_trade.toolTipText = "dialog_monument_sendResources_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewItemEconomy, __s1param0);
  CastleListDetailOverviewItemEconomy.prototype.setOffSet = function (__s5param0) {
    this.offset = __s5param0;
    this.customFillItem();
  };
  CastleListDetailOverviewItemEconomy.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    var __s7local0 = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_CollectableEnum.CollectableEnum.IRON, __dep_export_CollectableEnum.CollectableEnum.HONEY, __dep_export_CollectableEnum.CollectableEnum.MEAD, __dep_export_CollectableEnum.CollectableEnum.BEEF];
    var __s7local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    this.setResourceText(this.itxt_wood, __s7local1, __s7local0[this.offset], false);
    this.setResourceText(this.itxt_woodProd, __s7local1, __s7local0[this.offset], true);
    this.setResourceText(this.itxt_stone, __s7local1, __s7local0[1 + this.offset], false);
    this.setResourceText(this.itxt_stoneProd, __s7local1, __s7local0[1 + this.offset], true);
    this.setResourceText(this.itxt_food, __s7local1, __s7local0[2 + this.offset], false);
    this.setResourceText(this.itxt_foodProd, __s7local1, __s7local0[2 + this.offset], true);
    this.setResourceText(this.itxt_coal, __s7local1, __s7local0[3 + this.offset], false);
    this.setResourceText(this.itxt_coalProd, __s7local1, __s7local0[3 + this.offset], true);
    this.setResourceText(this.itxt_oil, __s7local1, __s7local0[4 + this.offset], false);
    this.setResourceText(this.itxt_oilProd, __s7local1, __s7local0[4 + this.offset], true);
    this.setResourceText(this.itxt_glass, __s7local1, __s7local0[5 + this.offset], false);
    this.setResourceText(this.itxt_glassProd, __s7local1, __s7local0[5 + this.offset], true);
    this.setResourceText(this.itxt_iron, __s7local1, __s7local0[6 + this.offset], false);
    this.setResourceText(this.itxt_ironProd, __s7local1, __s7local0[6 + this.offset], true);
    if (__s7local1) {
      this.disp.mc_storageCapacity.visible = true;
      this.disp.mc_productivity.visible = true;
      var __s7local2 = __s7local1.maxResourceStorageAmount;
      this.itxt_storageCapacity.textContentVO = new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s7local2, {
        compactThreshold: 1000000,
        compactFractionalDigits: 0
      }, 0);
      var __s7local3 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST, -1, this.wmo.areaType, this.wmo.spaceID).strength;
      var __s7local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.wmo.areaType, this.wmo.spaceID).strength);
      var __s7local5 = __dep_exact_26a421b704832cff_1.LawAndOrderConst.calculateLawAndOrderFactorWithEffect(__s7local1.neutralDeco + __s7local4, __s7local1.sickness, __s7local1.riot, __dep_exact_26a421b704832cff.EffectConst.boostToModifier(__s7local3));
      this.itxt_productivity.textContentVO.textReplacements = [Math.round(__s7local5 * 100)];
    } else {
      this.disp.mc_storageCapacity.visible = false;
      this.disp.mc_productivity.visible = false;
    }
    this.disp.btn_trade.visible = this.isTradeable;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_trade, this.canTrade);
  };
  CastleListDetailOverviewItemEconomy.prototype.setResourceText = function (__s11param0, __s11param1, __s11param2, __s11param3) {
    if (this.isResourceUnlocked(__s11param2)) {
      if (__s11param1) {
        var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param3 ? __s11param1.getEffectiveResourceProduction(__s11param2) : __s11param1.getResource(__s11param2));
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0.textContentVO, "CastleLocalizedNumberVO")) {
          __s11param0.textContentVO.numberValue = __s11local0;
        } else {
          __s11param0.textContentVO = new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s11local0, {
            compactThreshold: 1000000,
            compactFractionalDigits: 0
          }, 0);
        }
      } else {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s11param0, "-");
      }
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s11param0, "");
    }
    if (!__dep_export_CastleModel.CastleModel.userData.foodFrozen || __s11param2 != __dep_export_CollectableEnum.CollectableEnum.FOOD && __s11param2 != __dep_export_CollectableEnum.CollectableEnum.MEAD && __s11param2 != __dep_export_CollectableEnum.CollectableEnum.BEEF) {
      __s11param0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      __s11param0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    }
  };
  CastleListDetailOverviewItemEconomy.prototype.isResourceUnlocked = function (__s21param0) {
    var __s21local0 = __dep_export_CastleModel.CastleModel.userData.isLegend;
    switch (__s21param0) {
      case __dep_export_CollectableEnum.CollectableEnum.COAL:
        return __s21local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID);
      case __dep_export_CollectableEnum.CollectableEnum.OIL:
        return __s21local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID);
      case __dep_export_CollectableEnum.CollectableEnum.GLASS:
        return __s21local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID);
      case __dep_export_CollectableEnum.CollectableEnum.IRON:
        return __s21local0;
      default:
        return true;
    }
  };
  Object.defineProperty(CastleListDetailOverviewItemEconomy.prototype, "isTradeable", {
    get: function () {
      switch (this.wmo.areaType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGS_TOWER:
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE:
          return false;
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT:
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY:
          return !this.wmo.hasReachedMaxLevel;
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL:
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL:
          return true;
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST:
          return !this.wmo.isUnderConquerControl;
        default:
          return __dep_export_CastleModel.CastleModel.userData.castleList.getFilteredList(this.wmo.kingdomID).length > 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItemEconomy.prototype, "canTrade", {
    get: function () {
      switch (this.wmo.areaType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT:
          return !this.wmo.hasReachedMaxLevel;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewItemEconomy.prototype.onMouseClick = function (__s30param0) {
    __s1param0.prototype.onMouseClick.call(this, __s30param0);
    switch (__s30param0.target) {
      case this.disp.btn_trade:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarketInfoVO.C2SMarketInfoVO());
        __dep_export_CastleModel.CastleModel.tradeData.addEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    }
  };
  CastleListDetailOverviewItemEconomy.prototype.onGetMarketInfos = function (__s33param0) {
    if (__s33param0.openDialog) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSendGoodsDialog.CastleSendGoodsDialog, new __dep_export_CastleSendGoodsDialogProperties.CastleSendGoodsDialogProperties(this.wmo, __s33param0.tradeInfoVO));
      __dep_export_CastleModel.CastleModel.tradeData.removeEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    }
  };
  return CastleListDetailOverviewItemEconomy;
}(require("gge-module:export_CastleListDetailOverviewItem").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemEconomy = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CastleSendGoodsDialog = require("gge-module:export_CastleSendGoodsDialog");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
