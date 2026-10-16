Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ModernStartscreenDropdownComponent(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._showSelectedOnTop = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_selection], __dep_exact_84d43d9c404bd4d8.BasicButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_dropdown.mc_slider.btn_slider], __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton, 1);
    __s3local0._itxt_selected = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_selection.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_search = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_dropdown.mc_search.txt_search, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_selected.autoFitToBounds = true;
    __s3local0._inputBehaviour = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.disp.mc_dropdown.mc_search, __s3local0._itxt_search, false);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.disp.mc_dropdown.mc_slider).addMouseWheelElements([__s3local0.disp.mc_dropdown]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s3local0.disp.mc_dropdown.mc_list.mask.height, true));
    __s3local0._onSelectSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onOpenSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._itemMCClass = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("ModernStartscreenComboboxItem");
    __s3local0._listStartY = __s3local0.disp.mc_dropdown.mc_list.y;
    __s3local0.disp.mc_dropdown.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernStartscreenDropdownComponent, __s1param0);
  ModernStartscreenDropdownComponent.prototype.init = function (__s5param0, __s5param1 = -1) {
    this._itemVOs = __s5param0;
    this._separatorPosition = __s5param1;
  };
  ModernStartscreenDropdownComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._inputBehaviour.onShow();
    this._itxt_search.change.add(this.bindFunction(this.onSearch));
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernStartscreenDropdownComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._inputBehaviour.onHide();
    this._itxt_search.change.remove(this.bindFunction(this.onSearch));
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._onOpenSignal.removeAll();
    this._onSelectSignal.removeAll();
  };
  ModernStartscreenDropdownComponent.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.disp.mc_selection:
        this.toggleDropdown();
    }
    if (__s11param0.target instanceof this._itemMCClass) {
      this.selectedItem = __s11param0.target.data;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onMouseOver = function (__s15param0) {
    __s1param0.prototype.onMouseOver.call(this, __s15param0);
    if (__s15param0.target == this.disp.mc_selection) {
      this.disp.mc_selection.gotoAndStop(2);
    }
    if (__s15param0.target instanceof this._itemMCClass) {
      __s15param0.target.bg.visible = true;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onMouseOut = function (__s19param0) {
    __s1param0.prototype.onMouseOut.call(this, __s19param0);
    if (__s19param0.target == this.disp.mc_selection) {
      this.disp.mc_selection.gotoAndStop(this.isOpen ? 2 : 1);
    }
    if (__s19param0.target instanceof this._itemMCClass) {
      __s19param0.target.bg.visible = false;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onSearch = function (__s23param0 = null) {
    this.updateList();
  };
  ModernStartscreenDropdownComponent.prototype.onScroll = function () {
    this.disp.mc_dropdown.mc_list.y = this._listStartY - this._scrollComponent.currentValue;
  };
  ModernStartscreenDropdownComponent.prototype.toggleDropdown = function () {
    if (this.disp.mc_dropdown.visible = !this.disp.mc_dropdown.visible) {
      this.updateList();
      this._onOpenSignal.dispatch(true);
    } else {
      this._itxt_search.clearText();
      this._onOpenSignal.dispatch(false);
    }
  };
  ModernStartscreenDropdownComponent.prototype.updateList = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_dropdown.mc_list.mc_contentHolder);
    var __s31local0 = this._itxt_search.text;
    var __s31local1 = this._itemVOs.filter(function (__s33param0) {
      return __s31local0 == "" || __s33param0.displayName.toLowerCase().indexOf(__s31local0.toLowerCase()) > -1;
    });
    if (this._showSelectedOnTop && !__s31local0 && __s31local1.indexOf(this.selectedItem) > -1) {
      __s31local1.splice(__s31local1.indexOf(this.selectedItem), 1);
      __s31local1.unshift(this.selectedItem);
    }
    var __s31local2 = 0;
    var __s31local3 = 0;
    for (var __s31local4 = 0, __s31local5 = __s31local1; __s31local4 < __s31local5.length; __s31local4++) {
      var __s31local6 = __s31local5[__s31local4];
      var __s31local7 = new this._itemMCClass();
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s31local7.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s31local6.displayName), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      __s31local7.mouseChildren = false;
      __s31local7.bg.visible = false;
      __s31local7.actLikeButton = true;
      __s31local7.data = __s31local6;
      __s31local7.y = __s31local2;
      __s31local2 += __s31local7.height;
      this.disp.mc_dropdown.mc_list.mc_contentHolder.addChild(__s31local7);
      if (!__s31local0 && __s31local3 == this._separatorPosition) {
        this.disp.mc_dropdown.mc_list.mc_separatorLine.y = __s31local2;
      }
      __s31local3++;
    }
    var __s31local8 = Math.max(0, __s31local2 - this.disp.mc_dropdown.mc_list.mask.height);
    this._scrollComponent.init(0, __s31local8, 42, 42);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(__s31local8 > 0);
    this.disp.mc_dropdown.mc_list.mc_separatorLine.visible = !__s31local0 && this._separatorPosition > -1;
  };
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "selectedItem", {
    get: function () {
      return this._selectedItem;
    },
    set: function (__s41param0) {
      this._selectedItem = __s41param0;
      this._itxt_selected.textContentVO.stringValue = __s41param0.displayName;
      this.closeDropdown();
      this.onSelectSignal.dispatch(this.selectedItem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "onOpenSignal", {
    get: function () {
      return this._onOpenSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "isOpen", {
    get: function () {
      return this.disp.mc_dropdown.visible;
    },
    enumerable: true,
    configurable: true
  });
  ModernStartscreenDropdownComponent.prototype.closeDropdown = function () {
    if (this.isOpen) {
      this.toggleDropdown();
    }
    this.disp.mc_selection.gotoAndStop(1);
  };
  return ModernStartscreenDropdownComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ModernStartscreenDropdownComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
