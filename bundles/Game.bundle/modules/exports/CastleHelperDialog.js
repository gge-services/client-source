Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __s0local0 = function (__s1param0) {
  function CastleHelperDialog() {
    var __s3local0 = this;
    __s3local0.fixedDialogSize = 0;
    __s3local0.sliderButtonSize = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleHelperDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHelperDialog, __s1param0);
  CastleHelperDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.headerMC = this.dialogDisp.mc_header;
    this.helpTextBgMC = this.dialogDisp.mc_helpTextBG;
    this.helpBoxMC = this.dialogDisp.mc_helpBox;
    this.sliderLine = this.dialogDisp.mc_sliderLine;
    this.fixedDialogSize = this.headerMC.height + this.helpBoxMC.height;
    this.sliderButtonSize = this.dialogDisp.btn_minus.height;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.headerMC.btn_close, this.dialogDisp.btn_minus, this.dialogDisp.btn_plus], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_slider, 1, __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.helpBoxMC.btn_help]);
    this.itxt_help = this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO());
    this.itxt_help.mouseEnabled = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_helpBox.txt_helpBox, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_helper_ingameHelpLink")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.sliderBG]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0));
    this.helpTextBgMC.mouseChildren = false;
  };
  CastleHelperDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_exact_92d05af59ee2ff30.Localize.text("help");
    this.textFieldManager.registerTextField(this.headerMC.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s7local0.toUpperCase()));
    this.itxt_help.textContentVO.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.copy));
    this.itxt_help = this.textFieldManager.registerTextField(this.dialogDisp.txt_help, this.itxt_help.textContentVO);
    this.setHelpTextSize();
    this.itxt_help.restoreTextContent();
    this.itxt_help.scrollV = this.itxt_help.maxScrollV;
    var __s7local1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 2);
    this.scrollComponent.strategy.visibleValue = __dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? this.itxt_help.height : this.itxt_help.numLines;
    this.scrollComponent.init(1, Math.ceil(this.itxt_help.maxScrollV), __s7local1, __s7local1);
    this.scrollComponent.setVisibility(__dep_exact_9e901e8e2483a22f.MathBase.round(this.itxt_help.maxScrollV, 4) > 1);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.itxt_help.scrollV = 1;
  };
  CastleHelperDialog.prototype.onScrollValueChange = function () {
    this.itxt_help.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.scrollComponent.currentValue, 1, this.itxt_help.maxScrollV);
  };
  CastleHelperDialog.prototype.setHelpTextSize = function () {
    var __s11local0 = CastleHelperDialog.MIN_BG_HEIGHT - this.fixedDialogSize;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      CastleHelperDialog.TOP_BOTTOM_OFFSET = 5;
    }
    var __s11local1 = this.dialogDisp.stage.stageHeight - CastleHelperDialog.TOP_BOTTOM_OFFSET * 2 - this.fixedDialogSize;
    var __s11local2 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.itxt_help.textHeight, __s11local0, __s11local1);
    var __s11local3 = this.itxt_help.textHeight / (this.itxt_help.numLines + Math.ceil(this.itxt_help.maxScrollV));
    __s11local2 = Math.floor(__s11local2 / __s11local3) * __s11local3;
    this.itxt_help.height = __s11local2;
    this.helpTextBgMC.height = __s11local2 + CastleHelperDialog.TEXT_PADDING * 2;
    this.dialogDisp.sliderBG.height = this.helpTextBgMC.height;
    this.sliderLine.height = this.helpTextBgMC.height - (this.sliderButtonSize + CastleHelperDialog.SLIDER_GAP_OFFSET) * 2;
    this.helpBoxMC.y = this.helpTextBgMC.y + this.helpTextBgMC.height;
    this.dialogDisp.btn_plus.y = this.helpBoxMC.y;
  };
  CastleHelperDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  CastleHelperDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.helpBoxMC.btn_help:
          if (!this.layoutManager.tutorialPanel.isVisible()) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleIngameHelpDialog.CastleIngameHelpDialog);
          }
          if (this.dialogProperties.functionOk) {
            this.dialogProperties.functionOk();
          }
      }
      if (__s16param0.target != this.scrollComponent.scrollVO.minusButton && __s16param0.target != this.scrollComponent.scrollVO.plusButton && __s16param0.target != this.scrollComponent.scrollVO.sliderLine && __s16param0.target != this.scrollComponent.scrollVO.sliderButton) {
        if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __s16param0.target == this.helpTextBgMC) {
          return;
        }
        this.hide();
      }
    }
  };
  CastleHelperDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s24local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width + 100) {
        __s24local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < (this.dispBounds.height + 100) * __s24local0) {
        __s24local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.right * __s24local0 + this.disp.stage.stageWidth - 100;
      this.disp.y = -this.dispBounds.top * __s24local0 + 100;
      this.disp.scaleX = this.disp.scaleY = __s24local0;
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        if (__dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
          this.disp.y -= 80;
        } else {
          this.disp.x += 100;
        }
      }
    }
  };
  Object.defineProperty(CastleHelperDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHelperDialog.__initialize_static_members = function () {
    CastleHelperDialog.NAME = "CastleHelperEx";
    CastleHelperDialog.MIN_BG_HEIGHT = 400;
    CastleHelperDialog.TOP_BOTTOM_OFFSET = 100;
    CastleHelperDialog.SLIDER_GAP_OFFSET = 2;
    CastleHelperDialog.TEXT_PADDING = 2;
  };
  return CastleHelperDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleHelperDialog = __s0local0;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CastleIngameHelpDialog = require("gge-module:export_CastleIngameHelpDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
