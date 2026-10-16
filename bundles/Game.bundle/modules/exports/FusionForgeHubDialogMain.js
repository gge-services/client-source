Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialogMain(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._forgeDialogOpenedFunc = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogMain, __s1param0);
  FusionForgeHubDialogMain.prototype.init = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_fusionHub_fusionForges_title"))).autoFitToBounds = true;
    this.dialogDisp.mc_list.mc_slider.visible = false;
    this._decoItem = new __dep_export_FusionForgeHubDialogMainItem.FusionForgeHubDialogMainItem(this.decoItemMc, __dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __dep_export_DecorationForgeMainDialog.DecorationForgeMainDialog, this.bindFunction(this._forgeDialogOpenedFunc));
  };
  FusionForgeHubDialogMain.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._decoItem.onShow();
  };
  FusionForgeHubDialogMain.prototype.hide = function () {
    this._decoItem.onHide();
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(FusionForgeHubDialogMain.prototype, "decoItemMc", {
    get: function () {
      return this.dialogDisp.mc_list.mc_item0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMain.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeHubDialogMain;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.FusionForgeHubDialogMain = __s0local0;
var __dep_export_DecorationForgeMainDialog = require("gge-module:export_DecorationForgeMainDialog");
var __dep_export_FusionForgeHubDialogMainItem = require("gge-module:export_FusionForgeHubDialogMainItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
