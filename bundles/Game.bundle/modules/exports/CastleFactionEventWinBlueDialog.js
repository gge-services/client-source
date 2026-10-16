Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleFactionEventWinBlueDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionEventWinBlueDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventWinBlueDialog, __s1param0);
  CastleFactionEventWinBlueDialog.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    var __s5local0 = this.dialogProperties.rewardList.length > 0;
    if (this.dialogProperties.hasWon) {
      this.setTitleText("dialog_factionEventEnd_win_blue_title");
      this.setCopyText(__s5local0 ? "dialog_factionEventEnd_win_blue_copy_1" : "dialog_factionEventEnd_win_NoPoints_blue_copy_1");
    } else {
      this.setTitleText("dialog_factionEventEnd_lostBlue_title");
      this.setCopyText(__s5local0 ? "dialog_factionEventEnd_lost_blue_copy" : "dialog_factionEventEnd_lost_NoPoints_blue_copy_1");
    }
  };
  CastleFactionEventWinBlueDialog.__initialize_static_members = function () {
    CastleFactionEventWinBlueDialog.NAME = "CastleFactionEventWinBlue";
  };
  return CastleFactionEventWinBlueDialog;
}(require("gge-module:export_CastleFactionEventWinBasicDialog").CastleFactionEventWinBasicDialog);
exports.CastleFactionEventWinBlueDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
