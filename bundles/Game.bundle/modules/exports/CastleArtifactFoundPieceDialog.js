Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleArtifactFoundPieceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleArtifactFoundPieceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactFoundPieceDialog, __s1param0);
  CastleArtifactFoundPieceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleArtifactFoundPieceDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.itxt_title.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_found_title";
    this.itxt_copy.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_found_desc";
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.initPiece();
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.eventVO.skinID);
  };
  CastleArtifactFoundPieceDialog.prototype.initPiece = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_artifactPiece);
    var __s9local0 = this.dialogProperties.eventVO.artifactClassName + "_Piece_External";
    var __s9local1 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("LoadingAnimation");
    this.artifactPiece = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local0, this.artifctPieceAssetFileURL, null, 0, false, __s9local1);
    var __s9local2 = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(100, 100);
    __s9local2.clipSizeChanged.add(CastleArtifactFoundPieceDialog.onClipSizeChanged);
    this.artifactPiece.clipSizeComponent = __s9local2;
    this.dialogDisp.mc_artifactPiece.addChild(this.artifactPiece.asDisplayObject());
  };
  CastleArtifactFoundPieceDialog.onClipSizeChanged = function (__s11param0) {
    var __s11local0 = __s11param0.asDisplayObject();
    __s11local0.x = __s11param0.clipSizeComponent.offsetX;
    __s11local0.y = __s11param0.clipSizeComponent.offsetY;
  };
  CastleArtifactFoundPieceDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleArtifactFoundPieceDialog.prototype, "artifctPieceAssetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.eventVO.artifactClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactFoundPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactFoundPieceDialog.__initialize_static_members = function () {
    CastleArtifactFoundPieceDialog.NAME = "CastleArtifactFoundPart";
  };
  return CastleArtifactFoundPieceDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleArtifactFoundPieceDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
