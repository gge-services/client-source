Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEffectVO() {
    this._value = 0;
  }
  CastleEffectVO.createFromXML = function (__s5param0) {
    var __s5local0 = [];
    for (var __s5local1 in __dep_export_CastleEffectEnum.CastleEffectEnum.allValues) {
      var __s5local2 = __dep_export_CastleEffectEnum.CastleEffectEnum.allValues[__s5local1];
      if (__s5local2 !== undefined) {
        var __s5local3 = __s5param0[__s5local2.name] || "";
        if (__s5local3.length > 0) {
          var __s5local4 = new CastleEffectVO();
          __s5local4.type = __s5local2;
          __s5local4.value = Number(__s5local3);
          __s5local0.push(__s5local4);
        }
      }
    }
    return __s5local0;
  };
  Object.defineProperty(CastleEffectVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (__s13param0) {
      this._type = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (__s17param0) {
      this._value = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "constructionItemTextId", {
    get: function () {
      return "ci_effect_" + this.type.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "buildingTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectVO;
}();
exports.CastleEffectVO = __s0local0;
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
