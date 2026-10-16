Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDaimyoCastle(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._onMouseOverFunc = __s3param1;
    __s3local0._onMouseOutFunc = __s3param2;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDaimyoCastle, __s1param0);
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.init = function () {
    this.updateColors();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    __s1param0.prototype.removeEventListener.call(this);
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateWithNewVO = function (__s11param0) {
    this._vo = __s11param0;
    this.update();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.update = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank_value", [this.vo.rank])).autoFitToBounds = true;
    this.disp.mc_castle.gotoAndStop(this.vo.rank);
    this.updateFire();
    this.updateCamps();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateFire = function () {
    this.disp.mc_fire.visible = this.vo && this.vo.getRemainingCooldown() > 0;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateCamps = function () {
    if (this.disp.mc_camps) {
      this.disp.mc_camps.visible = this.isCastleSupported();
    }
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateColors = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest;
    if (this.disp.mc_flag) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this.disp.mc_flag, __s20local0, false);
    }
    if (this.disp.mc_camps) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this.disp.mc_camps, __s20local0, false);
    }
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.isCastleSupported = function () {
    if (this.vo.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP) {
      for (var __s24local0 = 0, __s24local1 = __dep_export_CastleModel.CastleModel.armyData.getAllMyMovementsByTargetType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID); __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2.targetAreaPos.x == this.vo.x && __s24local2.targetAreaPos.y == this.vo.y && __s24local2.isStationed) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    var __s30local0 = new __dep_export_DaimyoCastleMapObjectVO.DaimyoCastleMapObjectVO();
    __s30local0.parseAreaInfo([__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_CASTLE, this.vo.x, this.vo.y]);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s30local0);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onTimer = function (__s32param0) {
    this.updateFire();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseOver = function (__s34param0) {
    __s1param0.prototype.onMouseOver.call(this, __s34param0);
    this._onMouseOverFunc(this);
    this.disp.mc_mouseOver.visible = true;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseOut = function (__s36param0) {
    __s1param0.prototype.onMouseOut.call(this, __s36param0);
    this._onMouseOutFunc(this);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseDown = function (__s38param0) {
    this.disp.mc_mouseDown.visible = true;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onCrestColorUpdated = function (__s40param0) {
    this.updateColors();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDaimyoCastle.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceSamuraiInvasionDaimyoCastle;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleAllianceSamuraiInvasionDaimyoCastle = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_DaimyoCastleMapObjectVO = require("gge-module:export_DaimyoCastleMapObjectVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
