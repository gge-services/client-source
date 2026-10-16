Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_AModel = require("gge-module:export_AModel");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GloryHUDModel() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._progress = 0;
    __s3local0._triggerAnimationStart = false;
    __s3local0._isAnimating = false;
    __s3local0._breakAnimation = false;
    __s3local0._currentTooltip = {
      t: "panel_state_yourTitle"
    };
    __s3local0._initialUpdate = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GloryHUDModel, __s1param0);
  GloryHUDModel.prototype.getCurrentTitle = function () {
    return __dep_export_CastleModel.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE);
  };
  Object.defineProperty(GloryHUDModel.prototype, "currentTooltip", {
    get: function () {
      return this._currentTooltip;
    },
    set: function (__s9param0) {
      this._currentTooltip = __s9param0;
      this.dispatchUpdate();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "userReachedHighestRank", {
    get: function () {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.titleData.getProgressPointsForNextTitleInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE));
      return __dep_export_CastleModel.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE) == __dep_export_CastleModel.CastleModel.titleData.getHighestPossibleTitleInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE) || __s11local0 < 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "triggerAnimationStart", {
    get: function () {
      return this._triggerAnimationStart;
    },
    set: function (__s15param0) {
      this._triggerAnimationStart = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "isAnimating", {
    get: function () {
      return this._isAnimating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "breakAnimation", {
    get: function () {
      return this._breakAnimation;
    },
    enumerable: true,
    configurable: true
  });
  GloryHUDModel.prototype.startAnimation = function () {
    if (!(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._initialUpdate < GloryHUDModel.THRESHOLD_ANIMATE)) {
      this._triggerAnimationStart = true;
      this._isAnimating = true;
      this._breakAnimation = false;
      this.dispatchUpdate();
    }
  };
  GloryHUDModel.prototype.stopAnimation = function () {
    this._triggerAnimationStart = false;
    this._isAnimating = false;
    this._breakAnimation = true;
    this.dispatchUpdate();
  };
  Object.defineProperty(GloryHUDModel.prototype, "currentPoints", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.getPointsInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "neededPoints", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__dep_export_CastleModel.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE).nextTitleID).threshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "progress", {
    get: function () {
      return this._progress;
    },
    set: function (__s32param0) {
      this._progress = __s32param0;
      this.dispatchUpdate();
    },
    enumerable: true,
    configurable: true
  });
  GloryHUDModel.__initialize_static_members = function () {
    GloryHUDModel.THRESHOLD_ANIMATE = 1000;
  };
  return GloryHUDModel;
}(__dep_export_AModel.AModel);
exports.GloryHUDModel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IModel", "IGloryHUDModel");
__s0local0.__initialize_static_members();
