Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function DivisonRoundVO() {}
  DivisonRoundVO.prototype.fillFromParamXML = function (__s5param0) {
    this._divisionRoundID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("divisionRoundID", __s5param0, "-1", true));
    this._type = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("type", __s5param0, "", true);
    this._divisions = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("divisions", __s5param0, "-1", true));
    this._subdivisions = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("subdivisions", __s5param0);
    this._subdivisionSizes = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("subdivisionSizes", __s5param0);
    this._promotes = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("promotes", __s5param0);
    this._demotes = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("demotes", __s5param0);
  };
  Object.defineProperty(DivisonRoundVO.prototype, "divisionRoundID", {
    get: function () {
      return this._divisionRoundID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DivisonRoundVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DivisonRoundVO.prototype, "divisions", {
    get: function () {
      return this._divisions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DivisonRoundVO.prototype, "subdivisions", {
    get: function () {
      return this._subdivisions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DivisonRoundVO.prototype, "subdivisionSizes", {
    get: function () {
      return this._subdivisionSizes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DivisonRoundVO.prototype, "promotes", {
    get: function () {
      return this._promotes;
    },
    enumerable: true,
    configurable: true
  });
  DivisonRoundVO.prototype.getPromotesForDivision = function (__s19param0) {
    if (this._promotes && this._promotes.length >= __s19param0) {
      return this._promotes[__s19param0 - 1];
    } else {
      return 0;
    }
  };
  DivisonRoundVO.prototype.getDemotesForDivision = function (__s23param0) {
    if (this._demotes && this._demotes.length >= __s23param0) {
      return this._demotes[__s23param0 - 1];
    } else {
      return 0;
    }
  };
  DivisonRoundVO.prototype.getTotalPromotes = function () {
    return this._promotes.reduce(function (__s29param0, __s29param1) {
      return __s29param0 + __s29param1;
    }, 0);
  };
  DivisonRoundVO.prototype.getQualificationNewDivison = function (__s31param0) {
    var __s31local0 = this._promotes.map(function (__s33param0, __s33param1, __s33param2) {
      return __s33param2.slice(__s33param1).reduce(function (__s35param0, __s35param1) {
        return __s35param0 + __s35param1;
      }, 0);
    }).findIndex(function (__s37param0, __s37param1, __s37param2) {
      return __s31param0 <= __s37param0 && __s31param0 > (__s37param2[__s37param1 + 1] || 0);
    }) + 1;
    if (__s31local0 > 0) {
      return __s31local0;
    } else {
      return 1;
    }
  };
  return DivisonRoundVO;
}();
exports.DivisonRoundVO = __s0local0;
