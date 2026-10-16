Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_JudgementEventEnum = require("gge-module:export_JudgementEventEnum");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupJudgement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupJudgement, __s1param0);
  IsoDataObjectGroupJudgement.prototype.initObjects = function () {
    if ((this.resetList(), this.isoData.areaData.isMyHomeCastle) && __dep_export_CastleModel.CastleModel.judgementData.activeJudgement) {
      var __s5local0 = new __dep_export_EventJudgementVO.EventJudgementVO(__dep_export_JudgementEventEnum.JudgementEventEnum.getByName(this.activeJudgementVO.visualName), this.activeJudgementVO.spawnSpotType);
      __s5local0.init(this.isoData);
      __s5local0.updateData();
      this.list.push(__s5local0);
    }
  };
  Object.defineProperty(IsoDataObjectGroupJudgement.prototype, "activeJudgementVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.judgementData) {
        return __dep_export_CastleModel.CastleModel.judgementData.activeJudgement;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupJudgement;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupJudgement = __s0local0;
var __dep_export_EventJudgementVO = require("gge-module:export_EventJudgementVO");
