Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_GFXEvent = require("gge-module:export_GFXEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local2 = function () {
  function CastleAttackAlertFrameComponent() {
    this.frameMc = new __s0local0();
    this.addListeners();
  }
  CastleAttackAlertFrameComponent.prototype.addListeners = function () {
    __dep_export_CastleModel.CastleModel.gfxData.addEventListener(__dep_export_GFXEvent.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED, this.bindFunction(this.onAlertFrameVisibilityChanged));
    this.frameMc.addEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    __dep_export_CastleModel.CastleModel.armyData.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningChanged));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
  };
  CastleAttackAlertFrameComponent.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.armyData.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningChanged));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
    __dep_export_CastleModel.CastleModel.gfxData.removeEventListener(__dep_export_GFXEvent.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED, this.bindFunction(this.onAlertFrameVisibilityChanged));
    this.frameMc.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
  };
  CastleAttackAlertFrameComponent.prototype.destroy = function () {
    this.removeListeners();
    this.clearFrame();
  };
  CastleAttackAlertFrameComponent.prototype.drawFrame = function () {
    this.clearFrame();
    for (var __s11local0 = 0; __s11local0 < 12; __s11local0++) {
      this.panelDisp.graphics.lineStyle(2, __dep_export_ClientConstColor.ClientConstColor.ATTACK_ALERT_FRAME_COLOR, 1 - Math.pow(__s11local0, 0.5) * 0.288);
      this.panelDisp.graphics.drawRect(__s11local0 + 1, __s11local0 + 1, this.panelDisp.stage.stageWidth - 1 - __s11local0 * 2, this.panelDisp.stage.stageHeight - 1 - __s11local0 * 2);
    }
    try {
      this.panelDisp.doCache();
    } catch (__s16local0) {
      console.warn("Failed to cache attack alert frame:", __s16local0);
    }
  };
  CastleAttackAlertFrameComponent.prototype.clearFrame = function () {
    this.panelDisp.graphics.clear();
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
  };
  CastleAttackAlertFrameComponent.prototype.checkAndSetVisibility = function () {
    if (this.isVisible) {
      this.drawFrame();
    } else {
      this.clearFrame();
    }
    try {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.update();
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
    } catch (__s25local0) {
      console.warn("Failed to update stage in checkAndSetVisibility:", __s25local0);
    }
  };
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.gfxData.alertFrameVisible && __dep_export_CastleModel.CastleModel.armyData.isAttackWarning && !!this.panelDisp.stage;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackAlertFrameComponent.prototype.onAlertFrameVisibilityChanged = function (__s29param0) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onAddedToStage = function (__s31param0) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onAttackWarningChanged = function (__s33param0) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onStageResize = function (__s35param0) {
    this.checkAndSetVisibility();
  };
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "panelDisp", {
    get: function () {
      return this.frameMc;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackAlertFrameComponent;
}();
exports.CastleAttackAlertFrameComponent = __s0local2;
