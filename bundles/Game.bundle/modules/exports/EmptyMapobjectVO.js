Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __s0local0 = function (__s1param0) {
  function EmptyMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._group = "Mapobject";
    __s3local0._name = "Empty";
    __s3local0._kingdomID = -1;
    __s3local0._isVisibleOnMap = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EmptyMapobjectVO, __s1param0);
  EmptyMapobjectVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._kingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kIDs", __s5param0, "-1"));
  };
  EmptyMapobjectVO.prototype.fillByListInit = function (__s7param0, __s7param1, __s7param2, __s7param3) {
    this._wodId = __s7param0;
    this._type = __s7param1;
    this._width = __s7param2;
    this._height = __s7param3;
  };
  Object.defineProperty(EmptyMapobjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName() + "_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "actualVisClassName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return EmptyMapobjectVO;
}(__dep_export_BasicMapobjectVO.BasicMapobjectVO);
exports.EmptyMapobjectVO = __s0local0;
