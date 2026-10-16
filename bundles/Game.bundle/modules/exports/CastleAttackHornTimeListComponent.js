Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleAttackHornTimeListComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._visible = true;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this._disp.btn_show, this._disp.btn_hide]);
    this._itxtPlayerTime = this.createEntry("attackHorn_incomingAttack_player_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + __s3param1]);
    this._itxtAllianceTime = this.createEntry("attackHorn_incomingAttack_alliance_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + __s3param2]);
    this._itxtAllianceCityTime = this.createEntry("attackHorn_incomingAttack_allianceCity_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + __s3param3]);
  }
  CastleAttackHornTimeListComponent.prototype.show = function () {
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.update();
  };
  CastleAttackHornTimeListComponent.prototype.update = function () {
    if (this._visible) {
      this.fillList();
      this.showList();
    } else {
      this.hideList();
    }
  };
  CastleAttackHornTimeListComponent.prototype.onTimerUpdate = function (__s11param0) {
    this.fillList();
  };
  CastleAttackHornTimeListComponent.prototype.dispose = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleAttackHornTimeListComponent.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this._disp.btn_show:
          this.showList();
          break;
        case this._disp.btn_hide:
          this.hideList();
      }
    }
  };
  CastleAttackHornTimeListComponent.prototype.hideList = function () {
    this._disp.mc_timeList.visible = false;
    this._disp.btn_hide.visible = false;
    this._disp.btn_show.visible = true;
    this._visible = false;
  };
  CastleAttackHornTimeListComponent.prototype.showList = function () {
    this._disp.mc_timeList.visible = true;
    this._disp.btn_hide.visible = true;
    this._disp.btn_show.visible = false;
    this._visible = true;
  };
  CastleAttackHornTimeListComponent.prototype.fillList = function () {
    var __s23local0;
    var __s23local1 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAttackTimeInMilliseconds() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    var __s23local2 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    var __s23local3 = __dep_export_CastleModel.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    if (__s23local1 > 0) {
      __s23local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s23local1);
      this._itxtPlayerTime.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s23local0);
    }
    if (__s23local2 > 0) {
      __s23local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s23local2);
      this._itxtAllianceTime.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s23local0);
    }
    if (__s23local3 > 0) {
      __s23local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s23local3);
      this._itxtAllianceCityTime.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s23local0);
    }
  };
  Object.defineProperty(CastleAttackHornTimeListComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackHornTimeListComponent.prototype.createEntry = function (__s30param0, __s30param1) {
    var __s30local0 = null;
    if (__s30param1) {
      __s30local0 = this.textFieldManager.registerTextField(__s30param1.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      __s30param1.mouseChildren = false;
      __s30param1.toolTipText = __s30param0;
    }
    return __s30local0;
  };
  CastleAttackHornTimeListComponent.__initialize_static_members = function () {
    CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX = "mc_entry_";
  };
  return CastleAttackHornTimeListComponent;
}();
exports.CastleAttackHornTimeListComponent = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
