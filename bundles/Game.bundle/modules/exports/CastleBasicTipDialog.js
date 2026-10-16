Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleBasicTipDialog(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 || CastleBasicTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicTipDialog, __s1param0);
  CastleBasicTipDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.tipPicClassName, this.assetFileURL_0, null, 0, false);
    this.disp.mc_holder.addChild(__s5local0.asDisplayObject());
  };
  Object.defineProperty(CastleBasicTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicTipDialog.prototype, "assetFileURL_0", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.tipPicClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicTipDialog.__initialize_static_members = function () {
    CastleBasicTipDialog.NAME = "CastleBasicTipDialog";
  };
  return CastleBasicTipDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBasicTipDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
