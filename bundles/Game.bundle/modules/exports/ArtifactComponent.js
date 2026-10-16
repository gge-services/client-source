Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function ArtifactComponent(__s3param0) {
    this.disp = __s3param0;
    this.disp.mouseChildren = false;
  }
  ArtifactComponent.prototype.init = function (__s5param0, __s5param1 = null) {
    this.eventVO = __s5param0;
    if (__s5param0.hasClickableArtifact()) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp);
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp);
    var __s5local0 = __s5param0.artifactClassName + "_complete_External";
    var __s5local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName("LoadingAnimation");
    var __s5local2 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5param0.artifactClassName);
    this.artifact = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __s5local2, null, 0, false, __s5local1);
    if (__s5param1) {
      __s5param1.clipSizeChanged.add(this.bindFunction(this.onClipSizeChanged));
      this.artifact.clipSizeComponent = __s5param1;
    }
    this.disp.addChild(this.artifact.asDisplayObject());
    if (this.artifact.isLoaded) {
      this.onArtifactLoaded(this.artifact);
    } else {
      this.artifact.clipLoaded.addOnce(this.bindFunction(this.onArtifactLoaded));
    }
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  ArtifactComponent.prototype.onClick = function (__s11param0) {
    if (this.eventVO.hasClickableArtifact()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleArtifactBigDialog.CastleArtifactBigDialog, new __dep_export_CastleArtifactEventDialogProperties.CastleArtifactEventDialogProperties(this.eventVO), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_HIGH, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE);
    }
  };
  ArtifactComponent.prototype.onClipSizeChanged = function (__s14param0) {
    var __s14local0 = __s14param0.asDisplayObject();
    __s14local0.x = __s14param0.clipSizeComponent.offsetX;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.eventVO, "RenegadeEventVO")) {
      __s14local0.y = -__s14local0.height;
    } else {
      __s14local0.y = 0;
    }
  };
  ArtifactComponent.prototype.onArtifactLoaded = function (__s18param0) {
    var __s18local0 = __s18param0.currentshownDisplayObject;
    for (var __s18local1 = 0; __s18local1 < this.eventVO.artifactParts; __s18local1++) {
      __s18local0["p" + __s18local1].visible = __s18local1 >= this.eventVO.artifactPartsFound;
    }
  };
  ArtifactComponent.prototype.onHide = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  return ArtifactComponent;
}();
exports.ArtifactComponent = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleArtifactBigDialog = require("gge-module:export_CastleArtifactBigDialog");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleArtifactEventDialogProperties = require("gge-module:export_CastleArtifactEventDialogProperties");
