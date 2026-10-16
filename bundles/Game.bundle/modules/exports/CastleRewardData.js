Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CastleRewardData(__s3param0) {
    this.parseXml(__s3param0);
  }
  CastleRewardData.prototype.parseXml = function (__s5param0) {
    this._rewardVos = new Map();
    this._welcomeBackRewardVOs = new Map();
    var __s5local0 = __s5param0.rewards;
    if (__s5local0) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 != undefined) {
          var __s5local4 = new __dep_export_RewardVO.RewardVO();
          __s5local4.fillFromParamXml(__s5local3);
          this._rewardVos.set(__s5local4.id, __s5local4);
        }
      }
    }
    var __s5local5 = __s5param0.welcomeBackRewards;
    if (__s5local5) {
      for (var __s5local6 = 0, __s5local7 = __s5local5; __s5local6 < __s5local7.length; __s5local6++) {
        var __s5local8 = __s5local7[__s5local6];
        if (__s5local8 != undefined) {
          var __s5local9 = new __dep_export_WelcomeBackRewardVO.WelcomeBackRewardVO();
          __s5local9.fillFromParamXml(__s5local8);
          this._welcomeBackRewardVOs.set(__s5local9.id, __s5local9);
        }
      }
    }
  };
  CastleRewardData.prototype.getWelcomeBackRewardListById = function (__s15param0) {
    if (this._welcomeBackRewardVOs.get(__s15param0)) {
      return this._welcomeBackRewardVOs.get(__s15param0).rewardList;
    } else {
      return null;
    }
  };
  CastleRewardData.prototype.getListById = function (__s19param0) {
    if (this._rewardVos.get(__s19param0)) {
      return this._rewardVos.get(__s19param0).rewardList.clone();
    } else {
      return null;
    }
  };
  CastleRewardData.prototype.getCopiedListById = function (__s23param0) {
    if (this._rewardVos.get(__s23param0)) {
      var __s23local0 = this._rewardVos.get(__s23param0);
      if (__s23local0) {
        return __s23local0.rewardList.clone();
      } else {
        return null;
      }
    }
    return null;
  };
  CastleRewardData.prototype.getListByIdArray = function (__s28param0, __s28param1 = false) {
    var __s28local0;
    var __s28local1 = new __dep_export_CollectableList.CollectableList();
    if (__s28param0 != null) {
      for (var __s28local2 = 0, __s28local3 = __s28param0; __s28local2 < __s28local3.length; __s28local2++) {
        var __s28local4 = __s28local3[__s28local2];
        if (__s28local4 !== undefined && (__s28local0 = this.getListById(__s28local4))) {
          __s28local1.addList(__s28local0, __s28param1);
        }
      }
    }
    return __s28local1;
  };
  CastleRewardData.prototype.getListByIdVector = function (__s34param0) {
    var __s34local0 = new __dep_export_CollectableList.CollectableList();
    if (__s34param0 != null) {
      for (var __s34local1 = 0, __s34local2 = __s34param0; __s34local1 < __s34local2.length; __s34local1++) {
        var __s34local3 = __s34local2[__s34local1];
        if (__s34local3 !== undefined) {
          var __s34local4 = this.getListById(__s34local3);
          if (__s34local4) {
            __s34local0.addList(__s34local4);
          }
        }
      }
    }
    return __s34local0;
  };
  CastleRewardData.prototype.getGrantTypeByRewardID = function (__s41param0) {
    if (this._rewardVos.get(__s41param0)) {
      return __dep_exact_f855840627e6e145.int(this._rewardVos.get(__s41param0).grantType);
    } else {
      return -1;
    }
  };
  return CastleRewardData;
}();
exports.CastleRewardData = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_RewardVO = require("gge-module:export_RewardVO");
var __dep_export_WelcomeBackRewardVO = require("gge-module:export_WelcomeBackRewardVO");
