Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AFactionAttackBox = require("gge-module:export_AFactionAttackBox");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FactionAttackPvpBox(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_header.textContentVO.textId = "dialog_faction_camps_header";
    __s3local0.itxt_description.textContentVO.textId = "dialog_faction_camps_copy";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionAttackPvpBox, __s1param0);
  FactionAttackPvpBox.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.updateIcon();
  };
  FactionAttackPvpBox.prototype.updateIcon = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._disp.mc_icon);
    var __s7local0 = new __dep_export_FactionCampMapobjectVO.FactionCampMapobjectVO();
    var __s7local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION).otherFactionKingPlayerId);
    __s7local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s7local1);
    this._disp.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s7local0, __dep_export_AFactionAttackBox.AFactionAttackBox.ICON_SIZE, true, false, false));
  };
  Object.defineProperty(FactionAttackPvpBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      return "dialog_faction_camps_tooltip";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFactionAttackBox.AFactionAttackBox.prototype, "defaultShowMeButtonTooltip").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPvpBox.prototype.onClickShowMe = function () {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID)) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_FactionEventMainDialog.FactionEventMainDialog);
      var __s13local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID);
      var __s13local1 = __s13local0 ? __s13local0.absAreaPos : new __s0local0(0, 0);
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID, __s13local1.x, __s13local1.y]);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP, __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID, -3));
    }
  };
  return FactionAttackPvpBox;
}(__dep_export_AFactionAttackBox.AFactionAttackBox);
exports.FactionAttackPvpBox = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_FactionCampMapobjectVO = require("gge-module:export_FactionCampMapobjectVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_FactionEventMainDialog = require("gge-module:export_FactionEventMainDialog");
