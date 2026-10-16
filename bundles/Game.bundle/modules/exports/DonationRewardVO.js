Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function DonationRewardVO() {
    this._donationRewardID = -1;
    this._rewardSetID = -1;
    this._donationTypeID = -1;
    this._minPoints = -1;
    this._rewardID = -1;
  }
  DonationRewardVO.prototype.parseXmlNode = function (__s5param0) {
    this._donationRewardID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationRewardID", __s5param0, -1));
    this._rewardSetID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardSetID", __s5param0, -1));
    this._donationTypeID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationTypeID", __s5param0, -1));
    this._minPoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minPoints", __s5param0, -1));
    this._rewardID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardID", __s5param0, -1));
  };
  Object.defineProperty(DonationRewardVO.prototype, "donationRewardID", {
    get: function () {
      return this._donationRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "donationTypeID", {
    get: function () {
      return this._donationTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "minPoints", {
    get: function () {
      return this._minPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return DonationRewardVO;
}();
exports.DonationRewardVO = __s0local0;
