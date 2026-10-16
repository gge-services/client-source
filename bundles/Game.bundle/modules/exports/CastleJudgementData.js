Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleJudgementDataEvent = require("gge-module:export_CastleJudgementDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleJudgementRewardDialogProperties = require("gge-module:export_CastleJudgementRewardDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleJudgementData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._judgementVOs = new Map();
    var __s3local1 = __s3param0.judgements;
    if (__dep_export_JudgementConditionEnum.JudgementConditionEnum.WOOD == undefined) {
      __dep_export_JudgementConditionEnum.JudgementConditionEnum.__initialize_static_members();
    }
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = new __dep_export_JudgementVO.JudgementVO();
          __s3local5.fillFromParamXML(__s3local4);
          __s3local0._judgementVOs.set(__s3local5.id, __s3local5);
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJudgementData, __s1param0);
  CastleJudgementData.prototype.reset = function () {
    this._activeJudgement = null;
  };
  CastleJudgementData.prototype.destroy = function () {
    this._activeJudgement = null;
    if (this._judgementVOs != null) {
      for (var __s12local0 = 0, __s12local1 = Array.from(this._judgementVOs.values()); __s12local0 < __s12local1.length; __s12local0++) {
        __s12local1[__s12local0].dispose();
      }
    }
    this._judgementVOs = null;
    __s1param0.prototype.destroy.call(this);
  };
  CastleJudgementData.prototype.getJudgementVObyID = function (__s17param0) {
    return this._judgementVOs.get(__s17param0);
  };
  CastleJudgementData.prototype.parse_SJC = function (__s19param0) {
    this.startNewJudgement(parseInt(__s19param0.JID));
  };
  CastleJudgementData.prototype.parse_JJC = function (__s21param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleJudgementRewardDialog.CastleJudgementRewardDialog, new __dep_export_CastleJudgementRewardDialogProperties.CastleJudgementRewardDialogProperties(this.activeJudgement.id, __s21param0.CO));
    this.endActiveJudgement();
  };
  CastleJudgementData.prototype.startNewJudgement = function (__s23param0) {
    if (this.activeJudgement) {
      this.endActiveJudgement();
    }
    this._activeJudgement = this._judgementVOs.get(__s23param0);
    if (this._activeJudgement) {
      if (__dep_export_Iso.Iso && __dep_export_Iso.Iso.data && __dep_export_Iso.Iso.controller && __dep_export_Iso.Iso.controller.dataUpdater) {
        __dep_export_Iso.Iso.controller.dataUpdater.initObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.JUDGEMENTS);
      }
      this.dispatchEvent(new __dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent(__dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent.NEW_JUDGEMENT_STARTED));
    }
  };
  CastleJudgementData.prototype.endActiveJudgement = function () {
    this._activeJudgement = null;
    if (__dep_export_Iso.Iso.data) {
      __dep_export_Iso.Iso.controller.dataUpdater.initObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.JUDGEMENTS);
    }
    this.dispatchEvent(new __dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent(__dep_export_CastleJudgementDataEvent.CastleJudgementDataEvent.JUDGEMENT_ENDED));
  };
  Object.defineProperty(CastleJudgementData.prototype, "activeJudgement", {
    get: function () {
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay()) {
        return null;
      } else {
        return this._activeJudgement;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleJudgementData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleJudgementData = __s0local0;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleJudgementRewardDialog = require("gge-module:export_CastleJudgementRewardDialog");
var __dep_export_JudgementConditionEnum = require("gge-module:export_JudgementConditionEnum");
var __dep_export_JudgementVO = require("gge-module:export_JudgementVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
