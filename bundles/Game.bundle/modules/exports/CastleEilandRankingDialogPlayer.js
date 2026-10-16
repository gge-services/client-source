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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceMemberAquaPoints = require("gge-module:export_C2SAllianceMemberAquaPoints");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleEilandPlayerRankingItemVO = require("gge-module:export_CastleEilandPlayerRankingItemVO");
var __dep_export_CastleSearchScrollListComponent = require("gge-module:export_CastleSearchScrollListComponent");
var __s0local0 = function (__s1param0) {
  function CastleEilandRankingDialogPlayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.mc_search.btn_search, __s3local0.subLayerDisp.btn_top, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialogPlayer, __s1param0);
  CastleEilandRankingDialogPlayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.setTexts();
    if (!this.rankingList) {
      this.rankingList = new __dep_exact_9e901e8e2483a22f_2.ItemScrollList(this.subLayerDisp);
      this.rankingList.scrollItemClass = __dep_export_CastleEilandPlayerRankingItem.CastleEilandPlayerRankingItem;
      this.rankingList.hideButtons = false;
    }
    this.rankingList.clear();
    this.rankingList.addEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRankingScrolled));
    this.onRankingScrolled(null);
    if (!this.searchComponent) {
      this.searchComponent = new __dep_export_CastleSearchScrollListComponent.CastleSearchScrollListComponent(this.subLayerDisp.mc_search, this.rankingList, this.bindFunction(this.searchByNameOrRank));
      this.searchComponent.foundCallback = this.bindFunction(this.onSucessfullSearch);
      this.searchComponent.notFoundCallback = this.bindFunction(this.onFailedSearch);
      this.searchComponent.searchStartedCallback = this.bindFunction(this.resetSearchResult);
      this.searchComponent.inputFieldName = "txt_input_search";
    }
    this.searchComponent.show();
    this.controller.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
    this.requestHighscoreData();
  };
  CastleEilandRankingDialogPlayer.prototype.onRankingScrolled = function (__s9param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_top, this.rankingList.currentStartIndex != 0);
  };
  CastleEilandRankingDialogPlayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
    if (this.searchComponent) {
      this.searchComponent.hide();
    }
  };
  CastleEilandRankingDialogPlayer.prototype.destroy = function () {
    if (this.rankingList) {
      this.rankingList.remove();
    }
  };
  CastleEilandRankingDialogPlayer.prototype.onSucessfullSearch = function (__s17param0) {
    __s17param0.highlight = true;
  };
  CastleEilandRankingDialogPlayer.prototype.onFailedSearch = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_playerName_notFound")));
  };
  CastleEilandRankingDialogPlayer.prototype.searchByNameOrRank = function (__s21param0, __s21param1) {
    if (__s21param1.match(/^\d+$/) != null) {
      var __s21local0 = parseInt(__s21param1);
      return __s21param0.hasUnlockedEiland && __s21param0.rank == __s21local0;
    }
    return __s21param0.playerName.toLocaleLowerCase() == __s21param1.toLocaleLowerCase();
  };
  CastleEilandRankingDialogPlayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rankTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.COMMON_NAME));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_levelTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_membersTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allianceRank")).autoFitToBounds = true;
    this.subLayerDisp.icon_alliancePoints.toolTipText = "aquamarin_points_alliance_tooltip";
    this.subLayerDisp.mc_search.btn_search.toolTipText = "dialog_highscore_search";
  };
  CastleEilandRankingDialogPlayer.prototype.requestHighscoreData = function () {
    var __s26local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceMemberAquaPoints.C2SAllianceMemberAquaPoints(__s26local0));
  };
  CastleEilandRankingDialogPlayer.prototype.onGetHighscoreData = function (__s28param0) {
    this.rankingList.clear();
    for (var __s28local0 = this.createHighscoreList(__s28param0.params[0].APH), __s28local1 = 0; __s28local1 < __s28local0.length; ++__s28local1) {
      this.rankingList.pushContent(__s28local0[__s28local1]);
    }
    this.rankingList.initList(0);
  };
  CastleEilandRankingDialogPlayer.prototype.onClick = function (__s32param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      __s1param0.prototype.onClick.call(this, __s32param0);
      switch (__s32param0.target) {
        case this.subLayerDisp.btn_top:
          this.searchComponent.scrollToStart();
          this.onRankingScrolled(null);
      }
    }
  };
  CastleEilandRankingDialogPlayer.prototype.resetSearchResult = function () {
    for (var __s36local0 = __dep_exact_f855840627e6e145.int(this.rankingList.voList.length), __s36local1 = 0; __s36local1 < __s36local0; __s36local1++) {
      this.rankingList.voList[__s36local1].isSearchResult = false;
    }
  };
  CastleEilandRankingDialogPlayer.prototype.createHighscoreList = function (__s40param0) {
    var __s40local0 = [];
    for (var __s40local1 = 0; __s40local1 < __s40param0.length; __s40local1++) {
      var __s40local2 = __s40param0[__s40local1];
      __s40local0[__s40local1] = new __dep_export_CastleEilandPlayerRankingItemVO.CastleEilandPlayerRankingItemVO(__s40local2);
    }
    __s40local0.sort(this.bindFunction(this.sort));
    __s40local1 = 0;
    for (; __s40local1 < __s40local0.length; __s40local1++) {
      __s40local0[__s40local1].rank = __s40local1 + 1;
    }
    return __s40local0;
  };
  CastleEilandRankingDialogPlayer.prototype.sort = function (__s46param0, __s46param1) {
    if (!__s46param0.hasUnlockedEiland && __s46param1.hasUnlockedEiland) {
      return 1;
    } else if (__s46param0.hasUnlockedEiland && !__s46param1.hasUnlockedEiland) {
      return -1;
    } else if (__s46param0.hasUnlockedEiland || __s46param1.hasUnlockedEiland) {
      if (__s46param0.aquaPoints > __s46param1.aquaPoints) {
        return -1;
      } else if (__s46param0.aquaPoints < __s46param1.aquaPoints) {
        return 1;
      } else {
        return __s46param0.allianceRank - __s46param1.allianceRank;
      }
    } else {
      return __s46param0.allianceRank - __s46param1.allianceRank;
    }
  };
  return CastleEilandRankingDialogPlayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleEilandRankingDialogPlayer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleEilandPlayerRankingItem = require("gge-module:export_CastleEilandPlayerRankingItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
