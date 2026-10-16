Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.FocusEvent;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = __dep_exact_c549e43d1112dfff.getLogger("createjs.ts Extensions");
var __s0local3 = function (__s1param0) {
  function CastleGenericRankingComponent(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.searchName = "";
    __s3local0._currentLeagueId = 0;
    __s3local0.isWaitingForServerMessage = false;
    __s3local0._scrollStep = 0;
    __s3local0._mouseWheelEnabled = true;
    __s3local0._itemsClickable = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0.dialogProperties = __s3param2;
    __s3local0.setSearchPlaceholderText();
    __s3local0.setMovieClips();
    __s3local0.setItemClass(__s3param1);
    __s3local0.initRankingItems();
    __s3local0.show();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRankingComponent, __s1param0);
  CastleGenericRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search";
  };
  CastleGenericRankingComponent.prototype.setMovieClips = function (__s7param0 = null, __s7param1 = null, __s7param2 = null, __s7param3 = null, __s7param4 = null, __s7param5 = null, __s7param6 = null) {
    this.btn_top = __s7param0 || (this.disp[CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME] : null);
    this.btn_up = __s7param1 || (this.disp[CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME] : null);
    this.btn_down = __s7param2 || (this.disp[CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME] : null);
    this.btn_leagueUp = __s7param5 || (this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME] : null);
    this.btn_leagueDown = __s7param6 || (this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME] : null);
    this.btn_search = __s7param3 || (this.disp[CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME] : null);
    this.txt_search = __s7param4 || (this.disp[CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME] : null);
    if (this.txt_search) {
      this.searchField = this.textFieldManager.registerTextField(this.txt_search, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.searchPlaceholderText));
      this.searchField.type = __dep_exact_81dacdf05bd32292_2.TextFieldType.INPUT;
      this._defaultSearchText = this.searchField.text;
    }
  };
  CastleGenericRankingComponent.prototype.setItemClass = function (__s10param0) {
    this._itemClass = __s10param0;
  };
  CastleGenericRankingComponent.prototype.initRankingItems = function (__s12param0 = CastleGenericRankingComponent.LIST_ITEM_DEFAULT_PREFIX) {
    this.rankingItems = [];
    for (var __s12local0 = 0; this.disp[__s12param0 + __s12local0];) {
      this.rankingItems.push(new this._itemClass(this.disp[__s12param0 + __s12local0]));
      this.rankingItems[__s12local0].disp.visible = false;
      __s12local0++;
    }
    this._scrollStep = __dep_exact_f855840627e6e145.int(this.rankingItems.length);
  };
  CastleGenericRankingComponent.prototype.show = function (__s16param0 = null) {
    if (__s16param0) {
      this.dialogProperties = __s16param0;
    }
    if (this._mouseWheelEnabled) {
      this.disp.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    this.disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.txt_search.addEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    this.txt_search.addEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    this.txt_search.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.searchPlaceholderText);
    this.searchName = "";
    this.requestHighscoreData("" + this.dialogProperties.preselectedOwnRank, this.dialogProperties.preselectedLeagueId);
  };
  CastleGenericRankingComponent.prototype.hide = function () {
    for (var __s20local0 = 0; __s20local0 < this.rankingItems.length; ++__s20local0) {
      this.rankingItems[__s20local0].disp.visible = false;
    }
    if (this._mouseWheelEnabled) {
      this.disp.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    this.disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.txt_search.removeEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    this.txt_search.removeEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    this.txt_search.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
  };
  CastleGenericRankingComponent.prototype.onGetHighscoreDataError = function (__s25param0) {
    this.isWaitingForServerMessage = false;
  };
  CastleGenericRankingComponent.prototype.onGetHighscoreData = function (__s27param0) {
    this.isWaitingForServerMessage = false;
    if (__s27param0.params[0].LT == this.dialogProperties.highscoreType) {
      this._currentLeagueId = __s27param0.leagueId;
      if (this._currentLeagueId > this.dialogProperties.numberOfLeagues) {
        __s0local2.debug("leagueID " + __s27param0.leagueId + " does not exist for this highscore. taking the highest possible id: " + this.dialogProperties.numberOfLeagues);
        this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.numberOfLeagues);
      }
      var __s27local0 = __s27param0.params[0].L;
      var __s27local1 = 0;
      for (var __s27local2 = 0; __s27local2 < this.rankingItems.length; ++__s27local2) {
        if (__s27local2 < __s27local0.length) {
          this.rankingItems[__s27local2].update(__s27local0[__s27local2], this._currentLeagueId, this.searchName);
          this.rankingItems[__s27local2].disp.visible = true;
          __s27local1 = __s27local2;
        } else {
          this.rankingItems[__s27local2].disp.visible = false;
        }
      }
      this.updateScrollButtons(this.rankingItems[__s27local1].rank, __s27param0.params[0].LR);
    }
  };
  CastleGenericRankingComponent.prototype.updateScrollButtons = function (__s35param0 = 0, __s35param1 = 0) {
    var __s35local0 = this.rankingItems[0].rank > 1;
    var __s35local1 = __s35param0 < __s35param1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.btn_top, __s35local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.btn_up, __s35local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.btn_down, __s35local1);
  };
  CastleGenericRankingComponent.prototype.onClick = function (__s37param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      if (this.itemsClickable && this.rankingItems != null) {
        for (var __s37local0 = 0, __s37local1 = this.rankingItems; __s37local0 < __s37local1.length; __s37local0++) {
          var __s37local2 = __s37local1[__s37local0];
          if (__s37local2 !== undefined && (__s37param0.target == __s37local2.disp || __s37local2.disp.contains(__s37param0.target))) {
            __s37local2.onClick(__s37param0);
            return;
          }
        }
      }
      switch (__s37param0.target) {
        case this.btn_top:
          this.requestHighscoreData("1");
          this.searchName = "";
          break;
        case this.btn_up:
          this.scrollUp();
          break;
        case this.btn_down:
          this.scrollDown();
          break;
        case this.btn_leagueUp:
          this.scrollLeagueUp();
          break;
        case this.btn_leagueDown:
          this.scrollLeagueDown();
          break;
        case this.btn_search:
          this.onConfirmSearchField();
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseOver = function (__s45param0) {
    if (this.itemsClickable && this.rankingItems != null) {
      for (var __s45local0 = 0, __s45local1 = this.rankingItems; __s45local0 < __s45local1.length; __s45local0++) {
        var __s45local2 = __s45local1[__s45local0];
        if (__s45local2 !== undefined && (__s45param0.target == __s45local2.disp || __s45local2.disp.contains(__s45param0.target))) {
          this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
          __s45local2.onMouseOver(__s45param0);
          return;
        }
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseOut = function (__s51param0) {
    if (this.itemsClickable && this.rankingItems != null) {
      for (var __s51local0 = 0, __s51local1 = this.rankingItems; __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined && __s51param0.target == __s51local2.disp) {
          this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
          __s51local2.onMouseOut(__s51param0);
          return;
        }
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseWheel = function (__s57param0) {
    if (__s57param0.delta < 0) {
      this.scrollUp();
    } else if (__s57param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericRankingComponent.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage) {
      var __s61local0 = Math.floor(this.rankingItems.length / 2);
      var __s61local1 = __dep_exact_f855840627e6e145.int(Math.max(this.rankingItems[0].rank - this.rankingItems.length + __s61local0, 0));
      this.searchName = "";
      this.requestHighscoreData("" + __s61local1);
    }
  };
  CastleGenericRankingComponent.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage) {
      var __s64local0 = Math.floor(this.rankingItems.length / 2);
      var __s64local1 = __dep_exact_f855840627e6e145.int(this.rankingItems[0].rank + this.rankingItems.length + __s64local0);
      this.searchName = "";
      this.requestHighscoreData("" + __s64local1);
    }
  };
  CastleGenericRankingComponent.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId > this.dialogProperties.numberOfLeagues) {
        this._currentLeagueId = 1;
      }
      var __s67local0 = this._currentLeagueId == this._properties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(__s67local0, this._currentLeagueId);
    }
  };
  CastleGenericRankingComponent.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = __dep_exact_f855840627e6e145.int(this.dialogProperties.numberOfLeagues);
      }
      var __s71local0 = this._currentLeagueId == this._properties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(__s71local0, this._currentLeagueId);
    }
  };
  CastleGenericRankingComponent.prototype.inputKeyDown = function (__s75param0) {
    if (__s75param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER && this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text;
      this.onConfirmSearchField();
    }
  };
  CastleGenericRankingComponent.prototype.onFocusInSearchText = function (__s78param0) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleGenericRankingComponent.prototype.onFocusOutSearchText = function (__s81param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.searchPlaceholderText);
    }
  };
  CastleGenericRankingComponent.prototype.onConfirmSearchField = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      this.searchName = this.searchField.text;
      this.requestHighscoreData(this.searchName);
    }
  };
  CastleGenericRankingComponent.prototype.requestHighscoreData = function (__s87param0, __s87param1 = -1) {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s87param0, this.dialogProperties.highscoreType, __s87param1 > 0 ? __s87param1 : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericRankingComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "mouseWheelEnabled", {
    set: function (__s91param0) {
      this._mouseWheelEnabled = __s91param0;
      if (this._mouseWheelEnabled) {
        this.disp.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      } else {
        this.disp.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "scrollStep", {
    get: function () {
      return this._scrollStep;
    },
    set: function (__s97param0) {
      this._scrollStep = __s97param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "dialogProperties", {
    get: function () {
      return this._properties;
    },
    set: function (__s101param0) {
      this._properties = __s101param0;
      this._currentLeagueId = this._properties.preselectedLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "itemsClickable", {
    get: function () {
      return this._itemsClickable;
    },
    set: function (__s111param0) {
      this._itemsClickable = __s111param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRankingComponent.__initialize_static_members = function () {
    CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME = "btn_top";
    CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME = "btn_up";
    CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME = "btn_down";
    CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME = "btn_leagueUp";
    CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME = "btn_leagueDown";
    CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME = "btn_search";
    CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME = "txt_input_search";
    CastleGenericRankingComponent.LIST_ITEM_DEFAULT_PREFIX = "item";
  };
  return CastleGenericRankingComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleGenericRankingComponent = __s0local3;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local3.__initialize_static_members();
