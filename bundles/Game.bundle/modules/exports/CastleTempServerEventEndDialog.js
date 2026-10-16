Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHighscoreDialog = require("gge-module:export_CastleHighscoreDialog");
var __dep_export_CastleHighscoreDialogProperties = require("gge-module:export_CastleHighscoreDialogProperties");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_export_CastleTempServerEventEndDialogListItem = require("gge-module:export_CastleTempServerEventEndDialogListItem");
var __s0local0 = function (__s1param0) {
  function CastleTempServerEventEndDialog() {
    return __s1param0.call(this, CastleTempServerEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerEventEndDialog, __s1param0);
  CastleTempServerEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ranking], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleTempServerEventEndDialogListItem.CastleTempServerEventEndDialogListItem, "CastleTempServerEventEnd_Item", CastleTempServerEventEndDialog.NAME);
    __s5local0.itemPaddingY = 9;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s5local0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ranking.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("finalScore"));
  };
  CastleTempServerEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_end_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_end_desc"));
    this.dialogDisp.mc_teaser.gotoAndStop(this.getAssetFrame());
    this._scrollList.onShow();
    var __s7local0 = [];
    if (this.playerRewards) {
      var __s7local1 = {
        rewards: this.playerRewards,
        rank: this.dialogProp.playerRank,
        points: this.dialogProp.playerPoints,
        scoring: this.scoring,
        isDaily: false
      };
      __s7local0.push(__s7local1);
    }
    if (this.dailyPlayerRewards) {
      var __s7local2 = {
        rewards: this.dailyPlayerRewards,
        mandatoryPoints: this.dialogProp.dailyMandatoryPoints,
        rewardLevel: this.dialogProp.dailyRewardLevel,
        rewardLevelMax: __dep_export_CastleModel.CastleModel.tempServerData.dailyRewardLevels,
        isDaily: true
      };
      __s7local0.push(__s7local2);
    }
    this._scrollList.updateWithNewData(__s7local0);
  };
  CastleTempServerEventEndDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleTempServerEventEndDialog.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      __s1param0.prototype.onClick.call(this, __s13param0);
      switch (__s13param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ranking:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog, new __dep_export_CastleHighscoreDialogProperties.CastleHighscoreDialogProperties(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER));
      }
    }
  };
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProp.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "dailyPlayerRewards", {
    get: function () {
      return this.dialogProp.dailyPlayerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "scoring", {
    get: function () {
      var __s21local0 = __dep_export_CastleModel.CastleModel.tempServerData.getConfigVOByID(this.dialogProp.settingID);
      if (__s21local0) {
        return __s21local0.scoringSystem;
      } else {
        return "AllianceCollector";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEventEndDialog.prototype.getAssetFrame = function () {
    var __s25local0 = __dep_export_CastleModel.CastleModel.tempServerData.getConfigVOByID(this.dialogProp.settingID);
    if (this.dialogProp.isCrossplay && __s25local0.isCastleTransportationOnly) {
      return 5;
    } else if (this.dialogProp.isCrossplay && this.scoring == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP) {
      return 4;
    } else if (this.dialogProp.isCrossplay && this.scoring == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR) {
      return 3;
    } else {
      return 1;
    }
  };
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEventEndDialog.NAME = "CastleTempServerEventEnd";
  return CastleTempServerEventEndDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTempServerEventEndDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
