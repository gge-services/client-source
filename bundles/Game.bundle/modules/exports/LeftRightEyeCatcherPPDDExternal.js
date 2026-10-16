Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_PPDDExternalPart = require("gge-module:export_PPDDExternalPart");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function LeftRightEyeCatcherPPDDExternal(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, "PivatePrimeDayDynamicDialog_BottomEyeCatcher_" + __s3param1) || this;
    __s3local0.txtValues = __s3param2;
    __s3local0.currency = __s3param3;
    if (__s3local0.isLoaded) {
      __s3local0.onDisplayObjectClipIsLoaded(null);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LeftRightEyeCatcherPPDDExternal, __s1param0);
  LeftRightEyeCatcherPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (__s6param0 = null) {
    if (this.clipDisp) {
      if (this.txtValues) {
        for (var __s6local0 = 0; __s6local0 < this.txtValues.length; __s6local0++) {
          var __s6local1 = this.clipDisp["txt_value_" + (__s6local0 + 1)];
          if (__s6local1) {
            __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s6local1, this.txtValues[__s6local0]).autoFitToBounds = true;
          }
        }
      }
      if (this.currency) {
        var __s6local2 = this.clipDisp.mc_currency;
        if (__s6local2) {
          var __s6local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s6local2);
          __s6local3.addIconMc(__s6local2);
          var __s6local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(37, 32));
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s6local3, new this.currency.dataClass(), __s6local4);
        }
      }
    }
  };
  return LeftRightEyeCatcherPPDDExternal;
}(__dep_export_PPDDExternalPart.PPDDExternalPart);
exports.LeftRightEyeCatcherPPDDExternal = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
