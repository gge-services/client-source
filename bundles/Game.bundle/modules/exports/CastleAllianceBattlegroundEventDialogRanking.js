Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogRanking(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._defaultSearchText = "";
    __s3local0.searchName = "";
    __s3local0.isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).mainDialog = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogRanking, __s1param0);
  CastleAllianceBattlegroundEventDialogRanking.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_search, this.dialogDisp.btn_findme], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_findme], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this._highscore = new __dep_export_ModernHighscoreComponent.ModernHighscoreComponent(this.subLayerDisp.mc_list, CastleAllianceBattlegroundEventDialogRanking.MAX_VISIBLE_ITEMS, this.listItemClass, this.highscoreID, -1);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.mc_find.txt_input, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = __dep_exact_81dacdf05bd32292_2.TextFieldType.INPUT;
    this.searchField.selectable = true;
    this._defaultSearchText = this.searchField.text;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.mc_find.gotoAndStop(1);
    this.dialogDisp.btn_alliance.actLikeButton = true;
    this.dialogDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    if (this.dialogDisp.btn_alliance.txt_text) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceContest")));
    }
    if (this.dialogDisp.btn_player.txt_text) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("singleplayerContest")));
    }
    if (this.dialogDisp.btn_alliance.txt_text1) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceContest")));
    }
    if (this.dialogDisp.btn_player.txt_text1) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("singleplayerContest")));
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
    this._highscore.onHide();
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.inputKeyDown = function (__s20param0) {
    if (__s20param0.keyCode == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER) {
      this.onSearchButton();
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      __s1param0.prototype.onClick.call(this, __s23param0);
      switch (__s23param0.target) {
        case this.dialogDisp.btn_search:
          if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
            this.searchName = this.searchField.text;
            this.requestHighscoreData(this.searchName);
            this.dialogDisp.mc_find.gotoAndStop(2);
          }
          break;
        case this.dialogDisp.btn_findme:
          this.searchName = this.findMeSearchName;
          this.requestHighscoreData(this.searchName);
          break;
        case this.dialogDisp.btn_alliance:
          this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE);
          break;
        case this.dialogDisp.btn_player:
          this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER);
      }
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "findMeSearchName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.prototype.onFocusInSearchText = function (__s30param0) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onFocusOutSearchText = function (__s33param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
      this.dialogDisp.mc_find.gotoAndStop(1);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onSearchButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      this.disp.stage.focus = null;
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.requestHighscoreData = function (__s39param0) {
    this._highscore.requestDataFromServer(-1, __s39param0);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.MAX_VISIBLE_ITEMS = 7;
  return CastleAllianceBattlegroundEventDialogRanking;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogRanking = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_ModernHighscoreComponent = require("gge-module:export_ModernHighscoreComponent");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
