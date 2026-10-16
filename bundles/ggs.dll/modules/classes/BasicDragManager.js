Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BasicDragManager(__s3param0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 0, __s3param4 = 1) {
    this.dragVO = null;
    this._scaleMode = 1;
    this._tempScaleMode = 0;
    this._posX = 1;
    this._posY = 1;
    this._alpha = 1;
    this.dragLayer = __s3param0;
    if (__s3param1 != 0) {
      this._scaleMode = __s3param1;
    }
    if (__s3param2 != 0) {
      this._posX = __s3param2;
    }
    if (__s3param3 != 0) {
      this._posY = __s3param3;
    }
    this._alpha = __s3param4;
  }
  Object.defineProperty(BasicDragManager.prototype, "scaleMode", {
    set: function (__s8param0) {
      this._tempScaleMode = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicDragManager.prototype.startDragging = function (__s10param0) {
    this.dragVO = __s10param0;
    if (this._tempScaleMode != 0) {
      this.dragVO.dragMC.scaleX = this._tempScaleMode;
      this.dragVO.dragMC.scaleY = this._tempScaleMode;
    } else {
      this.dragVO.dragMC.scaleX = this._scaleMode;
      this.dragVO.dragMC.scaleY = this._scaleMode;
    }
  };
  BasicDragManager.prototype.stopDragging = function () {
    if (this.dragVO) {
      this.dragVO.dragSourceMC.alpha = 1;
      this.dragLayer.removeChild(this.dragVO.dragMC);
      this.dragVO = null;
      this._tempScaleMode = 0;
    }
  };
  Object.defineProperty(BasicDragManager.prototype, "isDragging", {
    get: function () {
      return this.dragVO != null;
    },
    enumerable: true,
    configurable: true
  });
  return BasicDragManager;
}();
exports.BasicDragManager = __s0local0;
