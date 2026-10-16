Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function PremiumMarketPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PremiumMarketPanelButton, __s1param0);
  PremiumMarketPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.vipData.addEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataUpdated));
    this.listenOnXPChanged();
  };
  PremiumMarketPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.vipData.removeEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  PremiumMarketPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(__dep_export_APanelButton.APanelButton.HIGHLIGHT_TYPE_YELLOW, __dep_export_CastleModel.CastleModel.vipData.vipModeActive);
  };
  Object.defineProperty(PremiumMarketPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_PremiumMarket_Relicus;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  PremiumMarketPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_KINGS_MARKET);
  };
  PremiumMarketPanelButton.prototype.getButtonTooltip = function () {
    return "premiummarket_title";
  };
  Object.defineProperty(PremiumMarketPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  PremiumMarketPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastlePremiumMarketPlaceDialog.CastlePremiumMarketPlaceDialog);
  };
  PremiumMarketPanelButton.prototype.onVipDataUpdated = function (__s25param0) {
    this.update();
  };
  return PremiumMarketPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.PremiumMarketPanelButton = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePremiumMarketPlaceDialog = require("gge-module:export_CastlePremiumMarketPlaceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
