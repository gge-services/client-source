Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SimpleScrollItemList(__s3param0, __s3param1 = null, __s3param2 = 1) {
    var __s3local0 = this;
    __s3local0._idCounter = 0;
    __s3local0._itemsVisibleAtOnce = 0;
    __s3local0._itemCount = 0;
    __s3local0._scrollStep = 0;
    __s3local0._currentStartIndex = 0;
    __s3local0.scrollInstanceName = "item";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._scrollStep = __s3param2;
    __s3local0._idCounter = 0;
    __s3local0._componentDisp = __s3param0;
    if (__s3param1) {
      __s3local0._scrollComponent = __s3param1;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._componentDisp.btn_minus, __s3local0._componentDisp.btn_plus, __s3local0._componentDisp.btn_min, __s3local0._componentDisp.btn_max], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
      __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._componentDisp.btn_slider], __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton, 1);
      var __s3local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true);
      __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3param0).addMouseWheelElements([__s3param0]), __s3local1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SimpleScrollItemList, __s1param0);
  Object.defineProperty(SimpleScrollItemList.prototype, "componentDisp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "scrollItemClass", {
    set: function (__s9param0) {
      this._itemVEList ||= [];
      for (var __s9local0 = 0; this._componentDisp[this.scrollInstanceName + __s9local0];) {
        this._itemVEList.push(new __s9param0(this._componentDisp[this.scrollInstanceName + __s9local0]));
        __s9local0++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
      if (__dep_export_instanceOf_IDynamicSizeScrollStrategy.instanceOf_IDynamicSizeScrollStrategy(this._scrollComponent.strategy)) {
        this._scrollComponent.strategy.visibleValue = this._itemsVisibleAtOnce;
      }
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollItemList.prototype.pushContent = function (__s14param0) {
    this._itemVOList ||= [];
    __s14param0.id = this._idCounter++;
    this._itemVOList.push(__s14param0);
    this._itemCount = this._itemVOList.length;
  };
  SimpleScrollItemList.prototype.removeContent = function (__s16param0) {
    if (this._itemVOList) {
      this._itemVOList.splice(this._itemVOList.indexOf(__s16param0), 1);
      this._itemCount = this._itemVOList.length;
    }
  };
  SimpleScrollItemList.prototype.initList = function (__s19param0 = 0) {
    var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__dep_exact_f855840627e6e145.int(__s19param0 / this._scrollStep), 0, this._itemCount));
    var __s19local1 = Math.max(0, Math.ceil((this._itemCount - this._itemsVisibleAtOnce) / this._scrollStep));
    this._scrollComponent.init(0, __s19local1);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._scrollComponent.scrollToValue(__s19local0);
    if (__s19local1 > 0) {
      this._scrollComponent.setVisibility(true);
    } else {
      this._scrollComponent.setVisibility(false);
    }
  };
  SimpleScrollItemList.prototype.onScrollValueChange = function () {
    this.updateItemList(this._scrollComponent.currentValue * this._scrollStep);
    this.updateActiveStates();
    this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
  };
  SimpleScrollItemList.prototype.updateItemList = function (__s25param0 = 0) {
    this._currentStartIndex = __s25param0;
    for (var __s25local0 = 0; __s25local0 < this._itemsVisibleAtOnce; __s25local0++) {
      var __s25local1 = this._itemVEList[__s25local0];
      var __s25local2 = __s25local0 + __s25param0;
      if (__s25local2 < this._itemCount) {
        __s25local1.fillWithContent(this._itemVOList[__s25local2]);
        __s25local1.show();
        __s25local1.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        __s25local1.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        __s25local1.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      } else {
        __s25local1.hide();
        __s25local1.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        __s25local1.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        __s25local1.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      }
    }
  };
  SimpleScrollItemList.prototype.setActiveItemVO = function (__s31param0, __s31param1, __s31param2 = false) {
    if (!(__s31param0 > this._itemVOList.length)) {
      if (__s31param2) {
        this._itemVOList[__s31param0].active = __s31param1;
      } else {
        for (var __s31local0 = 0; __s31local0 < this._itemVOList.length; __s31local0++) {
          var __s31local1 = this._itemVOList[__s31local0];
          __s31local1.active = __s31param0 == __s31local1.id;
        }
      }
      this.updateActiveStates();
    }
  };
  SimpleScrollItemList.prototype.isItemActive = function (__s38param0) {
    return !!this._itemVOList[__s38param0] && this._itemVOList[__s38param0].active;
  };
  SimpleScrollItemList.prototype.updateActiveStates = function () {
    if (this._itemVEList) {
      for (var __s40local0 = 0; __s40local0 < this._itemVEList.length; __s40local0++) {
        var __s40local1 = this._itemVEList[__s40local0];
        if (__s40local1 && __s40local1.scrollItemVO) {
          __s40local1.isActive = this._itemVEList[__s40local0].scrollItemVO.active;
        }
      }
    }
  };
  SimpleScrollItemList.prototype.onMouseClickOnItem = function (__s46param0) {
    this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, __s46param0.scrollItem, __s46param0.originTarget));
  };
  SimpleScrollItemList.prototype.onMouseRollOverItem = function (__s48param0) {
    this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OVER, __s48param0.scrollItem, __s48param0.originTarget));
  };
  SimpleScrollItemList.prototype.onMouseRollOutItem = function (__s50param0) {
    this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ROLL_OUT, __s50param0.scrollItem, __s50param0.originTarget));
  };
  SimpleScrollItemList.prototype.remove = function () {
    for (var __s52local0 = 0; __s52local0 < this._itemsVisibleAtOnce; __s52local0++) {
      this._itemVEList[__s52local0].remove();
    }
    this._scrollComponent.hide();
  };
  SimpleScrollItemList.prototype.resetItems = function () {
    for (var __s56local0 = 0; __s56local0 < this._itemsVisibleAtOnce; __s56local0++) {
      this._itemVEList[__s56local0].reset();
    }
  };
  SimpleScrollItemList.prototype.clear = function () {
    this._itemVOList = [];
    this._itemCount = 0;
    this._idCounter = 0;
    for (var __s60local0 = 0; __s60local0 < this._itemsVisibleAtOnce; __s60local0++) {
      this._itemVEList[__s60local0].hide();
    }
  };
  Object.defineProperty(SimpleScrollItemList.prototype, "itemsVisibleAtOnce", {
    get: function () {
      return this._itemsVisibleAtOnce;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "currentStartIndex", {
    get: function () {
      return this._currentStartIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "voList", {
    get: function () {
      return this._itemVOList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "veList", {
    get: function () {
      return this._itemVEList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollItemList;
}(createjs.EventDispatcher);
exports.SimpleScrollItemList = __s0local0;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_instanceOf_IDynamicSizeScrollStrategy = require("gge-module:export_instanceOf_IDynamicSizeScrollStrategy");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
