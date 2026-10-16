Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CrestVO() {
    this._backgroundType = 0;
    this.backgroundColor1 = 0;
    this.backgroundColor2 = 0;
    this.symbolPosType = 0;
    this.symbolColor1 = 0;
    this.symbolColor2 = 0;
    this.previousBackgroundColor2 = 0;
    this._isSet = false;
  }
  CrestVO.createDummyCrest = function () {
    var __s5local0 = new CrestVO();
    __s5local0.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN, 14408667);
    __s5local0.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_NONE, 0, 14408667);
    return __s5local0;
  };
  CrestVO.prototype.setBackground = function (__s7param0, __s7param1 = 0, __s7param2 = 0) {
    this.previousBackgroundColor2 = this.backgroundColor2;
    this._backgroundType = __dep_exact_f855840627e6e145.int(__s7param0 < __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPES.length ? __s7param0 : __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_FOUR_X);
    this.backgroundColor1 = __s7param1;
    this.backgroundColor2 = this._backgroundType == __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN ? __s7param1 : __s7param2;
    this.fillClipColor();
  };
  CrestVO.prototype.setSymbols = function (__s9param0, __s9param1, __s9param2 = 0, __s9param3 = 0, __s9param4 = 0) {
    this.symbolPosType = __s9param0 < __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_TYPES.length ? __s9param0 : __dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_FOUR_X;
    this.symbolColor1 = __s9param2;
    this.symbolColor2 = __s9param4;
    if (__s9param1 >= 0) {
      this.symbolType1 = __dep_export_CastleModel.CastleModel.crestSymbolData.getCrestSymbolVOByID(__s9param1);
    }
    if (__s9param3 >= 0) {
      this.symbolType2 = __dep_export_CastleModel.CastleModel.crestSymbolData.getCrestSymbolVOByID(__s9param3);
    }
  };
  CrestVO.prototype.getParamObject = function () {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.symbolType1 ? this.symbolType1.id : -1);
    var __s13local1 = __dep_exact_f855840627e6e145.int(this.symbolType2 ? this.symbolType2.id : -1);
    return {
      BGT: this.backgroundType,
      BGC1: this.backgroundColor1,
      BGC2: this.backgroundColor2,
      SPT: this.symbolPosType,
      S1: __s13local0,
      SC1: this.symbolColor1,
      S2: __s13local1,
      SC2: this.symbolColor2
    };
  };
  CrestVO.prototype.loadFromParamObject = function (__s15param0) {
    var __s15local0;
    if (__s15param0) {
      this._isSet = __s15param0.IS;
      __s15local0 = this._isSet ? __s15param0 : __dep_export_ClientConstCrest.ClientConstCrest.tutorialCrestVO.getParamObject();
      this.setSymbols(__s15local0.SPT, __s15local0.S1, __s15local0.SC1, __s15local0.S2, __s15local0.SC2);
      this.setBackground(__s15local0.BGT, __s15local0.BGC1, __s15local0.BGC2);
    } else {
      this.fillClipColor();
    }
  };
  CrestVO.prototype.fillClipColor = function () {
    this._colorsFour = [];
    switch (this.backgroundType) {
      case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor1, this.backgroundColor1, this.backgroundColor1);
        break;
      case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor2, this.backgroundColor1, this.backgroundColor2);
        break;
      case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor1, this.backgroundColor2, this.backgroundColor2);
        break;
      case __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_FOUR_X:
        this._colorsFour.push(this.backgroundColor1, this.backgroundColor2, this.backgroundColor2, this.backgroundColor1);
    }
    this._colorsTwo = [];
    if (this.backgroundType === __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      this._colorsTwo.push(this.backgroundColor1, this.backgroundColor1);
    } else {
      this._colorsTwo.push(this.backgroundColor1, this.backgroundColor2);
    }
  };
  Object.defineProperty(CrestVO.prototype, "colorsFour", {
    get: function () {
      return this._colorsFour;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CrestVO.prototype, "colorsTwo", {
    get: function () {
      return this._colorsTwo;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.clone = function () {
    var __s28local0 = new CrestVO();
    __s28local0.backgroundType = this.backgroundType;
    __s28local0.backgroundColor1 = this.backgroundColor1;
    __s28local0.backgroundColor2 = this.backgroundColor2;
    __s28local0.symbolPosType = this.symbolPosType;
    __s28local0.symbolType1 = this.symbolType1;
    __s28local0.symbolType2 = this.symbolType2;
    __s28local0.symbolColor1 = this.symbolColor1;
    __s28local0.symbolColor2 = this.symbolColor2;
    __s28local0.fillClipColor();
    return __s28local0;
  };
  Object.defineProperty(CrestVO.prototype, "tooltipText", {
    get: function () {
      var __s30local0 = "";
      if (this.symbolBonusStrings != null) {
        for (var __s30local1 = 0, __s30local2 = this.symbolBonusStrings; __s30local1 < __s30local2.length; __s30local1++) {
          var __s30local3 = __s30local2[__s30local1];
          if (__s30local3 !== undefined && __s30local3 != "" && __s30local3 != null) {
            __s30local0 += __s30local3 + "\n";
          }
        }
      }
      if (__s30local0 == "") {
        return null;
      } else {
        return __s30local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CrestVO.prototype, "symbolBonusStrings", {
    get: function () {
      var __s38local0;
      var __s38local1;
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.symbolType1, "PremiumCrestSymbolVO")) {
        __s38local0 = this.symbolType1.toolTipText;
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.symbolType2, "PremiumCrestSymbolVO")) {
        if (__s38local0 != null) {
          if (__s38local0 == (__s38local1 = this.symbolType2.toolTipText)) {
            __s38local0 = this.symbolType1.getAdjustedTooltipText(true);
            __s38local1 = "";
          } else {
            __s38local0 += "\n";
          }
        } else {
          __s38local0 = this.symbolType2.toolTipText;
        }
      }
      return [__s38local0, __s38local1];
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.createRandom = function () {
    var __s46local0 = this.getRandomArrayElement(__dep_export_ClientConstCrest.ClientConstCrest.RANDOM_CRESTS_STRINGS);
    this.loadFromParamObject(JSON.parse(__s46local0));
  };
  CrestVO.prototype.getRandomArrayElement = function (__s48param0, __s48param1 = null) {
    for (var __s48local0 = __s48param0[__dep_exact_9e901e8e2483a22f.Random.integer(0, __s48param0.length)]; __s48param1 && __s48param1.indexOf(__s48local0) >= 0;) {
      __s48local0 = __s48param0[__dep_exact_9e901e8e2483a22f.Random.integer(0, __s48param0.length)];
    }
    return __s48local0;
  };
  Object.defineProperty(CrestVO.prototype, "backgroundType", {
    get: function () {
      return this._backgroundType;
    },
    set: function (__s54param0) {
      if (this._backgroundType == __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN && __s54param0 != this._backgroundType) {
        this.backgroundColor2 = this.previousBackgroundColor2;
      } else if (__s54param0 == __dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
        this.previousBackgroundColor2 = this.backgroundColor2;
      }
      this._backgroundType = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.equals = function (__s58param0) {
    return this._backgroundType == __s58param0.backgroundType && this.backgroundColor1 == __s58param0.backgroundColor1 && this.backgroundColor2 == __s58param0.backgroundColor2 && this.symbolPosType == __s58param0.symbolPosType && this.symbolType1 == __s58param0.symbolType1 && this.symbolType2 == __s58param0.symbolType2 && this.symbolColor1 == __s58param0.symbolColor1 && this.symbolColor2 == __s58param0.symbolColor2;
  };
  Object.defineProperty(CrestVO.prototype, "isBlack", {
    get: function () {
      return this._backgroundType == 0 && this.backgroundColor1 == 0 && this.backgroundColor2 == 0 && this.symbolPosType == 0 && this.symbolColor1 == 0 && this.symbolColor2 == 0;
    },
    enumerable: true,
    configurable: true
  });
  CrestVO.prototype.getEffectsByType = function (__s62param0, __s62param1 = null) {
    __s62param1 = __s62param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s62local0 = [];
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.symbolType1, "PremiumCrestSymbolVO")) {
      __s62local0 = __s62local0.concat(this.symbolType1.getEffectsByType(__s62param0, __s62param1));
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.symbolType2, "PremiumCrestSymbolVO")) {
      __s62local0 = __s62local0.concat(this.symbolType2.getEffectsByType(__s62param0, __s62param1));
    }
    return __s62local0;
  };
  CrestVO.prototype.getEffectValue = function (__s66param0, __s66param1) {
    var __s66local0 = require("gge-module:export_CastleEffectsHelper").CastleEffectsHelper.getTotalEffectValue(this.getEffectsByType(__s66param0, __s66param1), true);
    return __s66local0 || new __s66param0.valueClass();
  };
  return CrestVO;
}();
exports.CrestVO = __s0local0;
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
