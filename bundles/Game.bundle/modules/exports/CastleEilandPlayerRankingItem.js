Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleEilandPlayerRankingItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT);
    __s3local0._disp.bg.gotoAndStop(1);
    __s3local0._disp.txt_alliancePoints.mouseEnabled = false;
    __s3local0._disp.txt_rank.mouseEnabled = false;
    __s3local0._disp.txt_name.mouseEnabled = false;
    __s3local0._disp.txt_level.mouseEnabled = false;
    __s3local0._disp.mc_allianceRank.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandPlayerRankingItem, __s1param0);
  CastleEilandPlayerRankingItem.prototype.customFillItem = function () {
    this.setFontWeight();
    this._disp.mc_kingIndicator.visible = false;
    this.setTexts();
    this.setAllianceRankIcon(this.itemVO.allianceRank);
    this._disp.mc_kingIndicator.visible = this.isKing();
  };
  CastleEilandPlayerRankingItem.prototype.isKing = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.eilandData.kingTitleVO;
    return this.itemVO.playerName == __s7local0.currentAssignee;
  };
  CastleEilandPlayerRankingItem.prototype.setTexts = function () {
    if (this.itemVO.hasUnlockedEiland) {
      this._disp.bg.gotoAndStop(1);
      this.textFieldManager.registerTextField(this._disp.txt_alliancePoints, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.itemVO.aquaPoints));
      this.textFieldManager.registerTextField(this._disp.txt_rank, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.itemVO.rank));
    } else {
      this._disp.bg.gotoAndStop(CastleEilandPlayerRankingItem.BG_FRAME_GREY);
      this.textFieldManager.registerTextField(this._disp.txt_alliancePoints, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
      this.textFieldManager.registerTextField(this._disp.txt_rank, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
    }
    this.textFieldManager.registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.itemVO.playerName));
    this.textFieldManager.registerTextField(this._disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.itemVO.playerLevel));
  };
  CastleEilandPlayerRankingItem.prototype.setFontWeight = function () {
    if (this.itemVO.isSearchResult) {
      this._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_BOLD_TEXT);
    } else {
      this._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT);
    }
  };
  CastleEilandPlayerRankingItem.prototype.onMouseClick = function (__s17param0) {
    __s1param0.prototype.onMouseClick.call(this, __s17param0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.itemVO.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleEilandPlayerRankingItem.prototype.setAllianceRankIcon = function (__s19param0) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._disp.mc_allianceRank.mc_rankPlaceholder);
    var __s19local0 = new Library.CastleInterfaceElements.Icon_AllianceRank();
    __s19local0.gotoAndStop(__s19param0 + 1);
    this._disp.mc_allianceRank.mc_rankPlaceholder.addChild(__s19local0);
    this._disp.mc_allianceRank.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(__s19param0));
  };
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "itemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "highlight", {
    set: function (__s27param0) {
      this.itemVO.isSearchResult = __s27param0;
      this.customFillItem();
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandPlayerRankingItem.prototype.onRollOver = function (__s29param0) {
    __s1param0.prototype.onRollOver.call(this, __s29param0);
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleEilandPlayerRankingItem.prototype.onRollOut = function (__s31param0) {
    __s1param0.prototype.onRollOut.call(this, __s31param0);
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleEilandPlayerRankingItem.__initialize_static_members = function () {
    CastleEilandPlayerRankingItem.BG_FRAME_GREY = 4;
    CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT = 1;
    CastleEilandPlayerRankingItem.FRAME_BOLD_TEXT = 2;
  };
  return CastleEilandPlayerRankingItem;
}(__dep_exact_9e901e8e2483a22f_3.ScrollItem);
exports.CastleEilandPlayerRankingItem = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
