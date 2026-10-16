Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEilandPanel(__s3param0, __s3param1) {
    this._panel = __s3param0;
    this._parentPanel = __s3param1;
  }
  CastleEilandPanel.prototype.addListeners = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateIslandPanel));
  };
  CastleEilandPanel.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateIslandPanel));
  };
  CastleEilandPanel.prototype.initIslandPanel = function () {
    this.itxt_countdown = this.textFieldManager.registerTextField(this.panel.mc_countdown.txt_countdown, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this.itxt_countdown.autoFitToBounds = true;
    this.panel.mc_countdown.mouseChildren = false;
    this.panel.mc_countdown.toolTipText = "countdown_aquamarin_tooltip";
    this.panel.mc_aquaPoints.mouseChildren = false;
    this.panel.mc_aquaPoints.toolTipText = __dep_export_CastleModel.CastleModel.userData.isInAlliance ? "aquamarin_points_tooltip" : "aquamarin_points_noAlliance_tooltip";
    this.updateIslandPanel(null);
    this.addListeners();
  };
  CastleEilandPanel.prototype.isAvailable = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
  };
  CastleEilandPanel.prototype.updateIslandPanel = function (__s13param0) {
    if (this.isAvailable() && this.panel.visible) {
      var __s13local0 = __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
      if (__dep_export_CastleModel.CastleModel.userData.aquaPoints < 0) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAquaPoints.C2SGetAquaPoints());
      }
      this.itxt_countdown.textContentVO.stringValue = __s13local0;
      this.itxt_aquaPoints ||= this.textFieldManager.registerTextField(this.panel.mc_aquaPoints.txt_aquaPoints, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        this.itxt_aquaPoints.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.userData.aquaPoints, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints];
        this.itxt_aquaPoints.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.itxt_aquaPoints.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.userData.aquaPoints, "-"];
        this.itxt_aquaPoints.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
      }
      if (__s13param0 && this._parentPanel) {
        this._parentPanel.updateCache();
      }
    }
  };
  Object.defineProperty(CastleEilandPanel.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPanel.prototype, "panel", {
    get: function () {
      return this._panel;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandPanel;
}();
exports.CastleEilandPanel = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetAquaPoints = require("gge-module:export_C2SGetAquaPoints");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
