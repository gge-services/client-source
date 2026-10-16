Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleConfirmCostsDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 ?? CastleConfirmCostsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConfirmCostsDialog, __s1param0);
  CastleConfirmCostsDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    if (this.yesNoWithCostsProperties.storage) {
      this.resourceListComponent.otherResourceStorageForCosts = this.yesNoWithCostsProperties.storage;
    }
    this.resourceListComponent.displayAsCosts = true;
    this.resourceListComponent.updateComponent(this.yesNoWithCostsProperties.costs);
  };
  CastleConfirmCostsDialog.prototype.applyPropertiesLoaded = function (__s8param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    this.resourceListComponent = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_costs, Library.CastleInterfaceElements.ResourceListCompnent_Item, 3, 2, this.dialogDisp.mc_costs);
    var __s8local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(this.yesNoWithCostsProperties.title));
    __s8local0.autoFitToBounds = true;
    __s8local0.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(this.yesNoWithCostsProperties.copy)).autoFitToBounds = true;
    this.dialogDisp.btn_yes.label = this.yesNoWithCostsProperties.buttonLabel_yes;
    this.dialogDisp.btn_no.label = this.yesNoWithCostsProperties.buttonLabel_no;
  };
  CastleConfirmCostsDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.yesNoWithCostsProperties.functionYes != null) {
          this.yesNoWithCostsProperties.functionYes(null);
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.yesNoWithCostsProperties.functionClose != null) {
          this.yesNoWithCostsProperties.functionClose(null);
        }
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.yesNoWithCostsProperties.functionNo != null) {
          this.yesNoWithCostsProperties.functionNo(null);
        }
    }
  };
  Object.defineProperty(CastleConfirmCostsDialog.prototype, "yesNoWithCostsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConfirmCostsDialog.__initialize_static_members = function () {
    CastleConfirmCostsDialog.NAME = "CastleStandardYesNoWithCostsEx";
  };
  return CastleConfirmCostsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleConfirmCostsDialog = __s0local0;
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
