Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SMercenaryPackageVO = require("gge-module:export_C2SMercenaryPackageVO");
var __dep_export_C2SRefreshMercenaryMissionVO = require("gge-module:export_C2SRefreshMercenaryMissionVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMercenaryRefreshMissionDialogProperties = require("gge-module:export_CastleMercenaryRefreshMissionDialogProperties");
var __dep_export_CastleMercenarySkipMissionDialogProperties = require("gge-module:export_CastleMercenarySkipMissionDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleMercenaryMissionItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initButtons([__s3param0.btn_start, __s3param0.btn_refresh, __s3param0.btn_collect, __s3param0.mc_rewards.item0.btn_info, __s3param0.mc_rewards.item1.btn_info, __s3param0.mc_rewards.item2.btn_info]);
    __s3local0.rewardsComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(__s3param0.mc_rewards, new __s0local1(37, 37));
    __s3local0.itxt_missionType = __s3local0.textFieldManager.registerTextField(__s3param0.mc_missionInfo.txt_missionType, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __s3local0.itxt_cost = __s3local0.textFieldManager.registerTextField(__s3param0.mc_missionInfo.mc_info.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_time = __s3local0.textFieldManager.registerTextField(__s3param0.mc_missionInfo.mc_info.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.itxt_progress = __s3local0.textFieldManager.registerTextField(__s3param0.mc_missionInfo.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.itxt_start = __s3local0.textFieldManager.registerTextField(__s3param0.btn_start.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_mission_start"));
    __s3local0.itxt_collect = __s3local0.textFieldManager.registerTextField(__s3param0.btn_collect.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __s3local0.itxt_start.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __s3local0.itxt_collect.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __s3param0.mc_missionInfo.mc_info.mc_cost.mouseChildren = false;
    __s3param0.mc_missionInfo.mc_info.mc_cost.toolTipText = "cash";
    __s3param0.mc_missionInfo.mc_info.mc_time.mouseChildren = false;
    __s3param0.mc_missionInfo.mc_info.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    __s3param0.mc_missionInfo.mc_progress.mouseChildren = false;
    __s3param0.mc_missionInfo.mc_progress.toolTipText = "resttime";
    __s3local0.progressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3param0.mc_missionInfo.mc_progress.mc_bar);
    __s3local0.timerComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(__s3local0.itxt_progress, __s3local0.bindFunction(__s3local0.getRemainingTimeString));
    __s3param0.btn_refresh.toolTipText = "dialog_mission_swap";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryMissionItem, __s1param0);
  CastleMercenaryMissionItem.prototype.initButtons = function (__s5param0) {
    if (__s5param0 != null) {
      for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s5local2);
        }
      }
    }
  };
  CastleMercenaryMissionItem.prototype.customFillItem = function () {
    this.disp.mc_background.gotoAndStop(this.missionItemVO.quality + 1);
    this.rewardsComponent.showRewards(this.missionItemVO.rewards);
    this.fillMissionInfo();
    this.updateButtons();
  };
  CastleMercenaryMissionItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  CastleMercenaryMissionItem.prototype.fillMissionInfo = function () {
    this.disp.mc_missionInfo.mc_info.visible = false;
    this.disp.mc_missionInfo.mc_progress.visible = false;
    this.itxt_missionType.textContentVO.textId = this.missionItemVO.getMissionTypeTextID();
    switch (this.missionItemVO.state) {
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_DEFAULT:
        this.showTimeAndCosts();
        break;
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED:
        this.showMissionProgress();
        break;
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_COLLECTABLE:
        this.showFinishText();
    }
  };
  CastleMercenaryMissionItem.prototype.showTimeAndCosts = function () {
    this.disp.mc_missionInfo.mc_info.visible = true;
    this.itxt_cost.textContentVO.numberValue = this.missionItemVO.price;
    if (this.missionItemVO.price > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
      this.itxt_cost.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    } else {
      this.itxt_cost.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getHoureMinuteSecondTimeString(this.missionItemVO.duration);
    this.timerComponent.stop();
  };
  CastleMercenaryMissionItem.prototype.showMissionProgress = function () {
    this.disp.mc_missionInfo.mc_progress.visible = true;
    this.disp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(1);
    this.timerComponent.start(this.missionItemVO.remainingTime);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    this.updateProgress(null);
  };
  CastleMercenaryMissionItem.prototype.updateProgress = function (__s24param0) {
    this.progressBar.scaleX = this.missionItemVO.missionProgress;
  };
  CastleMercenaryMissionItem.prototype.getRemainingTimeString = function (__s26param0) {
    return __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(this.missionItemVO.remainingTime, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
  };
  CastleMercenaryMissionItem.prototype.showFinishText = function () {
    this.disp.mc_missionInfo.mc_progress.visible = true;
    this.disp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(2);
    this.timerComponent.stop();
    this.itxt_progress.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mission_finish");
    this.progressBar.scaleX = 1;
  };
  CastleMercenaryMissionItem.prototype.updateButtons = function () {
    this.disp.btn_start.visible = this.missionItemVO.state == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_DEFAULT;
    this.disp.btn_refresh.visible = this.missionItemVO.state == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_DEFAULT;
    this.disp.btn_collect.visible = this.missionItemVO.state == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED || this.missionItemVO.state == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
    switch (this.missionItemVO.state) {
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_DEFAULT:
        this.showStartAndRefreshButton();
        break;
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED:
        this.showSkipButton();
        break;
      case __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_COLLECTABLE:
        this.showCollectButton();
    }
  };
  CastleMercenaryMissionItem.prototype.showStartAndRefreshButton = function () {
    var __s33local0 = __dep_export_CastleModel.CastleModel.mercenaryData.currentMissionState < __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
    if (this.mercenaryData.waitingForServer && __s33local0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_start, true);
    } else if (__s33local0) {
      if (!this.disp.btn_start.basicButton.enablingIsDelayed) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_start, true);
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_start, false);
    }
    this.disp.btn_start.toolTipText = __s33local0 ? null : "dialog_mission_start_disabled";
  };
  CastleMercenaryMissionItem.prototype.showSkipButton = function () {
    if (this.mercenaryData.waitingForServer) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_collect, true);
    }
    this.disp.btn_collect.background.gotoAndStop(1);
    this.disp.btn_collect.toolTipText = {
      t: "dialog_mission_reward_desc",
      p: [this.missionItemVO.skipCost]
    };
    this.itxt_collect.textContentVO.textId = "dialog_mission_skip";
  };
  CastleMercenaryMissionItem.prototype.showCollectButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_collect, true);
    this.disp.btn_collect.background.gotoAndStop(2);
    this.disp.btn_collect.toolTipText = null;
    this.itxt_collect.textContentVO.textId = "dialog_dailyQuests_activityGift";
  };
  CastleMercenaryMissionItem.prototype.onMouseOver = function (__s44param0) {
    if (__s44param0.target == this.disp.btn_collect && this.missionItemVO.state == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED) {
      this.disp.btn_collect.toolTipText = {
        t: "dialog_mission_reward_desc",
        p: [this.missionItemVO.skipCost]
      };
    } else if (__s44param0.target == this.disp.btn_start) {
      var __s44local0 = __dep_export_CastleModel.CastleModel.mercenaryData.currentMissionState < __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
      this.disp.btn_start.toolTipText = __s44local0 ? null : "dialog_mission_start_disabled";
    }
  };
  CastleMercenaryMissionItem.prototype.onMouseClick = function (__s48param0) {
    __s1param0.prototype.onMouseClick.call(this, __s48param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s48param0.target) && !this.mercenaryData.waitingForServer) {
      switch (__s48param0.target) {
        case this.disp.btn_start:
          this.startMission();
          break;
        case this.disp.btn_refresh:
          this.refreshMission();
          break;
        case this.disp.btn_collect:
          this.collectMissionRewards();
      }
    }
  };
  CastleMercenaryMissionItem.prototype.startMission = function () {
    if (__dep_export_CastleModel.CastleModel.mercenaryData.currentMissionState == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMercenarySkipMissionDialog.CastleMercenarySkipMissionDialog, new __dep_export_CastleMercenarySkipMissionDialogProperties.CastleMercenarySkipMissionDialogProperties(__dep_export_CastleModel.CastleModel.mercenaryData.activeMission, this.bindFunction(this.startMissionCallback)));
    } else {
      this.startMissionCallback();
    }
  };
  CastleMercenaryMissionItem.prototype.remove = function () {
    this.rewardsComponent.destroy();
    __s1param0.prototype.remove.call(this);
  };
  CastleMercenaryMissionItem.prototype.startMissionCallback = function () {
    this.mercenaryData.waitingForServer = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMercenaryPackageVO.C2SMercenaryPackageVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.refreshMission = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMercenaryRefreshMissionDialog.CastleMercenaryRefreshMissionDialog, new __dep_export_CastleMercenaryRefreshMissionDialogProperties.CastleMercenaryRefreshMissionDialogProperties(this.missionItemVO, this.bindFunction(this.refreshMissionCallback)));
  };
  CastleMercenaryMissionItem.prototype.refreshMissionCallback = function () {
    this.mercenaryData.waitingForServer = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRefreshMercenaryMissionVO.C2SRefreshMercenaryMissionVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.collectMissionRewards = function () {
    this.mercenaryData.waitingForServer = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMercenaryPackageVO.C2SMercenaryPackageVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.progressBar.removeMaskMC();
    this.timerComponent.stop();
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
  };
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "missionItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "mercenaryData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mercenaryData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleMercenaryMissionItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleMercenaryMissionItem = __s0local2;
var __dep_export_CastleMercenaryData = require("gge-module:export_CastleMercenaryData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
var __dep_export_CastleMercenaryRefreshMissionDialog = require("gge-module:export_CastleMercenaryRefreshMissionDialog");
var __dep_export_CastleMercenarySkipMissionDialog = require("gge-module:export_CastleMercenarySkipMissionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "MovieClip");
