Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function DonationSettingVO() {
    this._donationSettingID = -1;
    this._donationItemSetID = -1;
    this._rewardSetID = -1;
  }
  DonationSettingVO.prototype.parseXmlNode = function (__s5param0) {
    this._donationSettingID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationSettingID", __s5param0, -1));
    this._donationItemSetID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("donationItemSetID", __s5param0, -1));
    this._rewardSetID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardSetID", __s5param0, -1));
  };
  Object.defineProperty(DonationSettingVO.prototype, "donationSettingID", {
    get: function () {
      return this._donationSettingID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "donationItemSetID", {
    get: function () {
      return this._donationItemSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "donateItemVOs", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getItemVOs_By_PointTypeSettingID(this.donationItemSetID);
    },
    enumerable: true,
    configurable: true
  });
  DonationSettingVO.prototype.getDonateItemVOsByType = function (__s15param0) {
    return __dep_export_CastleModel.CastleModel.donationEventData.getItemVOs_By_PointTypeSettingID_And_PointTypeID(this.donationItemSetID, __s15param0);
  };
  Object.defineProperty(DonationSettingVO.prototype, "pointTypeVOs", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getPointTypeVOs_By_DonationSettingID(this.donationSettingID);
    },
    enumerable: true,
    configurable: true
  });
  return DonationSettingVO;
}();
exports.DonationSettingVO = __s0local0;
