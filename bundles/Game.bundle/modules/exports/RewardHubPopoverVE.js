Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_APopoverVE = require("gge-module:export_APopoverVE");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RewardHubTextsFactory = require("gge-module:export_RewardHubTextsFactory");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function RewardHubPopoverVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubPopoverVE, __s1param0);
  RewardHubPopoverVE.prototype.fillContent = function (__s5param0) {
    __s1param0.prototype.fillContent.call(this, __s5param0);
    this._disp = __s5param0;
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
    this.addEventListeners();
    var __s5local0 = __dep_export_CastleModel.CastleModel.rewardHubData.getRewardHubVOById(this.popoverVO.data.id);
    var __s5local1 = __dep_export_RewardHubTextsFactory.RewardHubTextsFactory.createRewardHubItemTextVO(__s5local0);
    var __s5local2 = __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(__s5local0.mainEventID, new __s0local1(26, 30));
    this._itxt_title = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._itxt_copy = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.itxt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._disp.icon);
    this._disp.icon.addChild(__s5local2);
    this._itxt_title.textContentVO.textId = __s5local1.txtTitlte;
    this._itxt_copy.textContentVO.textId = __s5local1.txtSubtitle;
  };
  RewardHubPopoverVE.prototype.addEventListeners = function () {
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  RewardHubPopoverVE.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  RewardHubPopoverVE.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListeners();
  };
  RewardHubPopoverVE.prototype.getPopoverConfig = function () {
    var __s13local0 = new __dep_export_SimplePopoverConfig.SimplePopoverConfig("RewardHubNotification");
    __s13local0.useClickArea = false;
    __s13local0.waitDuration = 3;
    __s13local0.fadeOutDuration = 0.5;
    return __s13local0;
  };
  RewardHubPopoverVE.prototype.onMouseOver = function (__s15param0) {
    this._disp.mc_hover.visible = true;
  };
  RewardHubPopoverVE.prototype.onMouseOut = function (__s17param0) {
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
  };
  RewardHubPopoverVE.prototype.onRollOver = function (__s19param0) {
    this._disp.mc_hover.visible = true;
  };
  RewardHubPopoverVE.prototype.onRollOut = function (__s21param0) {
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
  };
  RewardHubPopoverVE.prototype.onClick = function (__s23param0) {
    this._disp.mc_down.visible = true;
  };
  return RewardHubPopoverVE;
}(__dep_export_APopoverVE.APopoverVE);
exports.RewardHubPopoverVE = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
