Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_ASingleController = require("gge-module:export_ASingleController");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GloryHUDAnimationController() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.addEventListeners();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GloryHUDAnimationController, __s1param0);
  GloryHUDAnimationController.prototype.addEventListeners = function () {
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateProgress));
  };
  GloryHUDAnimationController.prototype._destroy = function () {
    __s1param0.prototype._destroy.call(this);
    __dep_export_CastleModel.CastleModel.titleData.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateProgress));
  };
  GloryHUDAnimationController.prototype.updateProgress = function (__s9param0 = null) {
    this.setGloryProgress();
    this.startAnimation();
    this.setCurrentTooltip();
  };
  GloryHUDAnimationController.prototype.setCurrentTooltip = function () {
    this._model.currentTooltip = {
      t: this._model.userReachedHighestRank ? "panel_state_yourTitle" : "panel_state_yourTitle_progress",
      p: [__dep_export_CastleModel.CastleModel.titleData.getProgressPointsForNextTitleInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE)]
    };
  };
  GloryHUDAnimationController.prototype.setModel = function (__s13param0) {
    __s1param0.prototype.setModel.call(this, __s13param0);
    this.updateProgress();
  };
  GloryHUDAnimationController.prototype.setGloryProgress = function () {
    if (this._model) {
      this._model.progress = __dep_export_CastleModel.CastleModel.titleData.getProgressForNextTitleInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE);
    }
  };
  GloryHUDAnimationController.prototype.startAnimation = function () {
    if (this._model) {
      this._model.startAnimation();
    }
  };
  GloryHUDAnimationController.prototype.stopAnimation = function () {
    if (this._model) {
      this._model.stopAnimation();
    }
  };
  return GloryHUDAnimationController;
}(__dep_export_ASingleController.ASingleController);
exports.GloryHUDAnimationController = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IController", "IGloryHUDAnimationController");
