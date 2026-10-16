Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AVisualVO() {
    var __s3local0 = this;
    __s3local0._objectId = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE);
    __s3local0._wodId = -1;
    __s3local0._name = "";
    __s3local0._group = "";
    __s3local0._type = "";
    __s3local0._x = -1;
    __s3local0._y = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AVisualVO, __s1param0);
  AVisualVO.prototype.getVisualClassName = function () {
    var __s5local0 = this.name + "_" + this.group;
    if (this.type != "") {
      __s5local0 += "_" + this.type;
    }
    return __s5local0;
  };
  AVisualVO.prototype.destroy = function () {};
  AVisualVO.prototype.updateData = function () {};
  AVisualVO.prototype.dispatchValueObjectChanged = function () {
    this.dispatchEvent(new __dep_export_VisualVOEvent.VisualVOEvent(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AVisualVO.prototype.parseXmlNode = function (__s14param0) {
    this._wodId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("wodID", __s14param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s14param0);
    this._group = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("group", __s14param0);
    this._type = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("type", __s14param0);
    if (this._type == "-") {
      this._type = "";
    }
  };
  AVisualVO.prototype.parseServerObject = function (__s17param0) {
    this._objectId = __dep_exact_f855840627e6e145.int(__s17param0.shift());
    this._x = __dep_exact_f855840627e6e145.int(__s17param0.shift());
    this._y = __dep_exact_f855840627e6e145.int(__s17param0.shift());
  };
  Object.defineProperty(AVisualVO.prototype, "wodDataType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (__s23param0) {
      this._objectId = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    set: function (__s27param0) {
      this._wodId = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    set: function (__s31param0) {
      this._name = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "group", {
    get: function () {
      return this._group;
    },
    set: function (__s35param0) {
      this._group = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (__s39param0) {
      this._type = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    set: function (__s43param0) {
      this._x = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    set: function (__s47param0) {
      this._y = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AVisualVO.prototype, "pos", {
    get: function () {
      return new __s0local0(this.x, this.y);
    },
    enumerable: true,
    configurable: true
  });
  return AVisualVO;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.AVisualVO = __s0local1;
