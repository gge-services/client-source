Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStormIslandsEventEndListItem = require("gge-module:export_CastleStormIslandsEventEndListItem");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsEventEndDialog() {
    return __s1param0.call(this, CastleStormIslandsEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsEventEndDialog, __s1param0);
  CastleStormIslandsEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleStormIslandsEventEndListItem.CastleStormIslandsEventEndListItem, "CastleStormIslandsEventEnd_Item", CastleStormIslandsEventEndDialog.NAME);
    __s5local0.itemPaddingY = 9;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s5local0);
  };
  CastleStormIslandsEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_island_end_desc"));
    this.prepareItemsList();
  };
  CastleStormIslandsEventEndDialog.prototype.prepareItemsList = function () {
    this._scrollList.onShow();
    var __s9local0 = [];
    var __s9local1 = {};
    if (this.dialogProperties.isAlliance) {
      __s9local1.rewards = this.allianceRewards;
      __s9local1.isInternalAlliance = false;
      __s9local1.isAlliance = this.dialogProperties.isAlliance;
      __s9local1.rank = this.dialogProperties.allianceRank;
      __s9local1.points = this.dialogProperties.alliancePoints;
      __s9local0.push(__s9local1);
      (__s9local1 = {}).rewards = this.playerRewards;
      __s9local1.isInternalAlliance = true;
      __s9local1.isAlliance = this.dialogProperties.isAlliance;
      __s9local1.rank = this.dialogProperties.playerRank;
      __s9local1.points = this.dialogProperties.playerPoints;
      __s9local0.push(__s9local1);
    } else {
      (__s9local1 = {}).rewards = this.playerRewards;
      __s9local1.isInternalAlliance = false;
      __s9local1.isAlliance = false;
      __s9local1.rank = -1;
      __s9local1.points = this.dialogProperties.playerPoints;
      __s9local0.push(__s9local1);
    }
    if (this.dialogProperties.titleVO) {
      (__s9local1 = {
        allianceRewards: null,
        isInternalAlliance: false,
        isAlliance: false,
        hasTitle: true
      }).title = this.dialogProperties.titleVO;
      __s9local0.push(__s9local1);
    }
    this._scrollList.updateWithNewData(__s9local0);
  };
  CastleStormIslandsEventEndDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleStormIslandsEventEndDialog.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      __s1param0.prototype.onClick.call(this, __s16param0);
      switch (__s16param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "allianceRewards", {
    get: function () {
      return this.dialogProperties.allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProperties.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsEventEndDialog.NAME = "CastleStormIslandsEventEnd_D";
  return CastleStormIslandsEventEndDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStormIslandsEventEndDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
