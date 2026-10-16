Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CastleNewsletterVO() {}
  CastleNewsletterVO.prototype.parseXML = function (__s5param0) {
    this._newsLetterID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("newsLetterID", __s5param0, "0"));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "0"));
  };
  Object.defineProperty(CastleNewsletterVO.prototype, "newsLetterID", {
    get: function () {
      return this._newsLetterID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNewsletterVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewsletterVO;
}();
exports.CastleNewsletterVO = __s0local0;
