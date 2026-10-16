Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function EventAutoScalingDifficultyVO() {
    this._difficultyID = 0;
    this._eventID = 0;
    this._npcDefenseScoreMultiplier = 0;
    this._typeID = 0;
    this._isLocked = false;
    this._unlockC2 = 0;
  }
  EventAutoScalingDifficultyVO.prototype.parseXML = function (__s5param0) {
    this._difficultyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("difficultyID", __s5param0, "0", true));
    this._eventID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventID", __s5param0, "0", true));
    this._npcDefenseScoreMultiplier = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("npcDefenseScoreMultiplier", __s5param0, "0"));
    this._isLocked = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isLocked", __s5param0, "0")) == 1;
    this._typeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("difficultyTypeID", __s5param0, "0"));
    this._unlockC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rentC2Cost", __s5param0, "0"));
  };
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "unlockC2", {
    get: function () {
      return this._unlockC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "sortOrder", {
    get: function () {
      return this.difficultyType.sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "multiplier", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getAutoScalingByDifficultyID(this._difficultyID).npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "name", {
    get: function () {
      return this.difficultyType.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "name_textID", {
    get: function () {
      return "dialog_difficultyScaling_" + this.difficultyType.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "difficultyType", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyTypesByTypeID(this._typeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "npcDefenseScoreMultiplier", {
    get: function () {
      return this._npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  return EventAutoScalingDifficultyVO;
}();
exports.EventAutoScalingDifficultyVO = __s0local0;
