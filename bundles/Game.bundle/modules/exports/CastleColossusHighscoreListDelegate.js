Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleColossusHighscoreListDelegate(__s3param0) {
    this._offsetRank = -1;
    this._isListInited = false;
    this._oldSelectedIndex = 0;
    this.disp = __s3param0;
    this.resetSearchValue();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s3param0.btn_up, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s3param0.btn_down, false);
    var __s3local0;
    var __s3local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    this._ranking = [];
    for (var __s3local2 = 0; __s3local2 < CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES; __s3local2++) {
      (__s3local0 = __s3param0["item" + __s3local2]).gotoAndStop(1);
      this._ranking.push(__s3local0);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._ranking[__s3local2], 1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._ranking[__s3local2], true);
      __s3local1.registerTextField(this._ranking[__s3local2].txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      __s3local1.registerTextField(this._ranking[__s3local2].txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      __s3local1.registerTextField(this._ranking[__s3local2].txt_resources, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._ranking[__s3local2], false);
    }
    this._eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS);
    this._eventVO.clearRankingCacheOnTimeout();
    this._offsetRank = -1;
    this._isListInited = false;
    __s3param0.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel), false, 0, true);
    this.sliderData = new __dep_export_BasicSliderVO.BasicSliderVO(this.disp.mc_slider.mc_sliderBar, this.disp.mc_slider.btn_slider, 0, 0, this.disp);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.mc_slider.btn_slider]);
    this.slider = new __dep_export_ScrollComponent.ScrollComponent(this.sliderData, __dep_export_ScrollComponent.ScrollComponent.VERTICAL_SLIDER);
    this.slider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderMoved));
    this.updateSlider();
  }
  CastleColossusHighscoreListDelegate.prototype.dispose = function () {
    this.slider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderMoved));
    this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleColossusHighscoreListDelegate.prototype.onSliderMoved = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS);
    var __s9local1 = 0;
    if (!isNaN(this._oldSelectedIndex)) {
      __s9local1 = __dep_exact_f855840627e6e145.int(this._oldSelectedIndex - __s9param0.selectedValue);
    }
    __s9local0.offsetRank = __dep_exact_f855840627e6e145.int(__s9param0.selectedValue + CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
    if (__s9local1 < 0 && __s9param0.selectedValue > this._eventVO.lowestRankInList - __dep_exact_26a421b704832cff.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS / 2 && this._eventVO.lowestRankInList < this._eventVO.lowestRankOnServer) {
      CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(__s9param0.selectedValue);
    } else if (__s9local1 > 0 && __s9param0.selectedValue < this._eventVO.highestRankInList + __dep_exact_26a421b704832cff.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS / 2 && !this._eventVO.hasHighestRank) {
      CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(__s9param0.selectedValue);
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.onMouseWheel = function (__s14param0) {
    if (__s14param0.delta < 0) {
      this.pageUp();
    } else {
      this.pageDown();
    }
  };
  CastleColossusHighscoreListDelegate.prototype.updateRank = function (__s18param0, __s18param1, __s18param2, __s18param3) {
    if (!(__s18param0 < 0) && !(__s18param0 > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES - 1)) {
      var __s18local0 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
      __s18local0.registerTextField(this._ranking[__s18param0].txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(String(__s18param1)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      __s18local0.registerTextField(this._ranking[__s18param0].txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s18param2), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      __s18local0.registerTextField(this._ranking[__s18param0].txt_resources, new __dep_exact_92d05af59ee2ff30.TextVO(String(__s18param3)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
      if (__s18param2) {
        if (__s18param2 == __dep_export_CastleModel.CastleModel.userData.userName || __s18param2.toLowerCase() == this._lastSearchName.toLowerCase() || __s18param1 == this._lastSearchName) {
          this._ranking[__s18param0].gotoAndStop(2);
        } else {
          this._ranking[__s18param0].gotoAndStop(1);
        }
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._ranking[__s18param0], true);
      } else {
        this._ranking[__s18param0].gotoAndStop(1);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._ranking[__s18param0], false);
      }
    }
  };
  CastleColossusHighscoreListDelegate.prototype.update = function () {
    this._eventVO ||= __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS);
    if (!(this._eventVO.lowestRankOnServer <= 0)) {
      this._offsetRank = this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES ? this._eventVO.offsetRank : CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      var __s25local0 = CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      for (var __s25local1 = this._offsetRank; __s25local1 > this._offsetRank - CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES; __s25local1--) {
        var __s25local2 = this._eventVO.getRankingEntryByRank(__s25local1);
        __s25local0--;
        if (__s25local2) {
          this.updateRank(__s25local0, __s25local2.playerRank == 0 ? "" : String(__s25local2.playerRank), __s25local2.playerName, __s25local2.playerPoints == 0 ? "" : String(__s25local2.playerPoints));
        } else if (__s25local1 >= 1 && __s25local1 < this._eventVO.lowestRankOnServer && this._lastSearchName == CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
          this._isListInited = false;
          CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(__s25local1);
          return;
        }
      }
      this._isListInited = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_up, this._offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_down, this._offsetRank < this._eventVO.lowestRankOnServer);
      this.updateSlider();
    }
  };
  CastleColossusHighscoreListDelegate.getMoreRankingsFromServer = function (__s32param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusGetHighscoreVO.C2SColossusGetHighscoreVO(String(__s32param0)));
  };
  CastleColossusHighscoreListDelegate.prototype.eventVOUpdated = function () {
    if (!this._isListInited || this._lastSearchName != CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
      if (this._lastSearchName != CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
        this.scrollToPlayer(this._lastSearchName);
      } else {
        this.scrollToPlayer(__dep_export_CastleModel.CastleModel.userData.userName);
      }
      this.update();
    }
  };
  CastleColossusHighscoreListDelegate.prototype.scrollToPlayer = function (__s39param0) {
    var __s39local0 = this._eventVO.getRankingEntryByName(__s39param0);
    if (__s39local0) {
      this._eventVO.offsetRank = __s39local0.playerRank;
    } else {
      var __s39local1 = parseInt(__s39param0);
      if (__s39local1 && (__s39local0 = this._eventVO.getRankingEntryByRank(__s39local1))) {
        this._eventVO.offsetRank = __s39local0.playerRank;
      }
    }
    if (__s39param0 == CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME || !__s39local0) {
      this._eventVO.offsetRank = this._eventVO.highestRankInList + CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES - 1;
    }
  };
  CastleColossusHighscoreListDelegate.prototype.resetSearchValue = function () {
    this._lastSearchName = CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME;
  };
  CastleColossusHighscoreListDelegate.prototype.updateSlider = function () {
    var __s47local0 = this.disp.btn_down.enabled || this.disp.btn_up.enabled;
    this.disp.mc_slider.visible = __s47local0;
    this.disp.btn_down.visible = __s47local0;
    this.disp.btn_up.visible = __s47local0;
    if (__s47local0) {
      this.sliderData.maxValue = this._eventVO.lowestRankOnServer;
      this.sliderData.minValue = CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      var __s47local1 = this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES ? this._eventVO.offsetRank : CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      this.slider.setSelectedIndex(__s47local1 - CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
      this._oldSelectedIndex = __dep_exact_f855840627e6e145.int(this.slider.selectedIndex);
    }
  };
  CastleColossusHighscoreListDelegate.prototype.pageUp = function () {
    if (this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES) {
      this._eventVO.offsetRank -= 1;
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.pageDown = function () {
    if (this._eventVO.offsetRank < this._eventVO.lowestRankOnServer) {
      this._eventVO.offsetRank += 1;
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.search = function (__s56param0) {
    this._lastSearchName = __s56param0;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusGetHighscoreVO.C2SColossusGetHighscoreVO(__s56param0));
  };
  Object.defineProperty(CastleColossusHighscoreListDelegate.prototype, "offsetRank", {
    get: function () {
      return this._offsetRank;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusHighscoreListDelegate.__initialize_static_members = function () {
    CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES = 10;
    CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME = "-1";
  };
  return CastleColossusHighscoreListDelegate;
}();
exports.CastleColossusHighscoreListDelegate = __s0local1;
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SColossusGetHighscoreVO = require("gge-module:export_C2SColossusGetHighscoreVO");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
