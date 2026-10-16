Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePointEventHighscoreItemVO = require("gge-module:export_CastlePointEventHighscoreItemVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleGenericHighscoreDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentLeagueId = 0;
    __s3local0._currentSearchName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericHighscoreDialog, __s1param0);
  CastleGenericHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_search, this.dialogDisp.btn_help, this.dialogDisp.btn_leagueDown, this.dialogDisp.btn_leagueUp, this.dialogDisp.mc_listContainer.btn_top, this.dialogDisp.mc_listContainer.btn_up, this.dialogDisp.mc_listContainer.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level")).autoFitToBounds = true;
    this.dialogDisp.btn_search.toolTipText = "panel_navigation_playername";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.initItemRenderers();
  };
  CastleGenericHighscoreDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.preselectedLeagueId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_navigation_playername"));
    this._defaultSearchText = this._itxt_search.text;
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this._itxt_search.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    for (var __s7local0 = 0; __s7local0 < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s7local0) {
      this._itemRenderers[__s7local0].itemVO = null;
      this._itemRenderers[__s7local0].updateItem();
    }
    this.updateScrollButtons();
    this.requestHighscoreData(this.dialogProperties.preselectedOwnRank > 0 ? "" + this.dialogProperties.preselectedOwnRank : CastleGenericHighscoreDialog.OWN_RANK);
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericHighscoreDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this._itxt_search) {
      this._itxt_search.keyUp.removeAll();
      this._itxt_search.focusIn.removeAll();
      this._itxt_search.focusOut.removeAll();
    }
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericHighscoreDialog.prototype.onMouseWheel = function (__s14param0) {
    if (__s14param0.delta < 0) {
      this.scrollUp();
    } else if (__s14param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericHighscoreDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      switch (__s18param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_search:
          this.onConfirmSearchField();
          break;
        case this.dialogDisp.btn_leagueUp:
          this.scrollLeagueUp();
          break;
        case this.dialogDisp.btn_leagueDown:
          this.scrollLeagueDown();
          break;
        case this.dialogDisp.mc_listContainer.btn_top:
          this.requestHighscoreData("1");
          break;
        case this.dialogDisp.mc_listContainer.btn_up:
          this.scrollUp();
          break;
        case this.dialogDisp.mc_listContainer.btn_down:
          this.scrollDown();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helpTextId));
      }
    }
  };
  Object.defineProperty(CastleGenericHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialog.prototype.onConfirmSearchField = function () {
    if (this._itxt_search.text != "" && this._itxt_search.text != this._defaultSearchText) {
      this._currentSearchName = this._itxt_search.text;
      this.requestHighscoreData(this._currentSearchName);
    }
  };
  CastleGenericHighscoreDialog.prototype.onGetHighscoreDataError = function (__s27param0) {
    this.isWaitingForServerMessage = false;
    this._currentSearchName = "";
  };
  CastleGenericHighscoreDialog.prototype.onGetHighscoreData = function (__s29param0) {
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = __s29param0.leagueId;
    this.initItemRenderers();
    var __s29local0;
    var __s29local1 = __s29param0.params[0].L;
    var __s29local2 = 0;
    for (var __s29local3 = 0; __s29local3 < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s29local3) {
      var __s29local4 = this._itemRenderers[__s29local3];
      var __s29local5 = null;
      if (__s29local3 < __s29local1.length) {
        var __s29local6 = __s29local1[__s29local3];
        __s29local5 = new __dep_export_CastlePointEventHighscoreItemVO.CastlePointEventHighscoreItemVO();
        var __s29local7 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
        __s29local7.fillFromParamObject(__s29local6[2]);
        __s29local5.ownerInfo = __s29local7;
        __s29local2 = __dep_exact_f855840627e6e145.int(__s29local5.rank = __dep_exact_f855840627e6e145.int(__s29local6[0]));
        __s29local5.amount = __dep_exact_f855840627e6e145.int(__s29local6[1]);
      }
      __s29local4.itemVO = __s29local5;
      __s29local4.updateItem(this._currentSearchName);
      if (!__s29local4.isSelected() && __s29local5 && __s29local5.rank == Number(this._currentSearchName)) {
        __s29local0 = __s29local4;
      }
    }
    if (__s29local0) {
      __s29local0.select();
    }
    this.updateScrollButtons(__s29local2, __s29param0.params[0].LR);
    this._currentSearchName = "";
  };
  CastleGenericHighscoreDialog.prototype.updateScrollButtons = function (__s36param0 = 0, __s36param1 = 0) {
    var __s36local0 = !!this._itemRenderers[0].itemVO && this._itemRenderers[0].itemVO.rank > 1;
    var __s36local1 = __s36param0 < __s36param1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_top, __s36local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_up, __s36local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_down, __s36local1);
  };
  CastleGenericHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var __s38local0 = __dep_exact_f855840627e6e145.int(Math.max(this._itemRenderers[0].itemVO.rank - CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericHighscoreDialog.SCROLL_DELTA, 0));
      this.requestHighscoreData("" + __s38local0);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var __s41local0 = __dep_exact_f855840627e6e145.int(this._itemRenderers[0].itemVO.rank + CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericHighscoreDialog.SCROLL_DELTA);
      this.requestHighscoreData("" + __s41local0);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId >= this.dialogProperties.numberOfLeagues + 1) {
        this._currentLeagueId = 1;
      }
      var __s44local0 = this._currentLeagueId == this.dialogProperties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(__s44local0, this._currentLeagueId);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.numberOfLeagues);
      }
      var __s48local0 = this._currentLeagueId == this.dialogProperties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(__s48local0, this._currentLeagueId);
    }
  };
  CastleGenericHighscoreDialog.prototype.initItemRenderers = function () {
    if (!this._itemRenderers) {
      this._itemRenderers = [];
      for (var __s52local0 = 0; __s52local0 < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s52local0) {
        this._itemRenderers.push(new __dep_export_CastleGenericHighscoreDialogItemRenderer.CastleGenericHighscoreDialogItemRenderer(this.dialogDisp.mc_listContainer["i" + __s52local0]));
      }
    }
  };
  CastleGenericHighscoreDialog.prototype.onSearchFieldKeyDown = function (__s57param0) {
    if (__s57param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onConfirmSearchField();
    }
  };
  CastleGenericHighscoreDialog.prototype.onFocusInSearchText = function (__s60param0) {
    if (this._itxt_search.text == this._defaultSearchText) {
      this._itxt_search.clearText();
    }
  };
  CastleGenericHighscoreDialog.prototype.onFocusOutSearchText = function (__s63param0) {
    if (this._itxt_search.text == "") {
      this._itxt_search.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this._defaultSearchText);
      this._currentSearchName = "";
    }
  };
  CastleGenericHighscoreDialog.prototype.onRemoveSpecialEvent = function (__s66param0) {
    this.hide();
    this.destroy();
  };
  CastleGenericHighscoreDialog.prototype.requestHighscoreData = function (__s68param0, __s68param1 = -1) {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s68param0, this.dialogProperties.highscoreType, __s68param1 > 0 ? __s68param1 : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialog.__initialize_static_members = function () {
    CastleGenericHighscoreDialog.OWN_RANK = "-1";
    CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS = 8;
    CastleGenericHighscoreDialog.SCROLL_DELTA = 3;
  };
  return CastleGenericHighscoreDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGenericHighscoreDialog = __s0local1;
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGenericHighscoreDialogItemRenderer = require("gge-module:export_CastleGenericHighscoreDialogItemRenderer");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
