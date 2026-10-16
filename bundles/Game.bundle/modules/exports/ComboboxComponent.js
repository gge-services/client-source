Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function ComboboxComponent(__s3param0, __s3param1 = "", __s3param2 = ComboboxComponent.OPEN_DOWN, __s3param3 = 1, __s3param4 = -1, __s3param5 = -1, __s3param6 = 0, __s3param7 = null, __s3param8 = 5, __s3param9 = false, __s3param10 = false, __s3param11 = 15, __s3param12 = "", __s3param13 = 3, __s3param14 = true, __s3param15 = 0, __s3param16 = 0, __s3param17 = 0, __s3param18 = 0) {
    this._numMaxItems = 0;
    this._itemDir = 0;
    this._closedHeight = 0;
    this._enabled = true;
    this._itemHeight = 0;
    this._itemWidth = 0;
    this._itemMarginX = 0;
    this.userClickItemSignal = new __dep_exact_9e901e8e2483a22f_1.BooleanSignal();
    this.selectionChanged = false;
    this._selectedItem = 0;
    this._textVOClass = __dep_exact_92d05af59ee2ff30.TextVO;
    this._scaleOpen = 0;
    this._heightOpen = 0;
    this._isOpen = false;
    this._additionalOpenHeight = 0;
    this._isScrollable = false;
    this._currentFirstIndex = 0;
    this._useSemiAutomaticDirection = false;
    this.replaceItemHolder = true;
    this._itemSpace = 0;
    this._previousSelectedItem = 0;
    this.scrollButtonDownOffsetY = 0;
    this.scrollButtonUpOffsetY = 0;
    this.scrollButtonsOffsetX = 0;
    this.additionScrollButtonHeight = 0;
    this._disp = __s3param0;
    this._realParent = this._disp.parent;
    this._originalPosition = new __s0local1(this._disp.x, this._disp.y);
    this._stagePosition = this._disp.parent.localToGlobal(this._originalPosition);
    this._itemMarginX = __s3param11;
    this._itemRenderer = __s3param7 == null ? new ComboboxComponent.DEFAULT_ITEM_RENDERER_CLASS() : __s3param7;
    this._numMaxItems = __s3param6;
    this._defaultString = __s3param1;
    this._itemDir = __s3param2;
    this._closedHeight = __s3param3;
    if (this._disp.bg) {
      this._disp.bg.height = this._closedHeight;
    }
    this._isScrollable = __s3param9;
    this._useSemiAutomaticDirection = __s3param10;
    this._topElementName = __s3param12;
    this._itemSpace = __s3param13;
    this.replaceItemHolder = __s3param14;
    this.scrollButtonDownOffsetY = __s3param15;
    this.scrollButtonUpOffsetY = __s3param16;
    this.scrollButtonsOffsetX = __s3param17;
    this.additionScrollButtonHeight = __s3param18;
    this._itemHeight = __s3param4 != -1 ? __s3param4 : this._disp.bg ? __dep_exact_f855840627e6e145.int(this._disp.bg.height) : this._disp.height;
    this._itemWidth = __s3param5 != -1 ? __s3param5 : this._disp.bg ? __dep_exact_f855840627e6e145.int(this._disp.bg.width) : this._disp.width;
    if (this._disp.bg) {
      this._disp.bg.width = this._itemWidth;
    }
    if (this._disp.mc_hover) {
      this._disp.mc_hover.visible = false;
      this._disp.mc_hover.mouseEnabled = false;
    }
    if (this._disp.mc_down) {
      this._disp.mc_down.visible = false;
      this._disp.mc_down.mouseEnabled = false;
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = false;
      this._disp.mc_bg_open.mouseEnabled = false;
    }
    if (this._disp.bg_default) {
      this._disp.bg_default.visible = true;
      this._disp.bg_default.mouseChildren = false;
      this._disp.bg_default.mouseEnabled = false;
    }
    this._disp.item_Holder.x = (this._disp.bg ? this._disp.bg.x : this._disp.x) + this._itemMarginX;
    this._itemWidth -= __dep_exact_f855840627e6e145.int(this._itemMarginX * 2);
    this._disp.txt_selected.getTextFormat();
    this._additionalOpenHeight = __s3param8;
    this._disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp.btn_arrow);
    this._disp.mouseChildren = true;
    this._selectedItem = -1;
    this._itemData = [];
    this._disp.item_Holder.visible = false;
    this._disp.btn_arrow.gotoAndStop(2);
    this._disp.txt_selected.defaultCacheScale = 2;
    this.selected_text = this.textFieldManager.registerTextField(this._disp.txt_selected, new this._textVOClass(this._disp.txt_selected.text));
    if (this._disp.bg) {
      this._disp.bg.gotoAndStop(1);
      this._disp.bg.scaleY = 1;
      this._disp.bg.mouseChildren = false;
      this._disp.bg.actLikeButton = true;
    }
    this.selected_text.mouseEnabled = false;
    if (this._defaultString != "") {
      this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
    }
  }
  Object.defineProperty(ComboboxComponent.prototype, "btn_down", {
    get: function () {
      return this._disp.item_Holder.getChildByName("btn_down");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "btn_up", {
    get: function () {
      return this._disp.item_Holder.getChildByName("btn_up");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numPositionsInclusiveArrows", {
    get: function () {
      if (this._isScrollable) {
        if (this._itemData.length <= this._numMaxItems) {
          return this._itemData.length;
        } else {
          return this._numMaxItems - 1;
        }
      } else {
        return this._itemData.length;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "isButtonUpVisible", {
    get: function () {
      return !!this._isScrollable && this._currentFirstIndex > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "isButtonDownVisible", {
    get: function () {
      return !!this._isScrollable && this._itemData.length > this._numMaxItems && this._currentFirstIndex < this.itemData.length - this.numShowItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numShowItems", {
    get: function () {
      if (this._isScrollable) {
        var __s27local0 = this._numMaxItems;
        if (this._itemData.length > this._numMaxItems) {
          __s27local0 -= 2;
        }
        return Math.min(__s27local0, this._itemData.length);
      }
      return this._itemData.length;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.initArrowGrayOut = function (__s31param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_arrow, __s31param0);
  };
  ComboboxComponent.prototype.fillItems = function () {
    this.removeChilds();
    var __s33local0 = this.getFinalItemDirection();
    var __s33local1 = this._isScrollable && this._itemData.length > this._numMaxItems;
    if (__s33local1) {
      var __s33local2 = __s33local0 == ComboboxComponent.OPEN_DOWN ? new Library.CastleInterfaceElements.Btn_CastleUp() : new Library.CastleInterfaceElements.Btn_CastleDown();
      __s33local2.name = "btn_up";
      __s33local2.x = (this._disp.bg ? this._disp.bg : this._disp).width / 2 - ComboboxComponent.SCROLL_BTN_X_OFFSET + this.scrollButtonsOffsetX;
      __s33local2.y = __s33local2.height / 2 + this.scrollButtonUpOffsetY;
      this._disp.item_Holder.addChild(__s33local2);
      __s33local2.actLikeButton = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s33local2, this.isButtonUpVisible);
    }
    var __s33local3 = 0;
    var __s33local4 = 0;
    if (__s33local1) {
      __s33local4 = __s33local2.height + this.additionScrollButtonHeight;
    }
    if (this._itemData.length > 0) {
      var __s33local5;
      for (var __s33local6 = this._currentFirstIndex; __s33local6 < this.numShowItems + this._currentFirstIndex; __s33local6++) {
        __s33local5 = this._itemRenderer.renderItem(this._itemData[__s33local6], __s33local6, this._itemWidth, this._itemHeight, this._textVOClass);
        this._disp.item_Holder.addChild(__s33local5);
        __s33local5.y = __dep_exact_f855840627e6e145.int((__s33local3 * (this._itemHeight + this._itemSpace) + __s33local4) * __s33local0);
        __s33local3++;
      }
    }
    var __s33local7 = this._closedHeight + this.numShowItems * (this._itemHeight + this._itemSpace) + this._additionalOpenHeight + __s33local4;
    if (__s33local1) {
      var __s33local8 = __s33local0 == ComboboxComponent.OPEN_DOWN ? new Library.CastleInterfaceElements.Btn_CastleDown() : new Library.CastleInterfaceElements.Btn_CastleUp();
      __s33local8.name = "btn_down";
      __s33local8.x = (this._disp.bg ? this._disp.bg : this._disp).width / 2 - ComboboxComponent.SCROLL_BTN_X_OFFSET + this.scrollButtonsOffsetX;
      __s33local8.y = (__s33local3 * (this._itemHeight + this._itemSpace) + __s33local2.height / 2) * __s33local0 + (__s33local0 == ComboboxComponent.OPEN_DOWN ? __s33local4 : 0) + this.scrollButtonDownOffsetY;
      this._disp.item_Holder.addChild(__s33local8);
      __s33local8.actLikeButton = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s33local8, this.isButtonDownVisible);
      __s33local7 += __s33local8.height + this.additionScrollButtonHeight;
    }
    this._scaleOpen = __s33local7 / this._closedHeight;
    this._heightOpen = __s33local7;
  };
  ComboboxComponent.prototype.getFinalItemDirection = function () {
    if (!this._useSemiAutomaticDirection) {
      return this._itemDir;
    }
    var __s41local0 = new __s0local1(this._disp.x, this._disp.y);
    var __s41local1 = this._disp.parent.localToGlobal(__s41local0);
    var __s41local2 = false;
    if (this.numPositionsInclusiveArrows * (this._itemHeight + this._itemSpace) * ComboboxComponent.OPEN_DOWN + __s41local1.y <= this._disp.stage.stageHeight && (__s41local2 = true, this._itemDir == ComboboxComponent.OPEN_DOWN)) {
      return this._itemDir;
    } else if (this.numPositionsInclusiveArrows * (this._itemHeight + this._itemSpace) * ComboboxComponent.OPEN_UP + __s41local1.y >= 0 && (true, this._itemDir == ComboboxComponent.OPEN_UP)) {
      return this._itemDir;
    } else {
      return __dep_exact_f855840627e6e145.int(__s41local2 ? ComboboxComponent.OPEN_DOWN : ComboboxComponent.OPEN_UP);
    }
  };
  ComboboxComponent.prototype.addItem = function (__s47param0) {
    this._itemData.push(__s47param0);
  };
  ComboboxComponent.prototype.removeChilds = function () {
    while (this._disp.item_Holder.numChildren > 0) {
      this._disp.item_Holder.removeChildAt(0);
    }
  };
  ComboboxComponent.prototype.selectItemIndex = function (__s53param0) {
    var __s53local0 = this;
    if (!(this._itemData.length < 1)) {
      this.selectionChanged = this._selectedItem != __s53param0;
      this.checkTextFieldRegistratation();
      if (__s53param0 >= this._itemData.length || __s53param0 < 0) {
        this._selectedItem = -1;
        this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
      } else {
        this._selectedItem = __s53param0;
        this.selected_text.textContentVO = new this._textVOClass(this._itemData[this._selectedItem].itemLabel);
      }
      this._itemData.forEach(function (__s58param0) {
        return __s58param0.selected = __s58param0 == __s53local0._itemData[__s53local0._selectedItem];
      });
      this._disp.dispatchEvent(new __dep_exact_9e901e8e2483a22f.BasicComboboxEvent(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE));
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ComboboxComponent.prototype.showItems = function () {
    this._disp.btn_arrow.gotoAndStop(1);
    this._currentFirstIndex = 0;
    this.fillItems();
    if (this._disp.bg) {
      this._disp.bg.height = this._heightOpen;
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = true;
    }
    if (this.getFinalItemDirection() == ComboboxComponent.OPEN_UP) {
      if (this._disp.bg) {
        this._disp.bg.y = -this._disp.bg.height + this._closedHeight;
      }
      if (this._topElementName != "") {
        this._disp.getChildByName(this._topElementName).y = this._disp.bg.y;
      }
      if (this.replaceItemHolder) {
        this._disp.item_Holder.y = -(this._itemHeight + this._itemSpace);
      }
    } else if (this.replaceItemHolder) {
      this._disp.item_Holder.y = this._closedHeight + this._itemSpace;
    }
    this._isOpen = true;
    this._disp.item_Holder.visible = true;
    if (this.disp && this.disp.parent) {
      this.disp.parent.setChildIndex(this.disp, this.disp.parent.numChildren - 1);
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.dispatchEvent(new __dep_exact_9e901e8e2483a22f.BasicComboboxEvent(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, 1));
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._disp);
  };
  ComboboxComponent.prototype.onClick = function (__s71param0) {
    if (!this.enabled || !__dep_exact_81dacdf05bd32292.instanceOfClass(__s71param0.target, "Btn_CastleDown") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s71param0.target, "Btn_CastleUp") && __s71param0.target != this.disp && __s71param0.target.parent != this.disp && !!this.isOpen) {
      this.hideItems();
    }
  };
  ComboboxComponent.prototype.checkTextFieldRegistratation = function () {
    if (!this.textFieldManager.isTextFieldRegistered(this._disp.txt_selected)) {
      this.selected_text = this.textFieldManager.registerTextField(this._disp.txt_selected, new this._textVOClass(""));
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "isOpen", {
    get: function () {
      return this._isOpen;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.hideItems = function () {
    this._isOpen = false;
    this._disp.btn_arrow.gotoAndStop(2);
    if (this._disp.bg) {
      this._disp.bg.height = this._closedHeight;
      this._disp.bg.y = 0;
      if (this._topElementName != "") {
        this._disp.getChildByName(this._topElementName).y = this._disp.bg.y;
      }
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = false;
    }
    this._disp.item_Holder.visible = false;
    this._disp.dispatchEvent(new __dep_exact_9e901e8e2483a22f.BasicComboboxEvent(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, 0));
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  ComboboxComponent.prototype.onMouseUp = function (__s84param0) {
    switch (__s84param0.target) {
      case this._disp.bg:
      case this._disp.btn_arrow:
        if (!this._disp.btn_arrow.enabled) {
          return;
        }
        this.onClickArrow();
        break;
      case this.btn_up:
        if (!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s84param0.target)) {
          return;
        }
        this._currentFirstIndex = this._currentFirstIndex - 1;
        this.fillItems();
        return;
      case this.btn_down:
        if (!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s84param0.target)) {
          return;
        }
        this._currentFirstIndex = this._currentFirstIndex + 1;
        this.fillItems();
        return;
    }
    if (__s84param0.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(__s84param0.target)) {
        this._previousSelectedItem = this._selectedItem;
        this.selectItemIndex(__s84param0.target.id);
        this.dispatchUserClickItem();
        this.hideItems();
      }
    } else {
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = false;
      }
      if (__s84param0.target != this._disp.bg && __s84param0.target != this._disp.btn_arrow) {
        this.onClickArrow();
      }
    }
  };
  ComboboxComponent.prototype.onMouseDown = function (__s95param0) {
    if (!(__s95param0.target instanceof this._itemRenderer.itemMCClass)) {
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = true;
      }
    }
  };
  ComboboxComponent.prototype.dispatchUserClickItem = function () {
    this.userClickItemSignal.signal(this.selectionChanged);
  };
  ComboboxComponent.prototype.onMouseOut = function (__s101param0) {
    if (__s101param0.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(__s101param0.target) && __s101param0.target.bg && this._disp.bg) {
        __s101param0.target.bg.gotoAndStop(1);
      }
    } else {
      if (this._disp.mc_hover) {
        this._disp.mc_hover.visible = false;
      }
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = false;
      }
    }
  };
  ComboboxComponent.prototype.onMouseOver = function (__s108param0) {
    if (__s108param0.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(__s108param0.target) && __s108param0.target.bg && this._disp.bg) {
        __s108param0.target.bg.gotoAndStop(2);
      }
    } else if (this._disp.mc_hover) {
      this._disp.mc_hover.visible = true;
    }
  };
  ComboboxComponent.prototype.isItemEnabled = function (__s113param0) {
    var __s113local0 = __dep_exact_f855840627e6e145.int(__s113param0.id);
    return this._itemData[__s113local0].enabled;
  };
  ComboboxComponent.prototype.clearItems = function () {
    this.hideItems();
    if (this._defaultString != "") {
      this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
    }
    this._itemData = [];
    this._selectedItem = -1;
    this.fillItems();
  };
  ComboboxComponent.prototype.dispose = function () {
    if (this._disp) {
      this._disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this._disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this._disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
    this.removeChilds();
    this.textFieldManager.unregisterTextFieldByReference(this.selected_text);
  };
  ComboboxComponent.prototype.onClickArrow = function () {
    if (this.enabled) {
      if (this._isOpen) {
        this.hideItems();
      } else {
        this.showItems();
      }
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "selectedId", {
    get: function () {
      return this._selectedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "selectedData", {
    get: function () {
      if (this._selectedItem == -1) {
        return null;
      } else {
        return this._itemData[this._selectedItem].data;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "selectedLabel", {
    get: function () {
      if (this._selectedItem == -1) {
        return "";
      } else {
        return this._itemData[this._selectedItem].itemLabel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numItems", {
    get: function () {
      return this._itemData.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "itemData", {
    get: function () {
      return this._itemData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (__s144param0) {
      this._enabled = __s144param0;
      if (this.enabled) {
        this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.onMouseWheel = function (__s148param0) {
    var __s148local0 = __s148param0.delta * this.getFinalItemDirection();
    if (__s148local0 < 0 && this.isButtonUpVisible) {
      this._currentFirstIndex = this._currentFirstIndex - 1;
      this.fillItems();
    } else if (__s148local0 > 0 && this.isButtonDownVisible) {
      this._currentFirstIndex = this._currentFirstIndex + 1;
      this.fillItems();
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().forceHitTest();
  };
  ComboboxComponent.prototype.setTextfieldAutoFit = function (__s152param0) {
    this.selected_text.autoFitToBounds = __s152param0;
  };
  Object.defineProperty(ComboboxComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.changeItemAtIndex = function (__s156param0, __s156param1) {
    if (!(__s156param1 >= this._itemData.length)) {
      this.itemData[__s156param1] = __s156param0;
    }
  };
  ComboboxComponent.prototype.manualShowItems = function () {
    this.showItems();
  };
  ComboboxComponent.prototype.selectIndexWithoutEvent = function (__s161param0) {
    if (!(this._itemData.length < 1)) {
      if (__s161param0 > this._itemData.length || __s161param0 < 0) {
        this._selectedItem = -1;
        if (this.selected_text.textContentVO) {
          this.selected_text.textContentVO.stringValue = this._defaultString;
        }
      } else {
        this._selectedItem = __s161param0;
        if (this.selected_text.textContentVO) {
          this.selected_text.textContentVO.stringValue = this._itemData[this._selectedItem].itemLabel;
        }
      }
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "previousSelectedItem", {
    get: function () {
      return this._previousSelectedItem;
    },
    set: function (__s171param0) {
      this._previousSelectedItem = __s171param0;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.__initialize_static_members = function () {
    ComboboxComponent.DEFAULT_ITEM_RENDERER_CLASS = __dep_export_ComboboxItemRenderer.ComboboxItemRenderer;
  };
  ComboboxComponent.SCROLL_BTN_X_OFFSET = 8;
  ComboboxComponent.OPEN_UP = -1;
  ComboboxComponent.OPEN_DOWN = 1;
  return ComboboxComponent;
}();
exports.ComboboxComponent = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
__s0local2.__initialize_static_members();
