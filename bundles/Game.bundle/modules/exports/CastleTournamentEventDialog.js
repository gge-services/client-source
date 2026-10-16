Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleTournamentEventDialog = require("gge-module:export_ACastleTournamentEventDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTournamentEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTournamentEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTournamentEventDialog, __s1param0);
  CastleTournamentEventDialog.prototype.initRankListComponent = function () {
    __s1param0.prototype.initRankListComponent.call(this);
    this._rankList = new __dep_export_CastleTournamentRankListComponent.CastleTournamentRankListComponent(this.dialogDisp.mc_rankList, __dep_export_CastleTournamentRankListItem.CastleTournamentRankListItem, "dialog_highscore_search", "panel_navigation_playername");
  };
  CastleTournamentEventDialog.prototype.updateStaticText = function () {
    __s1param0.prototype.updateStaticText.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speachBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_speachBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyBold, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_boldText")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFameTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceFame_yourPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRankTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_yourCurrentRank"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_priceTop3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_priceTop", [3]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_priceTop100, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_priceTop", [100]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boobyprice, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_boobyprice"));
  };
  CastleTournamentEventDialog.prototype.requestHighscoreData = function (__s9param0) {
    if (!this.isWaitingForServerMessage) {
      this.isWaitingForServerMessage = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s9param0, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_TOURNAMENT_FAME));
    }
  };
  CastleTournamentEventDialog.prototype.setOwnRankTexts = function (__s12param0, __s12param1) {
    __s1param0.prototype.setOwnRankTexts.call(this, __s12param0, __s12param1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boobypriceDescription, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tournament_boobypriceDescription", [this.eventVO.minimumFamepointsForBoobyprice]));
  };
  CastleTournamentEventDialog.prototype.updateDialog = function () {
    __s1param0.prototype.updateDialog.call(this);
    this.setOwnRankTexts(this.eventVO.ownRank, this.eventVO.ownEarnedFamePoints);
  };
  CastleTournamentEventDialog.prototype.updateRewards = function () {
    __s1param0.prototype.updateRewards.call(this);
    this.setRewardsTop3(this.eventVO.boobyRewardList);
    this.setRewardsTop2(this.eventVO.topXRewardList);
    this.setRewardsTop1(this.eventVO.winnerRewardList);
  };
  CastleTournamentEventDialog.prototype.setRewardsTop1 = function (__s18param0) {
    var __s18local0;
    var __s18local1 = this.dialogDisp.mc_equipment;
    var __s18local2 = new __s0local0(0, 0);
    var __s18local3 = 1;
    if (__s18param0.containsAnyTypeOf(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT)) {
      __s18local2 = CastleTournamentEventDialog.ICON_EQUIPMENT_DIMENSION;
      __s18local0 = __s18param0.getFirstItemOfTypes(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT);
      __s18local3 = 5;
    } else if (__s18param0.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING)) {
      __s18local2 = CastleTournamentEventDialog.ICON_DECO_DIMENSION;
      __s18local0 = __s18param0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING);
      __s18local3 = 6;
    }
    __s18local1.gotoAndStop(__s18local3);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s18local1).addIconMc(__s18local1.mc_equipmentHolder), __s18local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, __s18local2));
  };
  CastleTournamentEventDialog.prototype.setRewardsTop2 = function (__s22param0) {
    this.setRewardsBySimpleRewardListWithInfoButton("mc_reward_top2", "mc_reward_top2_", __s22param0);
  };
  CastleTournamentEventDialog.prototype.setRewardsTop3 = function (__s24param0) {
    this.setRewardsBySimpleRewardListWithInfoButton("mc_reward_top3", "mc_reward_top3_", __s24param0);
  };
  CastleTournamentEventDialog.prototype.setRewardsBySimpleRewardListWithInfoButton = function (__s26param0, __s26param1, __s26param2) {
    for (var __s26local0, __s26local1, __s26local2 = 0; __s26local2 < __s26param2.length && (__s26local0 = this.dialogDisp[__s26param0][__s26param1 + __s26local2], __s26local1 = this.dialogDisp[__s26param0]["btn_info_" + __s26local2], __s26local0); ++__s26local2) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s26local0).addIconMc(__s26local0.mc_icon).addColorBgMc(__s26local0.mc_background).addInfoBtn(__s26local1), __s26param2.getItemByIndexSave(__s26local2), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT, this.defaultRewardIconDimension));
    }
    this.dialogDisp[__s26param0].mouseChildren = true;
  };
  Object.defineProperty(CastleTournamentEventDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentEventDialog.__initialize_static_members = function () {
    CastleTournamentEventDialog.NAME = "CastleTournamentEvent";
    CastleTournamentEventDialog.REWARD_FILTER_LIST = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS.concat([__dep_export_CollectableEnum.CollectableEnum.VIP_POINTS, __dep_export_CollectableEnum.CollectableEnum.VIP_TIME]);
    CastleTournamentEventDialog.ICON_DECO_DIMENSION = new __s0local0(65, 65);
    CastleTournamentEventDialog.ICON_EQUIPMENT_DIMENSION = new __s0local0(50, 50);
  };
  return CastleTournamentEventDialog;
}(__dep_export_ACastleTournamentEventDialog.ACastleTournamentEventDialog);
exports.CastleTournamentEventDialog = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleTournamentRankListComponent = require("gge-module:export_CastleTournamentRankListComponent");
var __dep_export_CastleTournamentRankListItem = require("gge-module:export_CastleTournamentRankListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
