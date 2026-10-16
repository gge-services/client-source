Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local0 = function () {
  function MicroServiceRequestPreloader() {}
  MicroServiceRequestPreloader.showPreloader = function (__s5param0, __s5param1 = -1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, __s5param0, false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    if (__s5param1 != -1) {
      setTimeout(this.bindFunction(this.hidePreloader), __s5param1);
    }
  };
  MicroServiceRequestPreloader.hidePreloader = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  return MicroServiceRequestPreloader;
}();
exports.MicroServiceRequestPreloader = __s0local0;
