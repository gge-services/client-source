Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDaimyoTooltip(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("jumpTo_worldMap")).autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDaimyoTooltip, __s1param0);
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.updateWithNewData = function (__s9param0) {
    this._areaVE = __s9param0;
    this.update();
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.update = function () {
    var __s11local0 = this.areaVE.disp.getBounds(null);
    this.disp.x = this.areaVE.disp.x + CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET.x;
    this.disp.y = this.areaVE.disp.y + __s11local0.top + CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET.y;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.areaVE.vo.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "DaimyoCastle" : "township"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rank_value", [this.areaVE.vo.rank]))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon", [this.areaVE.vo.level])).autoFitToBounds = true;
    var __s11local1 = this.areaVE.vo.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? __dep_export_CastleModel.CastleModel.daimyoCastleXmlData.getDaimyoCastle(this.areaVE.vo.rank, this.areaVE.vo.level, this.areaVE.vo.eventAutoScalingCampID) : __dep_export_CastleModel.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(this.areaVE.vo.rank, this.areaVE.vo.level, this.areaVE.vo.eventAutoScalingCampID);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_levelProgress, __s11local1.shogunPointsNeededForLevelUp > 0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [this.areaVE.vo.shogunPoints, __s11local1.shogunPointsNeededForLevelUp]) : new __dep_exact_92d05af59ee2ff30.TextVO("")).autoFitToBounds = true;
    var __s11local2 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.disp.mc_levelProgress, 238);
    if (__s11local1.shogunPointsNeededForLevelUp > 0) {
      __s11local2.setProgressByPercent(this.areaVE.vo.shogunPoints / __s11local1.shogunPointsNeededForLevelUp);
    } else {
      __s11local2.setProgressByPercent(1);
    }
    var __s11local3 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getXmlContract(this.areaVE.vo.contractType, this.areaVE.vo.rank);
    var __s11local4 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getContractProgress(this.areaVE.vo.contractType, this.areaVE.vo.rank);
    var __s11local5 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.disp.mc_pointProgress, 238);
    if (__s11local4) {
      var __s11local6 = __s11local4.points;
      var __s11local7 = __s11local3.shogunPoints;
      var __s11local8 = __dep_exact_f855840627e6e145.int(this.areaVE.vo.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getCastleWarEffort(this.areaVE.vo.rank) : __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getTownshipWarEffort(this.areaVE.vo.rank));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("warEffortPointsX_colon", [__s11local8])).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_pointProgress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s11local6, __s11local7])).autoFitToBounds = true;
      __s11local5.setProgressByPercent(__s11local6 / __s11local7);
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO("")).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_pointProgress, new __dep_exact_92d05af59ee2ff30.TextVO("")).autoFitToBounds = true;
      __s11local5.setProgressByPercent(0);
    }
    this.updateCooldownTimer();
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.updateCooldownTimer = function () {
    if (this.areaVE && this.areaVE.vo) {
      var __s17local0 = __dep_exact_f855840627e6e145.int(this.areaVE.vo.getRemainingCooldown());
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_cooldown, __s17local0 > 0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cooldownX_colon", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s17local0)]) : new __dep_exact_92d05af59ee2ff30.TextVO("")).autoFitToBounds = true;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_cooldown, new __dep_exact_92d05af59ee2ff30.TextVO("")).autoFitToBounds = true;
    }
  };
  CastleAllianceSamuraiInvasionDaimyoTooltip.prototype.onTimer = function (__s21param0) {
    if (this.isVisible) {
      this.updateCooldownTimer();
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDaimyoTooltip.prototype, "areaVE", {
    get: function () {
      return this._areaVE;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDaimyoTooltip.__initialize_static_members = function () {
    CastleAllianceSamuraiInvasionDaimyoTooltip.POS_OFFSET = new __s0local0(0, -5);
  };
  return CastleAllianceSamuraiInvasionDaimyoTooltip;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleAllianceSamuraiInvasionDaimyoTooltip = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
