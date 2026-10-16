Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AView = require("gge-module:export_AView");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function (__s1param0) {
  function GloryHUDView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._gloryHUD = __s3param0;
    __s3local0.initProgressBar();
    __s3local0.initText();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GloryHUDView, __s1param0);
  GloryHUDView.prototype.initProgressBar = function () {
    this._progressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(this._gloryHUD.mc_hud.mc_progressBar);
    this._gloryHUD.mc_hud.mc_progressBar.mouseEnabled = false;
    this._gloryHUD.txt_progress.mouseEnabled = false;
    this._gloryHUD.txt_title.mouseEnabled = false;
  };
  GloryHUDView.prototype.initText = function () {
    this._itxt_progress = this.textFieldManager.registerTextField(this._gloryHUD.txt_progress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_title = this.textFieldManager.registerTextField(this._gloryHUD.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  GloryHUDView.prototype.update = function () {
    this.updateTexts();
    if (this.gloryHUD_model.triggerAnimationStart) {
      this._gloryHUD.mc_hud.gotoAndPlay(2);
      this._gloryHUD.mc_hud.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this.gloryHUD_model.triggerAnimationStart = false;
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._gloryHUD);
    } else if (this._gloryHUD.mc_hud.paused) {
      this._gloryHUD.doCache();
    }
  };
  GloryHUDView.prototype.updateTexts = function () {
    var __s13local0 = this.gloryHUD_model.getCurrentTitle();
    if (__s13local0) {
      this._itxt_title.textContentVO.textId = __s13local0.textID;
    }
    this._gloryHUD.toolTipText = this.gloryHUD_model.currentTooltip;
    this._progressBar.scaleX = this.gloryHUD_model.progress;
    if (this.gloryHUD_model.userReachedHighestRank) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._itxt_progress, this.gloryHUD_model.currentPoints);
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._itxt_progress, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.gloryHUD_model.currentPoints, this.gloryHUD_model.neededPoints]);
    }
  };
  GloryHUDView.prototype.onAnimationFinished = function (__s18param0) {
    if (this._gloryHUD.mc_hud.currentFrame >= this._gloryHUD.mc_hud.totalFrames - 1) {
      this._gloryHUD.mc_hud.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this._gloryHUD.mc_hud.gotoAndStop(1);
      this.loopHighlight();
    } else if (this._gloryHUD.mc_hud.paused) {
      this._gloryHUD.mc_hud.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this._gloryHUD.doCache();
    }
  };
  GloryHUDView.prototype.loopHighlight = function () {
    if (this._timer) {
      if (this._timer.currentCount == this._timer.repeatCount) {
        this._gloryHUD.doCache();
      }
      this._timer.reset();
    } else {
      this._timer = new __dep_exact_81dacdf05bd32292.Timer(1500, 1);
      this._timer.addEventListener(__s0local1.TIMER, this.bindFunction(this.loopAnimationCallBack));
    }
    this._timer.start();
  };
  GloryHUDView.prototype.loopAnimationCallBack = function (__s27param0) {
    this._gloryHUD.mc_hud.mc_glow.gotoAndPlay(2);
    if (this.gloryHUD_model.breakAnimation) {
      this._timer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.loopAnimationCallBack));
      this._timer = null;
    } else {
      this.loopHighlight();
    }
  };
  Object.defineProperty(GloryHUDView.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDView.prototype, "gloryHUD_model", {
    get: function () {
      return this._model;
    },
    enumerable: true,
    configurable: true
  });
  return GloryHUDView;
}(__dep_export_AView.AView);
exports.GloryHUDView = __s0local2;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local2, "IView");
