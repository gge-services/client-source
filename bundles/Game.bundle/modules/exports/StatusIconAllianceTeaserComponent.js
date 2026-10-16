Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleLabeledStatusIcon = require("gge-module:export_ACastleLabeledStatusIcon");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function StatusIconAllianceTeaserComponent() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, "Icon_AllianceTeaser", "mc_mailTooltip.txt_text", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_teaser_header")) || this).allowCaching = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAllianceTeaserComponent, __s1param0);
  StatusIconAllianceTeaserComponent.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserDataChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserDataChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onUserDataChanged));
  };
  StatusIconAllianceTeaserComponent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserDataChanged));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserDataChanged));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onUserDataChanged));
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
  };
  StatusIconAllianceTeaserComponent.prototype.setVisibilityLoaded = function () {
    var __s9local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel >= 6 && __dep_export_CastleModel.CastleModel.userData.userLevel <= StatusIconAllianceTeaserComponent.MAX_LEVEL && !__dep_export_CastleModel.CastleModel.userData.isInAlliance && __s9local0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAllianceTeaserComponent.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this.iconDisp.mc_mailTooltip.visible = false;
    this.setTooltip("dialog_alliance_teaser_header");
    if (!this.mailRemindTimer) {
      this.mailRemindTimer = new __dep_exact_81dacdf05bd32292.Timer(StatusIconAllianceTeaserComponent.FIRST_WAIT_TIME, 1);
      this.mailRemindTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer.start();
    }
  };
  StatusIconAllianceTeaserComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.mailRemindTimer) {
      this.mailRemindTimer.stop();
      this.mailRemindTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer = null;
    }
  };
  StatusIconAllianceTeaserComponent.prototype.disposeLoaded = function () {
    __s1param0.prototype.disposeLoaded.call(this);
    if (this.mailRemindTimer) {
      this.mailRemindTimer.stop();
      this.mailRemindTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer = null;
    }
  };
  StatusIconAllianceTeaserComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
  };
  StatusIconAllianceTeaserComponent.prototype.onUserDataChanged = function (__s24param0) {
    this.setVisibility();
  };
  StatusIconAllianceTeaserComponent.prototype.onRemoveMailToolTip = function (__s26param0) {
    this.mailRemindTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onRemoveMailToolTip));
    this.mailRemindTimer = new __dep_exact_81dacdf05bd32292.Timer(StatusIconAllianceTeaserComponent.WAIT_TIME, 1);
    this.mailRemindTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onMailReminder));
    this.mailRemindTimer.start();
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleX: 0.7
    }, {
      scaleX: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(function makeInvisible() {
        if (this.iconDisp) {
          this.iconDisp.mc_mailTooltip.visible = false;
        }
      })
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleY: 0.7
    }, {
      scaleY: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  StatusIconAllianceTeaserComponent.prototype.onMailReminder = function (__s31param0) {
    this.mailRemindTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onMailReminder));
    this.iconDisp.mc_mailTooltip.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleX: 0
    }, {
      scaleX: 0.7,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleY: 0
    }, {
      scaleY: 0.7,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    this.mailRemindTimer = new __dep_exact_81dacdf05bd32292.Timer(StatusIconAllianceTeaserComponent.STAY_TIME, 1);
    this.mailRemindTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onRemoveMailToolTip));
    this.mailRemindTimer.start();
  };
  StatusIconAllianceTeaserComponent.__initialize_static_members = function () {
    StatusIconAllianceTeaserComponent.MAX_LEVEL = 25;
    StatusIconAllianceTeaserComponent.FIRST_WAIT_TIME = 35000;
    StatusIconAllianceTeaserComponent.WAIT_TIME = 70000;
    StatusIconAllianceTeaserComponent.STAY_TIME = 10000;
  };
  return StatusIconAllianceTeaserComponent;
}(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon);
exports.StatusIconAllianceTeaserComponent = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
__s0local1.__initialize_static_members();
