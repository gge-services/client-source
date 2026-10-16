Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __s0local0 = function (__s1param0) {
  function CastlePostPostAttackFactionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePostPostAttackFactionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostPostAttackFactionDialog, __s1param0);
  CastlePostPostAttackFactionDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
    this.iAttackWrningTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("faction_attackwarning_copy1"));
    this.iAttackWarningTxt2 ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("faction_attackwarning_copy2"));
    this.iTitleTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_alert_watchout"));
    this.iUnitAmountTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.info_units.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.armySize.toString()));
    this.iTimerTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastlePostPostAttackFactionDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.dialogDisp.info_time.toolTipText = "travelTime";
    this.dialogDisp.info_units.toolTipText = "dialog_shortArmy_title";
    this.onUpdateTimer();
  };
  CastlePostPostAttackFactionDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        if (__dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO != null) {
          __dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO.FC = 1;
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO);
          __dep_export_CastleDataHolder.CastleDataHolder.instance.commandVO = null;
        }
        this.hide();
    }
  };
  CastlePostPostAttackFactionDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastlePostPostAttackFactionDialog.prototype.hideLoaded = function (__s15param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s15param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastlePostPostAttackFactionDialog.prototype.onUpdateTimer = function (__s17param0 = null) {
    var __s17local0 = Math.max(this.dialogProperties.armyArrivedTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer(), 0);
    this.iTimerTxt.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s17local0 * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
  };
  Object.defineProperty(CastlePostPostAttackFactionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostPostAttackFactionDialog.__initialize_static_members = function () {
    CastlePostPostAttackFactionDialog.NAME = "CastlePostPostAttackFactionEx";
  };
  return CastlePostPostAttackFactionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePostPostAttackFactionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
