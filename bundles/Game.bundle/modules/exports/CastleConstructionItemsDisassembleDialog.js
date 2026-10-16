Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SDisassembleConstructionItemVO = require("gge-module:export_C2SDisassembleConstructionItemVO");
var __dep_export_C2SGetContructionItemsInventoryVO = require("gge-module:export_C2SGetContructionItemsInventoryVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SelectInputFieldComponent = require("gge-module:export_SelectInputFieldComponent");
var __dep_export_CastleConstructionItemsDisassembledDialog = require("gge-module:export_CastleConstructionItemsDisassembledDialog");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsDisassembleDialog() {
    return __s1param0.call(this, CastleConstructionItemsDisassembleDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsDisassembleDialog, __s1param0);
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "buttons", {
    get: function () {
      return [];
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleConstructionItemsDisassembledDialog.CastleConstructionItemsDisassembledDialog.prototype, "buttons").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembleDialog.prototype.additionalInit = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.text_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ci_disassemble_header")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.activateButtons(true);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_plus1, this.dialogDisp.btn_minus1, this.dialogDisp.btn_max1], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  CastleConstructionItemsDisassembleDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.renderConstructionItem(this.dialogProperties.constructionItemVO, this.dialogDisp.mc_item, false, this.dialogDisp.mc_timer);
    this.inputTextField = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_amount, this.bindFunction(this.onInput), "1");
    this.inputTextField.searchField.restrict = "0-9";
    this.setSelectedAmount(1);
  };
  CastleConstructionItemsDisassembleDialog.prototype.onInput = function () {
    var __s13local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(parseInt(this.dialogDisp.mc_amount.txt_value.text), 1, this.maxAmount);
    this.setSelectedAmount(__s13local0);
  };
  CastleConstructionItemsDisassembleDialog.prototype.setSelectedAmount = function (__s15param0) {
    this.inputTextField.updateText(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s15param0, 1, this.maxAmount).toString());
  };
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.dialogDisp.mc_amount.txt_value.text);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "maxAmount", {
    get: function () {
      var __s19local0 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVOById(this.dialogProperties.constructionItemVO.id);
      if (__s19local0) {
        return __s19local0.amount;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembleDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.dialogDisp.btn_minus1:
        this.setSelectedAmount(this.selectedAmount - 1);
        break;
      case this.dialogDisp.btn_plus1:
        this.setSelectedAmount(this.selectedAmount + 1);
        break;
      case this.dialogDisp.btn_max1:
        this.setSelectedAmount(this.maxAmount);
    }
  };
  CastleConstructionItemsDisassembleDialog.prototype.getDescriptionTextID = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      if (this.isBoosterDisassemble()) {
        return "dialog_ci_disassemble_tempCI_booster_desc";
      } else {
        return "dialog_ci_disassemble_tempCI_currency_desc";
      }
    } else {
      return "dialog_ci_disassemble_multiple_desc";
    }
  };
  CastleConstructionItemsDisassembleDialog.prototype.onClickAccept = function () {
    this.activateButtons(false);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.DCI_ARRIVED, this.bindFunction(this.onDCIArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDisassembleConstructionItemVO.C2SDisassembleConstructionItemVO(this.dialogProperties.constructionItemVO.id, this.dialogProperties.lostAndFoundID, this.selectedAmount));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsDisassembleDialog.prototype.activateButtons = function (__s34param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_accept, __s34param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_cancel, __s34param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_close, __s34param0);
  };
  CastleConstructionItemsDisassembleDialog.prototype.onDCIArrived = function (__s36param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.DCI_ARRIVED, this.bindFunction(this.onDCIArrived));
    var __s36local0 = __dep_exact_f855840627e6e145.int(__s36param0.params[0]);
    this.activateButtons(true);
    this.hide();
    if (__s36local0 == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.dialogProperties.additionalParams = JSON.parse(__s36param0.params[1][1]);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsDisassembledDialog.CastleConstructionItemsDisassembledDialog, this.dialogProperties);
    }
  };
  CastleConstructionItemsDisassembleDialog.NAME = "CastleConstructionItemsDisassemble_Apr25";
  return CastleConstructionItemsDisassembleDialog;
}(__dep_export_CastleConstructionItemsDisassembledDialog.CastleConstructionItemsDisassembledDialog);
exports.CastleConstructionItemsDisassembleDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
