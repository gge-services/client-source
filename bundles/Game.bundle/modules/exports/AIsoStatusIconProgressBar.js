Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function AIsoStatusIconProgressBar() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoStatusIconProgressBar, __s1param0);
  AIsoStatusIconProgressBar.prototype.createDisp = function () {
    var __s5local0 = new this.iconType.dispClass();
    this.dispComponent.addDisp(__s5local0);
    __s5local0.scaleX = __s5local0.scaleY = 2;
  };
  AIsoStatusIconProgressBar.prototype.updateFrame = function () {
    var __s7local0 = this.getBarClip();
    if (__s7local0) {
      __s7local0.mc_icon.gotoAndStop(this.getDispFrame());
    }
  };
  AIsoStatusIconProgressBar.prototype.updateBarContent = function () {
    var __s10local0 = this.getBarClip();
    if (__s10local0) {
      var __s10local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.getTextField(__s10local0.txt_time);
      if (__s10local1 && __s10local1.textContentVO) {
        __s10local1.textContentVO.stringValue = this.getBarText();
      } else {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s10local0.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(this.getBarText()), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      }
      __s10local0.barMc.scaleX = this.getBarFillFactor();
    }
  };
  AIsoStatusIconProgressBar.prototype.update = function (__s15param0) {
    this.updateBarContent();
    this.dispComponent.updateCache();
  };
  AIsoStatusIconProgressBar.prototype.getDispFrame = function () {
    return 1;
  };
  AIsoStatusIconProgressBar.prototype.getBarText = function () {
    return "";
  };
  AIsoStatusIconProgressBar.prototype.getBarFillFactor = function () {
    return 0;
  };
  AIsoStatusIconProgressBar.prototype.getBarClip = function () {
    return this.dispComponent.dispContainer.getChildAt(0);
  };
  AIsoStatusIconProgressBar.prototype.getDispHeight = function () {
    return __s1param0.prototype.getDispHeight.call(this) + 40;
  };
  AIsoStatusIconProgressBar.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.updateFrame();
    this.updateBarContent();
  };
  return AIsoStatusIconProgressBar;
}(require("gge-module:export_AIsoStatusIcon").AIsoStatusIcon);
exports.AIsoStatusIconProgressBar = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
