Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenDialogWithAdditionalExternalAssetsCommand() {
    var __s3local0 = this;
    __s3local0.loadingQueue = 0;
    __s3local0.allItemsLoading = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenDialogWithAdditionalExternalAssetsCommand, __s1param0);
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.openDialog = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.addAssets = function (__s7param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.execute = function (__s9param0 = null) {
    this.allItemsLoading = false;
    this.showPreloaderDialog();
    this.addAssets(__s9param0);
    this.allItemsLoading = true;
    this.checkProgress();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.loadAsset = function (__s11param0, __s11param1) {
    this.loadingQueue++;
    var __s11local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s11param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11param1), null, 0, false);
    if (__s11local0.isLoaded) {
      this.loadingComplete(__s11local0);
    } else {
      __s11local0.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.loadingComplete = function (__s15param0) {
    this.loadingQueue--;
    this.checkProgress();
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.checkProgress = function () {
    if (this.allItemsLoading && this.loadingQueue == 0) {
      this.hidePreloaderDialog();
      this.openDialog();
    }
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.showPreloaderDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  OpenDialogWithAdditionalExternalAssetsCommand.prototype.hidePreloaderDialog = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  return OpenDialogWithAdditionalExternalAssetsCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.OpenDialogWithAdditionalExternalAssetsCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
