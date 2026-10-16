Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonEventRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._eventIDs = [];
    this._rankId = 0;
    this._rewardIds = [];
    this._needsSeasonPass = false;
  }
  XmlSeasonEventRewardVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardSetID", __s5param0, -1));
    this._eventIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("eventIDs", __s5param0);
    this._rankId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rankID", __s5param0, -1));
    this._rewardIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0);
    this._needsSeasonPass = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("needsSeasonPass", __s5param0, false);
  };
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rankId", {
    get: function () {
      return this._rankId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEventRewardVO.prototype, "needsSeasonPass", {
    get: function () {
      return this._needsSeasonPass;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonEventRewardVO;
}();
exports.XmlSeasonEventRewardVO = __s0local0;
