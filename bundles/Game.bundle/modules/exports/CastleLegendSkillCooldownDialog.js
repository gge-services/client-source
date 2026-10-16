Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCooldownComponent = require("gge-module:export_CastleCooldownComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleLegendSkillCooldownDialog() {
    var __s3local0 = this;
    __s3local0._elapsedTime = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleLegendSkillCooldownDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillCooldownDialog, __s1param0);
  CastleLegendSkillCooldownDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_skip]);
  };
  CastleLegendSkillCooldownDialog.prototype.addEventListenerOnShow = function () {
    this.dialogDisp.btn_skip.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.cooldown_component.addEventListenerOnShow();
  };
  CastleLegendSkillCooldownDialog.prototype.removeEventListenerOnHide = function () {
    this.dialogDisp.btn_skip.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.cooldown_component.removeEventListenerOnHide();
  };
  CastleLegendSkillCooldownDialog.prototype.onMouseOverSkipButton = function (__s11param0) {
    this.dialogDisp.btn_skip.toolTipText = {
      t: "dungeonCooldown_skip_tooltip",
      p: [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_26a421b704832cff.LegendSkillConst.resetSkipCostC2(this.legendSkillData.getSpentPoints(), this.legendSkillData.resetsCounter), false)]
    };
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_skip, true);
  };
  CastleLegendSkillCooldownDialog.prototype.showLoaded = function (__s13param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.text_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_legendTemple_skip_text"));
    this._elapsedTime = (this.legendSkillData.newResetTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    var __s13local0 = (this.legendSkillData.newResetTimeStamp - this.legendSkillData.lastResetTimeStamp) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.cooldown_component = new __dep_export_CastleCooldownComponent.CastleCooldownComponent(this.dialogDisp.cooldown_component, this.bindFunction(this.onTimeUp), this._elapsedTime, __s13local0, "dialog_legendTemple_skip");
    this.updateTime();
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_skip, true);
    __s1param0.prototype.showLoaded.call(this, __s13param0);
  };
  CastleLegendSkillCooldownDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_skip:
          this.skipWithRubies();
      }
    }
  };
  CastleLegendSkillCooldownDialog.prototype.updateTime = function () {
    this.cooldown_component.updateTime(this._elapsedTime);
  };
  CastleLegendSkillCooldownDialog.prototype.onTimeUp = function () {
    this.hide();
  };
  CastleLegendSkillCooldownDialog.prototype.skipWithRubies = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_skip, false);
    if (this.dialogProperties.confirmSkipCallback) {
      this.dialogProperties.confirmSkipCallback();
    }
    this.hide();
  };
  Object.defineProperty(CastleLegendSkillCooldownDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillCooldownDialog.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillCooldownDialog.__initialize_static_members = function () {
    CastleLegendSkillCooldownDialog.NAME = "LegendSkillCooldownEx";
  };
  return CastleLegendSkillCooldownDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleLegendSkillCooldownDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
