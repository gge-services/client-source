Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ACastleStatusIcon(__s3param0, __s3param1 = ACastleStatusIcon.PRIORITY_LOW) {
    this._priority = 100;
    this._inited = false;
    this.colors = [];
    this.colors.push("#438707");
    this.colors.push("#88D326");
    this.colors.push("#F2CB0C");
    this.colors.push("#EF740F");
    this.colors.push("#CC1C05");
    this._iconClip = ACastleStatusIcon.getAsExternalClip(__s3param0);
    this._priority = __s3param1;
    this.init();
    this.setVisibility();
    this._allowCaching = true;
  }
  ACastleStatusIcon.prototype.init = function () {
    if (this._iconClip.isLoaded) {
      this.initLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.initLoaded), 3);
    }
  };
  ACastleStatusIcon.prototype.updateRemainingFromTimestamps = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    var __s9local1 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(this.calculateRemainingPercentage(__dep_export_CastleMathHelper.CastleMathHelper.clamp((__s9param1 - __s9local0) / (__s9param1 - __s9param0), 0, 1)), 0.01, 1);
    this.setRemainingPercentageTime(__s9local1);
  };
  ACastleStatusIcon.prototype.calculateRemainingPercentage = function (__s11param0) {
    var __s11local0 = 1 - __s11param0;
    if (__s11local0 > 0.9) {
      return (__s11local0 * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(__s11local0 + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  ACastleStatusIcon.prototype.setRemainingPercentageTime = function (__s15param0) {
    if (this.iconDisp && this.iconDisp.barItem && this.iconDisp.barItem.bar) {
      this.iconDisp.barItem.bar.scaleX = __s15param0;
      var __s15local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      var __s15local1 = this.colors[Math.min(ACastleStatusIcon.colorCount - 1, Math.floor((1 - __s15param0) * ACastleStatusIcon.colorCount))];
      __s15local0.color = __dep_exact_f855840627e6e145.int("0x" + __s15local1.substr(1));
      this.iconDisp.barItem.bar.useFilters([new createjs.ColorFilter(__s15local0.redMultiplier, __s15local0.greenMultiplier, __s15local0.blueMultiplier, __s15local0.alphaMultiplier, __s15local0.redOffset, __s15local0.greenOffset, __s15local0.blueOffset, __s15local0.alphaOffset)]);
      this.updateCache();
    }
  };
  ACastleStatusIcon.prototype.update = function () {
    if (this._iconClip.isLoaded) {
      this.updateLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.updateWhenLoaded), 1);
    }
    this.updateCache(false);
  };
  ACastleStatusIcon.prototype.updateWhenLoaded = function (__s22param0 = null) {
    this.updateLoaded();
  };
  ACastleStatusIcon.prototype.updateLoaded = function () {};
  Object.defineProperty(ACastleStatusIcon.prototype, "icon", {
    get: function () {
      return this._iconClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.initLoaded = function (__s28param0 = null) {
    this.icon.visible = false;
    this.createBasicButton();
    this.icon.statusIcon = this;
    this.icon.gotoAndStop(1);
    this._inited = true;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.icon.scaleX = this.icon.scaleY = 0.8;
    }
    this.addEventListenerForVisibility();
  };
  ACastleStatusIcon.prototype.createBasicButton = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._iconClip.currentshownDisplayObject, "BasicButton")) {
      this.icon.basicButton = this._iconClip.currentshownDisplayObject;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.icon);
    }
    if (this.icon.basicButton.setCaching) {
      this.icon.basicButton.setCaching(this._allowCaching);
    }
  };
  ACastleStatusIcon.getAsExternalClip = function (__s36param0, __s36param1 = null, __s36param2 = null) {
    __s36param1 ||= ACastleStatusIcon.assetFileURL(__s36param0);
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s36param0, __s36param1, __s36param2, 0, false);
  };
  ACastleStatusIcon.assetFileURL = function (__s38param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s38param0);
  };
  ACastleStatusIcon.prototype.disposeLoaded = function () {
    if (this.icon) {
      if (this.icon.parent) {
        this.removeFromContainer(this.icon.parent);
      }
      this.removeEventListenerForVisibility();
      this.removeEventListenerForShowTime();
      this._changedVisibilityCallback = null;
      this.icon.statusIcon = null;
      if (this.icon.basicButton) {
        this.icon.basicButton.removeMouseEventListener();
        this.icon.basicButton = null;
      }
    }
  };
  ACastleStatusIcon.prototype.disposeWhenLoaded = function (__s45param0 = null) {
    this.disposeLoaded();
  };
  ACastleStatusIcon.prototype.dispose = function () {
    if (this._iconClip.isLoaded) {
      this.disposeLoaded();
    } else {
      this._iconClip.clipLoaded.removeAll();
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.disposeWhenLoaded));
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "changedVisibilityCallback", {
    set: function (__s51param0) {
      this._changedVisibilityCallback = __s51param0;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.show = function () {
    if (this._iconClip.isLoaded) {
      this.onShowWhenLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onShowWhenLoaded));
    }
  };
  ACastleStatusIcon.prototype.onShowWhenLoaded = function (__s58param0 = null) {
    this.showLoaded(__s58param0);
    this.updateCache(false);
  };
  ACastleStatusIcon.prototype.updateCache = function (__s60param0 = true) {
    if (this._allowCaching && this.icon) {
      if (this.icon.cacheCanvas && __s60param0) {
        this.icon.updateCache();
      } else {
        this.icon.doCache();
      }
    }
  };
  ACastleStatusIcon.prototype.showLoaded = function (__s65param0 = null) {
    if (!this.icon.visible) {
      this.icon.visible = true;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
      this.addEventListenerForShowTime();
      if (this.icon.basicButton) {
        this.icon.basicButton.addMouseEventListener();
      }
    }
  };
  ACastleStatusIcon.prototype.hide = function () {
    if (this._iconClip.isLoaded) {
      this.hideLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.hideLoaded));
    }
  };
  ACastleStatusIcon.prototype.hideLoaded = function (__s74param0 = null) {
    if (this.icon && this.icon.visible) {
      this.icon.visible = false;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
      this.removeEventListenerForShowTime();
      if (this.icon.basicButton) {
        this.icon.basicButton.removeMouseEventListener();
      }
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.stopAllMoviesGotoFrameOne(this.icon);
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "visible", {
    get: function () {
      return !!this.icon && this.icon.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.setPosition = function (__s83param0, __s83param1) {
    if (this.icon) {
      this.icon.x = __s83param0;
      this.icon.y = __s83param1;
    }
  };
  ACastleStatusIcon.prototype.setTooltip = function (__s86param0, __s86param1 = null) {
    this._tooltipId = __s86param0;
    this._tooltipParams = __s86param1;
    if (this._iconClip.isLoaded) {
      this.setTooltipLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.setTooltipLoaded), 1);
    }
  };
  ACastleStatusIcon.prototype.setTooltipLoaded = function (__s90param0 = null) {
    if (this._tooltipParams) {
      this.icon.toolTipText = {
        t: this._tooltipId,
        p: this._tooltipParams
      };
    } else {
      this.icon.toolTipText = this._tooltipId;
    }
  };
  ACastleStatusIcon.prototype.addToContainer = function (__s94param0) {
    this._container = __s94param0;
    if (this._iconClip.isLoaded) {
      this.addToContainerLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.addToContainerLoaded), 1);
    }
  };
  ACastleStatusIcon.prototype.addToContainerLoaded = function (__s98param0 = null) {
    if (this._container) {
      this._container.addChild(this.icon);
    }
  };
  ACastleStatusIcon.prototype.removeFromContainer = function (__s101param0) {
    this._container = __s101param0;
    if (this._iconClip.isLoaded) {
      this.removeFromContainerLoaded();
    } else {
      this._iconClip.clipLoaded.remove(this.bindFunction(this.addToContainerLoaded));
    }
  };
  ACastleStatusIcon.prototype.removeFromContainerLoaded = function (__s105param0 = null) {
    if (this._container && this._container.contains(this.icon)) {
      this._container.removeChild(this.icon);
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "width", {
    get: function () {
      return this.icon.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "height", {
    get: function () {
      return this.icon.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "iconDisp", {
    get: function () {
      return this.icon;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.setVisibility = function () {
    if (this._iconClip.isLoaded) {
      this.setVisibilityLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.setVisibilityWhenLoaded), 1);
    }
    if (this.icon && this.icon.visible) {
      this.updateCache(false);
    }
  };
  ACastleStatusIcon.prototype.setVisibilityLoaded = function () {};
  ACastleStatusIcon.prototype.setVisibilityWhenLoaded = function (__s121param0 = null) {
    if (!this._inited) {
      this.initLoaded();
    }
    this.setVisibilityLoaded();
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "allowCaching", {
    get: function () {
      return this._allowCaching;
    },
    set: function (__s126param0) {
      this._allowCaching = __s126param0;
      if (!__s126param0 && this.icon && this.icon.cacheCanvas) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.icon);
        if (this.icon.basicButton) {
          this.icon.basicButton.setCaching(false);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.onClick = function (__s130param0 = null) {};
  ACastleStatusIcon.prototype.onLayoutStateChanged = function () {
    this.setVisibility();
  };
  ACastleStatusIcon.prototype.addEventListenerForVisibility = function () {};
  ACastleStatusIcon.prototype.removeEventListenerForVisibility = function () {};
  ACastleStatusIcon.prototype.addEventListenerForShowTime = function () {};
  ACastleStatusIcon.prototype.removeEventListenerForShowTime = function () {};
  Object.defineProperty(ACastleStatusIcon.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "iconClip", {
    get: function () {
      return this._iconClip;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.PRIORITY_WEBSHOP = 2;
  ACastleStatusIcon.PRIORITY_LOWER = 50;
  ACastleStatusIcon.PRIORITY_LOW = 100;
  ACastleStatusIcon.PRIORITY_MIDDLE = 200;
  ACastleStatusIcon.PRIORITY_HIGH = 300;
  ACastleStatusIcon.colorCount = 5;
  return ACastleStatusIcon;
}();
exports.ACastleStatusIcon = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
