Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
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
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetDetailPlayerInfo = require("gge-module:export_C2SGetDetailPlayerInfo");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastlePlayerInfoEvent = require("gge-module:export_CastlePlayerInfoEvent");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_MonumentEvent = require("gge-module:export_MonumentEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleSendGoodsVO = require("gge-module:export_CastleSendGoodsVO");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSendGoodsDialog() {
    var __s3local0 = this;
    __s3local0._dataReceived = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSendGoodsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendGoodsDialog, __s1param0);
  CastleSendGoodsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._sourceCastleSelector ||= new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.mc_sourceCastle);
    this._targetCastleSelector ||= new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.mc_targetCastle);
    this.charMerchantIcon = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME), null, 0, false);
    if (this.charMerchantIcon.isLoaded) {
      this.onClipLoaded(this.charMerchantIcon);
    } else {
      this.charMerchantIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
    this.setTexts();
    this._dataReceived = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.handleIslandsReset));
    this.initBasicButtons([this.dialogDisp.mc_bubble.btn_booster, this.dialogDisp.mc_bubble, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleSendGoodsDialog.prototype.handleIslandsReset = function (__s9param0) {
    this.hide();
  };
  CastleSendGoodsDialog.prototype.setTexts = function () {
    this.i_booster_txt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.txt_booster, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    this.i_booster_txt_booster.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var __s11local0 = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
    this.i_txt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.btn_booster.tfAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s11local0));
    this.i_icarriage_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_carriges.txt_info, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_icarriage_txt_info.autoFitToBounds = true;
    this.i_storage_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_storage.txt_info, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_storage_txt_info.autoFitToBounds = true;
    this.i_tcost_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_travelCost.txt_info, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_tcost_txt_info.autoFitToBounds = true;
    this.i_txt_date = this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_txt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_tTime_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.mc_travelTime.txt_info, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_tTime_txt_info.autoFitToBounds = true;
    this.i_dist_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.mc_distance.txt_info, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_sendGoods_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_postAttack_arrival")]));
    this.dialogDisp.info_carriges.toolTipText = "dialog_sendGoods_avalibleCarriges";
    this.dialogDisp.info_storage.toolTipText = "dialog_sendGoods_avalibleStorage";
    this.dialogDisp.info_storage.autoFitToBounds = true;
    this.dialogDisp.info_travelCost.toolTipText = "travelCost";
    this.dialogDisp.mc_travelTime.toolTipText = "travelTime";
    this.dialogDisp.mc_distance.toolTipText = "distance";
  };
  CastleSendGoodsDialog.prototype.onClipLoaded = function (__s13param0) {
    this.dialogDisp.charHolder.addChild(__s13param0.currentshownDisplayObject);
  };
  CastleSendGoodsDialog.prototype.manageBoosterText = function () {
    if (__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.isMaxLevel) {
      if (this.i_booster_txt_booster.textContentVO) {
        this.i_booster_txt_booster.textContentVO.textId = "dialog_caravanGuy_fullCapacity_copy";
      }
      this.dialogDisp.mc_bubble.toolTipText = null;
      this.dialogDisp.mc_bubble.mc_discount.visible = false;
      this.i_txt_booster.textContentVO = new __dep_exact_92d05af59ee2ff30_4.TextVO("-");
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_bubble, false);
    } else {
      if (this.i_booster_txt_booster.textContentVO) {
        this.i_booster_txt_booster.textContentVO.textId = "dialog_caravanGuy_capacity_copy";
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_bubble, true);
      if (this.i_txt_booster.textContentVO) {
        this.i_txt_booster.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
      }
      this.dialogDisp.mc_bubble.toolTipText = "dialog_sendGoods_BuyCapacity_tooltip";
    }
    var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(__dep_exact_26a421b704832cff_2.BoosterConst.CARAVAN_OVERLOADER));
    if (!__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.isMaxLevel && __s15local0 > 0) {
      this.dialogDisp.mc_bubble.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s15local0]));
    } else {
      this.dialogDisp.mc_bubble.mc_discount.visible = false;
    }
  };
  CastleSendGoodsDialog.prototype.setBoosterItem = function () {
    if (this._tradeCastleVO && this._tradeComponent) {
      this.manageBoosterText();
      var __s24local0 = this._tradeComponent.getSelectedSum();
      this.i_storage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition) - __s24local0, this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition)];
      this.i_icarriage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.availableCarriages - __dep_export_CastleModel.CastleModel.boostData.getCarriagesNeededToTransport(__s24local0, __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus), this._tradeCastleVO.availableCarriages];
    }
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "capacityBoost", {
    get: function () {
      return this._tradeCastleVO.getCapacityBoost(this.effectCondition);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "baronFixBonus", {
    get: function () {
      return this._tradeCastleVO.getCapacityBonus(this.effectCondition);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.receiveDestinationCastles = function () {
    this.dialogDisp.tradeComponent.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailPlayerInfo.C2SGetDetailPlayerInfo(this.targetPlayerId));
  };
  CastleSendGoodsDialog.prototype.handleCastlesList = function (__s33param0) {
    var __s33local0 = __s33param0.params[0];
    var __s33local1 = __dep_export_CastleModel.CastleModel.userData.isInAlliance && __s33local0.list[0] && __s33local0.list[0].ownerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID;
    if (__s33local0.ownerID == this.targetPlayerId) {
      var __s33local2 = new __dep_export_CastleListVO.CastleListVO();
      for (var __s33local3 = 0, __s33local4 = __s33local0.list; __s33local3 < __s33local4.length; __s33local3++) {
        var __s33local5 = __s33local4[__s33local3];
        if (__s33local5 !== undefined && (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33local5, "MonumentMapobjectVO") || __s33local1 || __s33local5.isOwnMapobject) && (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33local5, "LaboratoryMapobjectVO") || __s33local1 || __s33local5.isOwnMapobject)) {
          if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33local5, "KingstowerMapobjectVO")) {
            __s33local2.addCastle(__s33local5, __s33local5.kingdomID);
          }
        }
      }
      this._dataReceived = true;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
      this._targetCastleList = __s33local2;
      var __s33local6 = this._sourceCastleList.list;
      var __s33local7 = this._targetCastleList.list;
      var __s33local8 = this.getKingdomsSet(__s33local6);
      var __s33local9 = this.getKingdomsSet(__s33local7);
      var __s33local10 = [];
      var __s33local11 = [];
      var __s33local12 = [];
      var __s33local13 = [];
      this.checkKingdoms(__s33local6, __s33local9, "dialog_sendGoods_unlockCastleReceiver_tooltip", __s33local10, __s33local11);
      this.checkKingdoms(__s33local7, __s33local8, "dialog_sendGoods_unlockCastlePlayer_tooltip", __s33local12, __s33local13);
      this.checkMarkets(__s33local6, "dialog_sendGoods_buildMarket_tooltip", __s33local10, __s33local11);
      this._sourceCastleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), this._sourceCastleList, __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel, null, -1, __s33local10, __s33local11);
      this._targetCastleSelector.initComponent(this.dialogProperties.worldmapObjectVO.ownerInfo, this._targetCastleList, null, null, -1, __s33local12, __s33local13);
      this._sourceCastleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectSourceCastle));
      this._targetCastleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTargetCastle));
      var __s33local14 = __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
      var __s33local15 = __dep_exact_f855840627e6e145.int(__s33local6.indexOf(__s33local14));
      if (__s33local15 < 0 || !__s33local10[__s33local15]) {
        if ((__s33local15 = __dep_exact_f855840627e6e145.int(__s33local10.indexOf(true))) < 0) {
          __s33local15 = 0;
        }
        __s33local14 = __s33local6[__s33local15];
      }
      this.dialogDisp.tradeComponent.visible = true;
      var __s33local16 = this._tradeCastleVO.kingdomId == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID && this.dialogProperties.worldmapObjectVO && this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID;
      this._tradeComponent = new __dep_export_CastleSendGoodsComponent.CastleSendGoodsComponent(this.dialogDisp.tradeComponent, this.getSendGoodsFromTradeVO(this._tradeCastleVO), this.bindFunction(this.updateTextfields), __s33local16);
      this.setBoosterItem();
      this._sourceCastleSelector.changeSelectedCastle(__s33local14);
      if (this._targetCastleSelector.castleIsEnabled(this.dialogProperties.worldmapObjectVO)) {
        this._targetCastleSelector.changeSelectedCastle(this.dialogProperties.worldmapObjectVO);
      }
      this.updateButtons();
    }
  };
  CastleSendGoodsDialog.prototype.checkMarkets = function (__s43param0, __s43param1, __s43param2, __s43param3) {
    var __s43local0 = new Map();
    for (var __s43local1 = 0, __s43local2 = this.dialogProperties.tradeDataInfoVO.castleList; __s43local1 < __s43local2.length; __s43local1++) {
      var __s43local3 = __s43local2[__s43local1];
      if (__s43local3 !== undefined) {
        __s43local0.set(__s43local3.kingdomId + "_" + __s43local3.startCastleID, __s43local3.totalCarriages);
      }
    }
    for (var __s43local4 = 0; __s43local4 < __s43param0.length; __s43local4++) {
      if (__s43param2[__s43local4]) {
        var __s43local5 = __s43param0[__s43local4];
        if (__s43local0.get(__s43local5.kingdomID + "_" + __s43local5.objectId) == 0) {
          __s43param2[__s43local4] = false;
          __s43param3[__s43local4] = {
            t: __s43param1,
            p: this.getKingdomNameById(__s43local5.kingdomID)
          };
        }
      }
    }
  };
  CastleSendGoodsDialog.prototype.checkKingdoms = function (__s52param0, __s52param1, __s52param2, __s52param3, __s52param4) {
    for (var __s52local0 = 0; __s52local0 < __s52param0.length; __s52local0++) {
      var __s52local1 = __s52param0[__s52local0];
      if (__s52param1.get(__s52local1.kingdomID)) {
        __s52param3[__s52local0] = true;
        __s52param4[__s52local0] = "";
      } else {
        __s52param3[__s52local0] = false;
        __s52param4[__s52local0] = {
          t: __s52param2,
          p: this.getKingdomNameById(__s52local1.kingdomID)
        };
      }
    }
  };
  CastleSendGoodsDialog.prototype.getKingdomNameById = function (__s58param0) {
    return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s58param0).kingdomNameString;
  };
  CastleSendGoodsDialog.prototype.getKingdomsSet = function (__s60param0) {
    var __s60local0 = new Map();
    if (__s60param0 != null) {
      for (var __s60local1 = 0, __s60local2 = __s60param0; __s60local1 < __s60local2.length; __s60local1++) {
        var __s60local3 = __s60local2[__s60local1];
        if (__s60local3 !== undefined) {
          __s60local0.set(__s60local3.kingdomID, true);
        }
      }
    }
    return __s60local0;
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "targetPlayerId", {
    get: function () {
      return this.dialogProperties.worldmapObjectVO.ownerInfo.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "effectCondition", {
    get: function () {
      return new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(this.targetCastleVO.areaType, this.targetCastleVO.spaceID, -1, this.targetCastleVO.ownerInfo);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.getSendGoodsFromTradeVO = function (__s70param0) {
    return new __dep_export_CastleSendGoodsVO.CastleSendGoodsVO(__s70param0.getResourcesAsCollectableList(), __s70param0.getMaxCapacityForCurrentLevel(this.effectCondition), this.targetCastleVO);
  };
  CastleSendGoodsDialog.prototype.updateTextfields = function () {
    if (this._tradeComponent) {
      var __s72local0 = this._tradeComponent.getSelectedSum();
      var __s72local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff_4.MarketConst.getMarketTravelCostC1(this.getDistance(), __dep_export_CastleModel.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus))));
      var __s72local2 = this._tradeCastleVO.availableCarriages;
      var __s72local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getCarriagesNeededToTransport(__s72local0, __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus));
      if (this.i_icarriage_txt_info && this.i_icarriage_txt_info.textContentVO) {
        this.i_icarriage_txt_info.textContentVO.textReplacements = [__s72local2 - __s72local3, __s72local2];
      }
      if (this.i_storage_txt_info && this.i_storage_txt_info.textContentVO) {
        this.i_storage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition) - __s72local0, this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition)];
        __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_storage_txt_info, this._tradeCastleVO.isSubscriptionBuffActive, 17, new __s0local0(-2, 0));
      }
      if (this.i_tcost_txt_info && this.i_tcost_txt_info.textContentVO) {
        this.i_tcost_txt_info.textContentVO.stringValue = String(__s72local1);
        this.i_tcost_txt_info.color = __s72local1 > __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    }
  };
  CastleSendGoodsDialog.prototype.onMonumentUpdated = function (__s78param0) {
    if (!__s78param0.target.canBeUpgradedByMe()) {
      this.layoutManager.hideDialog(__dep_export_CastlePostSendGoodsDialog.CastlePostSendGoodsDialog);
      this.layoutManager.hideDialog(__dep_export_CastlePostSendGoodsHorseDialog.CastlePostSendGoodsHorseDialog);
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onLaboratoryUpdated = function (__s81param0) {
    if (!__s81param0.target.canBeUpgradedByMe()) {
      this.layoutManager.hideDialog(__dep_export_CastlePostSendGoodsDialog.CastlePostSendGoodsDialog);
      this.layoutManager.hideDialog(__dep_export_CastlePostSendGoodsHorseDialog.CastlePostSendGoodsHorseDialog);
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.showLoaded = function (__s84param0 = null) {
    this._dataReceived = false;
    this._sourceCastleList = __dep_export_CastleModel.CastleModel.userData.castleList;
    if (this._sourceCastleList.castleAmount < 1 || !this.dialogProperties.worldmapObjectVO.ownerInfo) {
      this.hide();
    } else {
      if (this._tradeComponent) {
        this._tradeComponent.hide();
      }
      this._tradeInfoVO = this.dialogProperties.tradeDataInfoVO;
      this._tradeCastleVO = this._tradeInfoVO.getCastleInfoById(__dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel.objectId);
      this._tradeCastleVO ||= this._tradeInfoVO.getCastleInfoById(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID).objectId);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MonumentMapobjectVO")) {
        this.controller.addEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
        this.dialogProperties.worldmapObjectVO.addEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENT_UPDATED, this.bindFunction(this.onMonumentUpdated));
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "LaboratoryMapobjectVO")) {
        this.controller.addEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
        this.dialogProperties.worldmapObjectVO.addEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_UPDATED, this.bindFunction(this.onLaboratoryUpdated));
      }
      __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
      __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
      this._tradeInfoVO = this.dialogProperties.tradeDataInfoVO;
      this.receiveDestinationCastles();
      this.manageBoosterText();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      if (this._sourceCastleList.castleAmount > 0) {
        __s1param0.prototype.showLoaded.call(this, __s84param0);
      } else {
        this.hide();
      }
    }
  };
  CastleSendGoodsDialog.prototype.onTimerUpdate = function (__s93param0) {
    if (this._dataReceived && this.targetCastleVO) {
      var __s93local0 = this.getDistance();
      this.setArrivalDateAndTime(this.getTravelTime(__s93local0, this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
    }
  };
  CastleSendGoodsDialog.prototype.onMonumentReset = function (__s96param0) {
    if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_MONUMENT) {
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onLaboratoryReset = function (__s99param0) {
    if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_5.WorldConst.AREA_TYPE_LABORATORY) {
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onBoosterDataChanges = function (__s102param0) {
    this.setBoosterItem();
    this.updateTextfields();
    if (this._tradeComponent) {
      this._tradeComponent.initResourceCollectors();
    }
    this.onSelectSourceCastle();
  };
  CastleSendGoodsDialog.prototype.onSelectSourceCastle = function (__s105param0 = null) {
    if (this._targetCastleList && (!this.targetCastleVO || this.sourceCastleVO && this.sourceCastleVO.kingdomID != this.targetCastleVO.kingdomID)) {
      var __s105local0 = this._targetCastleList.getFilteredList(this.sourceCastleVO.kingdomID);
      if (__s105local0 && __s105local0.length > 0) {
        this._targetCastleSelector.changeSelectedCastle(__s105local0[0]);
      }
    }
    this.updateDistanceAndTime();
    this.updateTextfields();
    this.updateButtons();
    this.updateTradeComponent();
  };
  CastleSendGoodsDialog.prototype.updateButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this.sourceCastleVO && this.targetCastleVO && this.sourceCastleVO.objectId != this.targetCastleVO.objectId && this._sourceCastleSelector.castleIsEnabled(this._sourceCastleSelector.selectedCastleVO));
    this.dialogDisp.btn_ok.toolTipText = null;
    if (this.sourceCastleVO && this.targetCastleVO) {
      if (this.sourceCastleVO.objectId == this.targetCastleVO.objectId) {
        this.dialogDisp.btn_ok.toolTipText = "alert_trade_locationsIdentical_tt";
      } else if (!this._sourceCastleSelector.castleIsEnabled(this._sourceCastleSelector.selectedCastleVO)) {
        this.dialogDisp.btn_ok.toolTipText = "alert_trade_locationsDifferentKingdom_tt";
      }
    }
  };
  CastleSendGoodsDialog.prototype.onSelectTargetCastle = function (__s114param0 = null) {
    if (this.sourceCastleVO.kingdomID != this.targetCastleVO.kingdomID) {
      this._sourceCastleSelector.changeSelectedCastle(this._sourceCastleList.getFilteredList(this.targetCastleVO.kingdomID)[0]);
    }
    this.updateDistanceAndTime();
    this.updateTextfields();
    this.updateButtons();
    this.updateTradeComponent();
  };
  CastleSendGoodsDialog.prototype.updateTradeComponent = function () {
    if (this._tradeInfoVO && this.sourceCastleVO) {
      var __s117local0 = this._tradeInfoVO.getCastleInfoById(this.sourceCastleVO.objectId);
      this._tradeCastleVO = __s117local0;
      if (this._tradeCastleVO && this._tradeComponent) {
        this._tradeComponent.changeCastle(this.getSendGoodsFromTradeVO(this._tradeCastleVO));
        this.updateDistanceAndTime();
      }
    }
  };
  CastleSendGoodsDialog.prototype.updateDistanceAndTime = function () {
    if (this._tradeInfoVO && this.targetCastleVO) {
      var __s121local0 = this.getDistance();
      this.setArrivalDateAndTime(this.getTravelTime(__s121local0, this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
      this.i_dist_txt_info.textContentVO.stringValue = String(__s121local0);
    }
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isInAlliance && this.targetCastleVO.ownerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID && __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.targetCastleVO.areaType, this.targetCastleVO.kingdomID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.getDistance = function () {
    if (this._dataReceived && this.sourceCastleVO && this.targetCastleVO) {
      return __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this.sourceCastleVO, this.targetCastleVO);
    } else {
      return 0;
    }
  };
  CastleSendGoodsDialog.prototype.getTravelTime = function (__s130param0, __s130param1, __s130param2) {
    var __s130local0;
    var __s130local1;
    var __s130local2 = 1;
    var __s130local3 = __s130param1.ownerInfo;
    if (__s130local3.isOwnOwnerInfo) {
      __s130local2 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, -1, -1, -1, __s130local3).strength / 100;
    } else if (__dep_export_CastleModel.CastleModel.allianceData && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __s130local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
      if ((__s130local1 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff_1.AllianceConst.TYPE_MARKET_SPEED_BOOST, __s130local0.getBoostLevel(__dep_exact_26a421b704832cff_1.AllianceConst.TYPE_MARKET_SPEED_BOOST)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS)) && __s130local1.effect.isForAreaType(__s130param1.areaType) && __s130local1.effect.checkPlayerRelation(__s130local3)) {
        __s130local2 += __s130local1.strength / 100;
      }
    }
    if (__s130param2) {
      __s130local2 += __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, __s130param1.areaType, __s130param1.kingdomID) / 100;
    }
    __s130local2 += __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, __s130param1.areaType, __s130param1.kingdomID) / 100;
    __s130local2 += this._tradeCastleVO.getAreaSpeedBoostModifier(this.effectCondition) / 100;
    var __s130local4 = this.targetCastleVO.spaceID;
    var __s130local5 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValues([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS], -1, -1, __s130local4).strength;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getTravelTimeWithTitle(__dep_exact_26a421b704832cff_4.MarketConst.MARKET_TRAVEL_SPEED, __s130param0, __s130local2, 0, __s130local5, false));
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "sourceCastleVO", {
    get: function () {
      return this._sourceCastleSelector.castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "targetCastleVO", {
    get: function () {
      return this._targetCastleSelector.castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.onClick = function (__s140param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s140param0.target)) {
      __s1param0.prototype.onClick.call(this, __s140param0);
      switch (__s140param0.target) {
        case this.dialogDisp.btn_ok:
          this.sendGoodsCastle();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.mc_bubble:
        case this.dialogDisp.mc_bubble.btn_booster:
          if (this.dialogDisp.mc_bubble.btn_booster.enabled) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleBuyCaravanOverloaderDialog.CastleBuyCaravanOverloaderDialog);
          }
      }
    }
  };
  CastleSendGoodsDialog.prototype.sendGoodsCastle = function () {
    var __s145local0;
    if (this._tradeComponent && (__s145local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff_4.MarketConst.getMarketTravelCostC1(this.getDistance(), __dep_export_CastleModel.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus))))) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
    } else if (this._tradeCastleVO.availableCarriages == 0) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_sendGoods_noCarrige")));
    } else if (this._tradeComponent && this._tradeComponent.getSelectedSum() == 0) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_sendGoods_noGoods")));
    } else {
      this._tradeCastleVO.targetCastlePosX = __dep_exact_f855840627e6e145.int(this.targetCastleVO.absAreaPosX);
      this._tradeCastleVO.targetCastlePosY = __dep_exact_f855840627e6e145.int(this.targetCastleVO.absAreaPosY);
      this._tradeCastleVO.targetOwner = this.targetCastleVO.ownerInfo;
      this._tradeCastleVO.goods = this.createC2SRewardList();
      this._tradeCastleVO.costs = __s145local0;
      this._tradeCastleVO.travelTime = __dep_exact_f855840627e6e145.int(this.getTravelTime(this.getDistance(), this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
      this._tradeCastleVO.isTravelTimeSubscriptionBoosted = this.isTravelTimeSubscriptionBoosted;
      this._tradeCastleVO.travelDistance = this.getDistance();
      if (this._tradeComponent) {
        this._tradeCastleVO.unitCount = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus));
      }
      this._tradeCastleVO.targetAreaType = __dep_exact_f855840627e6e145.int(this.targetCastleVO.areaType);
      __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDGOODS, this.bindFunction(this.hide), this._tradeCastleVO, null]);
    }
  };
  CastleSendGoodsDialog.prototype.createC2SRewardList = function () {
    return __dep_export_CollectableManager.CollectableManager.parser.c2SCosts.createCostsListForServer(__dep_export_CollectableManager.CollectableManager.parser.createGoodsListSavefromList(this._tradeComponent.rewardList()));
  };
  CastleSendGoodsDialog.prototype.onMouseOut = function (__s154param0) {
    if (!this.isLocked) {
      __s1param0.prototype.onMouseOut.call(this, __s154param0);
    }
  };
  CastleSendGoodsDialog.prototype.onMouseOver = function (__s157param0) {
    if (!this.isLocked) {
      __s1param0.prototype.onMouseOver.call(this, __s157param0);
    }
  };
  CastleSendGoodsDialog.prototype.setArrivalDateAndTime = function (__s160param0) {
    var __s160local0 = new Date();
    __s160local0.setTime(__s160local0.getTime() + __s160param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.i_txt_date.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s160local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
    this.i_txt_time.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s160local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT);
    this.i_tTime_txt_info.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.getShortTimeStringBySeconds(__s160param0);
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.i_tTime_txt_info, this.isTravelTimeSubscriptionBoosted, 15, new __s0local0(-3, 0));
  };
  CastleSendGoodsDialog.prototype.hideLoaded = function (__s162param0 = null) {
    if (this._tradeComponent != null) {
      this._tradeComponent.hide();
      this._tradeComponent = null;
    }
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MonumentMapobjectVO")) {
      this.controller.removeEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
      this.dialogProperties.worldmapObjectVO.removeEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENT_UPDATED, this.bindFunction(this.onMonumentUpdated));
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "LaboratoryMapobjectVO")) {
      this.controller.removeEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
      this.dialogProperties.worldmapObjectVO.removeEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_UPDATED, this.bindFunction(this.onLaboratoryUpdated));
    }
    this._sourceCastleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectSourceCastle));
    this._targetCastleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTargetCastle));
    this._tradeInfoVO = null;
    __s1param0.prototype.hideLoaded.call(this, __s162param0);
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.NAME = "CastleSendGoods_R";
  CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME = "CharMerchantIcon";
  return CastleSendGoodsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSendGoodsDialog = __s0local1;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CastleSendGoodsComponent = require("gge-module:export_CastleSendGoodsComponent");
var __dep_export_CastleBuyCaravanOverloaderDialog = require("gge-module:export_CastleBuyCaravanOverloaderDialog");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastlePostSendGoodsDialog = require("gge-module:export_CastlePostSendGoodsDialog");
var __dep_export_CastlePostSendGoodsHorseDialog = require("gge-module:export_CastlePostSendGoodsHorseDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
