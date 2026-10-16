Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function EventAutoScalingDifficultyEffectVO() {
    this._eventAutoScalingEffectID = 0;
    this._difficultyID = 0;
    this._effectGroup = "";
    this._effectID = 0;
    this._minValue = 0;
    this._maxValue = 0;
    this._wearerID = 0;
  }
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "wearerID", {
    get: function () {
      return this._wearerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "eventAutoScalingEffectID", {
    get: function () {
      return this._eventAutoScalingEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "effectGroup", {
    get: function () {
      return this._effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "effectID", {
    get: function () {
      return this._effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyEffectVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingDifficultyEffectVO.prototype.parseXML = function (__s19param0) {
    this._eventAutoScalingEffectID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventAutoScalingLordEffectID", __s19param0, "0", true));
    this._difficultyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("difficultyID", __s19param0, "0", true));
    this._effectGroup = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effectGroup", __s19param0, "0", true);
    this._effectID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effectID", __s19param0, "0"));
    this._minValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minValue", __s19param0, "0"));
    this._maxValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxValue", __s19param0, "0"));
    this._wearerID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wearerID", __s19param0, "0"));
  };
  return EventAutoScalingDifficultyEffectVO;
}();
exports.EventAutoScalingDifficultyEffectVO = __s0local0;
