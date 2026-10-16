Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAchievementPopupDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.CastleAchievementPopup_G()) || this).itxt_level = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_name = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_points = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_unlock = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.mc_addition.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_achievement_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_achievement_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementPopupDialog, __s1param0);
  CastleAchievementPopupDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    var __s5local0 = __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementByID(this.dialogProperties.achievementID);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon_placeholder);
    this.dialogDisp.mc_icon_placeholder.addChild(__s5local0.displayDisp);
    this.itxt_level.textContentVO.textId = "building_level";
    this.itxt_level.textContentVO.textReplacements = [__s5local0.achievementSeriesNumber];
    this.itxt_name.textContentVO.textId = __s5local0.achievementSerieVO.nameString;
    this.itxt_points.textContentVO.textId = "points";
    this.itxt_points.textContentVO.textReplacements = [__s5local0.achievementPoints];
    if (__s5local0.hasYellowBar) {
      this.itxt_achievement_value.textContentVO.stringValue = String(__s5local0.totalMaxProgress);
    } else {
      this.itxt_achievement_value.textContentVO.stringValue = "-";
    }
    if (__s5local0.hasDifficultyUnlock) {
      this.dialogDisp.mc_addition.visible = true;
      this.itxt_unlock.textContentVO.textId = "achievementSingleStep_" + __s5local0.achievementID;
    } else {
      this.dialogDisp.mc_addition.visible = false;
    }
  };
  Object.defineProperty(CastleAchievementPopupDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementPopupDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementPopupDialog.__initialize_static_members = function () {
    CastleAchievementPopupDialog.NAME = "CastleAchievementPopupDialog";
  };
  return CastleAchievementPopupDialog;
}(require("gge-module:export_CastleIngameMessagePopup").CastleIngameMessagePopup);
exports.CastleAchievementPopupDialog = __s0local0;
__s0local0.__initialize_static_members();
