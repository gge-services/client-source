Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastlePOFurysBladeMessageDialog() {
    return __s1param0.call(this, CastlePOFurysBladeMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePOFurysBladeMessageDialog, __s1param0);
  CastlePOFurysBladeMessageDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top1_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top1_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top1_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top2_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top2_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top2_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top2_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top3_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top3_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top3_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_top3_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_date, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage1_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_players, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage1_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage1_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage2_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_date, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage2_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_players, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage2_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage2_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage3_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_date, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage3_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_players, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage3_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_furysBladeFlow_stage3_desc"));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePOFurysBladeMessageDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
  };
  CastlePOFurysBladeMessageDialog.prototype.onOfferRemoved = function (__s9param0) {
    if (__s9param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePOFurysBladeMessageDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastlePOFurysBladeMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePOFurysBladeMessageDialog.NAME = "CastlePOFurysBladeMessage";
  CastlePOFurysBladeMessageDialog.OFFER_NAME = "CastlePOFurysBladeMessageDialog";
  return CastlePOFurysBladeMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePOFurysBladeMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
