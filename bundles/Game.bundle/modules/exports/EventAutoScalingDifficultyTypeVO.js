Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function EventAutoScalingDifficultyTypeVO() {
    this._difficultyTypeID = 0;
    this._sortOrder = 0;
    this._name = "";
  }
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "difficultyTypeID", {
    get: function () {
      return this._difficultyTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAutoScalingDifficultyTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  EventAutoScalingDifficultyTypeVO.prototype.parseXML = function (__s11param0) {
    this._difficultyTypeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("difficultyTypeID", __s11param0, "0", true));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s11param0, "0", true);
    this._sortOrder = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s11param0, "0"));
  };
  EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID = 1;
  return EventAutoScalingDifficultyTypeVO;
}();
exports.EventAutoScalingDifficultyTypeVO = __s0local0;
