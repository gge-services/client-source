Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUnlockPackageSlotVO = require("gge-module:export_C2SUnlockPackageSlotVO");
var __dep_export_CastleCostInfoDialogProperties = require("gge-module:export_CastleCostInfoDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleToolSlotPremiumShopVO() {
    return __s1param0.call(this, "toolslot_title", "toolslot_copy_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], __dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_C2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleToolSlotPremiumShopVO, __s1param0);
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "title", {
    get: function () {
      var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.boughtToolSlots + 1 + __dep_export_CastleModel.CastleModel.boostData.permanentToolSlots);
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._titleStringID, [__s5local0, __dep_exact_26a421b704832cff.UnitProductionConst.MAX_SLOTS]);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "title").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 50;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.boughtToolSlots + __dep_export_CastleModel.CastleModel.boostData.permanentToolSlots < __dep_exact_26a421b704832cff.UnitProductionConst.MAX_SLOTS;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "duration", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_DURATION, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleToolSlotPremiumShopVO.prototype.clickedBuyButton = function () {
    var __s33local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_DURATION);
    var __s33local1 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s33local0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuySlotDialog.CastleBuySlotDialog, new __dep_export_CastleCostInfoDialogProperties.CastleCostInfoDialogProperties(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.buySlot), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_buyslotTool_copy"), __s33local1, __dep_exact_92d05af59ee2ff30.Localize.text("help_recuit_slot")));
  };
  CastleToolSlotPremiumShopVO.prototype.buySlot = function (__s35param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockPackageSlotVO.C2SUnlockPackageSlotVO(1));
  };
  CastleToolSlotPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_AddToolSlot();
  };
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(5, -3);
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToolSlotPremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleToolSlotPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuySlotDialog = require("gge-module:export_CastleBuySlotDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");
