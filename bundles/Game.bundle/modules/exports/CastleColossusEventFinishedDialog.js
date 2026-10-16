Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleColossusEventFinishedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleColossusEventFinishedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleColossusEventFinishedDialog, __s1param0);
  CastleColossusEventFinishedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.mc_combo.visible = false;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventColossusFinished_copytext", [0, 0], true));
  };
  CastleColossusEventFinishedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleColossusEventFinishedDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.dialogProperties.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    if (__s9local0.type != "CoinColossus") {
      this.itxt_copy.textContentVO.textId = "dialog_eventColossusFinished_copytext";
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_eventCoinColossusFinished_copy";
    }
    this.itxt_copy.textContentVO.textReplacements = [this.dialogProperties.points, this.dialogProperties.rank, this.dialogProperties.decoPoints];
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_colossus);
    __s9local0.customDecoPoints = __dep_exact_f855840627e6e145.int(this.dialogProperties.decoPoints);
    var __s9local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local0.getVisualClassName(), __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s9local0.getVisualClassName()), null, 0, false);
    __s9local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(100, 130);
    this.dialogDisp.mc_colossus.addChild(__s9local1.asDisplayObject());
  };
  CastleColossusEventFinishedDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventColossusFinished_titletext"));
  };
  CastleColossusEventFinishedDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target) && __s15param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  Object.defineProperty(CastleColossusEventFinishedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusEventFinishedDialog.__initialize_static_members = function () {
    CastleColossusEventFinishedDialog.NAME = "CastleColossusEventFinished";
  };
  return CastleColossusEventFinishedDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleColossusEventFinishedDialog = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
