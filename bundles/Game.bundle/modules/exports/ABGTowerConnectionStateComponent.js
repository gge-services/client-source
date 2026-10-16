Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function ABGTowerConnectionStateComponent(__s3param0, __s3param1, __s3param2 = true) {
    this._size = 0;
    var __s3local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s3param0);
    this._size = __s3param1;
    this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s3param0, __s3local0, null, 0, false);
    this._clip.doWhenLoaded(this.bindFunction(this.onLoaded));
    this._disp = new __s0local0();
    this._disp.mouseChildren = false;
    this._disp.addChild(this._clip);
    if (__s3param2) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp);
    }
  }
  ABGTowerConnectionStateComponent.prototype.onLoaded = function (__s6param0) {
    this.icon.mc_playerDead.visible = false;
    this.icon.mc_playerAlive.visible = false;
    this.icon.mc_dead.visible = false;
    this.icon.mc_alive.visible = false;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(this.icon, this._size, this._size);
  };
  ABGTowerConnectionStateComponent.prototype.setConnection = function (__s8param0) {
    this._connection = __s8param0;
    this._clip.doWhenLoaded(this.bindFunction(this.setConnectionLoaded));
  };
  ABGTowerConnectionStateComponent.prototype.setConnectionLoaded = function (__s10param0) {
    var __s10local0 = !!this._connection && this._connection.playerName == __dep_export_CastleModel.CastleModel.userData.userName;
    var __s10local1 = __dep_exact_f855840627e6e145.int(this._connection ? this._connection.status : ABGTowerConnectionStateComponent.STATE_EMPTY);
    this.icon.mc_playerDead.visible = __s10local0 && __s10local1 == ABGTowerConnectionStateComponent.STATE_DEFEATED;
    this.icon.mc_playerAlive.visible = __s10local0 && __s10local1 == ABGTowerConnectionStateComponent.STATE_ALIVE;
    this.icon.mc_dead.visible = !__s10local0 && __s10local1 == ABGTowerConnectionStateComponent.STATE_DEFEATED;
    this.icon.mc_alive.visible = !__s10local0 && __s10local1 == ABGTowerConnectionStateComponent.STATE_ALIVE;
    switch (__s10local1) {
      case ABGTowerConnectionStateComponent.STATE_ALIVE:
        this.disp.toolTipText = __s10local0 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_player_tooltip", ["dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusAlive"]) : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_other_tooltip", [this._connection.playerName, "dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusAlive"]);
        break;
      case ABGTowerConnectionStateComponent.STATE_DEFEATED:
        this.disp.toolTipText = __s10local0 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_player_tooltip", ["dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusDead"]) : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_other_tooltip", [this._connection.playerName, "dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusDead"]);
        break;
      case ABGTowerConnectionStateComponent.STATE_EMPTY:
        this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_empty_tooltip");
    }
    var __s10local2 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._disp);
    if (__s10local2) {
      if (__s10local1 == ABGTowerConnectionStateComponent.STATE_EMPTY) {
        this._disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
        __s10local2.mouseOverScale = 1;
      } else {
        this._disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
        __s10local2.mouseOverScale = 1.05;
      }
    }
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  ABGTowerConnectionStateComponent.prototype.onClick = function (__s16param0) {
    var __s16local0 = new __dep_export_UnknownMapobjectVO.UnknownMapobjectVO();
    __s16local0.parseAreaInfo([this._connection.absAreaPos.x, this._connection.absAreaPos.y, this._connection.kingdomId]);
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s16local0);
  };
  Object.defineProperty(ABGTowerConnectionStateComponent.prototype, "icon", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGTowerConnectionStateComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ABGTowerConnectionStateComponent.prototype.destroy = function () {
    this._clip.dispose();
    this._clip = null;
    this._connection = null;
  };
  ABGTowerConnectionStateComponent.TYPE_DIALOG = "ABGTowerConnectionState_Dialog2";
  ABGTowerConnectionStateComponent.TYPE_MAP = "ABGTowerConnectionState_Map2";
  ABGTowerConnectionStateComponent.SIZE_MAP = 24;
  ABGTowerConnectionStateComponent.SIZE_DIALOG = 22;
  ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG = 34;
  ABGTowerConnectionStateComponent.SPACING_DIALOG = 7;
  ABGTowerConnectionStateComponent.SPACING_MAP = 5;
  ABGTowerConnectionStateComponent.STATE_ALIVE = 0;
  ABGTowerConnectionStateComponent.STATE_DEFEATED = 1;
  ABGTowerConnectionStateComponent.STATE_EMPTY = 2;
  return ABGTowerConnectionStateComponent;
}();
exports.ABGTowerConnectionStateComponent = __s0local2;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_UnknownMapobjectVO = require("gge-module:export_UnknownMapobjectVO");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
