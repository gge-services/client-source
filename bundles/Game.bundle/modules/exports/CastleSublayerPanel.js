Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleSublayerPanel(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.sublayers = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSublayerPanel, __s1param0);
  CastleSublayerPanel.prototype.hideAllSublayer = function () {
    if (this.sublayers != null) {
      for (var __s5local0 = 0, __s5local1 = this.sublayers; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          this.hideSubLayer(__s5local2, false);
        }
      }
    }
  };
  CastleSublayerPanel.prototype.addSublayer = function (__s11param0) {
    this.sublayers.push(__s11param0);
    __s11param0.initPosY = __s11param0.y;
    this.hideAllSublayer();
  };
  CastleSublayerPanel.prototype.showSubLayer = function (__s13param0) {
    if (!__s13param0.visible) {
      this.hideAllSublayer();
      __s13param0.visible = true;
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s13param0, 0.3, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s13param0, 0.3, {
        y: __s13param0.initPosY + 10
      }, {
        y: __s13param0.initPosY,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, [__s13param0.name]));
      this.disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    }
  };
  CastleSublayerPanel.prototype.hideSubLayer = function (__s16param0, __s16param1 = true) {
    __s16param0.visible = false;
    this.disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, [__s16param0.name]));
    if (this.dispToCache.cacheCanvas && __s16param1) {
      this.dispToCache.updateCache();
    }
  };
  CastleSublayerPanel.prototype.onSublayerRollOut = function (__s19param0) {
    this.hideAllSublayer();
    if (this.dispToCache.cacheCanvas) {
      this.dispToCache.updateCache();
    }
  };
  return CastleSublayerPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleSublayerPanel = __s0local1;
