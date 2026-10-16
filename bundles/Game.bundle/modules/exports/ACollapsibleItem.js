Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = function (__s1param0) {
  function ACollapsibleItem(__s3param0, __s3param1, __s3param2 = true) {
    var __s3local0 = this;
    __s3local0._isExpanded = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._headerMC = __s3param0.headerMC;
    __s3local0._contentMC = __s3param0.contentMC;
    __s3local0._properties = __s3param1;
    if (__s3local0._contentMC && __s3param2) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMask(__s3local0._contentMC);
      __s3local0._contentMC.alpha = 0;
      __s3local0._contentMC.visible = false;
      __s3local0._contentMC.mask.height = 0;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollapsibleItem, __s1param0);
  ACollapsibleItem.prototype.expand = function (__s6param0, __s6param1, __s6param2 = false) {
    this._isExpanded = __s6param0;
    if (__s6param1) {
      this._changeStartCallback(this);
    }
    this.applyStateChange(__s6param2);
  };
  ACollapsibleItem.prototype.applyStateChange = function (__s9param0 = false) {
    __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this.contentMC);
    __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this.contentMC.mask);
    var __s9local0 = __s9param0 ? 0 : this._properties.expandDuration;
    if (this._isExpanded) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC, __s9local0, {
        autoAlpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
    } else {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC, __s9local0, {
        autoAlpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
    if (this._properties.isVertical) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC.mask, __s9local0, {
        height: this._isExpanded ? this.contentHeight : 0,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    } else {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC.mask, __s9local0, {
        width: this._isExpanded ? this.contentWidth : 0,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    }
  };
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeStartCallback", {
    set: function (__s15param0) {
      this._changeStartCallback = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeUpdateCallback", {
    set: function (__s17param0) {
      this._changeUpdateCallback = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "onStateChangeCompleteCallback", {
    set: function (__s19param0) {
      this._changeCompleteCallback = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  ACollapsibleItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._changeStartCallback = null;
    this._changeUpdateCallback = null;
    this._changeCompleteCallback = null;
  };
  Object.defineProperty(ACollapsibleItem.prototype, "isLayoutEnabled", {
    get: function () {
      return this.disp.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentHeight", {
    get: function () {
      return this.contentMC.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentWidth", {
    get: function () {
      return this.contentMC.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return this._contentMC.y + this._contentMC.mask.height;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "width", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return this._contentMC.x + this._contentMC.mask.width;
      } else {
        return this._headerMC.width;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "margin", {
    get: function () {
      return this._properties.margin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "contentMC", {
    get: function () {
      return this._contentMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "headerMC", {
    get: function () {
      return this._headerMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "isExpanded", {
    get: function () {
      return this._isExpanded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollapsibleItem.prototype, "disp", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_CastleItemRenderer.CastleItemRenderer.prototype, "disp").get.call(this);
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleItemRenderer.CastleItemRenderer.prototype, "disp").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  return ACollapsibleItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ACollapsibleItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
