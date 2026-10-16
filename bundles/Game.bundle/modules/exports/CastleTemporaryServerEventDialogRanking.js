Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTempServerInfoDialog = require("gge-module:export_CastleTempServerInfoDialog");
var __dep_export_CastleTempServerInfoDialogProperties = require("gge-module:export_CastleTempServerInfoDialogProperties");
var __dep_export_TempServerEventDialogRankingItem = require("gge-module:export_TempServerEventDialogRankingItem");
var __s0local0 = createjs.TimerEvent;
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __s0local1 = function (__s1param0) {
  function CastleTemporaryServerEventDialogRanking(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._highScoreType = 0;
    __s3local0._currentMaxRank = CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS;
    __s3local0._hasRequestedOwnRank = false;
    __s3local0._currentRank = 1;
    __s3local0._rankListItems = [];
    __s3local0._hasScrollValueChanged = false;
    __s3local0._requestTimer = new __dep_exact_81dacdf05bd32292_3.Timer(CastleTemporaryServerEventDialogRanking.TIME_TO_REQUEST_NEW_RANK_DATA, 0);
    __s3local0._defaultSearchText = "";
    __s3local0.searchName = "";
    __s3local0.isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._highScoreType = __s3param1;
    __s3local0.parent = __s3param2;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialogRanking, __s1param0);
  CastleTemporaryServerEventDialogRanking.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_search, this.dialogDisp.btn_findme, this.dialogDisp.mc_switch.btn_left, this.dialogDisp.mc_switch.btn_right], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_findme], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    if (this.subLayerDisp.mc_multiplier) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.mc_multiplier.btn_info, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button"))).autoFitToBounds = true;
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addVisualElements([this.dialogDisp.mc_slider]).addMouseWheelElements([this.dialogDisp]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS));
    this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    for (var __s5local0 = 0; __s5local0 < CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS; ++__s5local0) {
      this._rankListItems.push(new __dep_export_TempServerEventDialogRankingItem.TempServerEventDialogRankingItem(this.dialogDisp.getChildByName("mc_item" + __s5local0)));
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.show = function (__s10param0) {
    __s1param0.prototype.show.call(this, __s10param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_switch.btn_left, this.castleEnv.isOnTemporaryServer);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_switch.btn_right, this.castleEnv.isOnTemporaryServer);
    this.dialogDisp.btn_findme.visible = this.castleEnv.isOnTemporaryServer;
    this.dialogDisp.icon_ranking.toolTipText = "rank";
    this.dialogDisp.icon_lvl.toolTipText = "level";
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.highScoreTypeIsDaily ? "dialog_tempServer_dailyRanking_title" : "dialog_tempServer_overallRanking_title")));
    if (this.dialogDisp.icon_lvl_charge) {
      this.dialogDisp.icon_lvl_charge.visible = false;
      this.dialogDisp.icon_lvl_charge.toolTipText = "level";
    }
    if (this.dialogDisp.icon_might) {
      this.dialogDisp.icon_might.toolTipText = "playerMight";
      this.dialogDisp.icon_might.visible = this.eventVO.isMightScoring;
    }
    if (this.dialogDisp.icon_collectorPoints) {
      this.dialogDisp.icon_collectorPoints.visible = this.eventVO.isCollectorScoring;
      this.dialogDisp.icon_collectorPoints.toolTipText = "dialog_tempServer_collectPoints_tooltip_collector";
    }
    if (this.dialogDisp.mc_rankSwap_total) {
      this.dialogDisp.mc_rankSwap_total.visible = this.eventVO.isRankSwapScoring;
      this.dialogDisp.mc_rankSwap_total.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    }
    if (this.dialogDisp.mc_icon_rankSwap) {
      this.dialogDisp.mc_icon_rankSwap.visible = this.eventVO.isRankSwapScoring;
      this.dialogDisp.mc_icon_rankSwap.toolTipText = "dialog_tempServer_collectPoints_tooltip_rankSwap";
    }
    if (this.dialogDisp.mc_rank_charge) {
      this.dialogDisp.mc_rank_charge.visible = false;
      this.dialogDisp.mc_rank_charge.toolTipText = "dialog_tempServer_collectPoints_tooltip_tier_charge";
    }
    if (this.dialogDisp.mc_charge_tonic) {
      this.dialogDisp.mc_charge_tonic.visible = false;
      this.dialogDisp.mc_charge_tonic.toolTipText = "dialog_tempServer_collectPoints_tooltip_tonic_charge";
    }
    if (this.dialogDisp.mc_charge_attackable) {
      this.dialogDisp.mc_charge_attackable.visible = false;
      this.dialogDisp.mc_charge_attackable.toolTipText = "dialog_tempServer_collectPoints_tooltip_attackAble_charge";
    }
    this.dialogDisp.icon_total.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    if (this.dialogDisp.icon_total2) {
      this.dialogDisp.icon_total2.visible = this.eventVO.isRankSwapScoring && this.highScoreTypeIsDaily;
      this.dialogDisp.icon_total2.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_name")));
    if (this.dialogDisp.txt_name_charge) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_name_charge, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_name"))).visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_multiinfo_alliance")));
    if (this.dialogDisp.txt_alliance_charge) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance_charge, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_multiinfo_alliance"))).visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_findme.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_findMe_button")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_info.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button")));
    if (this.highScoreTypeIsDaily) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyRanking_title")));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_overallRanking_title")));
    }
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.mc_find.txt_input, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = __dep_exact_81dacdf05bd32292_2.TextFieldType.INPUT;
    this.searchField.multiline = false;
    this._defaultSearchText = this.searchField.text;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.mc_find.gotoAndStop(1);
    this._currentRank = 1;
    this._requestTimer.start();
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this._scrollComponent.show();
    if (this._rankListItems != null) {
      for (var __s10local0 = 0, __s10local1 = this._rankListItems; __s10local0 < __s10local1.length; __s10local0++) {
        var __s10local2 = __s10local1[__s10local0];
        if (__s10local2 !== undefined) {
          __s10local2.onShow();
        }
      }
    }
    this.updateScrollValues(0);
    this.hideAllRankListItems();
    this.updateRankList();
    this.updateMultiplier();
    this.requestDataFromServer(-1);
  };
  CastleTemporaryServerEventDialogRanking.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    if (this._rankListItems != null) {
      for (var __s29local0 = 0, __s29local1 = this._rankListItems; __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined) {
          __s29local2.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    this._requestTimer.stop();
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.inputKeyDown = function (__s36param0) {
    if (__s36param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER) {
      this.onSearchButton();
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.requestDataFromServer = function (__s39param0) {
    var __s39local0 = __s39param0;
    if (__s39local0 >= 0) {
      __s39local0 += CastleTemporaryServerEventDialogRanking.RANK_OFFSET_ON_SERVER_REQUEST;
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO("" + __s39local0, this._highScoreType));
    this._hasScrollValueChanged = false;
    this._hasRequestedOwnRank = __s39param0 < 0;
  };
  CastleTemporaryServerEventDialogRanking.prototype.hideAllRankListItems = function () {
    if (this._rankListItems != null) {
      for (var __s42local0 = 0, __s42local1 = this._rankListItems; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined) {
          __s42local2.setVisibility(false);
        }
      }
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateRankList = function (__s48param0 = null) {
    if (__s48param0) {
      this._currentRankData = __s48param0;
    }
    if (this._currentRankData) {
      this.updateScrollValues(this._currentRankData.LR);
    }
    if (this._hasRequestedOwnRank && this._currentRankData && this._currentRankData.L.length > 0) {
      this._hasRequestedOwnRank = false;
      this._currentRank = __dep_exact_f855840627e6e145.int(this._currentRankData.L[0][0]);
      this._scrollComponent.scrollToValue(this._currentRank, false);
    }
    for (var __s48local0 = 0; __s48local0 < CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS; ++__s48local0) {
      var __s48local1 = this._currentRank + __s48local0;
      this._rankListItems[__s48local0].updateWithNewData(__s48local1, this.getEntryFromRankData(__s48local1), this._currentMaxRank, this.searchName != this._defaultSearchText ? this.searchName : "", this._highScoreType);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateScrollValues = function (__s55param0 = -1) {
    if (this._currentMaxRank >= 0) {
      this._currentMaxRank = __s55param0;
    }
    this._scrollComponent.setVisibility(this._currentMaxRank > CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS);
    this._scrollComponent.init(1, __dep_exact_9e901e8e2483a22f.MathBase.max(1, this._currentMaxRank - CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS + 1), CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS, CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS);
    this._scrollComponent.scrollToValue(this._currentRank, false);
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateMultiplier = function () {
    var __s58local0 = this.subLayerDisp.mc_multiplier;
    var __s58local1 = __s58local0 != null && this.castleEnv.isOnTemporaryServer && this.highScoreTypeIsDaily;
    this.subLayerDisp.btn_info.visible = !__s58local1;
    if (__s58local1) {
      __s58local0.visible = __s58local1;
      this.textFieldManager.registerTextField(__s58local0.txt_multiplierTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_dailyRanking_multiplier")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(__s58local0.txt_multiplier, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_multiplied_range", [__dep_export_CastleModel.CastleModel.tempServerData.currentMinMultiplier, __dep_export_CastleModel.CastleModel.tempServerData.currentMaxMultiplier])).autoFitToBounds = true;
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.getEntryFromRankData = function (__s61param0) {
    if (!this._currentRankData) {
      return null;
    }
    for (var __s61local0 = 0; __s61local0 < this._currentRankData.L.length; ++__s61local0) {
      if (__s61param0 == this._currentRankData.L[__s61local0][0]) {
        return this._currentRankData.L[__s61local0];
      }
    }
    return null;
  };
  CastleTemporaryServerEventDialogRanking.prototype.onClick = function (__s67param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s67param0.target)) {
      __s1param0.prototype.onClick.call(this, __s67param0);
      switch (__s67param0.target) {
        case this.dialogDisp.mc_slider.btn_min:
        case this.dialogDisp.mc_slider.btn_minus:
        case this.dialogDisp.mc_slider.btn_plus:
          this.requestDataFromServer(this._currentRank);
          break;
        case this.dialogDisp.btn_search:
          if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
            this.searchName = this.searchField.text;
            this.requestHighscoreData(this.searchName);
            this.dialogDisp.mc_find.gotoAndStop(2);
          }
          break;
        case this.dialogDisp.btn_findme:
          this.searchName = __dep_export_CastleModel.CastleModel.userData.userName;
          this.requestHighscoreData(this.searchName);
          break;
        case this.dialogDisp.btn_info:
          this.onInfoButtonClicked();
          break;
        case this.dialogDisp.mc_switch.btn_left:
        case this.dialogDisp.mc_switch.btn_right:
          this.parent.toggleRankingType();
      }
      if (this.subLayerDisp.mc_multiplier && __s67param0.target == this.subLayerDisp.mc_multiplier.btn_info) {
        this.onInfoButtonClicked();
      }
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onInfoButtonClicked = function () {
    if (this.highScoreTypeIsDaily) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTempServerInfoDialog.CastleTempServerInfoDialog, new __dep_export_CastleTempServerInfoDialogProperties.CastleTempServerInfoDialogProperties("dialog_tempServer_moreInfo_button", "dialog_tempServer_dailyRanking_title", "dialog_tempServer_dailyRanking_desc_" + __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.scoringSystem));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTempServerInfoDialog.CastleTempServerInfoDialog, new __dep_export_CastleTempServerInfoDialogProperties.CastleTempServerInfoDialogProperties("dialog_tempServer_moreInfo_button", "dialog_tempServer_overallRanking_title", "dialog_tempServer_overallRanking_desc"));
    }
  };
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "highScoreTypeIsDaily", {
    get: function () {
      return this._highScoreType != __dep_exact_26a421b704832cff.HighscoreConst.TEMP_SERVER_GLOBAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogRanking.prototype.onRankDataReceived = function (__s79param0) {
    this.isWaitingForServerMessage = false;
    if (this.searchName != this._defaultSearchText && __s79param0.params[0].L && __s79param0.params[0].L[0] && __s79param0.params[0].L[0][0]) {
      this._currentRank = __dep_exact_f855840627e6e145.int(__s79param0.params[0].L[0][0]);
    } else {
      this._currentRank = __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue);
    }
    this.updateRankList(__s79param0.params[0]);
  };
  CastleTemporaryServerEventDialogRanking.prototype.onScrollValueChanged = function () {
    this.searchName = "";
    if (this._currentRank != this._scrollComponent.currentValue) {
      this._hasScrollValueChanged = true;
    }
    this._currentRank = __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue);
    this.updateRankList();
  };
  CastleTemporaryServerEventDialogRanking.prototype.onRequestTimerUpdate = function (__s86param0) {
    if (this._hasScrollValueChanged) {
      this.requestDataFromServer(this._currentRank);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onFocusInSearchText = function (__s89param0) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onFocusOutSearchText = function (__s92param0) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
      this.dialogDisp.mc_find.gotoAndStop(1);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onSearchButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.requestHighscoreData = function (__s98param0) {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s98param0, this._highScoreType));
  };
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "eventVO", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS = 7;
  CastleTemporaryServerEventDialogRanking.TIME_TO_REQUEST_NEW_RANK_DATA = 500;
  CastleTemporaryServerEventDialogRanking.RANK_OFFSET_ON_SERVER_REQUEST = 3;
  return CastleTemporaryServerEventDialogRanking;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogRanking = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
