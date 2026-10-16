Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTournamentRankListComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._itemClass = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_top, __s3param0.btn_up, __s3param0.btn_down]);
    if (__s3param0.mc_search && __s3param0.mc_search.btn_search) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.mc_search.btn_search]);
    }
    if (__s3param0.mc_search) {
      __s3local0._itxt_search = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_search.txt_search, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param2));
      __s3local0._itxt_search.textContentDefaultVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param2);
      __s3local0._itxt_search.maxChars = CastleTournamentRankListComponent.SEARCH_MAX_CHARS;
      __s3param0.mc_search.btn_search.toolTipText = __s3param3;
    }
    __s3local0._itemList = [];
    for (var __s3local1 = 0; __s3local1 < CastleTournamentRankListComponent.MAX_ITEM_COUNT; ++__s3local1) {
      __s3local0._itemList.push(new __s3local0._itemClass(__s3param0["item" + __s3local1]));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTournamentRankListComponent, __s1param0);
  CastleTournamentRankListComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    for (var __s9local0 = 0; __s9local0 < this._itemList.length; ++__s9local0) {
      this._itemList[__s9local0].onShow();
    }
    if (this._itxt_search) {
      this._itxt_search.keyUp.add(this.bindFunction(this.onSearchTextfieldKeyUp));
      this._itxt_search.textContentVO = this._itxt_search.textContentDefaultVO;
    }
    this.updateFullScreenMode();
  };
  CastleTournamentRankListComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    for (var __s14local0 = 0; __s14local0 < this._itemList.length; ++__s14local0) {
      this._itemList[__s14local0].onHide();
    }
    if (this._itxt_search) {
      this._itxt_search.keyUp.remove(this.bindFunction(this.onSearchTextfieldKeyUp));
    }
  };
  CastleTournamentRankListComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onDisplayChange));
  };
  CastleTournamentRankListComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onDisplayChange));
  };
  CastleTournamentRankListComponent.prototype.requestHighscoreData = function (__s23param0) {
    if (this._requestHighscoreDataFunction) {
      this._requestHighscoreDataFunction(__s23param0);
    }
  };
  CastleTournamentRankListComponent.prototype.reset = function () {
    for (var __s26local0 = 0; __s26local0 < this._itemList.length; ++__s26local0) {
      this._itemList[__s26local0].onHide();
      this._itemList[__s26local0].setVisibility(false);
    }
    if (this._itxt_search) {
      this._itxt_search.clearText();
    }
    this.updateScrollButtons();
  };
  CastleTournamentRankListComponent.prototype.updateWithNewData = function (__s31param0) {
    var __s31local0;
    var __s31local1 = __dep_exact_f855840627e6e145.int(__s31param0.LR);
    var __s31local2 = 0;
    var __s31local3 = __s31param0.L;
    for (var __s31local4 = 0; __s31local4 < CastleTournamentRankListComponent.MAX_ITEM_COUNT; ++__s31local4) {
      __s31local0 = this._itemList[__s31local4];
      if (!__s31local3 || __s31local3.length <= 0 || __s31local4 >= __s31local3.length) {
        __s31local0.setVisibility(false);
        __s31local0.onHide();
      } else {
        __s31local0.searchFieldValue = this.searchText;
        __s31local0.parseItemData(__s31local3[__s31local4]);
        __s31local0.setVisibility(true);
        __s31local0.onShow();
        __s31local2 = __s31local0.rank;
      }
    }
    this.updateScrollButtons(__s31local2, __s31local1);
  };
  CastleTournamentRankListComponent.prototype.updateFullScreenMode = function () {
    if (this._itxt_search) {
      var __s37local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.displayState;
      if (__s37local0 == __dep_exact_81dacdf05bd32292_1.StageDisplayState.FULL_SCREEN || __s37local0 == __dep_exact_81dacdf05bd32292_1.StageDisplayState.FULL_SCREEN_INTERACTIVE) {
        this.disp.mc_search.mouseChildren = false;
        this.disp.mc_search.toolTipText = "alert_noChatInFullScreen";
        this._itxt_search.tabEnabled = false;
      } else {
        this.disp.mc_search.mouseChildren = true;
        this.disp.mc_search.toolTipText = null;
        this._itxt_search.tabEnabled = true;
      }
    }
  };
  CastleTournamentRankListComponent.prototype.scrollUp = function () {
    var __s42local0 = __dep_exact_f855840627e6e145.int(Math.max(this._itemList[0].rank - CastleTournamentRankListComponent.MAX_ITEM_COUNT + CastleTournamentRankListComponent.SCROLL_DELTA, 0));
    this.requestHighscoreData("" + __s42local0);
  };
  CastleTournamentRankListComponent.prototype.scrollDown = function () {
    var __s44local0 = __dep_exact_f855840627e6e145.int(this._itemList[0].rank + CastleTournamentRankListComponent.MAX_ITEM_COUNT + CastleTournamentRankListComponent.SCROLL_DELTA);
    this.requestHighscoreData("" + __s44local0);
  };
  CastleTournamentRankListComponent.prototype.updateScrollButtons = function (__s46param0 = 0, __s46param1 = 0) {
    var __s46local0 = this._itemList[0].rank > 1;
    var __s46local1 = __s46param0 < __s46param1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_top, __s46local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_up, __s46local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_down, __s46local1);
  };
  CastleTournamentRankListComponent.prototype.onClick = function (__s48param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s48param0.target)) {
      __s1param0.prototype.onClick.call(this, __s48param0);
      if (this._itxt_search && __s48param0.target == this.disp.mc_search.btn_search) {
        if (this.searchText != "" && !this._itxt_search.containsDefaultTextContent) {
          this.requestHighscoreData(this.searchText);
        }
      } else {
        switch (__s48param0.target) {
          case this.disp.btn_top:
            if (this._requestHighscoreDataFunction) {
              this.requestHighscoreData("1");
            }
            break;
          case this.disp.btn_up:
            this.scrollUp();
            break;
          case this.disp.btn_down:
            this.scrollDown();
        }
      }
    }
  };
  CastleTournamentRankListComponent.prototype.onSearchTextfieldKeyUp = function (__s56param0) {
    if (this._itxt_search && __s56param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      if (this.searchText != "" && !this._itxt_search.containsDefaultTextContent) {
        document.activeElement.blur();
        this.requestHighscoreData(this.searchText);
      }
    }
  };
  CastleTournamentRankListComponent.prototype.onMouseWheel = function (__s60param0) {
    __s1param0.prototype.onMouseWheel.call(this, __s60param0);
    if (__s60param0.delta < 0) {
      this.scrollUp();
    } else if (__s60param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleTournamentRankListComponent.prototype.onDisplayChange = function (__s64param0) {
    this.updateFullScreenMode();
  };
  Object.defineProperty(CastleTournamentRankListComponent.prototype, "searchText", {
    get: function () {
      if (this._itxt_search) {
        return this._itxt_search.text;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentRankListComponent.prototype, "requestHighscoreDataFunction", {
    get: function () {
      return this._requestHighscoreDataFunction;
    },
    set: function (__s72param0) {
      this._requestHighscoreDataFunction = __s72param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentRankListComponent.__initialize_static_members = function () {
    CastleTournamentRankListComponent.MAX_ITEM_COUNT = 8;
    CastleTournamentRankListComponent.SCROLL_DELTA = 3;
    CastleTournamentRankListComponent.SEARCH_MAX_CHARS = 15;
  };
  return CastleTournamentRankListComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleTournamentRankListComponent = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
