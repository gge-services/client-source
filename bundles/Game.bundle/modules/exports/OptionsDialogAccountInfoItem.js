Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function OptionsDialogAccountInfoItem(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param3 || new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_AccountDetailItem"))(), __s3param1) || this;
    __s3local0._onAction = __s3param2;
    __s3local0.actionBtnMC.visible = !!__s3local0._onAction;
    __s3local0.setActionButtonToolTipText("dialog_options_accountDetails_edit_tooltip");
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.actionBtnMC], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s3param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogAccountInfoItem, __s1param0);
  OptionsDialogAccountInfoItem.prototype.setActionButtonToolTipText = function (__s5param0) {
    this.actionBtnMC.toolTipText = __s5param0;
  };
  OptionsDialogAccountInfoItem.prototype.setText = function (__s7param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__s7param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  OptionsDialogAccountInfoItem.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this._headerMC.btn_action:
        if (this._onAction) {
          this._onAction();
        }
    }
  };
  OptionsDialogAccountInfoItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._onAction = null;
  };
  OptionsDialogAccountInfoItem.prototype.showActionButton = function (__s15param0, __s15param1 = 1, __s15param2 = null) {
    this.showButton(this.actionBtnMC, __s15param0, __s15param1, __s15param2);
  };
  Object.defineProperty(OptionsDialogAccountInfoItem.prototype, "actionBtnMC", {
    get: function () {
      return this._headerMC.btn_edit || this._headerMC.btn_action;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogAccountInfoItem.prototype.showButton = function (__s19param0, __s19param1, __s19param2 = 1, __s19param3 = null) {
    __s19param0.visible = __s19param1;
    if (__s19param0.icon) {
      __s19param0.icon.gotoAndStop(__s19param2);
    }
    if (__s19param3) {
      __s19param0.toolTipText = __s19param3;
    }
  };
  return OptionsDialogAccountInfoItem;
}(require("gge-module:export_AOptionsDialogCollapsibleItem").AOptionsDialogCollapsibleItem);
exports.OptionsDialogAccountInfoItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
