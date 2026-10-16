Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function TempServerWelcomeDialogListItem(__s3param0) {
    var __s3local0 = this;
    __s3local0.MIN_HEIGHT = 100;
    __s3local0.TOP_BOTTOM_MARGIN = 9;
    __s3local0._id = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this)._id = __s3param0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerWelcomeDialogListItem, __s1param0);
  TempServerWelcomeDialogListItem.prototype.init = function () {
    this._clip = new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(TempServerWelcomeDialogListItem.ASSET_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(TempServerWelcomeDialogListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    this.update();
  };
  TempServerWelcomeDialogListItem.prototype.destroy = function () {
    this._clip = null;
    __s1param0.prototype.destroy.call(this);
  };
  TempServerWelcomeDialogListItem.prototype.update = function () {
    var __s9local0 = this.getItemMc();
    var __s9local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_welcomePopup_content_" + this._id));
    __s9local1.height = __s9local1.textHeight + 3;
    __s9local0.mc_bg.scaleY = Math.max(this.MIN_HEIGHT, __s9local1.textHeight + this.TOP_BOTTOM_MARGIN * 2) / this.MIN_HEIGHT;
    this.addImage();
  };
  TempServerWelcomeDialogListItem.prototype.addImage = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.getItemMc().mc_icon);
    this.getItemMc().mc_icon.addChild(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal("TempServerWelcomeImage_" + this._id, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(TempServerWelcomeDialogListItem.ASSET_FILE_NAME)));
  };
  TempServerWelcomeDialogListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  TempServerWelcomeDialogListItem.ASSET_NAME = "CastleTempServerWelcomeListItem";
  TempServerWelcomeDialogListItem.ASSET_FILE_NAME = "CastleTempServerWelcome";
  return TempServerWelcomeDialogListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.TempServerWelcomeDialogListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
