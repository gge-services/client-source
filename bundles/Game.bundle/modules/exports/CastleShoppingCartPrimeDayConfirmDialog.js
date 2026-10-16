Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDayConfirmDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleShoppingCartPrimeDayConfirmDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDayConfirmDialog, __s1param0);
  CastleShoppingCartPrimeDayConfirmDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_yes, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_no, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(this.dialogDisp.cbx_ok);
    this.cbx_dontShowAgain = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp.cbx_ok);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("eventBuilding_decoOffer")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_no.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shoppingCartPrimeDay_GoToShopButton"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_yes.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shoppingCartPrimeDay_SeeOfferButton"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shoppingCartPrimeDay_selectRewards"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shoppingCartPrimeDay_DontShowNotification")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
  };
  CastleShoppingCartPrimeDayConfirmDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.cbx_dontShowAgain.deselected();
  };
  CastleShoppingCartPrimeDayConfirmDialog.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_yes:
          if (this.dialogProperties.functionYes != null) {
            this.dialogProperties.functionYes(null);
          }
          this.hide();
          break;
        case this.dialogDisp.btn_no:
          if (this.dialogProperties.functionNo != null) {
            this.dialogProperties.functionNo(null);
          }
          this.hide();
          break;
        case this.dialogDisp.cbx_ok:
          this.cbx_dontShowAgain.toggleSelected();
          __dep_export_CastleModel.CastleModel.localData.saveShoppingCartWarning(!this.cbx_dontShowAgain.isSelected, this.endTimeStamp);
      }
    }
  };
  Object.defineProperty(CastleShoppingCartPrimeDayConfirmDialog.prototype, "endTimeStamp", {
    get: function () {
      return this.dialogProperties.params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayConfirmDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayConfirmDialog.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayConfirmDialog.NAME = "CastleShoppingCartPrimeDayConfirm2";
  };
  return CastleShoppingCartPrimeDayConfirmDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleShoppingCartPrimeDayConfirmDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
