Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePremiumAboReceivedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePremiumAboReceivedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumAboReceivedDialog, __s1param0);
  CastlePremiumAboReceivedDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.dialogProperties.messageVO.subject));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_message_abo_copy")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.updateResourceSection();
  };
  CastlePremiumAboReceivedDialog.prototype.updateResourceSection = function () {
    var __s7local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_RESOURCE_LIST, new __s0local0(20, 20));
    __s7local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.icon_ressource).addIconMc(this.dialogDisp.icon_ressource).addTextfield(this.dialogDisp.txt_value), this.dialogProperties.messageVO.goods.getItemByIndexSave(0), __s7local0).destroy();
  };
  CastlePremiumAboReceivedDialog.prototype.onClick = function (__s9param0) {
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePremiumAboReceivedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumAboReceivedDialog.__initialize_static_members = function () {
    CastlePremiumAboReceivedDialog.NAME = "CastlePremiumAccountMessagePopupEx";
  };
  return CastlePremiumAboReceivedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePremiumAboReceivedDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
