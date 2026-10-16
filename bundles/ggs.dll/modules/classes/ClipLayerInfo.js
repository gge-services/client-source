Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_LayerInfo = require("gge-module:class_LayerInfo");
var __s0local0 = function () {
  function ClipLayerInfo(__s3param0 = null) {
    if (__s3param0) {
      this.parseLayer(__s3param0);
    }
  }
  Object.defineProperty(ClipLayerInfo.prototype, "layer", {
    get: function () {
      return this._layer;
    },
    set: function (__s8param0) {
      this._layer = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  ClipLayerInfo.prototype.parseLayer = function (__s10param0) {
    var __s10local0;
    var __s10local1;
    var __s10local2;
    this._layer = [];
    var __s10local3 = 0;
    for (var __s10local4 = 0; __s10local4 < __s10param0.numChildren; __s10local4++) {
      if (__s10local0 = __s10param0.getChildAt(__s10local4)) {
        var __s10local5 = __s10local0.name;
        if (__s10local0.numChildren > 0) {
          for (var __s10local6 = 0; __s10local6 < __s10local0.numChildren; __s10local6++) {
            if (__s10local1 = __s10local0.getChildAt(__s10local6)) {
              __s10local2 = new __dep_class_LayerInfo.LayerInfo(__s10local1.x, __s10local1.y, __s10local1.scaleX, __s10local3, __s10local5, __s10local1.rotation);
              this._layer.push(__s10local2);
              __s10local3++;
            }
          }
        } else {
          __s10local2 = new __dep_class_LayerInfo.LayerInfo(__s10local0.x, __s10local0.y, __s10local0.scaleX, __s10local3, __s10local5, __s10local0.rotation);
          this._layer.push(__s10local2);
          __s10local3++;
        }
      }
    }
  };
  ClipLayerInfo.prototype.getLayerByName = function (__s20param0) {
    var __s20local0 = [];
    for (var __s20local1 = 0, __s20local2 = this._layer; __s20local1 < __s20local2.length; __s20local1++) {
      var __s20local3 = __s20local2[__s20local1];
      if (__s20local3.layerName == __s20param0) {
        __s20local0.push(__s20local3);
      }
    }
    return __s20local0;
  };
  return ClipLayerInfo;
}();
exports.ClipLayerInfo = __s0local0;
