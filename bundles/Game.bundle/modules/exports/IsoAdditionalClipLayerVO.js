Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function IsoAdditionalClipLayerVO(__s3param0, __s3param1) {
    this._type = __dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.NONE;
    this._sourceLayer = __s3param0;
    this._type = __s3param1;
    this._newLayer = this.createCopyFromSourceLayer();
  }
  IsoAdditionalClipLayerVO.prototype.updatePosition = function () {
    var __s5local0 = this.sourceLayer.localToGlobal(new __s0local1(0, 0));
    var __s5local1 = this.newLayer.parent.globalToLocal(__s5local0);
    this.newLayer.x = __s5local1.x;
    this.newLayer.y = __s5local1.y;
  };
  IsoAdditionalClipLayerVO.prototype.createCopyFromSourceLayer = function () {
    var __s7local0 = __dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this.sourceLayer);
    if (__s7local0 === undefined) {
      return new __s0local0();
    }
    var __s7local1 = new __s7local0();
    __s7local1.name = this.sourceLayer.name;
    __s7local1.x = this.sourceLayer.x;
    __s7local1.y = this.sourceLayer.y;
    __s7local1.rotationX = this.sourceLayer.rotationX;
    __s7local1.rotationY = this.sourceLayer.rotationY;
    __s7local1.rotationZ = this.sourceLayer.rotationZ;
    __s7local1.scaleX = this.sourceLayer.scaleX;
    __s7local1.scaleY = this.sourceLayer.scaleY;
    __s7local1.scaleZ = this.sourceLayer.scaleZ;
    return __s7local1;
  };
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "sourceLayer", {
    get: function () {
      return this._sourceLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "newLayer", {
    get: function () {
      return this._newLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return IsoAdditionalClipLayerVO;
}();
exports.IsoAdditionalClipLayerVO = __s0local2;
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
