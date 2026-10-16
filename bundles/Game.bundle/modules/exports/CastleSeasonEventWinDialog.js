Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSeasonEventWinDialog() {
    return __s1param0.call(this, CastleSeasonEventWinDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonEventWinDialog, __s1param0);
  CastleSeasonEventWinDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_victory_titel"));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("EventWin_" + this.dialogProperties.eventID, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("EventWin_" + this.dialogProperties.eventID), null, 0, false);
    this.dialogDisp.mc_holder.addChild(this.clip);
    if (this.clip.isLoaded) {
      this.onClipLoaded();
    } else {
      this.clip.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
    }
    switch (this.dialogProperties.eventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_victory_copy"));
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonEvent_" + __s5local0.mapID + "_victory_copy"));
        break;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonEvent_64_victory_copy"));
    }
  };
  CastleSeasonEventWinDialog.prototype.onClipLoaded = function (__s10param0 = null) {
    var __s10local0 = this.clip.currentshownDisplayObject.mc_equipHolder;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s10local0);
    this.updateReward(__s10local0);
  };
  CastleSeasonEventWinDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleSeasonEventWinDialog.prototype.updateReward = function (__s15param0) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15param0).addIconMc(__s15param0), this.reward, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(91, 91)));
  };
  Object.defineProperty(CastleSeasonEventWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonEventWinDialog.prototype, "reward", {
    get: function () {
      return this.dialogProperties.reward;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventWinDialog.NAME = "CastleSeasonEventWinEx";
  return CastleSeasonEventWinDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSeasonEventWinDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
