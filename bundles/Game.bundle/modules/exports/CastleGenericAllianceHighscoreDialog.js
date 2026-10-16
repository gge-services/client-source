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
var __dep_export_AllianceHighscoreInfoVO = require("gge-module:export_AllianceHighscoreInfoVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePointEventAllianceHighscoreItemVO = require("gge-module:export_CastlePointEventAllianceHighscoreItemVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleGenericAllianceHighscoreDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentLeagueId = 0;
    __s3local0._currentSearchName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericAllianceHighscoreDialog, __s1param0);
  CastleGenericAllianceHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_search, this.dialogDisp.btn_help, this.dialogDisp.mc_listContainer.btn_top, this.dialogDisp.mc_listContainer.btn_up, this.dialogDisp.mc_listContainer.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceFame_level")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_membercount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.initItemRenderers();
  };
  CastleGenericAllianceHighscoreDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._currentSearchName = "";
    this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.preselectedLeagueId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this._itxt_search.text;
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this._itxt_search.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    for (var __s7local0 = 0; __s7local0 < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s7local0) {
      this._itemRenderers[__s7local0].itemVO = null;
      this._itemRenderers[__s7local0].updateItem(this._currentSearchName);
    }
    this.updateScrollButtons();
    this.requestHighscoreData(this.dialogProperties.preselectedOwnRank > 0 ? "" + this.dialogProperties.preselectedOwnRank : CastleGenericAllianceHighscoreDialog.OWN_RANK);
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericAllianceHighscoreDialog.prototype.hideLoaded = function (__s11param0 = null) {
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
  CastleGenericAllianceHighscoreDialog.prototype.onMouseWheel = function (__s14param0) {
    if (__s14param0.delta < 0) {
      this.scrollUp();
    } else if (__s14param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onClick = function (__s18param0) {
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
  Object.defineProperty(CastleGenericAllianceHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_alliance_highscore";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericAllianceHighscoreDialog.prototype.onConfirmSearchField = function () {
    if (this._itxt_search.text != "" && this._itxt_search.text != this._defaultSearchText) {
      this._currentSearchName = this._itxt_search.text;
      this.requestHighscoreData(this._currentSearchName);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onGetHighscoreDataError = function (__s27param0) {
    this.isWaitingForServerMessage = false;
    this._currentSearchName = "";
  };
  CastleGenericAllianceHighscoreDialog.prototype.onGetHighscoreData = function (__s29param0) {
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = __s29param0.leagueId;
    this.initItemRenderers();
    var __s29local0 = __s29param0.params[0].L;
    var __s29local1 = 0;
    for (var __s29local2 = 0; __s29local2 < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s29local2) {
      var __s29local3 = this._itemRenderers[__s29local2];
      var __s29local4 = null;
      if (__s29local2 < __s29local0.length) {
        var __s29local5 = __s29local0[__s29local2];
        __s29local4 = new __dep_export_CastlePointEventAllianceHighscoreItemVO.CastlePointEventAllianceHighscoreItemVO();
        var __s29local6 = new __dep_export_AllianceHighscoreInfoVO.AllianceHighscoreInfoVO();
        __s29local6.fillFromParamObject(__s29local5[2]);
        __s29local4.allianceVO = __s29local6;
        __s29local1 = __dep_exact_f855840627e6e145.int(__s29local4.rank = __dep_exact_f855840627e6e145.int(__s29local5[0]));
        __s29local4.amount = __dep_exact_f855840627e6e145.int(__s29local5[1]);
      }
      __s29local3.itemVO = __s29local4;
      __s29local3.updateItem(this._currentSearchName);
      if (!!__s29local4 && (this._currentSearchName.toLowerCase() == __s29local4.allianceVO.allianceName.toLowerCase() || Number(this._currentSearchName) == __s29local4.rank)) {
        __s29local3;
      }
      if (__s29local3.isOwnAlliance) {
        __s29local3;
      }
    }
    this.updateScrollButtons(__s29local1, __s29param0.params[0].LR);
  };
  CastleGenericAllianceHighscoreDialog.prototype.updateScrollButtons = function (__s36param0 = 0, __s36param1 = 0) {
    var __s36local0 = !!this._itemRenderers[0].itemVO && this._itemRenderers[0].itemVO.rank > 1;
    var __s36local1 = __s36param0 < __s36param1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_top, __s36local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_up, __s36local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_down, __s36local1);
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var __s38local0 = __dep_exact_f855840627e6e145.int(Math.max(this._itemRenderers[0].itemVO.rank - CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericAllianceHighscoreDialog.SCROLL_DELTA, 0));
      this.requestHighscoreData("" + __s38local0);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var __s41local0 = __dep_exact_f855840627e6e145.int(this._itemRenderers[0].itemVO.rank + CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericAllianceHighscoreDialog.SCROLL_DELTA);
      this.requestHighscoreData("" + __s41local0);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId >= this.dialogProperties.numberOfLeagues + 1) {
        this._currentLeagueId = 1;
      }
      this.requestHighscoreData("1", this._currentLeagueId);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.numberOfLeagues);
      }
      this.requestHighscoreData("1", this._currentLeagueId);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.initItemRenderers = function () {
    if (!this._itemRenderers) {
      this._itemRenderers = [];
      for (var __s52local0 = 0; __s52local0 < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++__s52local0) {
        this._itemRenderers.push(new __dep_export_CastleGenericAllianceHighscoreDialogItemRenderer.CastleGenericAllianceHighscoreDialogItemRenderer(this.dialogDisp.mc_listContainer["i" + __s52local0]));
      }
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onSearchFieldKeyDown = function (__s57param0) {
    if (__s57param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onConfirmSearchField();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onFocusInSearchText = function (__s60param0) {
    if (this._itxt_search.text == this._defaultSearchText) {
      this._itxt_search.clearText();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onFocusOutSearchText = function (__s63param0) {
    if (this._itxt_search.text == "") {
      this._itxt_search.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this._defaultSearchText);
      this._currentSearchName = "";
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onRemoveSpecialEvent = function (__s66param0) {
    this.hide();
    this.destroy();
  };
  CastleGenericAllianceHighscoreDialog.prototype.requestHighscoreData = function (__s68param0, __s68param1 = -1) {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s68param0, this.dialogProperties.highscoreType, __s68param1 > 0 ? __s68param1 : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericAllianceHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericAllianceHighscoreDialog.__initialize_static_members = function () {
    CastleGenericAllianceHighscoreDialog.OWN_RANK = "-1";
    CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS = 8;
    CastleGenericAllianceHighscoreDialog.SCROLL_DELTA = 3;
  };
  return CastleGenericAllianceHighscoreDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGenericAllianceHighscoreDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGenericAllianceHighscoreDialogItemRenderer = require("gge-module:export_CastleGenericAllianceHighscoreDialogItemRenderer");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
