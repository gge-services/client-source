Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleArtifactFoundTreasureDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleArtifactFoundTreasureDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactFoundTreasureDialog, __s1param0);
  CastleArtifactFoundTreasureDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_colon", [__dep_exact_92d05af59ee2ff30.Localize.text("reward")]));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    var __s5local0 = new __s0local0(35, 55);
    this.centeredRewardComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, __s5local0);
    this.artifact = new __dep_export_ArtifactComponent.ArtifactComponent(this.dialogDisp.mc_artifact);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleArtifactFoundTreasureDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.itxt_title.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_complete_title";
    this.itxt_copy.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_complete_desc";
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.updateRewards();
    this.artifact.init(this.dialogProperties.eventVO, new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(120, 160));
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.eventVO.skinID);
  };
  CastleArtifactFoundTreasureDialog.prototype.updateRewards = function () {
    var __s9local0 = this.dialogProperties.eventVO.artifactReward;
    this.centeredRewardComponent.showRewards(__s9local0);
  };
  CastleArtifactFoundTreasureDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleArtifactFoundTreasureDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
    this.artifact.onHide();
  };
  Object.defineProperty(CastleArtifactFoundTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactFoundTreasureDialog.__initialize_static_members = function () {
    CastleArtifactFoundTreasureDialog.NAME = "CastleArtifactFinish";
  };
  return CastleArtifactFoundTreasureDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleArtifactFoundTreasureDialog = __s0local1;
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_ArtifactComponent = require("gge-module:export_ArtifactComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
