Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function () {
  function FactionRankingItem(__s3param0) {
    this._points = 0;
    this._rank = 0;
    this._leagueTypeID = 0;
    this._disp = __s3param0;
  }
  FactionRankingItem.prototype.onMouseOver = function (__s5param0) {};
  FactionRankingItem.prototype.onMouseOut = function (__s7param0) {};
  FactionRankingItem.prototype.onClick = function (__s9param0) {
    FactionRankingItem.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._ownerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  FactionRankingItem.prototype.update = function (__s11param0, __s11param1, __s11param2) {
    this._leagueTypeID = __s11param1;
    this._rank = __dep_exact_f855840627e6e145.int(__s11param0[0]);
    this._points = __dep_exact_f855840627e6e145.int(__s11param0[1]);
    this._ownerInfo = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    this._ownerInfo.fillFromParamObject(__s11param0[2]);
    if (__s11param2.toLowerCase() == this._ownerInfo.playerName.toLowerCase() || __s11param2 == this._rank.toString()) {
      this.disp.mc_color.gotoAndStop(FactionRankingItem.HIGHLIGHT_FRAME);
    } else {
      this.disp.mc_color.gotoAndStop(this.factionFrame);
    }
    this.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._rank));
    this.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_3.TextVO(this._ownerInfo.playerName));
    this.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(this._ownerInfo.playerLevel));
    this.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._points));
    var __s11local0 = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(this._ownerInfo.factionTitleID);
    this.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s11local0 ? __s11local0.textID : "-"));
  };
  Object.defineProperty(FactionRankingItem.prototype, "factionFrame", {
    get: function () {
      var __s15local0 = this._leagueTypeID % 2 ? 1 : 3;
      return (this._rank != 1) + __s15local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  FactionRankingItem.__initialize_static_members = function () {
    FactionRankingItem.HIGHLIGHT_FRAME = 5;
  };
  return FactionRankingItem;
}();
exports.FactionRankingItem = __s0local0;
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleGenericRankingItem");
__s0local0.__initialize_static_members();
