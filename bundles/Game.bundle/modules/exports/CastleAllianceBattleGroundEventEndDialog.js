Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceBattleGroundEventEndDialogListItem = require("gge-module:export_CastleAllianceBattleGroundEventEndDialogListItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHighscoreDialog = require("gge-module:export_CastleHighscoreDialog");
var __dep_export_CastleHighscoreDialogProperties = require("gge-module:export_CastleHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundEventEndDialog() {
    return __s1param0.call(this, CastleAllianceBattleGroundEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundEventEndDialog, __s1param0);
  CastleAllianceBattleGroundEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ranking], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleAllianceBattleGroundEventEndDialogListItem.CastleAllianceBattleGroundEventEndDialogListItem, "CastleABGEventEnd_Item", CastleAllianceBattleGroundEventEndDialog.NAME);
    __s5local0.itemPaddingY = 9;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s5local0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ranking.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("finalScore"));
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_end_desc"));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    this.dialogDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ABGEventEnd_Teaser_" + this.scoring, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleAllianceBattleGroundEventEndDialog.NAME), null, 0, false));
    this._scrollList.onShow();
    var __s7local0 = [];
    if (this.allianceRewards) {
      var __s7local1 = {
        rewards: this.allianceRewards,
        isAlliance: true,
        rank: this.dialogProp.allianceRank,
        points: this.dialogProp.alliancePoints
      };
      __s7local1.pointsCollectableVO = this.createPointsCollectableVO(true);
      __s7local0.push(__s7local1);
    }
    if (this.playerRewards) {
      var __s7local2 = {
        rewards: this.playerRewards,
        isAlliance: false,
        rank: this.dialogProp.playerRank,
        points: this.dialogProp.playerPoints
      };
      __s7local2.pointsCollectableVO = this.createPointsCollectableVO(false);
      __s7local0.push(__s7local2);
    }
    this._scrollList.updateWithNewData(__s7local0);
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.createPointsCollectableVO = function (__s11param0) {
    var __s11local0 = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getConfigVOByID(this.dialogProp.settingID);
    var __s11local1 = __dep_exact_f855840627e6e145.int(__s11param0 ? __s11local0.allianceCurrencyID : __s11local0.currencyID);
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __s11local1);
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ranking:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog, new __dep_export_CastleHighscoreDialogProperties.CastleHighscoreDialogProperties(__dep_export_CastleHighscoreDialog.CastleHighscoreDialog.SEARCH_ABG_PLAYER));
      }
    }
  };
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProp.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "allianceRewards", {
    get: function () {
      return this.dialogProp.allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "scoring", {
    get: function () {
      var __s23local0 = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getConfigVOByID(this.dialogProp.settingID);
      if (__s23local0) {
        return __s23local0.scoringSystemVO.scoring;
      } else {
        return "AllianceCollector";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventEndDialog.NAME = "CastleAllianceBattleGroundEventEnd_5";
  return CastleAllianceBattleGroundEventEndDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceBattleGroundEventEndDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
