Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleSeasonEventFailDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSeasonEventFailDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonEventFailDialog, __s1param0);
  CastleSeasonEventFailDialog.prototype.applyProperties = function () {
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_season_loose_titel")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_deco);
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.dialogProperties.assetName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.assetName), null, 0, false).asDisplayObject();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.copyTextID));
    this.dialogDisp.mc_deco.addChild(__s5local0);
  };
  CastleSeasonEventFailDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleSeasonEventFailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonEventFailDialog.__initialize_static_members = function () {
    CastleSeasonEventFailDialog.NAME = "CastleSeasonEventFailEx";
  };
  return CastleSeasonEventFailDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSeasonEventFailDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
