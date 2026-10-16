Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetAllianceRaidBossStatus = require("gge-module:export_C2SGetAllianceRaidBossStatus");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function () {
  function ARE_WallStatus_Component(__s3param0, __s3param1, __s3param2 = false) {
    this.sendingAutomaticUpdate = false;
    this.updateOnShow = false;
    this.updateSentOut = false;
    this.disp = __s3param0;
    this.sendingAutomaticUpdate = __s3param1;
    this.updateOnShow = __s3param2;
  }
  ARE_WallStatus_Component.prototype.show = function () {
    this.disp.visible = true;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.update));
    __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onUpdateBase));
    if (this.disp.txt_gates) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_gates, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_gates_status_title"));
    }
    this.disp.mc_left.mc_left.visible = true;
    this.disp.mc_left.mc_right.visible = false;
    this.disp.mc_left.mc_middle.visible = false;
    this.disp.mc_right.mc_left.visible = false;
    this.disp.mc_right.mc_right.visible = true;
    this.disp.mc_right.mc_middle.visible = false;
    this.disp.mc_middle.mc_left.visible = false;
    this.disp.mc_middle.mc_right.visible = false;
    this.disp.mc_middle.mc_middle.visible = true;
    if (this.updateOnShow) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceRaidBossStatus.C2SGetAllianceRaidBossStatus());
    }
  };
  ARE_WallStatus_Component.prototype.hide = function () {
    this.disp.visible = false;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.update));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onUpdate));
  };
  ARE_WallStatus_Component.prototype.onUpdate = function (__s11param0) {
    this.updateSentOut = false;
    this.update();
  };
  ARE_WallStatus_Component.prototype.onUpdateBase = function (__s13param0) {
    if (this.sendingAutomaticUpdate) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceRaidBossStatus.C2SGetAllianceRaidBossStatus());
      this.updateSentOut = true;
    }
  };
  ARE_WallStatus_Component.prototype.update = function (__s16param0 = null) {
    if (this.currentRaidBossInfo) {
      var __s16local0 = this.currentRaidBossInfo.leftWallPercent == 0 && this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds <= 0 ? 1 : this.currentRaidBossInfo.leftWallPercent / 100;
      var __s16local1 = this.currentRaidBossInfo.rightWallPercent == 0 && this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds <= 0 ? 1 : this.currentRaidBossInfo.rightWallPercent / 100;
      var __s16local2 = this.currentRaidBossInfo.middleWallPercent == 0 && this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds <= 0 ? 1 : this.currentRaidBossInfo.middleWallPercent / 100;
      this.disp.mc_left.mc_flame.visible = this.disp.mc_left.mc_time.visible = this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds > 0;
      this.disp.mc_right.mc_flame.visible = this.disp.mc_right.mc_time.visible = this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds > 0;
      this.disp.mc_middle.mc_flame.visible = this.disp.mc_middle.mc_time.visible = this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds > 0;
      this.disp.mc_left.mc_bar.mc_bar.scaleX = __s16local0;
      this.disp.mc_right.mc_bar.mc_bar.scaleX = __s16local1;
      this.disp.mc_middle.mc_bar.mc_bar.scaleX = __s16local2;
      var __s16local3 = this.currentRaidBossInfo.leftWallPercent <= 0 && this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds <= 0 ? 100 : this.currentRaidBossInfo.leftWallPercent;
      var __s16local4 = this.currentRaidBossInfo.rightWallPercent <= 0 && this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds <= 0 ? 100 : this.currentRaidBossInfo.rightWallPercent;
      var __s16local5 = this.currentRaidBossInfo.middleWallPercent <= 0 && this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds <= 0 ? 100 : this.currentRaidBossInfo.middleWallPercent;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_left.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local3])).visible = __s16local0 > 0;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_right.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local4])).visible = __s16local1 > 0;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_middle.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local5])).visible = __s16local2 > 0;
      var __s16local6 = __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC * 15;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_left.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds))).visible = __s16local0 == 0 && this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds > __s16local6;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_right.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds))).visible = __s16local1 == 0 && this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds > __s16local6;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_middle.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds))).visible = __s16local2 == 0 && this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds > __s16local6;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_left.txt_time_red, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds))).visible = __s16local0 == 0 && this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds <= __s16local6;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_right.txt_time_red, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds))).visible = __s16local1 == 0 && this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds <= __s16local6;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_middle.txt_time_red, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds))).visible = __s16local2 == 0 && this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds <= __s16local6;
      if ((this.currentRaidBossInfo.leftWallPercent == 0 && this.currentRaidBossInfo.leftWallPercentRespawnTimeInSeconds <= 0 || this.currentRaidBossInfo.rightWallPercent == 0 && this.currentRaidBossInfo.rightWallPercentRespawnTimeInSeconds <= 0 || this.currentRaidBossInfo.middleWallPercent == 0 && this.currentRaidBossInfo.middleWallPercentRespawnTimeInSeconds <= 0) && this.sendingAutomaticUpdate) {
        if (!this.updateSentOut) {
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceRaidBossStatus.C2SGetAllianceRaidBossStatus());
          this.updateSentOut = true;
        }
      }
    }
  };
  Object.defineProperty(ARE_WallStatus_Component.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ARE_WallStatus_Component.prototype, "currentRaidBossInfo", {
    get: function () {
      if (this.eventVO) {
        return this.eventVO.raidBossServerDataVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ARE_WallStatus_Component;
}();
exports.ARE_WallStatus_Component = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
