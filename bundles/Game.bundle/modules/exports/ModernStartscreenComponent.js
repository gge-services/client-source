Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleStartscreenComponent = require("gge-module:export_CastleStartscreenComponent");
var __dep_export_ModernStartscreenPanel = require("gge-module:export_ModernStartscreenPanel");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function ModernStartscreenComponent() {
    return __s1param0.call(this, ModernStartscreenComponent.createBackground()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernStartscreenComponent, __s1param0);
  ModernStartscreenComponent.createBackground = function () {
    var __s5local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName("ModernStartscreenBackground");
    if (!__s5local0) {
      console.error("ModernStartscreenBackground asset not loaded - asset loading race condition detected");
      (__s5local1 = new __s0local0()).name = "ModernStartscreenBackground_Fallback";
      return __s5local1;
    }
    try {
      return new __s5local0();
    } catch (__s9local0) {
      var __s5local1;
      (__s5local1 = new __s0local0()).name = "ModernStartscreenBackground_Fallback";
      return __s5local1;
    }
  };
  ModernStartscreenComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.addStillFrontLogo();
  };
  ModernStartscreenComponent.prototype.initBackground = function () {
    var __s13local0 = this;
    __s1param0.prototype.initBackground.call(this);
    if (ModernStartscreenComponent.USE_PROMO_BACKGROUND) {
      var __s13local1 = "CastleStartscreenBackground_BG_Promo";
      this._bgClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s13local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s13local1), null, 0, false, null, false, 1, false, false, true);
      this.startScreen.addChildAt(this._bgClip, 1);
      this._bgClip.doWhenLoaded(function (__s16param0) {
        __s13local0.updatePosition();
      });
    }
  };
  ModernStartscreenComponent.prototype.showBackground = function () {
    if (!ModernStartscreenComponent.USE_PROMO_BACKGROUND) {
      __s1param0.prototype.showBackground.call(this);
    }
  };
  ModernStartscreenComponent.prototype.hideBackground = function () {
    if (ModernStartscreenComponent.USE_PROMO_BACKGROUND) {
      document.getElementById("edgeStartscreenVideoReplacement").style.display = "none";
    } else {
      __s1param0.prototype.hideBackground.call(this);
    }
  };
  ModernStartscreenComponent.prototype.addStillFrontLogo = function () {
    if (!this._stillFrontLogo) {
      var __s25local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName("Logo_Stillfront");
      if (!__s25local0) {
        console.warn("Logo_Stillfront asset not loaded - skipping logo");
        return;
      }
      this._stillFrontLogo = new __s25local0();
    }
    this.startScreen.mc_bg.addChild(this._stillFrontLogo);
  };
  ModernStartscreenComponent.prototype.updatePosition = function () {
    var __s29local0 = this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth;
    var __s29local1 = this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight;
    var __s29local2 = __dep_exact_f855840627e6e145.int(document.getElementById("edgeStartscreenVideoReplacement").clientWidth) || 1920;
    var __s29local3 = __dep_exact_f855840627e6e145.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight) || 1080;
    var __s29local4 = __dep_exact_f855840627e6e145.int(Math.min(__s29local0, __s29local2));
    var __s29local5 = __dep_exact_f855840627e6e145.int(Math.min(__s29local1, __s29local3));
    var __s29local6 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s29local1 / 820, __dep_export_ModernStartscreenPanel.ModernStartscreenPanel.MIN_SCALE, __dep_export_ModernStartscreenPanel.ModernStartscreenPanel.MAX_SCALE);
    this.backgroundView.mc_progressBar.x = __s29local0 * 0.5;
    this.backgroundView.mc_progressBar.y = 375;
    this.loginBackgroundDisp.scaleX = this.loginBackgroundDisp.scaleY = __s29local6;
    this.loginBackgroundDisp.x = 0;
    this.loginBackgroundDisp.y = __s29local6 * 323;
    this.backgroundView.mc_bg.txt_version.x = -this.backgroundView.mc_bg.txt_version.width / 2;
    if (this.background) {
      this.background.x = __s29local0 / 2;
      this.background.y = 0;
    }
    if (this.copyrightDisp.visible) {
      this.copyrightDisp.x = __s29local4 / 2;
      this.copyrightDisp.y = __s29local5;
    }
    if (this._stillFrontLogo) {
      this._stillFrontLogo.scaleX = this._stillFrontLogo.scaleY = __s29local6;
      this._stillFrontLogo.x = __s29local4 / 2 - 70;
      this._stillFrontLogo.y = __s29local5 - 56;
      if (this.copyrightDisp.visible) {
        this._stillFrontLogo.y -= this.copyrightDisp.height;
      }
    }
    if (__dep_export_StartscreenHelper.StartscreenHelper.hasBackgroundAnimation()) {
      __dep_export_StartscreenHelper.StartscreenHelper.updateBackgroundAnimation(this.bgAnimationMP4Played);
    }
    if (this._backgroundSprite && this._backgroundSprite.stage) {
      this._backgroundSprite.width = __s29local0 / this.disp.scaleX;
      this._backgroundSprite.height = __s29local1 / this.disp.scaleY;
      this._backgroundSprite.x = -this.disp.x / this.disp.scaleX;
      this._backgroundSprite.y = -this.disp.y / this.disp.scaleY;
      if (ModernStartscreenComponent.USE_PROMO_BACKGROUND && this._bgClip && this._bgClip.stage) {
        var __s29local7 = __s29local0 / this.disp.scaleX;
        var __s29local8 = __s29local1 / this.disp.scaleY;
        var __s29local9 = Math.max(__s29local7 / 1920, __s29local8 / 1080);
        this._bgClip.scaleX = this._bgClip.scaleY = __s29local9;
        this._bgClip.x = -this.disp.x / this.disp.scaleX - (__s29local9 * 1920 - __s29local7) / 2;
        this._bgClip.y = -this.disp.y / this.disp.scaleY;
      }
      window.renderBgStageOnNextTick = true;
    }
  };
  Object.defineProperty(ModernStartscreenComponent.prototype, "loginBackgroundDisp", {
    get: function () {
      return this.backgroundView.mc_bg.mc_panelBG;
    },
    enumerable: true,
    configurable: true
  });
  ModernStartscreenComponent.USE_PROMO_BACKGROUND = false;
  return ModernStartscreenComponent;
}(__dep_export_CastleStartscreenComponent.CastleStartscreenComponent);
exports.ModernStartscreenComponent = __s0local1;
