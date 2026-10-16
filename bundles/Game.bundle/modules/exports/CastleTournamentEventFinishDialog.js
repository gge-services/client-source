Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTournamentEventFinishDialog() {
    var __s3local0 = this;
    __s3local0.TOP3_MIN_RANK = 3;
    __s3local0.TOP100_MIN_RANK = 100;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTournamentEventFinishDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTournamentEventFinishDialog, __s1param0);
  CastleTournamentEventFinishDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_messageHeader_tournamentOver"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournamentOver_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_yourRankTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_yourRank"));
    this.i_rank_txt_txt_rank = this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_rank, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastleTournamentEventFinishDialog.prototype.initComponents = function () {
    this.updateRanking();
    this.updateRewards();
  };
  CastleTournamentEventFinishDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.initComponents();
  };
  CastleTournamentEventFinishDialog.prototype.updateRanking = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_yourRankTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_yourRank"));
    if (this.isNothing || this.isBooby || this.isTop100) {
      this.dialogDisp.mc_ranking.gotoAndStop(1);
      this.i_rank_txt_txt_rank = this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.ownRank), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    } else if (this.dialogProperties.ownRank == 3) {
      this.dialogDisp.mc_ranking.gotoAndStop(2);
    } else if (this.dialogProperties.ownRank == 2) {
      this.dialogDisp.mc_ranking.gotoAndStop(3);
    } else if (this.dialogProperties.ownRank == 1) {
      this.dialogDisp.mc_ranking.gotoAndStop(4);
    }
  };
  CastleTournamentEventFinishDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.rewardComponentContainerMovieClip);
    if (this.dialogProperties.rewardsList && this.dialogProperties.rewardsList.length > 0) {
      this.setupRewardBackgroundComponent("PriceCount" + this.dialogProperties.rewardsList.length);
    } else {
      this.setupRewardBackgroundComponent("PriceCount0");
    }
  };
  CastleTournamentEventFinishDialog.prototype.setupRewardBackgroundComponent = function (__s21param0) {
    var __s21local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s21param0))();
    this.rewardComponentContainerMovieClip.addChild(__s21local0);
    if (this.dialogProperties.rewardsList) {
      for (var __s21local1 = 0; __s21local1 < this.dialogProperties.rewardsList.length; __s21local1++) {
        var __s21local2 = __s21local1;
        var __s21local3 = "mc_price_" + (__s21local1 + 1);
        this.fillRewardSlotComponent(__s21local0, __s21local3, __s21local2, this.dialogProperties.rewardsList[__s21local1]);
      }
    }
  };
  CastleTournamentEventFinishDialog.prototype.fillRewardSlotComponent = function (__s26param0, __s26param1, __s26param2, __s26param3) {
    var __s26local0;
    var __s26local1 = __s26param3;
    var __s26local2 = __s26param0[__s26param1];
    this.setupRewardComponentLabel(__s26local2.txt_title, this.dialogProperties.rewardsList.length - __s26param2);
    if (__s26local1.containsAnyTypeOf(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT)) {
      __s26local0 = __s26local1.getFirstItemOfTypes(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT);
      this.setupAndRenderSingleItem(__s26local2.mc_equipment, __s26local0, 5, CastleTournamentEventFinishDialog.ICON_EQUIPMENT_DIMENSION);
      __s26local2.mc_reward_item_1.visible = false;
      __s26local2.mc_reward_item_2.visible = false;
      __s26local2.btn_info_0.visible = false;
      __s26local2.btn_info_1.visible = false;
      __s26local2.mc_bcg.visible = false;
    } else if (__s26local1.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING)) {
      __s26local0 = __s26local1.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING);
      this.setupAndRenderSingleItem(__s26local2.mc_equipment, __s26local0, 6, CastleTournamentEventFinishDialog.ICON_DECO_DIMENSION);
      __s26local2.mc_reward_item_1.visible = false;
      __s26local2.mc_reward_item_2.visible = false;
      __s26local2.btn_info_0.visible = false;
      __s26local2.btn_info_1.visible = false;
      __s26local2.mc_bcg.visible = false;
    } else {
      __s26local1 = __s26local1.getFilteredListWithoutTypes([__dep_export_CollectableEnum.CollectableEnum.BUILDING].concat(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_EQUIPMENT));
      __s26local2.mc_equipment.visible = false;
      for (var __s26local3 = 0; __s26local3 < 2; ++__s26local3) {
        __s26local0 = __s26local1.getItemByIndex(__s26local3);
        this.setupAndRenderItemFromDoubleSet(__s26local2["mc_reward_item_" + (__s26local3 + 1)], __s26local2["btn_info_" + __s26local3], __s26local0);
      }
    }
  };
  CastleTournamentEventFinishDialog.prototype.setupAndRenderSingleItem = function (__s33param0, __s33param1, __s33param2, __s33param3) {
    __s33param0.gotoAndStop(__s33param2);
    var __s33local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s33param0).addIconMc(__s33param0.mc_equipmentHolder);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s33local0, __s33param1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, __s33param3));
  };
  CastleTournamentEventFinishDialog.prototype.setupAndRenderItemFromDoubleSet = function (__s35param0, __s35param1, __s35param2) {
    this.collectableRenderList.push(__dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s35param0).addIconMc(__s35param0.mc_icon).addColorBgMc(__s35param0.mc_background).addInfoBtn(__s35param1), __s35param2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT)));
  };
  CastleTournamentEventFinishDialog.prototype.setupRewardComponentLabel = function (__s37param0, __s37param1) {
    switch (__s37param1) {
      case 1:
        this.textFieldManager.registerTextField(__s37param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_boobyprice"));
        break;
      case 2:
        this.textFieldManager.registerTextField(__s37param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_priceTop", [this.TOP100_MIN_RANK.toString()]));
        break;
      case 3:
        this.textFieldManager.registerTextField(__s37param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_priceTop", [this.TOP3_MIN_RANK.toString()]));
    }
  };
  CastleTournamentEventFinishDialog.prototype.onClick = function (__s40param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      __s1param0.prototype.onClick.call(this, __s40param0);
      switch (__s40param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isTop3", {
    get: function () {
      return this.dialogProperties.ownRank <= this.TOP3_MIN_RANK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isTop100", {
    get: function () {
      return this.dialogProperties.ownRank > this.TOP3_MIN_RANK && this.dialogProperties.ownRank <= this.TOP100_MIN_RANK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isBooby", {
    get: function () {
      return !this.isTop3 && !this.isTop100 && !!this.dialogProperties.rewardsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isNothing", {
    get: function () {
      return !this.isTop3 && !this.isTop100 && !this.dialogProperties.rewardsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "rewardComponentContainerMovieClip", {
    get: function () {
      return this.dialogDisp.mc_rewardsPosition;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentEventFinishDialog.__initialize_static_members = function () {
    CastleTournamentEventFinishDialog.NAME = "CastleTournamentFinished";
    CastleTournamentEventFinishDialog.ICON_DECO_DIMENSION = new __s0local0(65, 65);
    CastleTournamentEventFinishDialog.ICON_EQUIPMENT_DIMENSION = new __s0local0(50, 50);
  };
  return CastleTournamentEventFinishDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTournamentEventFinishDialog = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
