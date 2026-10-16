Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleResourceCollectorEvent = require("gge-module:export_CastleResourceCollectorEvent");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleResourceCollectorComponent(__s3param0, __s3param1 = 1) {
    var __s3local0 = this;
    __s3local0._type = -1;
    __s3local0._maxValue = 0;
    __s3local0._notifyValueChange = false;
    __s3local0._stepSize = 1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._stepSize = __s3param1;
    var __s3local1 = __s3param0.mc_slider;
    __s3local0._sliderData = new __dep_export_BasicSliderVO.BasicSliderVO(__s3local1.sliderBar, __s3local1.btn_slider, 0, 0, __s3param0);
    __s3local0._selectionSlider = new __dep_export_ScrollComponent.ScrollComponent(__s3local0._sliderData, __dep_export_ScrollComponent.ScrollComponent.HORIZONTAL_SLIDER);
    __s3local0.initButtons();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceCollectorComponent, __s1param0);
  CastleResourceCollectorComponent.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.disp.mc_slider.btn_slider, this.donateComponent.btn_remove, this.donateComponent.btn_add, this.donateComponent.btn_max]);
  };
  CastleResourceCollectorComponent.prototype.initComponent = function (__s7param0, __s7param1, __s7param2, __s7param3 = null) {
    this._type = __s7param1;
    this.donateComponent.mc_icon.gotoAndStop(__s7param1);
    this.donateComponent.mc_icon.mouseChildren = false;
    this.donateComponent.mc_icon.toolTipText = this.toolTipText(__s7param1);
    this.init(__s7param0, __s7param2, __s7param3);
  };
  CastleResourceCollectorComponent.prototype.initComponentWithCollectable = function (__s9param0, __s9param1, __s9param2, __s9param3 = null, __s9param4 = null) {
    this.renderCollectable(__s9param1, __s9param4);
    this.init(__s9param0, __s9param2, __s9param3);
  };
  CastleResourceCollectorComponent.prototype.renderCollectable = function (__s11param0, __s11param1) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.donateComponent.mc_icon);
    var __s11local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.donateComponent.mc_icon).addIconMc(this.donateComponent.mc_icon);
    var __s11local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, __s11param1 || new __s0local1(60, 38));
    __s11local1.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s11local0, __s11param0, __s11local1);
  };
  CastleResourceCollectorComponent.prototype.init = function (__s13param0, __s13param1, __s13param2 = null) {
    this.donateComponent.txt_value.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this.itxt_value = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.donateComponent.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.itxt_value.autoFitToBounds = true;
    this.itxt_value.multiline = false;
    this.itxt_value.focusIn.add(this.bindFunction(this.onFocusInTextfield));
    this.itxt_value.click.add(this.bindFunction(this.onClickValue));
    this.itxt_value.focusOut.add(this.bindFunction(this.onFocusOutTextfield));
    this.itxt_value.keyDown.add(this.bindFunction(this.onKeyDownTextfield));
    this.itxt_value.selectable = true;
    this.itxt_value.restrict = "0-9";
    this._maxValue = __s13param0;
    this.selectionSlider.setMaxIndex(__s13param0);
    this._sliderData.maxValue = Math.floor(__s13param0 / this._stepSize);
    this.itxt_value.tabIndex = __s13param1;
    this._disabledToolTipText = __s13param2;
    this.donateComponent.btn_remove.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.donateComponent.btn_remove, this._maxValue > 0);
    this.donateComponent.btn_add.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.donateComponent.btn_add, this._maxValue > 0);
    if (this.donateComponent.btn_max) {
      this.donateComponent.btn_max.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.donateComponent.btn_max, this._maxValue > 0);
      this.donateComponent.btn_max.toolTipText = "max";
    }
    this._selectionSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onValueChanged));
    this.donateComponent.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.donateComponent.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.showToolTip));
    this.donateComponent.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.hideToolTip));
    this._selectionSlider.setSelectedIndex(0);
    this._selectionSlider.dispatchEvent(new __dep_export_SliderEvent.SliderEvent(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this._selectionSlider.selectedIndex));
  };
  CastleResourceCollectorComponent.prototype.resetWithValues = function (__s16param0, __s16param1, __s16param2, __s16param3 = null, __s16param4 = null) {
    if (this.itxt_value) {
      this.renderCollectable(__s16param1, __s16param4);
      this._maxValue = __s16param0;
      this._sliderData.maxValue = Math.floor(__s16param0 / this._stepSize);
      this.selectionSlider.setMaxIndex(__s16param0);
      this.itxt_value.tabIndex = __s16param2;
      this.setAmountText();
      this._disabledToolTipText = __s16param3;
      if (this.donateComponent.btn_max) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.donateComponent.btn_max, this._maxValue > 0);
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.donateComponent.btn_remove, this._maxValue > 0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.donateComponent.btn_add, this._maxValue > 0);
    }
  };
  CastleResourceCollectorComponent.prototype.toolTipText = function (__s20param0) {
    var __s20local0 = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    switch (__s20param0) {
      case CastleResourceCollectorComponent.WOOD:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.WOOD;
        break;
      case CastleResourceCollectorComponent.STONE:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.STONE;
        break;
      case CastleResourceCollectorComponent.FOOD:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.FOOD;
        break;
      case CastleResourceCollectorComponent.COAL:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.COAL;
        break;
      case CastleResourceCollectorComponent.OIL:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.OIL;
        break;
      case CastleResourceCollectorComponent.GLASS:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.GLASS;
        break;
      case CastleResourceCollectorComponent.IRON:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.IRON;
        break;
      case CastleResourceCollectorComponent.C1:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.C1;
        break;
      case CastleResourceCollectorComponent.C2:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.C2;
        break;
      case CastleResourceCollectorComponent.HONEY:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.HONEY;
        break;
      case CastleResourceCollectorComponent.MEAD:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.MEAD;
        break;
      case CastleResourceCollectorComponent.BEEF:
        __s20local0 = __dep_export_CollectableEnum.CollectableEnum.BEEF;
    }
    if (__s20local0 == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
      return "";
    } else {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__s20local0, 0, -1).getTooltipTextId();
    }
  };
  CastleResourceCollectorComponent.prototype.onClickValue = function (__s25param0) {
    this.itxt_value.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getSelectedAmount());
    this.itxt_value.setSelection(0, this.itxt_value.text.length);
    this.itxt_value.restrict = "0-9";
    this.itxt_value.maxChars = 10;
  };
  CastleResourceCollectorComponent.prototype.onKeyDownTextfield = function (__s27param0) {
    __s27param0.stopPropagation();
    if (__s27param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  CastleResourceCollectorComponent.prototype.onFocusInTextfield = function (__s30param0) {
    if (this.isEnabled) {
      this.itxt_value.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getSelectedAmount());
      this.itxt_value.setSelection(0, this.itxt_value.text.length);
      this.itxt_value.restrict = "0-9";
      this.itxt_value.maxChars = 10;
    }
  };
  CastleResourceCollectorComponent.prototype.onFocusOutTextfield = function (__s33param0) {
    if (__s33param0) {
      if (this.itxt_value.text == "") {
        this.itxt_value.textContentVO = new __dep_exact_92d05af59ee2ff30_2.NumberVO(0);
      }
      this.itxt_value.restrict = "0-9";
      this._selectionSlider.sliderDown = true;
      var __s33local0 = this.itxt_value.text.split("/");
      var __s33local1 = parseInt(__s33local0[0].replace(/\D/g, ""));
      this._selectionSlider.setSelectedIndex(Math.floor(__s33local1 / this._stepSize));
      this.setAmountText();
      this._selectionSlider.sliderDown = false;
    }
  };
  CastleResourceCollectorComponent.prototype.enableComponent = function (__s37param0) {
    __s1param0.prototype.enableComponent.call(this, __s37param0);
    this._selectionSlider.enableComponent = __s37param0;
    this.donateComponent.mouseChildren = __s37param0;
    this.donateComponent.mouseEnabled = true;
    if (this._disabledToolTipText && !__s37param0) {
      this.donateComponent.toolTipText = this._disabledToolTipText;
    } else {
      this.donateComponent.toolTipText = null;
    }
    if (this.itxt_value) {
      this.itxt_value.type = __s37param0 ? __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT : __dep_exact_81dacdf05bd32292_1.TextFieldType.DYNAMIC;
    }
  };
  CastleResourceCollectorComponent.prototype.setAmountText = function () {
    if (this.itxt_value.model != null) {
      this.itxt_value.restrict = null;
      this.itxt_value.maxChars = Number.MAX_VALUE;
      this.itxt_value.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getSelectedAmount()), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._maxValue)]);
      this.itxt_value.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    if (this._maxValue > 0) {
      this.enableComponent(this.isEnabled);
    } else {
      this.enableComponent(false);
    }
  };
  CastleResourceCollectorComponent.prototype.getSelectedAmount = function () {
    return __dep_exact_f855840627e6e145.int(this._selectionSlider.selectedIndex * this._stepSize);
  };
  CastleResourceCollectorComponent.prototype.onValueChanged = function (__s49param0) {
    this.setAmountText();
    if (this._notifyValueChange) {
      var __s49local0 = new __dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY);
      __s49local0.newValue = Math.floor(__s49param0.selectedValue / this._stepSize) * this._stepSize;
      this.dispatcher.dispatchEvent(__s49local0);
    }
  };
  CastleResourceCollectorComponent.prototype.onClick = function (__s52param0) {
    this._selectionSlider.sliderDown = true;
    switch (__s52param0.target) {
      case this.donateComponent.btn_add:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.selectedIndex + 1);
        break;
      case this.donateComponent.btn_remove:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.selectedIndex - 1);
        break;
      case this.donateComponent.btn_max:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.maxSliderSteps);
    }
    this._selectionSlider.sliderDown = false;
  };
  CastleResourceCollectorComponent.prototype.destroy = function () {
    this.removeAllEventListeners();
    this.resetValue();
    __s1param0.prototype.destroy.call(this);
  };
  CastleResourceCollectorComponent.prototype.removeAllEventListeners = function () {
    this._selectionSlider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onValueChanged));
    if (this.itxt_value) {
      this.itxt_value.focusIn.remove(this.bindFunction(this.onFocusInTextfield));
      this.itxt_value.focusOut.remove(this.bindFunction(this.onFocusOutTextfield));
      this.itxt_value.keyDown.remove(this.bindFunction(this.onKeyDownTextfield));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.unregisterTextFieldByReference(this.itxt_value);
      this.itxt_value = null;
    }
    this.donateComponent.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.donateComponent.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.showToolTip));
    this.donateComponent.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.hideToolTip));
  };
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "selectionSlider", {
    get: function () {
      return this._selectionSlider;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "donateComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "notifyValueChange", {
    set: function (__s64param0) {
      this._notifyValueChange = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceCollectorComponent.prototype.resetValue = function () {
    this._selectionSlider.setSelectedIndex(0);
    this.enableComponent(true);
  };
  CastleResourceCollectorComponent.prototype.showToolTip = function (__s68param0) {
    if (__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager.TOOLTIP_LABEL in __s68param0.target) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.tooltipManager.show(__s68param0.target.toolTipText, __s68param0.target);
    }
  };
  CastleResourceCollectorComponent.prototype.hideToolTip = function (__s71param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.tooltipManager.hide();
  };
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceCollectorComponent.WOOD = 1;
  CastleResourceCollectorComponent.STONE = 2;
  CastleResourceCollectorComponent.FOOD = 3;
  CastleResourceCollectorComponent.C1 = 4;
  CastleResourceCollectorComponent.C2 = 5;
  CastleResourceCollectorComponent.COAL = 6;
  CastleResourceCollectorComponent.OIL = 7;
  CastleResourceCollectorComponent.GLASS = 8;
  CastleResourceCollectorComponent.IRON = 9;
  CastleResourceCollectorComponent.FURY_DOUBLOON = 10;
  CastleResourceCollectorComponent.TIME_DOUBLOON = 11;
  CastleResourceCollectorComponent.HONEY = 12;
  CastleResourceCollectorComponent.MEAD = 13;
  CastleResourceCollectorComponent.BEEF = 14;
  return CastleResourceCollectorComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleResourceCollectorComponent = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
