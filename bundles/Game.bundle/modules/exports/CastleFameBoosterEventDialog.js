Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleFameHelper = require("gge-module:export_CastleFameHelper");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function CastleFameBoosterEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFameBoosterEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFameBoosterEventDialog, __s1param0);
  CastleFameBoosterEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btnClose]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("eventBuilding_fameBoost"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fameBoost_eventcamp_description"));
    this.tfTime = this.textFieldManager.registerTextField(this.dialogDisp.timeContainer.tfTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.tfTime.mouseEnabled = false;
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.bonusContainer.tfBonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_add"));
    this.tfBonus.mouseEnabled = false;
    this.dialogDisp.timeContainer.toolTipText = "resttime";
    this.remainingTimeComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.tfTime, this.bindFunction(this.getTimerText));
  };
  CastleFameBoosterEventDialog.prototype.getTimerText = function (__s7param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s7param0);
  };
  CastleFameBoosterEventDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.updateDialog();
  };
  CastleFameBoosterEventDialog.prototype.updateDialog = function () {
    if (this.remainingEventTimeInSeconds == -1) {
      this.hide();
    }
    this.remainingTimeComponent.start(this.remainingEventTimeInSeconds);
    this.dialogDisp.bonusContainer.toolTipText = {
      t: "dialog_fameBoost_bonus_tooltip",
      p: [this.bonusPercentage]
    };
    this.tfDesc.textContentVO.textReplacements = [this.bonusPercentage];
    this.tfBonus.textContentVO.textReplacements = [this.bonusPercentage];
  };
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "bonusPercentage", {
    get: function () {
      return __dep_export_CastleFameHelper.CastleFameHelper.getFameBoosterBonus(true, false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (__dep_export_CastleFameHelper.CastleFameHelper.isOfferBonusBetterThanEvent()) {
        return this.privateFameBooster.remainingTimeInSeconds;
      } else if (this.gloryBoosterEventVO) {
        return this.gloryBoosterEventVO.remainingEventTimeInSeconds;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFameBoosterEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleFameBoosterEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleFameBoosterEventDialog.prototype.onTimerUpdate = function (__s25param0) {
    this.updateDialog();
  };
  CastleFameBoosterEventDialog.prototype.hideLoaded = function (__s27param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s27param0);
    this.remainingTimeComponent.stop();
  };
  CastleFameBoosterEventDialog.prototype.onClick = function (__s29param0) {
    __s1param0.prototype.onClick.call(this, __s29param0);
    if (__s29param0.target == this.dialogDisp.btnClose) {
      this.hide();
    }
  };
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "privateFameBooster", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "gloryBoosterEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_GLORY_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  CastleFameBoosterEventDialog.__initialize_static_members = function () {
    CastleFameBoosterEventDialog.NAME = "CastleFameBoosterEventExternal";
  };
  return CastleFameBoosterEventDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFameBoosterEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
