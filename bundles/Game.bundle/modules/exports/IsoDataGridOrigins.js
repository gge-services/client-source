Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function () {
  function IsoDataGridOrigins(__s3param0) {
    this._originDic = new Map();
    this._groundStartPos = new __s0local0();
    this._groundEndPos = new __s0local0();
    this._groundDimension = new __s0local0();
    this._grid = __s3param0;
  }
  IsoDataGridOrigins.prototype.update = function () {
    this.updateGroundInfos();
    this.updateOriginPositions();
  };
  IsoDataGridOrigins.prototype.updateGroundInfos = function () {
    this._groundStartPos.x = this._groundStartPos.y = Number.MAX_VALUE;
    this._groundEndPos.x = this._groundEndPos.y = -Number.MAX_VALUE;
    for (var __s7local0 = 0, __s7local1 = this.grid.isoData.objects.groundObjects.list; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 !== undefined) {
        if (__s7local2.x < this._groundStartPos.x) {
          this._groundStartPos.x = __s7local2.x;
        }
        if (__s7local2.y < this._groundStartPos.y) {
          this._groundStartPos.y = __s7local2.y;
        }
        if (__s7local2.x2 > this._groundEndPos.x) {
          this._groundEndPos.x = __s7local2.x2;
        }
        if (__s7local2.y2 > this._groundEndPos.y) {
          this._groundEndPos.y = __s7local2.y2;
        }
      }
    }
    this._groundDimension.x = this._groundEndPos.x - this._groundStartPos.x + 1;
    this._groundDimension.y = this._groundEndPos.y - this._groundStartPos.y + 1;
  };
  IsoDataGridOrigins.prototype.updateOriginPositions = function () {
    this._originDic = new Map();
    this._originDic.set(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.NORMAL, new __s0local0());
    this._originDic.set(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER, new __s0local0(this._groundStartPos.x, this._groundStartPos.y));
    this._originDic.set(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, new __s0local0(this._groundEndPos.x, this._groundEndPos.y));
    this._originDic.set(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, new __s0local0(this._groundStartPos.x, this._groundEndPos.y));
    this._originDic.set(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, new __s0local0(this._groundEndPos.x, this._groundStartPos.y));
  };
  IsoDataGridOrigins.prototype.getOriginPos = function (__s18param0) {
    return this.originDic.get(__s18param0);
  };
  IsoDataGridOrigins.prototype.getOriginRect = function () {
    return new __s0local1(this._groundStartPos.x, this._groundStartPos.y, this._groundDimension.x - 1, this._groundDimension.y - 1);
  };
  Object.defineProperty(IsoDataGridOrigins.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridOrigins.prototype, "originDic", {
    get: function () {
      return this._originDic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridOrigins.prototype, "groundDimension", {
    get: function () {
      return this._groundDimension;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGridOrigins;
}();
exports.IsoDataGridOrigins = __s0local2;
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
