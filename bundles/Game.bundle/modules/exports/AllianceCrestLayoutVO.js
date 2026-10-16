Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function AllianceCrestLayoutVO() {
    this._allianceCoatLayoutID = -1;
    this._noofColors = 0;
    this._eventID = 0;
    this._maxDuration = 0;
    this._effectIconID = 0;
  }
  AllianceCrestLayoutVO.prototype.parseXML = function (__s5param0) {
    this._allianceCoatLayoutID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("allianceCoatLayoutID", __s5param0);
    this._noofColors = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("noofColors", __s5param0);
    this._eventID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("eventID", __s5param0);
    this._maxDuration = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maxDuration", __s5param0);
    this._effectIconID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectIconID", __s5param0);
    this.parseEffects(__s5param0);
  };
  AllianceCrestLayoutVO.prototype.parseEffects = function (__s7param0) {
    this._effects = [];
    var __s7local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s7param0, "");
    if (__s7local0 != "") {
      for (var __s7local1 = 0, __s7local2 = __s7local0.split(","); __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3.length > 0) {
          var __s7local4 = __s7local3.split("&");
          var __s7local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s7local4[0]));
          var __s7local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s7local5, __s7local4[1]);
          this._effects.push(__s7local6);
        }
      }
    }
  };
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "allianceCoatLayoutID", {
    get: function () {
      return this._allianceCoatLayoutID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "noofColors", {
    get: function () {
      return this._noofColors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "maxDuration", {
    get: function () {
      return this._maxDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "effectIconID", {
    get: function () {
      return this._effectIconID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestLayoutVO.prototype, "remainingSeconds", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getRemainingSecondsForLayout(this._allianceCoatLayoutID);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestLayoutVO;
}();
exports.AllianceCrestLayoutVO = __s0local0;
