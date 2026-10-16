Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_LandmarkVO = require("gge-module:export_LandmarkVO");
var __s0local0 = function (__s1param0) {
  function LandmarkData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._landmarks = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LandmarkData, __s1param0);
  LandmarkData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.landmarks; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_LandmarkVO.LandmarkVO();
        __s5local3.parseXML(__s5local2);
        this._landmarks.set(__s5local3.landmarkID, __s5local3);
        if (__s5local3.isDefault) {
          this._defaultLandmark = __s5local3;
        }
      }
    }
  };
  Object.defineProperty(LandmarkData.prototype, "defaultLandmark", {
    get: function () {
      return this._defaultLandmark;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LandmarkData.prototype, "capitalLandmark", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return this._landmarks.get(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.capitalLandmarkID);
      } else {
        return this._defaultLandmark;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LandmarkData.prototype, "metroLandmark", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_ABGHelper.ABGHelper.abgEvent) {
        return this._landmarks.get(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.capitalLandmarkID);
      } else {
        return this._defaultLandmark;
      }
    },
    enumerable: true,
    configurable: true
  });
  return LandmarkData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.LandmarkData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
