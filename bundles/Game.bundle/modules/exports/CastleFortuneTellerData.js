Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FortuneTellerClassVO = require("gge-module:export_FortuneTellerClassVO");
var __s0local0 = function (__s1param0) {
  function CastleFortuneTellerData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._fortuneTellerClassVOs = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFortuneTellerData, __s1param0);
  CastleFortuneTellerData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.fortuneTellerClasses; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_FortuneTellerClassVO.FortuneTellerClassVO();
        __s5local3.parseXML(__s5local2);
        this._fortuneTellerClassVOs.set(__s5local3.id, __s5local3);
      }
    }
  };
  Object.defineProperty(CastleFortuneTellerData.prototype, "maxTriesPerDay", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._fortuneTellerClassVOs);
    },
    enumerable: true,
    configurable: true
  });
  CastleFortuneTellerData.prototype.getFortuneTellerClassByCount = function (__s12param0) {
    return this._fortuneTellerClassVOs.get(__s12param0);
  };
  CastleFortuneTellerData.prototype.parseFTL = function (__s14param0) {
    if (__s14param0 && __s14param0.RIDS) {
      var __s14local0 = __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s14param0.RIDS[0]);
      this.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, [__s14local0]));
    }
  };
  return CastleFortuneTellerData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleFortuneTellerData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
