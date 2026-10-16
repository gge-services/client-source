Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupJudgements() {
    var __s3local0 = this;
    __s3local0._spotContainers = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupJudgements, __s1param0);
  IsoViewObjectGroupJudgements.prototype.destroy = function () {
    this.resetSpots();
    __s1param0.prototype.destroy.call(this);
  };
  IsoViewObjectGroupJudgements.prototype.resetSpots = function () {
    if (this.spotContainers != null) {
      for (var __s7local0 = 0, __s7local1 = Array.from(this.spotContainers.values()); __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        this.destroyObject(__s7local2);
      }
    }
    this._spotContainers = new Map();
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  IsoViewObjectGroupJudgements.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.judgements.list, this.list);
    this.resetSpots();
    this.initSpots();
    this.updateSpots();
    this.assignJudgementEventsToSpots();
  };
  IsoViewObjectGroupJudgements.prototype.initSpots = function () {
    var __s14local0;
    for (var __s14local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_JudgementSpotEnum.JudgementSpotEnum), __s14local2 = 0; __s14local2 < __s14local1.length; __s14local2++) {
      __s14local0 = __s14local1[__s14local2];
      var __s14local3 = this.createSpotVE(__s14local0);
      if (__s14local3) {
        this.addObjectToLayer(__s14local3);
      }
      this.spotContainers.set(__s14local0, __s14local3);
    }
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  IsoViewObjectGroupJudgements.prototype.assignJudgementEventsToSpots = function () {
    if (this.list != null) {
      for (var __s19local0 = 0, __s19local1 = this.list; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          var __s19local3 = __s19local2.judgementEventVO.spotType;
          var __s19local4 = this.spotContainers.get(__s19local3);
          if (__s19local4) {
            __s19local4.elementContainer.addChild(__s19local2.elementContainer);
          }
        }
      }
    }
  };
  IsoViewObjectGroupJudgements.prototype.updateSpots = function () {
    for (var __s26local0 = 0, __s26local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_JudgementSpotEnum.JudgementSpotEnum); __s26local0 < __s26local1.length; __s26local0++) {
      var __s26local2 = __s26local1[__s26local0];
      var __s26local3 = this.spotContainers.get(__s26local2);
      if (__s26local3) {
        __s26local3.updateSpot();
      }
    }
    this.assignJudgementEventsToSpots();
  };
  IsoViewObjectGroupJudgements.prototype.createSpotVE = function (__s31param0) {
    if (!__s31param0.veClass) {
      return null;
    }
    var __s31local0 = new __dep_export_SpotJudgementVO.SpotJudgementVO();
    __s31local0.init(this.isoData);
    var __s31local1 = new __s31param0.veClass();
    __s31local1.init(__s31local0);
    return __s31local1;
  };
  IsoViewObjectGroupJudgements.prototype.fillInCompleteList = function (__s34param0) {
    __s1param0.prototype.fillInCompleteList.call(this, __s34param0);
    if (this.spotContainers != null) {
      for (var __s34local0 = 0, __s34local1 = Array.from(this.spotContainers.values()); __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        if (__s34local2 !== undefined && __s34local2) {
          __s34param0.push(__s34local2);
        }
      }
    }
  };
  Object.defineProperty(IsoViewObjectGroupJudgements.prototype, "spotContainers", {
    get: function () {
      return this._spotContainers;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupJudgements;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupJudgements = __s0local0;
var __dep_export_JudgementSpotEnum = require("gge-module:export_JudgementSpotEnum");
var __dep_export_SpotJudgementVO = require("gge-module:export_SpotJudgementVO");
