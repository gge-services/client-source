Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_LeaderBoardDataProvider = require("gge-module:export_LeaderBoardDataProvider");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function GlobalLeaderBoardComponent(__s3param0, __s3param1 = null, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._items = [];
    __s3local0._openRewardDialogSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._searchDefaultTextID = __s3param2;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_refresh, __s3local0.disp.btn_search, __s3local0.disp.btn_findMe, __s3local0.disp.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_find.mc_searchResults.btn_prev, __s3local0.disp.mc_find.mc_searchResults.btn_next, __s3local0.disp.mc_find.mc_searchResults.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    for (var __s3local1 = 0; __s3local0.disp.mc_list["mc_item" + __s3local1];) {
      var __s3local2 = new __s3param1(__s3local0.disp.mc_list["mc_item" + __s3local1], __s3local0);
      __s3local0._items.push(__s3local2);
      __s3local1++;
    }
    if (__s3local0.disp) {
      __s3local0._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.disp.mc_list.mc_slider).addMouseWheelElements([__s3local0.disp.mc_list]).addVisualElements([__s3local0.disp.mc_list.mc_slider]).addSliderBackground(__s3local0.disp.mc_list.mc_slider.mc_background), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local0._items.length, true));
      __s3local0._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    }
    __s3local0._txtInput = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_find.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0._txtInput.multiline = false;
    __s3local0._txtInput.wordwrap = false;
    __s3local0._txtInput.maxChars = 99;
    __s3local0._txtResults = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_find.mc_searchResults.txt_results, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_list.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_highscore_noRankings"));
    if (__s3local0.disp.btn_rewards) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.btn_rewards.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    }
    if (__s3local0.disp.btn_refresh) {
      __s3local0.disp.btn_refresh.toolTipText = "refresh";
    }
    if (__s3local0.disp.btn_findMe) {
      __s3local0.disp.btn_findMe.toolTipText = "dialog_tempServer_findMe_button";
      if (__s3local0.disp.btn_findMe && __s3local0.disp.btn_findMe.txt_label) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.btn_findMe.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_findMe_button")));
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalLeaderBoardComponent, __s1param0);
  GlobalLeaderBoardComponent.prototype.init = function (__s12param0, __s12param1 = null, __s12param2 = -1, __s12param3 = null) {
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
    }
    this._leagueComponent = __s12param1;
    this._dataProvider = new __dep_export_LeaderBoardDataProvider.LeaderBoardDataProvider(__s12param0, this._items.length, __s12param1 ? __s12param1.leagueTypeId : __s12param2);
    this._dataProvider.additionalData = __s12param3;
    if (this.isShown) {
      this.onShow();
    }
  };
  GlobalLeaderBoardComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
      this._dataProvider.addEventListeners();
      this._dataProvider.onWaitingSignal.add(this.bindFunction(this.onWaiting));
      this._dataProvider.onResultsUpdatedSignal.add(this.bindFunction(this.onResultsUpdated));
      this._dataProvider.getCurrentPlayerPage();
    }
    if (this._leagueComponent) {
      this._leagueComponent.onShow();
      this._leagueComponent.leagueChangeSignal.add(this.bindFunction(this.onLeagueChange));
    }
    this.updateScrollComponent(true);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.updateSearchResults();
    this.onSearchFocusOut();
    this._txtInput.focusIn.add(this.bindFunction(this.onSearchFocusIn));
    this._txtInput.focusOut.add(this.bindFunction(this.onSearchFocusOut));
    this._txtInput.keyDown.add(this.bindFunction(this.onSearchKeyDown));
    this._txtInput.change.add(this.bindFunction(this.onSearchResultChange));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_refresh, true);
    if (this.disp.mc_list.txt_empty) {
      this.disp.mc_list.txt_empty.visible = false;
    }
  };
  GlobalLeaderBoardComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
    }
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.removeAll();
      this._scrollComponent.hide();
    }
    if (this._leagueComponent) {
      this._leagueComponent.onHide();
      this._leagueComponent.leagueChangeSignal.removeAll();
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.removeInputFocus();
    if (this._txtInput) {
      this._txtInput.focusIn.removeAll();
      this._txtInput.focusOut.removeAll();
      this._txtInput.keyDown.removeAll();
      this._txtInput.change.removeAll();
    }
  };
  GlobalLeaderBoardComponent.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.disp.btn_refresh:
          this._dataProvider.getPageByRank(this._dataProvider.currentRank);
          __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_refresh, true, 5000);
          break;
        case this.disp.btn_search:
          this.sendSearchRequest();
          break;
        case this.disp.btn_findMe:
          if (this._leagueComponent) {
            this._leagueComponent.changeToMyLeague();
          } else {
            this._dataProvider.getCurrentPlayerPage();
          }
          break;
        case this.disp.mc_find.mc_searchResults.btn_prev:
          this._dataProvider.getPreviousSearchPage();
          break;
        case this.disp.mc_find.mc_searchResults.btn_next:
          this._dataProvider.getNextSearchPage();
          break;
        case this.disp.mc_find.mc_searchResults.btn_clear:
          this._txtInput.clearText();
          document.activeElement.blur();
          this.onSearchFocusOut();
          this._dataProvider.clearSearchResults();
          this.onResultsUpdated();
          break;
        case this.disp.btn_rewards:
          this._openRewardDialogSignal.dispatch(this._dataProvider.leagueTypeID);
      }
    }
  };
  GlobalLeaderBoardComponent.prototype.onWaiting = function () {
    var __s33local0 = this;
    if (this._dataProvider) {
      this._items.forEach(function (__s36param0, __s36param1) {
        if (__s33local0._dataProvider.requestedRank > -1 && __s33local0._dataProvider.requestedRank + __s36param1 < __s33local0._dataProvider.totalNumberOfScores) {
          __s36param0.updateWithRank(__s33local0._dataProvider.requestedRank + __s36param1, __s33local0._dataProvider);
        } else if (__s33local0._dataProvider.currentScoreResults.length > __s36param1) {
          __s36param0.updateWithUnknown();
        } else {
          __s36param0.updateWithNull();
        }
      });
      this.updateSearchResults();
    }
  };
  GlobalLeaderBoardComponent.prototype.onResultsUpdated = function () {
    var __s41local0 = this;
    if (this._dataProvider) {
      this._items.forEach(function (__s44param0, __s44param1) {
        if (__s41local0._dataProvider.currentScoreResults.length > __s44param1) {
          var __s44local0 = __s41local0._dataProvider.currentSearchResults.length > 0 ? __s41local0._dataProvider.currentSearchResults[__s41local0._dataProvider.currentSearchIndex].scoreId : "";
          __s44param0.updateWithData(__s41local0._dataProvider.currentScoreResults[__s44param1], __s44local0, __s41local0._dataProvider);
        } else {
          __s44param0.updateWithNull();
        }
      });
      this.updateScrollComponent();
      this.updateSearchResults();
      if (this.disp.mc_list.txt_empty) {
        this.disp.mc_list.txt_empty.visible = this._dataProvider.currentScoreResults.length <= 0;
      }
      if (this._leagueComponent && this._leagueComponent.leagueTypeId != this._dataProvider.leagueTypeID) {
        this._leagueComponent.changeLeague(this._dataProvider.leagueTypeID);
      }
    }
  };
  GlobalLeaderBoardComponent.prototype.onScroll = function () {
    if (this._dataProvider) {
      this._dataProvider.getPageByRank(this._scrollComponent.currentValue + 1);
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchFocusIn = function () {
    this.disp.mc_find.mc_selected.visible = true;
    if (this._searchDefaultTextID && this.getSearchString() == __dep_exact_92d05af59ee2ff30.Localize.text(this._searchDefaultTextID)) {
      this._txtInput.clearText();
    }
    this._txtInput.maxChars = GlobalLeaderBoardComponent.MAX_SEARCH_LENGTH;
  };
  GlobalLeaderBoardComponent.prototype.onSearchFocusOut = function () {
    this.disp.mc_find.mc_selected.visible = false;
    if (this._searchDefaultTextID && this.getSearchString() == "") {
      this._txtInput.maxChars = 99;
      this._txtInput.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this._searchDefaultTextID);
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchKeyDown = function (__s59param0) {
    if (__s59param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      this.sendSearchRequest();
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchResultChange = function () {
    this._dataProvider.clearSearchResults();
    this.onResultsUpdated();
  };
  GlobalLeaderBoardComponent.prototype.getSearchString = function () {
    return this._txtInput.text;
  };
  GlobalLeaderBoardComponent.prototype.updateScrollComponent = function (__s66param0 = false) {
    var __s66local0 = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, Math.max(0, this._dataProvider.totalNumberOfScores - this._dataProvider.maxResultsPerPage), this._dataProvider.maxResultsPerPage, this._dataProvider.maxResultsPerPage, __s66param0);
    if (this._dataProvider.requestedRank == -1) {
      this._scrollComponent.scrollToValue(this._dataProvider.currentRank - 1, false);
    } else {
      this._scrollComponent.scrollToValue(__s66local0, false);
    }
    this._scrollComponent.show();
  };
  GlobalLeaderBoardComponent.prototype.updateSearchResults = function () {
    var __s70local0 = this._dataProvider.currentSearchResults.length > 1;
    this.disp.mc_find.mc_searchResults.visible = __s70local0;
    this._txtInput.width = __s70local0 ? 133 : 265;
    this._txtInput.size = __s70local0 ? 14 : 16;
    this._txtResults.textContentVO.textReplacements = [this._dataProvider.currentSearchIndex + 1, this._dataProvider.currentSearchResults.length];
  };
  GlobalLeaderBoardComponent.prototype.sendSearchRequest = function () {
    if (this.getSearchString() != __dep_exact_92d05af59ee2ff30.Localize.text(this._searchDefaultTextID)) {
      this._dataProvider.searchLeaderBoard(this.getSearchString());
    }
  };
  GlobalLeaderBoardComponent.prototype.onLeagueChange = function () {
    this._dataProvider.leagueTypeID = this._leagueComponent.leagueTypeId;
    this._dataProvider.getCurrentPlayerPage();
  };
  Object.defineProperty(GlobalLeaderBoardComponent.prototype, "openRewardDialogSignal", {
    get: function () {
      return this._openRewardDialogSignal;
    },
    enumerable: true,
    configurable: true
  });
  GlobalLeaderBoardComponent.MAX_SEARCH_LENGTH = 25;
  return GlobalLeaderBoardComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.GlobalLeaderBoardComponent = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
