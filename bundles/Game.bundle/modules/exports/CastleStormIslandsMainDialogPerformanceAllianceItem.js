Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogPerformanceAllianceItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogPerformanceAllianceItem, __s1param0);
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.fill = function () {
    this._clickFeedbackBehaviour ||= new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.getItemMc());
    this._clickFeedbackBehaviour.addEventListener();
    this.rankingItemVO = this.data;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.rankingItemVO.playerName));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rankingItemVO.playerLevel));
    this.getItemMc().gotoAndStop(this.getFrame());
    this.getItemMc().icon_rank.gotoAndStop(this.rankingItemVO.allianceRank + 1);
    this.getItemMc().mc_downState.visible = false;
    this.getItemMc().mc_mouseOver.visible = false;
    this.getItemMc().mouseChildren = false;
    if (this.rankingItemVO.hasUnlockedEiland) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_rank, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rankingItemVO.rank));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.rankingItemVO.aquaPoints));
      this.getItemMc().mc_inactive.visible = false;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO("-"));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_points, new __dep_exact_92d05af59ee2ff30.TextVO("-"));
      this.getItemMc().mc_inactive.visible = true;
    }
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this._clickFeedbackBehaviour) {
      this._clickFeedbackBehaviour.removeEventListener();
    }
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.rankingItemVO.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.getFrame = function () {
    if (this.rankingItemVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
      return 4;
    } else if (this.rankingItemVO.rank <= 3 && this.rankingItemVO.hasUnlockedEiland) {
      return this.rankingItemVO.rank;
    } else {
      return 5;
    }
  };
  return CastleStormIslandsMainDialogPerformanceAllianceItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleStormIslandsMainDialogPerformanceAllianceItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
