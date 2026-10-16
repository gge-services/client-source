Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_JudgementEventEnum = require("gge-module:export_JudgementEventEnum");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_AInteractiveIsoObjectVO = require("gge-module:export_AInteractiveIsoObjectVO");
var __s0local0 = function (__s1param0) {
  function EventJudgementVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._eventType = __dep_export_JudgementEventEnum.JudgementEventEnum.NONE;
    __s3local0._spotType = __dep_export_JudgementSpotEnum.JudgementSpotEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventType = __s3param0;
    __s3local0._spotType = __s3param1;
    __s3local0._group = "Judgement";
    __s3local0._name = "Event";
    __s3local0._type = "";
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventJudgementVO, __s1param0);
  EventJudgementVO.prototype.updateData = function () {
    this.updateRotation();
    __s1param0.prototype.updateData.call(this);
  };
  EventJudgementVO.prototype.updateRotation = function () {
    switch (this.spotType) {
      case __dep_export_JudgementSpotEnum.JudgementSpotEnum.RESOURCE_FOOD:
        this._rotation = 1;
        break;
      default:
        this._rotation = 0;
    }
  };
  EventJudgementVO.prototype.getVisualClassName = function () {
    return this.eventType.name + "JudgementIso";
  };
  EventJudgementVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("judgement_" + __dep_export_CastleModel.CastleModel.judgementData.activeJudgement.id + "_name");
  };
  EventJudgementVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("clickToOpen");
  };
  Object.defineProperty(EventJudgementVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "spotType", {
    get: function () {
      return this._spotType;
    },
    enumerable: true,
    configurable: true
  });
  return EventJudgementVO;
}(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO);
exports.EventJudgementVO = __s0local0;
var __dep_export_JudgementSpotEnum = require("gge-module:export_JudgementSpotEnum");
