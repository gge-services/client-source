Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleLuckyWheelComponent = require("gge-module:export_CastleLuckyWheelComponent");
var __dep_export_CastleLuckyWheelDelayCommandHelper = require("gge-module:export_CastleLuckyWheelDelayCommandHelper");
var __dep_export_CastleLuckyWheelJackpotDialog = require("gge-module:export_CastleLuckyWheelJackpotDialog");
var __dep_export_CastleLuckyWheelJackpotDialogProperties = require("gge-module:export_CastleLuckyWheelJackpotDialogProperties");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleLuckyWheelMediator(__s3param0, __s3param1) {
    this._wheelState = CastleLuckyWheelMediator.WHEEL_STOP_STATE;
    this._eventID = 0;
    this._disp = __s3param0;
    this._eventID = __s3param1;
    this.componentDisp.allJackPotWheel.visible = false;
    this._spinningWheel = new __dep_export_CastleLuckyWheelComponent.CastleLuckyWheelComponent(this.getWheelToUse(CastleLuckyWheelMediator.NORMAL_WHEEL));
    this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    this.componentDisp.component_inner_wheel.mc_warning.visible = false;
    this.componentDisp.component_inner_wheel.mc_warning.mouseChildren = false;
    this.componentDisp.component_inner_wheel.mc_warning.toolTipText = "dialog_equipment_storageWarning";
    this.displayShine(false);
    this.updateReward();
    this.showTooltips(true);
  }
  CastleLuckyWheelMediator.prototype.show = function () {
    this._spinningWheel.addEventListener(__dep_export_CastleLuckyWheelComponent.CastleLuckyWheelComponent.SPEED_REACHED, this.bindFunction(this.onSpeedReached));
  };
  CastleLuckyWheelMediator.prototype.hide = function () {
    this._spinningWheel.removeEventListener(__dep_export_CastleLuckyWheelComponent.CastleLuckyWheelComponent.SPEED_REACHED, this.bindFunction(this.onSpeedReached));
  };
  CastleLuckyWheelMediator.prototype.stopWheel = function () {
    if (this.luckyWheelData && this.luckyWheelData.winningCategory != -1) {
      this.destroyTimer();
      var __s9local0 = this.luckyWheelData.winningCategory * -45 + 22.5;
      __s9local0 -= Math.random() * 30 + 7.5;
      __s9local0 += 360;
      this._spinningWheel.accelerateWheel(0, __s9local0);
      if (this._spinningWheel.currentSpeedInDegrees > 0) {
        this.startBreakingCallback();
      }
    } else {
      this.onServerFailed();
    }
  };
  CastleLuckyWheelMediator.prototype.spinWheel = function () {
    this.showTooltips(false);
    this.displayShine(false);
    if (this._rewardRenderer) {
      this._rewardRenderer.setVisibility(false);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    }
    this._spinningWheel.launchWheelWithCountDown(CastleLuckyWheelMediator.WHEEL_MAX_SPEED, 90, 200);
    this._wheelState = CastleLuckyWheelMediator.WHEEL_MOVE_STATE;
  };
  CastleLuckyWheelMediator.prototype.onSpeedReached = function (__s17param0) {
    if (this._spinningWheel.currentSpeedInDegrees > 0) {
      this.maxSpeedReachedCallback();
      this.onMaxSpeedReached();
    } else {
      this.showReward();
      this._wheelState = CastleLuckyWheelMediator.WHEEL_STOP_STATE;
      this.wheelStoppedCallback();
      this.showTooltips(true);
    }
  };
  CastleLuckyWheelMediator.prototype.onMaxSpeedReached = function () {
    this._startBreakingTimer = new __dep_exact_81dacdf05bd32292.Timer(4000, 1);
    this._startBreakingTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onStartBreakingTimer));
    this._startBreakingTimer.start();
  };
  CastleLuckyWheelMediator.prototype.onStartBreakingTimer = function (__s23param0) {
    this.destroyTimer();
    if (this.luckyWheelData) {
      if (this.luckyWheelData.winningCategoryReceived) {
        this.stopWheel();
      } else {
        this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
      }
    } else {
      this.onServerFailed();
    }
  };
  CastleLuckyWheelMediator.prototype.onWCReceived = function () {
    this.stopWheel();
    if (this.luckyWheelData) {
      this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.remove(this.bindFunction(this.onWCReceived));
    }
  };
  CastleLuckyWheelMediator.prototype.destroyTimer = function () {
    if (this._startBreakingTimer != null) {
      this._startBreakingTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onStartBreakingTimer));
      this._startBreakingTimer.reset();
      this._startBreakingTimer = null;
    }
  };
  CastleLuckyWheelMediator.prototype.showReward = function () {
    if (this.luckyWheelData) {
      if (this.luckyWheelData.winningCategory == 0) {
        CastleLuckyWheelMediator.dialogHandler.registerDefaultDialogs(__dep_export_CastleLuckyWheelJackpotDialog.CastleLuckyWheelJackpotDialog, new __dep_export_CastleLuckyWheelJackpotDialogProperties.CastleLuckyWheelJackpotDialogProperties(this.luckyWheelData.currentJackpotSet.clone(), this.luckyWheelData.rewardedItem, this.bindFunction(this.fillReward), this.eventVO), true);
      } else {
        this.fillReward();
      }
      this.componentDisp.component_inner_wheel.mc_warning.visible = (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT.indexOf(this.luckyWheelData.rewardedItem.itemType) > -1 || this.luckyWheelData.rewardedItem.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT) && __dep_export_CastleModel.CastleModel.equipData.isInventoryFull;
    }
  };
  CastleLuckyWheelMediator.prototype.fillReward = function () {
    if (this.eventVO) {
      this.changeWheel(CastleLuckyWheelMediator.NORMAL_WHEEL);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(1);
      this.displayShine(true);
      this.updateReward();
      __dep_export_CastleLuckyWheelDelayCommandHelper.CastleLuckyWheelDelayCommandHelper.stopCommandDelay();
      if (this.awardHasBeenAwardedCallback) {
        this.awardHasBeenAwardedCallback();
      }
    }
  };
  CastleLuckyWheelMediator.prototype.displayShine = function (__s44param0) {
    if (__s44param0) {
      this.componentDisp.component_inner_wheel.mc_circle.mc_animation.play();
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.componentDisp.component_inner_wheel.mc_circle.mc_animation, 0.25, {
        alpha: this.componentDisp.component_inner_wheel.mc_circle.mc_animation
      }, {
        alpha: 1,
        onComplete: this.bindFunction(this.stopShine)
      });
    } else {
      this.componentDisp.component_inner_wheel.mc_circle.mc_animation.stop();
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.componentDisp.component_inner_wheel.mc_circle.mc_animation, 0.5, {
        alpha: this.componentDisp.component_inner_wheel.mc_circle.mc_animation
      }, {
        alpha: 0
      });
    }
  };
  CastleLuckyWheelMediator.prototype.stopShine = function () {
    var __s48local0 = new __dep_exact_81dacdf05bd32292.Timer(1500, 1);
    __s48local0.start();
    __s48local0.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onTimerFinished));
  };
  CastleLuckyWheelMediator.prototype.onTimerFinished = function (__s50param0) {
    this.displayShine(false);
  };
  CastleLuckyWheelMediator.prototype.updateReward = function () {
    if (this.eventVO && this.eventVO.luckyWheelData) {
      if (this._rewardRenderer) {
        this._rewardRenderer.destroy();
        this._rewardRenderer.setVisibility(true);
      }
      var __s52local0 = this.componentDisp.component_inner_wheel.mc_reward;
      this._rewardRenderer = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s52local0).addIconMc(__s52local0.mc_iconHolder).addTextfield(__s52local0.mc_amount.txt_amount).addTextfieldBgMc(__s52local0.mc_amount).addInfoBtn(this.componentDisp.component_inner_wheel.btn_info), this.luckyWheelData.rewardedItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local1(70, 70)));
    }
  };
  CastleLuckyWheelMediator.prototype.onServerFailed = function () {
    this.destroyTimer();
    this.wheelStoppedCallback();
    this._spinningWheel.accelerateWheel(0, 0);
    CastleLuckyWheelMediator.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_no_serverConnection")));
  };
  CastleLuckyWheelMediator.prototype.showTooltips = function (__s58param0) {
    if (__s58param0) {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = "dialog_luckyWheel_jackpot";
      this.componentDisp.component_wheel.icon_vip_points.toolTipText = "dialog_VipScreen_premiumPoints_v2";
      this.componentDisp.component_wheel.icon_equitment.toolTipText = "dialog_equipment_title";
      this.componentDisp.component_wheel.icon_resources_1.toolTipText = "goods";
      this.componentDisp.component_wheel.icon_tickets.toolTipText = "tooltip_tickets";
      this.componentDisp.component_wheel.icon_vip_time.toolTipText = "dialog_VipScreen_vipTime";
      this.componentDisp.component_wheel.icon_tools.toolTipText = "dialog_recuit_tools";
      this.componentDisp.component_wheel.icon_resources_2.toolTipText = "goods";
    } else {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = null;
      this.componentDisp.component_wheel.icon_vip_points.toolTipText = null;
      this.componentDisp.component_wheel.icon_equitment.toolTipText = null;
      this.componentDisp.component_wheel.icon_resources_1.toolTipText = null;
      this.componentDisp.component_wheel.icon_tickets.toolTipText = null;
      this.componentDisp.component_wheel.icon_vip_time.toolTipText = null;
      this.componentDisp.component_wheel.icon_tools.toolTipText = null;
      this.componentDisp.component_wheel.icon_resources_2.toolTipText = null;
    }
  };
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "componentDisp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "wheelIsTurning", {
    get: function () {
      return this._wheelState == CastleLuckyWheelMediator.WHEEL_MOVE_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "hasWonJackpot", {
    get: function () {
      return this.luckyWheelData && this.luckyWheelData.winningCategory == 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelMediator.prototype.destroy = function () {
    this.destroyTimer();
    if (this._spinningWheel) {
      this._spinningWheel.destroy();
    }
    __dep_export_CastleLuckyWheelDelayCommandHelper.CastleLuckyWheelDelayCommandHelper.stopCommandDelay();
  };
  CastleLuckyWheelMediator.prototype.changeWheel = function (__s73param0) {
    this._spinningWheel.changeWheel(this.getWheelToUse(__s73param0));
  };
  CastleLuckyWheelMediator.prototype.getWheelToUse = function (__s75param0) {
    this.componentDisp.allJackPotWheel.visible = false;
    this.componentDisp.component_wheel.visible = false;
    if (__s75param0 == CastleLuckyWheelMediator.All_JACKPOT_WHEEL) {
      this.componentDisp.allJackPotWheel.visible = true;
      return this.componentDisp.allJackPotWheel;
    } else {
      this.componentDisp.component_wheel.visible = true;
      return this.componentDisp.component_wheel;
    }
  };
  Object.defineProperty(CastleLuckyWheelMediator, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "luckyWheelData", {
    get: function () {
      if (this.eventVO) {
        return this.eventVO.luckyWheelData;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelMediator.prototype.clearReward = function () {
    if (this._rewardRenderer) {
      this._rewardRenderer.setVisibility(false);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    }
  };
  CastleLuckyWheelMediator.WHEEL_MOVE_STATE = 1;
  CastleLuckyWheelMediator.WHEEL_STOP_STATE = 2;
  CastleLuckyWheelMediator.WHEEL_MAX_SPEED = 1;
  CastleLuckyWheelMediator.NORMAL_WHEEL = 0;
  CastleLuckyWheelMediator.All_JACKPOT_WHEEL = 1;
  return CastleLuckyWheelMediator;
}();
exports.CastleLuckyWheelMediator = __s0local2;
