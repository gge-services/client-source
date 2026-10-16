Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAchievementLevelUpDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.CastleAchievementLevelUp()) || this).textFieldManager.registerTextField(__s3local0.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_achv_levelUp_copy"));
    __s3local0.itxt_c2 = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_c2, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.dialogDisp.btn_ok.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementLevelUpDialog, __s1param0);
  CastleAchievementLevelUpDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this.itxt_c2.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementByID(this.dialogProperties.achievementID).rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
  };
  CastleAchievementLevelUpDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__s7param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  CastleAchievementLevelUpDialog.prototype.onMouseOver = function (__s10param0) {
    __s1param0.prototype.onMouseOver.call(this, __s10param0);
    if (__s10param0.target == this.dialogDisp.btn_ok) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleAchievementLevelUpDialog.prototype.onMouseOut = function (__s13param0) {
    __s1param0.prototype.onMouseOut.call(this, __s13param0);
    if (__s13param0.target == this.dialogDisp.btn_ok) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  Object.defineProperty(CastleAchievementLevelUpDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementLevelUpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementLevelUpDialog.__initialize_static_members = function () {
    CastleAchievementLevelUpDialog.NAME = "CastleAchievementLevelUpDialog";
  };
  return CastleAchievementLevelUpDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleAchievementLevelUpDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
