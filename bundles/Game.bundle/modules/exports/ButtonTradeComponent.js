Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SMarketInfoVO = require("gge-module:export_C2SMarketInfoVO");
var __dep_export_CastleTradeDataEvent = require("gge-module:export_CastleTradeDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSendGoodsDialogProperties = require("gge-module:export_CastleSendGoodsDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonTradeComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonTradeComponent, __s1param0);
  ButtonTradeComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeTraded;
    this._button.toolTipText = null;
    this._button.enableButton = true;
    if (this._worldMapObjectVO.isUnderConquerControl) {
      this._button.enableButton = false;
      this._button.toolTipText = "outpost_ringMenu_beingOccupied";
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED,
        p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE]
      };
    }
  };
  Object.defineProperty(ButtonTradeComponent.prototype, "targetWMO", {
    set: function (__s10param0) {
      this._worldMapObjectVO = __s10param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonTradeComponent.prototype.onClick = function () {
    __dep_export_CastleModel.CastleModel.tradeData.addEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarketInfoVO.C2SMarketInfoVO());
  };
  ButtonTradeComponent.prototype.onGetMarketInfos = function (__s14param0) {
    if (__s14param0.openDialog) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSendGoodsDialog.CastleSendGoodsDialog, new __dep_export_CastleSendGoodsDialogProperties.CastleSendGoodsDialogProperties(this._worldMapObjectVO, __s14param0.tradeInfoVO));
    }
    __dep_export_CastleModel.CastleModel.tradeData.removeEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
  };
  Object.defineProperty(ButtonTradeComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_trade_menu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonTradeComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonTradeComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSendGoodsDialog = require("gge-module:export_CastleSendGoodsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
