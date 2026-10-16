Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleEilandData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.fillFromParamXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandData, __s1param0);
  CastleEilandData.prototype.fillFromParamXML = function (__s5param0) {
    this.parseIslandBlueprints(__s5param0);
  };
  CastleEilandData.prototype.parseIslandBlueprints = function (__s7param0) {
    this.islandBlueprints = new Map();
    var __s7local0 = __s7param0.isles;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = __dep_exact_f855840627e6e145.int(__s7local3.IsleID || "");
          this.islandBlueprints.set(__s7local4, new __dep_export_CastleIsleBlueprintVO.CastleIsleBlueprintVO(__s7local3));
        }
      }
    }
  };
  CastleEilandData.prototype.getIsleBlueprint = function (__s13param0) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.islandBlueprints, __s13param0)) {
      return this.islandBlueprints.get(__s13param0);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleEilandData.prototype, "kingTitleVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.islandKingTitle;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleEilandData = __s0local0;
var __dep_export_CastleIsleBlueprintVO = require("gge-module:export_CastleIsleBlueprintVO");
