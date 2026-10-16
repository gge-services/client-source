Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResourceComponentWithStorageBar(__s3param0, __s3param1, __s3param2 = new __s0local0(25, 22)) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0._resource = __s3param1;
    __s3local0.size = __s3param2;
    __s3local0.resourceTextfield = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0, true));
    __s3local0.updateIcon();
    __s3local0._disp.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceComponentWithStorageBar, __s1param0);
  ResourceComponentWithStorageBar.prototype.updateIcon = function () {
    var __s5local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, this.size);
    __s5local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp), __dep_export_CollectableHelper.CollectableHelper.createVO(this._resource), __s5local0);
  };
  ResourceComponentWithStorageBar.prototype.setValue = function (__s7param0, __s7param1 = -1) {
    this.resourceTextfield.textContentVO.numberValue = __s7param0;
    if (__s7param1 > 0) {
      this._disp.mc_storagebar.visible = true;
      var __s7local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s7param0 / __s7param1, 0, 1);
      this._disp.mc_storagebar.scaleX = __s7local0;
      var __s7local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s7local1.color = __s7local0 == 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __s7local0 >= 0.8 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW : __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_GREEN;
      this._disp.mc_storagebar.useFilters([new createjs.ColorFilter(__s7local1.redMultiplier, __s7local1.greenMultiplier, __s7local1.blueMultiplier, __s7local1.alphaMultiplier, __s7local1.redOffset, __s7local1.greenOffset, __s7local1.blueOffset, __s7local1.alphaOffset)]);
    } else {
      this._disp.mc_storagebar.visible = false;
    }
    this.updateIcon();
  };
  Object.defineProperty(ResourceComponentWithStorageBar.prototype, "resource", {
    set: function (__s11param0) {
      this._resource = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceComponentWithStorageBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceComponentWithStorageBar;
}(__dep_export_CastleComponent.CastleComponent);
exports.ResourceComponentWithStorageBar = __s0local1;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
