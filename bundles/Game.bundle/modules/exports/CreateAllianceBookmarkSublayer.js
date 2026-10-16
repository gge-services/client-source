Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CreateAllianceBookmarkSublayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._checkButtonSubmitState = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CreateAllianceBookmarkSublayer, __s1param0);
  CreateAllianceBookmarkSublayer.prototype.show = function (__s5param0) {
    this._currentBookmarkVO = __s5param0[0];
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.subLayerDisp.btn_free_attack, this.subLayerDisp.btn_team_attack, this.subLayerDisp.btn_support]);
    this._teamAttackConfig = new __dep_export_TeamAttackConfiguration.TeamAttackConfiguration(this.subLayerDisp.team_attack_config, this.bindFunction(this._checkButtonSubmitState));
    this._teamAttackConfig.hide();
    this.setButtonToolTip(this.subLayerDisp.btn_free_attack);
    if (this._currentBookmarkVO.worldmapObjectVO.isOwnMapobject) {
      this.setBookmarkType(this.subLayerDisp.btn_support, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND);
    } else {
      this.setBookmarkType(this.subLayerDisp.btn_free_attack, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
    }
  };
  CreateAllianceBookmarkSublayer.prototype.hide = function () {
    if (this._teamAttackConfig) {
      this._teamAttackConfig.hide();
    }
    __s1param0.prototype.hide.call(this);
  };
  CreateAllianceBookmarkSublayer.prototype.onClick = function (__s12param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.subLayerDisp.btn_free_attack:
          this.setBookmarkType(__s12param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
          this._teamAttackConfig.hide();
          break;
        case this.subLayerDisp.btn_team_attack:
          this.setBookmarkType(__s12param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER);
          this._teamAttackConfig.show(this._currentBookmarkVO);
          break;
        case this.subLayerDisp.btn_support:
          this.setBookmarkType(__s12param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND);
          this._teamAttackConfig.hide();
      }
    }
  };
  CreateAllianceBookmarkSublayer.prototype.setBookmarkType = function (__s16param0, __s16param1) {
    if (this._currentBookmarkVO.type != __s16param1) {
      this._currentBookmarkVO.type = __s16param1;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_free_attack, __s16param0 == this.subLayerDisp.btn_free_attack);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_team_attack, __s16param0 == this.subLayerDisp.btn_team_attack);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_support, __s16param0 == this.subLayerDisp.btn_support);
      this.setButtonToolTip(__s16param0);
      this._checkButtonSubmitState();
    }
  };
  CreateAllianceBookmarkSublayer.prototype.setButtonToolTip = function (__s19param0) {
    this.subLayerDisp.btn_free_attack.toolTipText = __s19param0 == this.subLayerDisp.btn_free_attack ? "Bookmarks_addBookmark_alliance_freeTarget_tooltip" : "Bookmarks_addBookmark_alliance_markFreeTarget_tooltip";
    this.subLayerDisp.btn_team_attack.toolTipText = __s19param0 == this.subLayerDisp.btn_team_attack ? "Bookmarks_addBookmark_alliance_plannedTarget_tooltip" : "Bookmarks_addBookmark_alliance_markPlannedTarget_tooltip";
    this.subLayerDisp.btn_support.toolTipText = __s19param0 == this.subLayerDisp.btn_support ? "Bookmarks_addBookmark_alliance_supportTarget_tooltip" : "Bookmarks_addBookmark_alliance_markSupportTarget_tooltip";
  };
  CreateAllianceBookmarkSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_bookmarks_alliance_addBookmark"));
  };
  return CreateAllianceBookmarkSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CreateAllianceBookmarkSublayer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_TeamAttackConfiguration = require("gge-module:export_TeamAttackConfiguration");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
