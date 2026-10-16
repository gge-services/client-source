Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleExternalSubLayerDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalSubLayerDialog, __s1param0);
  CastleExternalSubLayerDialog.prototype.changeCategory = function (__s5param0) {
    this._currentCategory = __s5param0;
    if (this._currentSublayer) {
      this._currentSublayer.hide();
    }
  };
  CastleExternalSubLayerDialog.prototype.showSublayer = function (__s8param0, __s8param1) {
    if (__s8param0) {
      __s8param0.show(__s8param1);
      this._currentSublayer = __s8param0;
    } else {
      console.warn(this.dialogClassName + ": no sublayer for category " + this._currentCategory);
    }
  };
  CastleExternalSubLayerDialog.prototype.hideAllSublayer = function () {
    var __s12local0 = this._subLayer ? Array.from(this._subLayer.values()) : null;
    if (__s12local0 != null) {
      for (var __s12local1 = 0, __s12local2 = __s12local0; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined) {
          __s12local3.hide();
        }
      }
    }
  };
  CastleExternalSubLayerDialog.prototype.hideLoaded = function (__s18param0 = null) {
    this.hideAllSublayer();
    __s1param0.prototype.hideLoaded.call(this);
    this._currentSublayer = null;
    this._currentCategory = null;
  };
  return CastleExternalSubLayerDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleExternalSubLayerDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
