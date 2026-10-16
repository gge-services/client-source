Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SkinnableDialog = require("gge-module:export_SkinnableDialog");
var __s0local0 = function (__s1param0) {
  function CastleArtifactBigDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleArtifactBigDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactBigDialog, __s1param0);
  CastleArtifactBigDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close]);
    for (var __s5local0 = 0; __s5local0 < this.dialogProperties.eventVO.artifactParts; __s5local0++) {
      this.dialogDisp.artifact["p" + __s5local0].visible = __s5local0 >= this.dialogProperties.eventVO.artifactPartsFound;
    }
  };
  Object.defineProperty(CastleArtifactBigDialog.prototype, "assetClassName", {
    get: function () {
      return this.dialogProperties.eventVO.artifactClassName + "_Big";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_SkinnableDialog.SkinnableDialog.prototype, "assetClassName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactBigDialog.prototype, "assetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.eventVO.artifactClassName);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_SkinnableDialog.SkinnableDialog.prototype, "assetFileURL").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBigDialog.prototype.onClick = function (__s17param0) {
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleArtifactBigDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBigDialog.__initialize_static_members = function () {
    CastleArtifactBigDialog.NAME = "ArtifactBig";
  };
  return CastleArtifactBigDialog;
}(__dep_export_SkinnableDialog.SkinnableDialog);
exports.CastleArtifactBigDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
