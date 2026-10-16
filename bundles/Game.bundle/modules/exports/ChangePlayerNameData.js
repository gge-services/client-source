Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_ChangePlayerNameVO = require("gge-module:export_ChangePlayerNameVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = function (__s1param0) {
  function ChangePlayerNameData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._currentNumNameChange = 0;
    __s3local0._resetNameChangeCooldownTimestamp = 0;
    __s3local0.parseXml(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ChangePlayerNameData, __s1param0);
  ChangePlayerNameData.prototype.parseXml = function (__s5param0) {
    this._c2Costs = [];
    var __s5local0 = __s5param0.playerNameChanges;
    if (__s5local0 != null) {
      var __s5local1 = undefined;
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          (__s5local1 = new __dep_export_ChangePlayerNameVO.ChangePlayerNameVO()).nameChangeID = parseInt(__s5local4.nameChangeID || "");
          __s5local1.costC2 = parseInt(__s5local4.costC2 || "");
          this._c2Costs.push(__s5local1);
        }
      }
    }
  };
  ChangePlayerNameData.prototype.parse_GNCI = function (__s11param0) {
    this._currentNumNameChange = parseInt(__s11param0.PNCC) + 1;
    this._currentNumNameChange = Math.min(this._currentNumNameChange, this._c2Costs[this._c2Costs.length - 1].nameChangeID);
    this._resetNameChangeCooldownTimestamp = __s11param0.PNCD;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GNCI_ARRIVED, [this.getCurrentC2Cost, this.resetNameChangeCooldownTimestamp]));
  };
  Object.defineProperty(ChangePlayerNameData.prototype, "getCurrentC2Cost", {
    get: function () {
      var __s13local0 = this;
      var __s13local1 = this._c2Costs.find(function (__s15param0) {
        return __s15param0.nameChangeID === __s13local0._currentNumNameChange;
      });
      if (__s13local1) {
        return __s13local1.costC2;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChangePlayerNameData.prototype, "resetNameChangeCooldownTimestamp", {
    get: function () {
      return this._resetNameChangeCooldownTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  return ChangePlayerNameData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.ChangePlayerNameData = __s0local0;
