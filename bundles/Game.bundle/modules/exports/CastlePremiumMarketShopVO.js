Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastlePremiumMarketShopVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    this.MAX_PREMIUM_SHOP_OVERSEER_ICON_WIDTH = 211;
    this.MAX_PREMIUM_SHOP_OVERSEER_ICON_HEIGHT = 179;
    this._costs = 0;
    this.shopTypes = [];
    this._continuousPurchaseCount = 0;
    this._titleStringID = __s3param0;
    this._copyString = __s3param1;
    this.shopTypes = __s3param2;
    this._costs = __s3param3;
  }
  CastlePremiumMarketShopVO.prototype.reset = function () {
    this._continuousPurchaseCount = 0;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "title", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._titleStringID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "copy", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._copyString);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "costString", {
    get: function () {
      switch (this.payType) {
        case CastlePremiumMarketShopVO.PAYTYPE_C2:
          return String(this.finalCostsC2);
        case CastlePremiumMarketShopVO.PAYTYPE_C1:
          return String(this.finalCostsC1);
        case CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          return String(this.baseCosts);
        case CastlePremiumMarketShopVO.PAYTYPE_NONE:
          return "";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "costsToolTip", {
    get: function () {
      switch (this.payType) {
        case CastlePremiumMarketShopVO.PAYTYPE_C2:
          return __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
        case CastlePremiumMarketShopVO.PAYTYPE_C1:
          return "cash";
        case CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          return "food";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "finalCostsC1", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(this.baseCosts);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "finalCostsC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount);
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.isType = function (__s21param0) {
    for (var __s21local0 = 0; __s21local0 < this.shopTypes.length; __s21local0++) {
      if (this.shopTypes[__s21local0] == __s21param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "listSortPriority", {
    get: function () {
      return 50;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isTeasered", {
    get: function () {
      return this.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "duration", {
    get: function () {
      return "-";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusText", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, this.bonusValue];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusValue", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, this.bonusValueForNextLevel];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualEffectWhenActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.clickedBuyButton = function () {};
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "newVisualMovieClip", {
    get: function () {
      return this.createVisualMovieClip();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "visualMovieClip", {
    get: function () {
      this._iconMC ||= this.newVisualMovieClip;
      this.applyFilter();
      this.resizeMc(this._iconMC);
      return this._iconMC;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    return this.createVisualMovieClip();
  };
  CastlePremiumMarketShopVO.prototype.resizeMc = function (__s66param0) {
    if (__s66param0) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s66param0);
      __s66param0.scaleX = __s66param0.scaleY = 1;
      var __s66local0 = __s66param0.getBounds(null);
      var __s66local1 = Math.min(1, CastlePremiumMarketShopVO.MAX_PREMIUM_SHOP_ICON_HEIGHT / __s66local0.height);
      var __s66local2 = -(__s66local0.width * __s66local1 / 2 + __s66local0.left * __s66local1);
      var __s66local3 = -(__s66local0.height * __s66local1 / 2 + __s66local0.top * __s66local1);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(__s66param0, Math.min(1, __s66local1));
      __s66param0.x = __s66local2;
      __s66param0.y = __s66local3;
      __s66param0.y += this.offsetIcon.y;
      __s66param0.x += this.offsetIcon.x;
    }
  };
  CastlePremiumMarketShopVO.prototype.onLoadedIcon = function (__s69param0) {
    if (this._iconMC) {
      this._iconMC.visible = true;
      this.applyFilter();
      this.resizeMc(this._iconMC);
    }
  };
  CastlePremiumMarketShopVO.prototype.createVisualMovieClip = function () {
    return new __s0local0();
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local1(0, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "timeStringTooltip", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("runTime");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusToolTip", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("effect");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("effect");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isLimited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "canBeBought", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "payType", {
    get: function () {
      return CastlePremiumMarketShopVO.PAYTYPE_C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.isInShopCategory = function (__s90param0) {
    if (this.shopTypes != null) {
      for (var __s90local0 = 0, __s90local1 = this.shopTypes; __s90local0 < __s90local1.length; __s90local0++) {
        var __s90local2 = __s90local1[__s90local0];
        if (__s90local2 !== undefined && __s90local2 == __s90param0) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return this._continuousPurchaseCount >= __dep_exact_26a421b704832cff.BoosterConst.MIN_REBUY_FOR_DISCOUNT && this.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isExtendable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "baseCosts", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.applyFilter = function () {};
  CastlePremiumMarketShopVO.PAYTYPE_NONE = 0;
  CastlePremiumMarketShopVO.PAYTYPE_C1 = 1;
  CastlePremiumMarketShopVO.PAYTYPE_C2 = 2;
  CastlePremiumMarketShopVO.PAYTYPE_FOOD = 3;
  CastlePremiumMarketShopVO.MAX_PREMIUM_SHOP_ICON_HEIGHT = 50;
  CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH = 256;
  CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT = 172;
  return CastlePremiumMarketShopVO;
}();
exports.CastlePremiumMarketShopVO = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IPremiumMarketShopVO");
