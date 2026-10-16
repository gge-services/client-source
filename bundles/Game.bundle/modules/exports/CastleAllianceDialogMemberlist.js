Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_instanceOf_IWorldMapOwnerInfoVO = require("gge-module:export_instanceOf_IWorldMapOwnerInfoVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleColumnSortingVO = require("gge-module:export_CastleColumnSortingVO");
var __dep_export_CastleTableSorter = require("gge-module:export_CastleTableSorter");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleHighscoreDialogProperties = require("gge-module:export_CastleHighscoreDialogProperties");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_AllianceMemberScrollItemComparer = require("gge-module:export_AllianceMemberScrollItemComparer");
var __dep_export_AllianceMemberScrollItemVO = require("gge-module:export_AllianceMemberScrollItemVO");
var __dep_export_CastleSearchMemberDialogProperties = require("gge-module:export_CastleSearchMemberDialogProperties");
var __dep_export_CastleAllianceMemberSettingsDialogProperties = require("gge-module:export_CastleAllianceMemberSettingsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogMemberlist(__s3param0) {
    var __s3local0 = this;
    __s3local0._tableSorter = new __dep_export_CastleTableSorter.CastleTableSorter();
    __s3local0._legendXPShown = false;
    __s3local0._honorShown = false;
    __s3local0._coinShown = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_member, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_alliance_member"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_rank, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("rank"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_playerName, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("generic_name"));
    __s3local0.itxt_honorOverall = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_honorOverall, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    __s3local0.itxt_memberAmount = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_memberAmount, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    __s3local0.itxt_label = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_searchMember.mc_counter.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    if (__s3local0._legendXPShown) {
      __s3local0.subLayerDisp.icon_xp.gotoAndStop(2);
      __s3local0.subLayerDisp.icon_xp.toolTipText = "legendlevel";
    } else {
      __s3local0.subLayerDisp.icon_xp.gotoAndStop(1);
      __s3local0.subLayerDisp.icon_xp.toolTipText = "level";
    }
    if (__s3local0._honorShown) {
      __s3local0.subLayerDisp.icon_honor.gotoAndStop(1);
      __s3local0.subLayerDisp.icon_honor.toolTipText = "honor";
    } else {
      __s3local0.subLayerDisp.icon_honor.gotoAndStop(2);
      __s3local0.subLayerDisp.icon_honor.toolTipText = "playerMight";
    }
    if (__s3local0._coinShown) {
      __s3local0.subLayerDisp.icon_coin_res.gotoAndStop(1);
      __s3local0.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedC1";
    } else {
      __s3local0.subLayerDisp.icon_coin_res.gotoAndStop(2);
      __s3local0.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedRes";
    }
    __s3local0.subLayerDisp.icon_fame.toolTipText = "dialog_dailyglory_tooltip";
    __s3local0.subLayerDisp.icon_activity.toolTipText = "dialog_alliance_loginActivity";
    __s3local0.subLayerDisp.icon_doantedc2.toolTipText = "dialog_alliance_donatedC2";
    __s3local0.subLayerDisp.btn_allianceHighscore.toolTipText = "dialog_highscore_searchAlliance";
    __s3local0.subLayerDisp.mc_allianceMight.toolTipText = "allianceMight";
    __s3local0.subLayerDisp.icon_distance.toolTipText = "distance";
    __s3local0.subLayerDisp.btn_searchMember.toolTipText = "dialog_alliance_getNewMember";
    __s3local0.subLayerDisp.btn_landmarks.toolTipText = "dialog_landmarkList_Header";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_allianceHighscore, __s3local0.subLayerDisp.btn_increaseMember, __s3local0.subLayerDisp.btn_searchMember, __s3local0.subLayerDisp.btn_landmarks, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down, __s3local0.subLayerDisp.btn_slider, __s3local0.subLayerDisp.btn_left_level, __s3local0.subLayerDisp.btn_right_level, __s3local0.subLayerDisp.btn_left_honor, __s3local0.subLayerDisp.btn_right_honor, __s3local0.subLayerDisp.btn_sort_rank, __s3local0.subLayerDisp.btn_sort_name, __s3local0.subLayerDisp.btn_sort_level, __s3local0.subLayerDisp.btn_sort_distance, __s3local0.subLayerDisp.btn_sort_honor, __s3local0.subLayerDisp.btn_sort_donated_ruby, __s3local0.subLayerDisp.btn_sort_donated_coin_res, __s3local0.subLayerDisp.btn_left_coin_res, __s3local0.subLayerDisp.btn_right_coin_res, __s3local0.subLayerDisp.btn_sort_fame, __s3local0.subLayerDisp.btn_sort_activity]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogMemberlist, __s1param0);
  CastleAllianceDialogMemberlist.prototype.calculateTotalMightPoints = function () {
    var __s11local0 = 0;
    for (var __s11local1 = 0, __s11local2 = this.allianceInfoVO.memberList; __s11local1 < __s11local2.length; __s11local1++) {
      var __s11local3 = __s11local2[__s11local1];
      if (__s11local3 !== undefined) {
        __s11local0 += __s11local3.might;
      }
    }
    return __s11local0;
  };
  CastleAllianceDialogMemberlist.prototype.updateLists = function () {
    this._tableSorter.init(this._itemScrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
  };
  CastleAllianceDialogMemberlist.prototype.onMemberListSortingChanged = function (__s18param0) {
    this.resetAllTriangles();
    __s18param0.sortingTrigger.gotoAndStop(__s18param0.isInAscendingOrder ? 2 : 1);
    this._itemScrollList.initList();
  };
  CastleAllianceDialogMemberlist.prototype.resetAllTriangles = function () {
    if (this._sorters != null) {
      for (var __s20local0 = 0, __s20local1 = this._sorters; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          __s20local2.sortingTrigger.gotoAndStop(1);
        }
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_rank, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_name, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_level, this.bindFunction(this.handleXPSorting)));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_distance, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_honor, this.bindFunction(this.handleHonorMightSorting)));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_donated_ruby, this.bindFunction(this.handleRubySorting)));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_fame, this.bindFunction(this.handleFameSorting)));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_donated_coin_res, this.bindFunction(this.handleCoinResSorting)));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.subLayerDisp.btn_sort_activity, this.bindFunction(this.handleActivitySorting)));
    return this._sorters;
  };
  CastleAllianceDialogMemberlist.prototype.handleActivitySorting = function (__s28param0, __s28param1) {
    var __s28local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s28param0.ownerInfoVO.playerID).loginActivity);
    var __s28local1 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s28param1.ownerInfoVO.playerID).loginActivity);
    var __s28local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareInt(__s28local0, __s28local1));
    if (__s28local2 == 0) {
      __s28local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareRank(__s28param0.ownerInfoVO, __s28param1.ownerInfoVO));
    }
    if (__s28local2 == 0) {
      __s28local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareName(__s28param0.ownerInfoVO, __s28param1.ownerInfoVO));
    }
    return __s28local2;
  };
  CastleAllianceDialogMemberlist.prototype.handleRubySorting = function (__s32param0, __s32param1) {
    var __s32local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s32param0.ownerInfoVO.playerID).givenC2);
    var __s32local1 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s32param1.ownerInfoVO.playerID).givenC2);
    var __s32local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareInt(__s32local0, __s32local1));
    if (__s32local2 == 0) {
      __s32local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareRank(__s32param0.ownerInfoVO, __s32param1.ownerInfoVO));
    }
    if (__s32local2 == 0) {
      __s32local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareName(__s32param0.ownerInfoVO, __s32param1.ownerInfoVO));
    }
    return __s32local2;
  };
  CastleAllianceDialogMemberlist.prototype.handleCoinResSorting = function (__s36param0, __s36param1) {
    if (this._coinShown) {
      return __dep_exact_f855840627e6e145.int(this.handleCoinSorting(__s36param0, __s36param1));
    } else {
      return __dep_exact_f855840627e6e145.int(this.handleRessourceSorting(__s36param0, __s36param1));
    }
  };
  CastleAllianceDialogMemberlist.prototype.handleRessourceSorting = function (__s40param0, __s40param1) {
    var __s40local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s40param0.ownerInfoVO.playerID).givenResources);
    var __s40local1 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s40param1.ownerInfoVO.playerID).givenResources);
    var __s40local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareInt(__s40local0, __s40local1));
    if (__s40local2 == 0) {
      __s40local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareRank(__s40param0.ownerInfoVO, __s40param1.ownerInfoVO));
    }
    if (__s40local2 == 0) {
      __s40local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareName(__s40param0.ownerInfoVO, __s40param1.ownerInfoVO));
    }
    return __s40local2;
  };
  CastleAllianceDialogMemberlist.prototype.handleCoinSorting = function (__s44param0, __s44param1) {
    var __s44local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s44param0.ownerInfoVO.playerID).givenC1);
    var __s44local1 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s44param1.ownerInfoVO.playerID).givenC1);
    var __s44local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareInt(__s44local0, __s44local1));
    if (__s44local2 == 0) {
      __s44local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareRank(__s44param0.ownerInfoVO, __s44param1.ownerInfoVO));
    }
    if (__s44local2 == 0) {
      __s44local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareName(__s44param0.ownerInfoVO, __s44param1.ownerInfoVO));
    }
    return __s44local2;
  };
  CastleAllianceDialogMemberlist.prototype.handleFameSorting = function (__s48param0, __s48param1) {
    var __s48local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s48param0.ownerInfoVO.playerID).dailyFame);
    var __s48local1 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getAdditionalMemberInfos(__s48param1.ownerInfoVO.playerID).dailyFame);
    var __s48local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareInt(__s48local0, __s48local1));
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareRank(__s48param0.ownerInfoVO, __s48param1.ownerInfoVO));
    }
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareName(__s48param0.ownerInfoVO, __s48param1.ownerInfoVO));
    }
    return __s48local2;
  };
  CastleAllianceDialogMemberlist.prototype.handleHonorMightSorting = function (__s52param0, __s52param1) {
    if (this._honorShown) {
      return __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareHonorValue(__s52param0, __s52param1));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareMightValue(__s52param0, __s52param1));
    }
  };
  CastleAllianceDialogMemberlist.prototype.handleXPSorting = function (__s56param0, __s56param1) {
    if (this._legendXPShown) {
      return __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareLegendLevelValue(__s56param0, __s56param1));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryLevel(__s56param0, __s56param1));
    }
  };
  CastleAllianceDialogMemberlist.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_allianceMemberlist"));
  };
  CastleAllianceDialogMemberlist.prototype.show = function (__s62param0) {
    __s1param0.prototype.show.call(this, __s62param0);
    this.initScrollList();
    this.updateLists();
    this.updateCoin();
    this.updateHonor();
    this.updateXP();
    this.subLayerDisp.btn_sort_rank.gotoAndStop(2);
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    this.itxt_honorOverall.textContentVO.numberValue = this.calculateTotalMightPoints();
    this.itxt_label.textContentVO.stringValue = String(this.allianceInfoVO.applicationAmount);
    this.subLayerDisp.btn_searchMember.mc_counter.visible = this.allianceInfoVO.applicationAmount > 0;
    this.subLayerDisp.btn_searchMember.visible = __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_INVITE);
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_searchMember, false);
    } else if (this.allianceInfoVO.isBoostUpgradeable(__dep_exact_26a421b704832cff_1.AllianceConst.TYPE_MEMBERS)) {
      if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_UPGRADE)) {
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_raiseMemberLimit";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, true);
      } else {
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_rankToLow";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
      }
    } else {
      this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
    }
  };
  CastleAllianceDialogMemberlist.prototype.hide = function () {
    this.resetAllTriangles();
    this.disposeScrollList();
    this._tableSorter.hide();
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceDialogMemberlist.prototype.onMouseUp = function (__s71param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s71param0.target)) {
      switch (__s71param0.target) {
        case this.subLayerDisp.btn_editAnouncement:
          break;
        case this.subLayerDisp.btn_allianceHighscore:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog, new __dep_export_CastleHighscoreDialogProperties.CastleHighscoreDialogProperties(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog.SEARCH_ALLIANCE, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_BUILDING_POINTS));
          break;
        case this.subLayerDisp.btn_searchMember:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSearchMemberDialog.CastleSearchMemberDialog, new __dep_export_CastleSearchMemberDialogProperties.CastleSearchMemberDialogProperties(this.allianceInfoVO));
          break;
        case this.subLayerDisp.btn_increaseMember:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [this.allianceInfoVO, __dep_exact_26a421b704832cff_1.AllianceConst.TYPE_MEMBERS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEMBER]);
          break;
        case this.subLayerDisp.btn_landmarks:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceLandmarksDialog.CastleAllianceLandmarksDialog);
          break;
        case this.subLayerDisp.btn_left_level:
        case this.subLayerDisp.btn_right_level:
          this.toggleShownXP();
          break;
        case this.subLayerDisp.btn_left_honor:
        case this.subLayerDisp.btn_right_honor:
          this.toggleHonorMight();
          break;
        case this.subLayerDisp.btn_left_coin_res:
        case this.subLayerDisp.btn_right_coin_res:
          this.toggleShownResCoin();
      }
      if (this.isButtonChangeRank(__s71param0.target)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceMemberSettingsDialog.CastleAllianceMemberSettingsDialog, new __dep_export_CastleAllianceMemberSettingsDialogProperties.CastleAllianceMemberSettingsDialogProperties(__s71param0.target.memberVO));
      } else if (this.isButtonMemberName(__s71param0.target)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s71param0.target.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.toggleHonorMight = function () {
    this._honorShown = !this._honorShown;
    this.updateHonor();
  };
  CastleAllianceDialogMemberlist.prototype.toggleShownXP = function () {
    this._legendXPShown = !this._legendXPShown;
    this.updateXP();
  };
  CastleAllianceDialogMemberlist.prototype.toggleShownResCoin = function () {
    this._coinShown = !this._coinShown;
    this.updateCoin();
  };
  CastleAllianceDialogMemberlist.prototype.isButtonMemberName = function (__s83param0) {
    return !!__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s83param0) && !!__s83param0.playerID && typeof __s83param0.playerID == "number";
  };
  CastleAllianceDialogMemberlist.prototype.isButtonChangeRank = function (__s85param0) {
    return !!__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s85param0) && !!__s85param0.memberVO && __dep_export_instanceOf_IWorldMapOwnerInfoVO.instanceOf_IWorldMapOwnerInfoVO(__s85param0.memberVO);
  };
  Object.defineProperty(CastleAllianceDialogMemberlist.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogMemberlist.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.disposeScrollList();
    this._tableSorter.destroy();
  };
  CastleAllianceDialogMemberlist.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.disp, this.disp);
    this._itemScrollList.scrollItemClass = __dep_export_AllianceMemberScrollItem.AllianceMemberScrollItem;
    this.populateScrollList(this._itemScrollList);
    this._itemScrollList.initList();
  };
  CastleAllianceDialogMemberlist.prototype.populateScrollList = function (__s93param0) {
    var __s93local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    var __s93local1 = __s93local0 ? __s93local0.absAreaPos : null;
    for (var __s93local2 = 0, __s93local3 = this.allianceInfoVO.memberList; __s93local2 < __s93local3.length; __s93local2++) {
      var __s93local4 = __s93local3[__s93local2];
      if (__s93local4 !== undefined) {
        __s93param0.pushContent(new __dep_export_AllianceMemberScrollItemVO.AllianceMemberScrollItemVO(__s93local4, this.allianceInfoVO.getAdditionalMemberInfos(__s93local4.playerID), __s93local1, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateCoin = function () {
    if (this._coinShown) {
      this.subLayerDisp.icon_coin_res.gotoAndStop(1);
      this.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedC1";
    } else {
      this.subLayerDisp.icon_coin_res.gotoAndStop(2);
      this.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedRes";
    }
    for (var __s101local0 = __dep_exact_f855840627e6e145.int(this._itemScrollList.voList.length), __s101local1 = 0; __s101local1 < __s101local0; ++__s101local1) {
      this._itemScrollList.voList[__s101local1].coinShown = this._coinShown;
      if (this._itemScrollList.veList.length > __s101local1) {
        this._itemScrollList.veList[__s101local1].updateCoin(this._coinShown);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateXP = function () {
    if (this._legendXPShown) {
      this.subLayerDisp.icon_xp.gotoAndStop(2);
      this.subLayerDisp.icon_xp.toolTipText = "legendlevel";
    } else {
      this.subLayerDisp.icon_xp.gotoAndStop(1);
      this.subLayerDisp.icon_xp.toolTipText = "level";
    }
    for (var __s108local0 = __dep_exact_f855840627e6e145.int(this._itemScrollList.voList.length), __s108local1 = 0; __s108local1 < __s108local0; ++__s108local1) {
      this._itemScrollList.voList[__s108local1].legendXPShown = this._legendXPShown;
      if (this._itemScrollList.veList.length > __s108local1) {
        this._itemScrollList.veList[__s108local1].updateLegendXP(this._legendXPShown);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateHonor = function () {
    if (this._honorShown) {
      this.subLayerDisp.icon_honor.gotoAndStop(1);
      this.subLayerDisp.icon_honor.toolTipText = "honor";
    } else {
      this.subLayerDisp.icon_honor.gotoAndStop(2);
      this.subLayerDisp.icon_honor.toolTipText = "playerMight";
    }
    for (var __s115local0 = __dep_exact_f855840627e6e145.int(this._itemScrollList.voList.length), __s115local1 = 0; __s115local1 < __s115local0; ++__s115local1) {
      this._itemScrollList.voList[__s115local1].honorShown = this._honorShown;
      if (this._itemScrollList.veList.length > __s115local1) {
        this._itemScrollList.veList[__s115local1].updateHonor(this._honorShown);
      }
    }
  };
  return CastleAllianceDialogMemberlist;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogMemberlist = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_CastleHighscoreDialog = require("gge-module:export_CastleHighscoreDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_AllianceMemberScrollItem = require("gge-module:export_AllianceMemberScrollItem");
var __dep_export_CastleAllianceLandmarksDialog = require("gge-module:export_CastleAllianceLandmarksDialog");
var __dep_export_CastleSearchMemberDialog = require("gge-module:export_CastleSearchMemberDialog");
var __dep_export_CastleAllianceMemberSettingsDialog = require("gge-module:export_CastleAllianceMemberSettingsDialog");
