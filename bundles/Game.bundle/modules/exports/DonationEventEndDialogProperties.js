Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_dc21bc5945239ede = require("gge-module:exact_dc21bc5945239ede");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function DonationEventEndDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._donationSettingID = __s3param0;
    __s3local0._donationRewardIDs = __s3param1;
    __s3local0._donationPoints = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventEndDialogProperties, __s1param0);
  DonationEventEndDialogProperties.prototype.getData = function () {
    var __s5local0 = [];
    var __s5local1 = __dep_export_CastleModel.CastleModel.donationEventData.getPointTypeVOs_By_DonationSettingID(this._donationSettingID);
    var __s5local2 = this._donationRewardIDs.map(function (__s7param0) {
      return __dep_export_CastleModel.CastleModel.donationEventData.getRewardVOByID(__s7param0);
    });
    var __s5local3 = function (__s9param0) {
      var __s9local0 = __s9param0.donationTypeID;
      var __s9local1 = __s5local2.find(function (__s11param0) {
        return __s11param0.donationTypeID == __s9local0;
      });
      var __s9local2 = __s9local1 ? __s9local1.donationRewardID : -1;
      var __s9local3 = false;
      if (__s5local4._donationPoints) {
        __s5local4._donationPoints.forEach(function (__s14param0) {
          if (__s14param0[0] == __s9local0 && __s14param0[1] > 0) {
            __s9local3 = true;
          }
        });
      }
      if (!__s5local4._donationPoints || !!__s9local3) {
        __s5local0.push([__s9local0, __s9local2]);
      }
    };
    var __s5local4 = this;
    for (var __s5local5 = 0, __s5local6 = __s5local1; __s5local5 < __s5local6.length; __s5local5++) {
      __s5local3(__s5local6[__s5local5]);
    }
    return __s5local0;
  };
  return DonationEventEndDialogProperties;
}(__dep_exact_dc21bc5945239ede.BasicProperties);
exports.DonationEventEndDialogProperties = __s0local0;
