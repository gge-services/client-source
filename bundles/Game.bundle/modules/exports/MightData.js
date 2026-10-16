Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleXmlData = require("gge-module:export_CastleXmlData");
var __dep_export_MightRankVO = require("gge-module:export_MightRankVO");
var __s0local0 = function (__s1param0) {
  function MightData(__s3param0) {
    var __s3local0 = this;
    __s3local0._userCurrentMight = 0;
    __s3local0._userCurrentBuildingMight = 0;
    __s3local0._userHighestMightAchieved = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MightData, __s1param0);
  MightData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.mightranks;
  };
  MightData.prototype.getNewNode = function () {
    return new __dep_export_MightRankVO.MightRankVO();
  };
  MightData.prototype.getMightRank = function (__s9param0) {
    var __s9local0 = null;
    if (this._nodes != null) {
      for (var __s9local1 = 0, __s9local2 = Array.from(this._nodes.values()); __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined && __s9local3 && __s9local3.threshold < __s9param0 && (__s9local0 == null || __s9local3.threshold > __s9local0.threshold)) {
          __s9local0 = __s9local3;
        }
      }
    }
    return __s9local0;
  };
  MightData.prototype.getNextMightRank = function (__s15param0) {
    var __s15local0 = null;
    if (this._nodes != null) {
      for (var __s15local1 = 0, __s15local2 = Array.from(this._nodes.values()); __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3 && __s15local3.threshold > __s15param0 && (__s15local0 == null || __s15local3.threshold < __s15local0.threshold)) {
          __s15local0 = __s15local3;
        }
      }
    }
    return __s15local0;
  };
  MightData.prototype.parse_GMU = function (__s21param0) {
    if (__s21param0 && __s21param0.hasOwnProperty("MP") && __s21param0.hasOwnProperty("HMP")) {
      this._userCurrentMight = parseInt(__s21param0.MP);
      this._userCurrentBuildingMight = parseInt(__s21param0.TSBM);
      this._userHighestMightAchieved = parseInt(__s21param0.HMP);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_MIGHT));
    }
  };
  Object.defineProperty(MightData.prototype, "userHighestMightAchieved", {
    get: function () {
      return this._userHighestMightAchieved;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userCurrentMight", {
    get: function () {
      return this._userCurrentMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userMightToNextLevel", {
    get: function () {
      var __s28local0 = this.getNextMightRank(this._userHighestMightAchieved);
      if (__s28local0) {
        return __s28local0.threshold - this._userCurrentMight;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userCurrentBuildingMight", {
    get: function () {
      return this._userCurrentBuildingMight;
    },
    enumerable: true,
    configurable: true
  });
  return MightData;
}(__dep_export_CastleXmlData.CastleXmlData);
exports.MightData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
