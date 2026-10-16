Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleLuckyWheelDialogProperties = require("gge-module:export_CastleLuckyWheelDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function LuckyWheelEventVO() {
    var __s3local0 = this;
    __s3local0._willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._scoreEventVO = new __dep_export_LuckyWheelPointEventTypeScoreEventVO.LuckyWheelPointEventTypeScoreEventVO();
    __s3local0.buyPackagesEventVO = new __dep_export_BuyPackagesEventVO.BuyPackagesEventVO();
    __s3local0.eventOverviewConfig.eventOverviewDetails = __dep_export_EventOverviewDetailEnum.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LuckyWheelEventVO, __s1param0);
  LuckyWheelEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this._scoreEventVO.parseData(__s5param0, __s5param1, __s5param2);
    this.buyPackagesEventVO.parseData(__s5param0, __s5param1, __s5param2);
    this._scoreEventVO.pointThresholds = this.luckyWheelData.pointThresholds;
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "isAtMaxClass", {
    get: function () {
      return this.luckyWheelData.isMaxIncreaseWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "winClassesAmount", {
    get: function () {
      return this.luckyWheelData.winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "numSpinsDoneInCurrentClass", {
    get: function () {
      return this.luckyWheelData.winClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getNeededSpinsForClass = function (__s13param0) {
    return this.luckyWheelData.getNeededSpinsForClass(__s13param0);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "winClassProgress", {
    get: function () {
      return this.luckyWheelData.winClassProgress / this.luckyWheelData.getNeededSpinsForClass(this.luckyWheelData.currentWinClass);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "nextWinClassProgress", {
    get: function () {
      return this.luckyWheelData.nextWinClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.parseParamObject = function (__s19param0) {
    this.luckyWheelData.parseBasics(__s19param0);
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this));
  };
  LuckyWheelEventVO.prototype.setRankAndPoints = function (__s21param0, __s21param1, __s21param2) {
    this._scoreEventVO.setRankAndPoints([__s21param0[0]], [__s21param1[0]], null);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return LuckyWheelEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_LuckyWheel";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_LUCKY_WHEEL_CARNY;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.openDialog = function (__s35param0 = true) {
    this.executeOpenDialog(__s35param0, __dep_export_CastleLuckyWheelDialog.CastleLuckyWheelDialog, new __dep_export_CastleLuckyWheelDialogProperties.CastleLuckyWheelDialogProperties(this));
  };
  LuckyWheelEventVO.prototype.openMerchantDialog = function (__s37param0, __s37param1) {
    this.openDialog(__s37param0);
    this.executeOpenDialog(__s37param0, __dep_export_CastleLuckyWheelTicketBuyDialog.CastleLuckyWheelTicketBuyDialog);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "isProMode", {
    get: function () {
      return this.luckyWheelData.isProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "currentWinClass", {
    get: function () {
      return this.luckyWheelData.currentWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "isFirstVisitToLuckyWheel", {
    get: function () {
      return this.luckyWheelData.isFirstVisitToLuckyWheel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasFreeSpin", {
    get: function () {
      return this.luckyWheelData.hasFreeSpin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasVisitedProMode", {
    get: function () {
      return this.luckyWheelData.hasVisitedProMode;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getPreviewSet = function (__s49param0) {
    return this.luckyWheelData.getPreviewSets(__s49param0);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "rewardIsTickets", {
    get: function () {
      return this.luckyWheelData.rewardIsTickets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "levelLabels", {
    get: function () {
      return this.luckyWheelData.levelLabels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasLevelUp", {
    get: function () {
      return this.luckyWheelData.hasLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "scoreEventVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventPackagesVO").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_luckyWheel_description";
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "primesaleDescriptionTextID").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return this.buyPackagesEventVO.primesaleSaveRubiesTextID;
    },
    set: function (__s69param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID").set.call(this, __s69param0);
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.prototype.getVisiblePackages = function (__s71param0, __s71param1, __s71param2) {
    return this.buyPackagesEventVO.getVisiblePackages(__s71param0, __s71param1, __s71param2);
  };
  LuckyWheelEventVO.prototype.containsEventPackage = function (__s73param0) {
    return this.buyPackagesEventVO.containsEventPackage(__s73param0);
  };
  Object.defineProperty(LuckyWheelEventVO.prototype, "luckyWheelData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasEnoughRubiesToBuyJackpot", {
    get: function () {
      return this.luckyWheelData.hasEnoughRubiesToBuyJackpot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "hasEnoughTicketsToBuyJackpot", {
    get: function () {
      return this.luckyWheelData.hasEnoughTicketsToBuyJackpot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "willShowDialogAgain", {
    get: function () {
      return this._willShowDialogAgain;
    },
    set: function (__s83param0) {
      this._willShowDialogAgain = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "ticketCost", {
    get: function () {
      if (this.isProMode) {
        return __dep_exact_26a421b704832cff.LuckyWheelConst.SPIN_TICKET_COST_PROMODE;
      } else if (this.hasFreeSpin) {
        return 0;
      } else {
        return __dep_exact_26a421b704832cff.LuckyWheelConst.SPIN_TICKET_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "currencyID", {
    get: function () {
      return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LUCKY_WHEEL_TICKET;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelEventVO.prototype, "textIDString", {
    get: function () {
      return "luckyWheel";
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelEventVO.EVENT_BUILDING_WOD = 48;
  return LuckyWheelEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.LuckyWheelEventVO = __s0local0;
var __dep_export_EventOverviewDetailEnum = require("gge-module:export_EventOverviewDetailEnum");
var __dep_export_CastleLuckyWheelDialog = require("gge-module:export_CastleLuckyWheelDialog");
var __dep_export_CastleLuckyWheelTicketBuyDialog = require("gge-module:export_CastleLuckyWheelTicketBuyDialog");
var __dep_export_LuckyWheelPointEventTypeScoreEventVO = require("gge-module:export_LuckyWheelPointEventTypeScoreEventVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO", "IScoreUpdatable");
