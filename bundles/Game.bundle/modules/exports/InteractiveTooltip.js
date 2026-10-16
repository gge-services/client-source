Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function InteractiveTooltip() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InteractiveTooltip, __s1param0);
  InteractiveTooltip.prototype.onMouseOver = function (__s5param0) {
    if (__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager.TOOLTIP_LABEL in __s5param0.target && __s5param0.target.toolTipText) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.tooltipManager.show(__s5param0.target.toolTipText, __s5param0.target);
    }
    if ((__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0.target, "BasicButton") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0.target, "MovieClip") && __s5param0.target.basicButton != null) && __s5param0.target.enabled) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
  };
  InteractiveTooltip.prototype.onMouseOut = function (__s9param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  InteractiveTooltip.prototype.addEventListener = function () {
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  InteractiveTooltip.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  InteractiveTooltip.prototype.onShow = function () {
    this.addEventListener();
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
  };
  InteractiveTooltip.prototype.hide = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  InteractiveTooltip.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    this.removeEventListener();
  };
  Object.defineProperty(InteractiveTooltip.prototype, "disp", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveTooltip.prototype, "fadeDuration", {
    get: function () {
      return 0.1;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveTooltip;
}(__dep_export_CastleComponent.CastleComponent);
exports.InteractiveTooltip = __s0local1;
