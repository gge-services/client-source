Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleFacebookTestDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFacebookTestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFacebookTestDialog, __s1param0);
  CastleFacebookTestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_fbGetData, this.dialogDisp.btn_exit]);
  };
  CastleFacebookTestDialog.prototype.getUserData = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.FACEBOOK_DATA_UPDATED, this.bindFunction(this.onFacebookUpdated));
    __dep_export_CastleFacebookModule.CastleFacebookModule.login();
  };
  CastleFacebookTestDialog.prototype.onFacebookUpdated = function (__s9param0) {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.FACEBOOK_DATA_UPDATED, this.bindFunction(this.onFacebookUpdated));
  };
  CastleFacebookTestDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_exit:
          this.hide();
          break;
        case this.dialogDisp.btn_fbGetData:
          this.getUserData();
      }
    }
  };
  CastleFacebookTestDialog.__initialize_static_members = function () {
    CastleFacebookTestDialog.NAME = "CastleFacebookTestExternal";
  };
  return CastleFacebookTestDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFacebookTestDialog = __s0local0;
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
