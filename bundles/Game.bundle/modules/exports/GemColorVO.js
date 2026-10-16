Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function GemColorVO() {
    this._id = -1;
    this._color = 0;
  }
  GemColorVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("gemColorID", __s5param0, -1));
    this._color = __dep_export_CastleXMLUtils.CastleXMLUtils.getUintAttribute("colorCode", __s5param0);
  };
  Object.defineProperty(GemColorVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemColorVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  return GemColorVO;
}();
exports.GemColorVO = __s0local0;
