Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ToggleSwitchButton = require("gge-module:export_ToggleSwitchButton");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogStartAttackCheck = require("gge-module:export_AttackDialogStartAttackCheck");
var __s0local0 = function (__s1param0) {
  function AttackDialogAdvisorAttackComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._sendBattleLogToggle = new __dep_export_ToggleSwitchButton.ToggleSwitchButton(__s3param0.btn_battlelog_toggle);
    __s3local0._sendBattleLogToggle.setValue(true);
    __s3local0._amountPicker = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
    __s3local0._amountPicker.init(__s3param0.mc_selection.mc_slider, __s3param0.mc_selection.mc_picker);
    __s3local0._amountPicker.minAmount = AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT;
    __s3local0._amountPicker.setNumberOfItems(AttackDialogAdvisorAttackComponent.MAX_ATTACK_AMOUNT);
    __s3local0._amountPicker.setSelectedAmount(AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT);
    __s3local0._amountPicker.enableTracking(false);
    __s3local0._amountPicker.setLooping(false);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_attackAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("attack_amount"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("info_attackAdvisor"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_battelLog, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("info_battleMessage"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.btn_advisorAttack.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_attackAdvisor")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_advisorAttack], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogAdvisorAttackComponent, __s1param0);
  AttackDialogAdvisorAttackComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._sendBattleLogToggle.onShow();
    this._amountPicker.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onAmountPickerChange));
    this.onAmountPickerChange(null);
    this.disp.btn_advisorAttack.mc_icon.gotoAndStop(__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetArea.areaType));
  };
  AttackDialogAdvisorAttackComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._sendBattleLogToggle) {
      this._sendBattleLogToggle.onHide();
    }
    if (this._amountPicker) {
      this._amountPicker.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onAmountPickerChange));
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._amountPicker) {
      this._amountPicker.setSelectedAmount(2);
    }
    if (this._sendBattleLogToggle) {
      this._sendBattleLogToggle.setValue(true);
      this._sendBattleLogToggle.destroy();
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.disp.btn_advisorAttack:
        __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.setAdvisor(__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetArea.areaType), this.getAttackCount(), this.getSendBattleLog());
        __dep_export_AttackDialogStartAttackCheck.AttackDialogStartAttackCheck.onAttack();
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.onAmountPickerChange = function (__s18param0) {
    this.disp.mc_selection.mc_slider.mc_line.width = this.disp.mc_selection.mc_slider.btn_slider.x - this.disp.mc_selection.mc_slider.mc_line.x;
    if (this._previousValue <= AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD && this._amountPicker.getSelectedAmount() > AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD) {
      this._sendBattleLogToggle.setValue(false);
    } else if (this._previousValue > AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD && this._amountPicker.getSelectedAmount() <= AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD) {
      this._sendBattleLogToggle.setValue(true);
    }
    this._previousValue = this._amountPicker.getSelectedAmount();
  };
  AttackDialogAdvisorAttackComponent.prototype.getAttackCount = function () {
    return this._amountPicker.getSelectedAmount();
  };
  AttackDialogAdvisorAttackComponent.prototype.getSendBattleLog = function () {
    return this._sendBattleLogToggle.value;
  };
  AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT = 2;
  AttackDialogAdvisorAttackComponent.MAX_ATTACK_AMOUNT = 9999;
  AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD = 25;
  return AttackDialogAdvisorAttackComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AttackDialogAdvisorAttackComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
