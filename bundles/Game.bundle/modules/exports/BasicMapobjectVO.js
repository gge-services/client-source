Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AVisualVO = require("gge-module:export_AVisualVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function BasicMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isVisibleOnMap = false;
    __s3local0._absAreaPosX = 0;
    __s3local0._absAreaPosY = 0;
    __s3local0._areaType = NaN;
    __s3local0._width = 0;
    __s3local0._height = 0;
    __s3local0._kingdomID = 0;
    __s3local0._mapID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMapobjectVO, __s1param0);
  BasicMapobjectVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._width = __dep_exact_f855840627e6e145.int(__s5param0.width || "");
    this._height = __dep_exact_f855840627e6e145.int(__s5param0.height || "");
  };
  BasicMapobjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._absAreaPosX = __dep_exact_f855840627e6e145.int(__s7param0[1]);
    this._absAreaPosY = __dep_exact_f855840627e6e145.int(__s7param0[2]);
  };
  Object.defineProperty(BasicMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return this._isVisibleOnMap;
    },
    set: function (__s11param0) {
      this._isVisibleOnMap = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPosX", {
    get: function () {
      return this._absAreaPosX;
    },
    set: function (__s15param0) {
      this._absAreaPosX = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPosY", {
    get: function () {
      return this._absAreaPosY;
    },
    set: function (__s19param0) {
      this._absAreaPosY = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "absAreaPos", {
    get: function () {
      return new __s0local0(this._absAreaPosX, this._absAreaPosY);
    },
    set: function (__s23param0) {
      this._absAreaPosX = __dep_exact_f855840627e6e145.int(__s23param0.x);
      this._absAreaPosY = __dep_exact_f855840627e6e145.int(__s23param0.y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "x", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AVisualVO.AVisualVO.prototype, "x").get.call(this);
    },
    set: function (__s27param0) {
      this._x = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "y", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AVisualVO.AVisualVO.prototype, "y").get.call(this);
    },
    set: function (__s31param0) {
      this._y = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    set: function (__s35param0) {
      this._areaType = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (__s43param0) {
      this._kingdomID = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    set: function (__s47param0) {
      this._mapID = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName();
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobjectVO.prototype.resetVO = function () {};
  Object.defineProperty(BasicMapobjectVO.prototype, "areaKey", {
    get: function () {
      return this._areaKey;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMapobjectVO;
}(__dep_export_AVisualVO.AVisualVO);
exports.BasicMapobjectVO = __s0local1;
