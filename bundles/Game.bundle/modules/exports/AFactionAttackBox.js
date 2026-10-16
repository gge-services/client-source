Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function AFactionAttackBox(__s3param0) {
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_showMe);
    this.itxt_header = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_description = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  }
  AFactionAttackBox.prototype.show = function () {
    this.updateButton();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  AFactionAttackBox.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  AFactionAttackBox.prototype.onLMSUpdate = function (__s9param0) {
    this.updateButton();
  };
  AFactionAttackBox.prototype.updateButton = function () {
    var __s11local0;
    var __s11local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    var __s11local2 = !__s11local1.isActiveInEvent && !__s11local1.isLocked;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_showMe, __s11local1.isActiveInEvent);
    __s11local0 = __s11local2 ? "dialog_faction_cannotAttack_tooltip" : __s11local1.isLocked ? "alert_not_available" : this.defaultShowMeButtonTooltip;
    this._disp.btn_showMe.toolTipText = __s11local0;
  };
  Object.defineProperty(AFactionAttackBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AFactionAttackBox.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target) && __s15param0.target == this._disp.btn_showMe) {
      this.onClickShowMe();
    }
  };
  AFactionAttackBox.prototype.onClickShowMe = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AFactionAttackBox.__initialize_static_members = function () {
    AFactionAttackBox.ICON_SIZE = new __s0local1(55, 55);
  };
  return AFactionAttackBox;
}();
exports.AFactionAttackBox = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local2.__initialize_static_members();
