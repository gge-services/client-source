Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SFindNextTowerVO = require("gge-module:export_C2SFindNextTowerVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AFactionAttackBox = require("gge-module:export_AFactionAttackBox");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FactionAttackPveBox(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionAttackPveBox, __s1param0);
  FactionAttackPveBox.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.updateTexts();
    this.updateIcon();
  };
  FactionAttackPveBox.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  FactionAttackPveBox.prototype.onLMSUpdate = function (__s9param0) {
    __s1param0.prototype.onLMSUpdate.call(this, __s9param0);
    this.updateTexts();
    this.updateIcon();
  };
  Object.defineProperty(FactionAttackPveBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      if (FactionAttackPveBox.allEnemyTowersDestroyed) {
        return "dialog_faction_capital_tooltip";
      } else {
        return "dialog_faction_towers_tooltip";
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFactionAttackBox.AFactionAttackBox.prototype, "defaultShowMeButtonTooltip").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPveBox.prototype.updateTexts = function () {
    if (FactionAttackPveBox.enemyCapitalDestroyed) {
      this.itxt_header.textContentVO.textId = "dialog_faction_capital_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_capitalDestroyed_copy";
    } else if (FactionAttackPveBox.allEnemyTowersDestroyed) {
      this.itxt_header.textContentVO.textId = "dialog_faction_capital_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_capital_copy";
    } else {
      this.itxt_header.textContentVO.textId = "dialog_faction_towers_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_towers_copy";
    }
  };
  FactionAttackPveBox.prototype.updateIcon = function () {
    var __s22local0;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_icon);
    __s22local0 = FactionAttackPveBox.enemyCapitalDestroyed || FactionAttackPveBox.allEnemyTowersDestroyed ? new __dep_export_FactionCapitalMapobjectVO.FactionCapitalMapobjectVO() : new __dep_export_FactionTowerMapobjectVO.FactionTowerMapobjectVO();
    var __s22local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).otherFactionKingPlayerId);
    __s22local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s22local1);
    this._disp.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s22local0, __dep_export_AFactionAttackBox.AFactionAttackBox.ICON_SIZE, true, false, false));
  };
  Object.defineProperty(FactionAttackPveBox, "allEnemyTowersDestroyed", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isOtherCapitalReachable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionAttackPveBox, "enemyCapitalDestroyed", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION).isOtherFactionInLMS;
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPveBox.prototype.onClickShowMe = function () {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID)) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_FactionEventMainDialog.FactionEventMainDialog);
      var __s28local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID);
      var __s28local1 = __s28local0 ? __s28local0.absAreaPos : new __s0local0(0, 0);
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID, __s28local1.x, __s28local1.y]);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextTowerVO.C2SFindNextTowerVO());
    }
  };
  return FactionAttackPveBox;
}(__dep_export_AFactionAttackBox.AFactionAttackBox);
exports.FactionAttackPveBox = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_FactionCapitalMapobjectVO = require("gge-module:export_FactionCapitalMapobjectVO");
var __dep_export_FactionTowerMapobjectVO = require("gge-module:export_FactionTowerMapobjectVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_FactionEventMainDialog = require("gge-module:export_FactionEventMainDialog");
