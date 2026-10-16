Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.TimerEvent;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local1 = function (__s1param0) {
  function ModernHighscoreComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0._items = [];
    __s3local0._requestTimer = new __dep_exact_81dacdf05bd32292_1.Timer(ModernHighscoreComponent.TIME_TO_REQUEST_NEW_DATA, 0);
    __s3local0._numberOfItems = 0;
    __s3local0._highscoreId = 0;
    __s3local0._leagueId = 0;
    __s3local0._searchedValue = "";
    __s3local0._rankOffsetOnServerRequest = 3;
    __s3local0._hasRequestedOwnRank = false;
    __s3local0._hasScrollValueChanged = false;
    __s3local0._currentRank = 1;
    __s3local0._maxRank = 0;
    __s3local0._requestDataEnabled = true;
    __s3local0._onItemsUpdated = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onDataReceived = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._numberOfItems = __s3param1;
    __s3local0._itemClass = __s3param2;
    __s3local0._highscoreId = __s3param3;
    __s3local0._leagueId = __s3param4;
    __s3local0._maxRank = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernHighscoreComponent, __s1param0);
  ModernHighscoreComponent.prototype.init = function () {
    if (this.disp) {
      this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this.numberOfItems));
      this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    }
    if (this.disp) {
      for (var __s5local0 = 0; __s5local0 < this.numberOfItems; ++__s5local0) {
        this._items.push(new this.itemClass(this.disp.getChildByName("mc_item" + __s5local0), this));
      }
    }
  };
  ModernHighscoreComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._currentRank = 1;
    this._requestTimer.start();
    if (this._scrollComponent) {
      this._scrollComponent.show();
    }
    if (this.items != null) {
      for (var __s11local0 = 0, __s11local1 = this.items; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          __s11local2.onShow();
        }
      }
    }
    this.reset();
  };
  ModernHighscoreComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this.items != null) {
      for (var __s18local0 = 0, __s18local1 = this.items; __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2 !== undefined) {
          __s18local2.onHide();
        }
      }
    }
    if (this._scrollComponent) {
      this._scrollComponent.hide();
    }
    this._requestTimer.stop();
  };
  ModernHighscoreComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    }
  };
  ModernHighscoreComponent.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  ModernHighscoreComponent.prototype.reset = function () {
    this._currentData = null;
    this.updateScrollValues(0);
    this.hideAllItems();
    this.updateItems();
  };
  ModernHighscoreComponent.prototype.requestOwnRankFromServer = function () {
    this.requestDataFromServer(-1);
  };
  ModernHighscoreComponent.prototype.requestCurrentRankFromServer = function () {
    this.requestDataFromServer(this._currentRank);
  };
  ModernHighscoreComponent.prototype.requestDataFromServer = function (__s37param0 = -1, __s37param1 = "") {
    if (this.requestDataEnabled) {
      var __s37local0 = __s37param0;
      if (__s37local0 >= 0) {
        __s37local0 += this._rankOffsetOnServerRequest;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s37param1 != "" ? __s37param1 : "" + __s37local0, this.highscoreId, this.leagueId));
      this._hasScrollValueChanged = false;
      this._hasRequestedOwnRank = __s37param0 < 0;
    }
  };
  ModernHighscoreComponent.prototype.hideAllItems = function () {
    if (this.items != null) {
      for (var __s41local0 = 0, __s41local1 = this.items; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined) {
          __s41local2.setVisibility(false);
        }
      }
    }
  };
  ModernHighscoreComponent.prototype.updateItems = function (__s47param0 = null) {
    if (__s47param0) {
      this._currentData = __s47param0;
    }
    if (this._currentData && this._emptyText) {
      if (this._currentData.LR == 0) {
        this._emptyText.visible = true;
      } else {
        this._emptyText.visible = false;
      }
    }
    if (this._currentData && this._maxRank != this._currentData.LR) {
      this.updateScrollValues(this._currentData.LR);
    }
    if (this._currentData) {
      this._searchedValue = this._currentData.SV;
    }
    if (this._hasRequestedOwnRank && this._currentData && this._currentData.L.length > 0) {
      this._hasRequestedOwnRank = false;
      this._currentRank = this.getRankFromData(0);
      if (this._scrollComponent) {
        this._scrollComponent.scrollToValue(this._currentRank, false);
      }
    }
    for (var __s47local0 = 0; __s47local0 < this.numberOfItems; ++__s47local0) {
      var __s47local1 = this._currentRank + __s47local0;
      var __s47local2 = __s47local0 < this.items.length ? this.items[__s47local0] : null;
      if (__s47local2) {
        __s47local2.updateWithNewData(__s47local1, this.getEntryFromRankData(__s47local1));
        if (__s47local2.name && this._searchedValue && __s47local2.name == this._searchedValue) {
          __s47local2.setItemIndicatorSearchedName();
        }
      }
    }
    this.onItemsUpdated.dispatch();
  };
  ModernHighscoreComponent.prototype.updateScrollValues = function (__s61param0 = -1) {
    if (this._maxRank >= 0) {
      this._maxRank = __s61param0;
    }
    if (this._scrollComponent) {
      this._scrollComponent.setVisibility(this._maxRank > this.numberOfItems);
      this._scrollComponent.init(1, __dep_exact_9e901e8e2483a22f.MathBase.max(1, this._maxRank - this.numberOfItems + 1), this.numberOfItems, this.numberOfItems);
      this._scrollComponent.scrollToValue(this._currentRank, false);
    }
  };
  ModernHighscoreComponent.prototype.getEntryFromRankData = function (__s65param0) {
    if (!this._currentData) {
      return null;
    }
    for (var __s65local0 = 0; __s65local0 < this._currentData.L.length; ++__s65local0) {
      if (__s65param0 == this.getRankFromData(__s65local0)) {
        return this._currentData.L[__s65local0];
      }
    }
    return null;
  };
  ModernHighscoreComponent.prototype.getRawDataList = function () {
    if (this._currentData) {
      return this._currentData.L;
    } else {
      return null;
    }
  };
  ModernHighscoreComponent.prototype.onClick = function (__s75param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s75param0.target) && (__s1param0.prototype.onClick.call(this, __s75param0), this._scrollComponent)) {
      switch (__s75param0.target) {
        case this._scrollComponent.scrollVO.minButton:
        case this._scrollComponent.scrollVO.minusButton:
        case this._scrollComponent.scrollVO.plusButton:
        case this._scrollComponent.scrollVO.maxButton:
          this.requestDataFromServer(this._currentRank);
      }
    }
  };
  ModernHighscoreComponent.prototype.onRankDataReceived = function (__s79param0) {
    var __s79local0 = __s79param0.params[0];
    if (__s79local0.LT == this.highscoreId && (!(this.leagueId >= 0) || __s79local0.LID == this.leagueId)) {
      this.updateItems(__s79local0);
      this.onDataReceived.dispatch();
    }
  };
  ModernHighscoreComponent.prototype.onScrollValueChanged = function () {
    if (this._currentRank != this._scrollComponent.currentValue) {
      this._hasScrollValueChanged = true;
    }
    this._currentRank = __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue);
    this.updateItems();
  };
  ModernHighscoreComponent.prototype.onRequestTimerUpdate = function (__s85param0) {
    if (this._hasScrollValueChanged) {
      this.requestDataFromServer(this._currentRank);
    }
  };
  Object.defineProperty(ModernHighscoreComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "highscoreId", {
    get: function () {
      return this._highscoreId;
    },
    set: function (__s94param0) {
      this._highscoreId = __s94param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "leagueId", {
    get: function () {
      return this._leagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "maxRank", {
    get: function () {
      return this._maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "requestDataEnabled", {
    get: function () {
      return this._requestDataEnabled;
    },
    set: function (__s104param0) {
      this._requestDataEnabled = __s104param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "onItemsUpdated", {
    get: function () {
      return this._onItemsUpdated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "onDataReceived", {
    get: function () {
      return this._onDataReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "currentData", {
    get: function () {
      return this._currentData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  ModernHighscoreComponent.prototype.setEmptyText = function (__s114param0) {
    this._emptyText = __s114param0;
  };
  ModernHighscoreComponent.prototype.getRankFromData = function (__s116param0) {
    if (this.highscoreId == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_AQUA_POINTS) {
      return this._currentData.L[__s116param0][1];
    } else {
      return this._currentData.L[__s116param0][0];
    }
  };
  Object.defineProperty(ModernHighscoreComponent.prototype, "rankOffsetOnServerRequest", {
    get: function () {
      return this._rankOffsetOnServerRequest;
    },
    set: function (__s122param0) {
      this._rankOffsetOnServerRequest = __s122param0;
    },
    enumerable: true,
    configurable: true
  });
  ModernHighscoreComponent.TIME_TO_REQUEST_NEW_DATA = 500;
  return ModernHighscoreComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ModernHighscoreComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
