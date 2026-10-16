Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function EventAutoScalingVO() {
    this._npcDefenseScoreMultiplier = 0;
    this._difficultyID = 0;
  }
  Object.defineProperty(EventAutoScalingVO.prototype, "difficultyID", {
    get: function () {
      return this._difficultyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingVO.prototype, "npcDefenseScoreMultiplier", {
    get: function () {
      return this._npcDefenseScoreMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingVO.prototype.parseXML = function (__s9param0) {
    this._difficultyID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("difficultyID", __s9param0, "0", true));
    this._npcDefenseScoreMultiplier = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("npcDefenseScoreMultiplier", __s9param0, "0", true));
  };
  return EventAutoScalingVO;
}();
exports.EventAutoScalingVO = __s0local0;
