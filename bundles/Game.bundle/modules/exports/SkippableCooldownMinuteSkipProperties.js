Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SSkipDungeonCooldownVO = require("gge-module:export_C2SSkipDungeonCooldownVO");
var __dep_export_C2SMinuteSkipDungeonVO = require("gge-module:export_C2SMinuteSkipDungeonVO");
var __dep_export_SkipCooldownEvent = require("gge-module:export_SkipCooldownEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SkippableCooldownMinuteSkipProperties(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.useSubscription = false;
    __s3local0.mapobjectVO = __s3param0;
    __s3local0.useSubscription = __s3param1;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SkipCooldownEvent.SkipCooldownEvent.UPDATE, __s3local0.bindFunction(__s3local0.onMapobjectVOUpdated));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkippableCooldownMinuteSkipProperties, __s1param0);
  SkippableCooldownMinuteSkipProperties.prototype.onMapobjectVOUpdated = function (__s5param0) {
    var __s5local0 = this.mapobjectVO.ownerInfo;
    if (__s5param0.mapObjectVO) {
      this.mapobjectVO = __s5param0.mapObjectVO;
      this.mapobjectVO.ownerInfo = __s5local0;
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return this.mapobjectVO.isVisibleOnMap && this.mapobjectVO.remainingCooldownTimeInSeconds > 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  SkippableCooldownMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.TextVO(this.mapobjectVO.areaNameString);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Coldown_timer_header");
  };
  SkippableCooldownMinuteSkipProperties.prototype.getIconFrame = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_ATTACK_COOLDOWN);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_timeSkip_attackCooldown_tooltip";
  };
  SkippableCooldownMinuteSkipProperties.prototype.displayPicture = function (__s22param0) {
    var __s22local0;
    var __s22local1 = new __s0local0(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.PICTURE_WIDTH, __dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.PICTURE_HEIGHT);
    __s22local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO") ? __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.mapobjectVO, __s22local1, true, false, false, "", this.mapobjectVO.tMapNode) : __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.mapobjectVO, __s22local1, true, false, false);
    return __s22param0.addChild(__s22local0);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.mapobjectVO.totalCooldownTime;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.mapobjectVO.remainingCooldownTimeInSeconds;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getSkipCost = function () {
    return this.mapobjectVO.skipCooldownCostC2 >> 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO")) {
      return new __dep_export_C2SSkipDungeonCooldownVO.C2SSkipDungeonCooldownVO(this.mapobjectVO.absAreaPos, this.mapobjectVO.kingdomID, this.mapobjectVO.tMapNode);
    } else {
      return new __dep_export_C2SSkipDungeonCooldownVO.C2SSkipDungeonCooldownVO(this.mapobjectVO.absAreaPos, this.mapobjectVO.kingdomID, null);
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s34param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO")) {
      return new __dep_export_C2SMinuteSkipDungeonVO.C2SMinuteSkipDungeonVO(__s34param0, this.mapobjectVO.kingdomID, this.mapobjectVO.absAreaPos.x, this.mapobjectVO.absAreaPos.y, this.mapobjectVO.tMapNode);
    } else {
      return new __dep_export_C2SMinuteSkipDungeonVO.C2SMinuteSkipDungeonVO(__s34param0, this.mapobjectVO.kingdomID, this.mapobjectVO.absAreaPos.x, this.mapobjectVO.absAreaPos.y, null);
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return SkippableCooldownMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SkippableCooldownMinuteSkipProperties = __s0local1;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IMinuteSkipProperties");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
