Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleTextScrollComponent(__s3param0) {
    this._scrollSteps = 2;
    this._isDraggingSliderButton = false;
    this._enabled = true;
    this._invisibleOnFit = false;
    this._hideArrowsOnScrollToEdges = false;
    this.isTouchInChatContent = false;
    this._scrollVO = __s3param0;
    if (__s3param0) {
      if (__s3param0.txt_content) {
        this._itxt_content = this.textFieldManager.registerTextField(__s3param0.txt_content, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      }
      if (__s3param0) {
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_slider);
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_scrollUp);
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_scrollDown);
      }
      this.enableComponent(this._enabled);
      this._touchHelper = new __dep_export_TouchScrollHelper.TouchScrollHelper();
    }
  }
  CastleTextScrollComponent.prototype.onShow = function () {
    if (this.scrollVO) {
      this.removeEventListeners();
      this.addEventListeners();
      this.updateItems();
    }
  };
  CastleTextScrollComponent.prototype.onHide = function () {
    if (this.scrollVO) {
      this.removeEventListeners();
    }
  };
  CastleTextScrollComponent.prototype.addEventListeners = function () {
    if (this.scrollVO.btn_scrollDown) {
      this.scrollVO.btn_scrollDown.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_scrollUp) {
      this.scrollVO.btn_scrollUp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.mc_sliderLine) {
      this.scrollVO.mc_sliderLine.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_slider && this.scrollVO.stage) {
      this.scrollVO.stage.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.btn_slider.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.scrollVO.stage.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
    this._scrollVO.txt_content.parent.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.handleScroll));
    this._itxt_content.change.add(this.bindFunction(this.onTextChanged));
    this._touchHelper.setup(this._scrollVO.txt_content.parent, this.bindFunction(this.varifyTouchInChatContent), this.bindFunction(this.inValidateTouchInChatContent));
    this._scrollVO.txt_content.parent.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.handleTouchScroll));
  };
  CastleTextScrollComponent.prototype.handleScroll = function (__s20param0) {
    var __s20local0 = this._scrollVO.txt_content.getBounds(this._scrollVO.txt_content.stage);
    if (__s20local0 && __s20param0.nativeEvent.clientX > __s20local0.x && __s20param0.nativeEvent.clientX < __s20local0.x + __s20local0.width && __s20param0.nativeEvent.clientY > __s20local0.y && __s20param0.nativeEvent.clientY < __s20local0.y + __s20local0.height) {
      if (__s20param0.delta > 0) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    }
  };
  CastleTextScrollComponent.prototype.varifyTouchInChatContent = function () {
    var __s25local0 = this._scrollVO.txt_content.getBounds(this._scrollVO.txt_content.stage);
    this.isTouchInChatContent = false;
    if (__s25local0 && this._touchHelper.valid && this._touchHelper.touchStageRefPoint.x > __s25local0.x && this._touchHelper.touchStageRefPoint.x < __s25local0.x + __s25local0.width && this._touchHelper.touchStageRefPoint.y > __s25local0.y && this._touchHelper.touchStageRefPoint.y < __s25local0.y + __s25local0.height) {
      this.isTouchInChatContent = true;
    }
  };
  CastleTextScrollComponent.prototype.inValidateTouchInChatContent = function () {
    this.isTouchInChatContent = false;
  };
  CastleTextScrollComponent.prototype.handleTouchScroll = function (__s30param0) {
    if (this.isTouchInChatContent) {
      var __s30local0 = __s30param0.stageY - this._touchHelper.touchStageRefPoint.y;
      var __s30local1 = this._itxt_content.scrollV - __s30local0;
      if (__s30local1 > this._itxt_content.maxScrollV) {
        this._itxt_content.scrollV = this._itxt_content.maxScrollV;
      } else {
        this._itxt_content.scrollV = __s30local1 < 0 ? 0 : __s30local1;
      }
      this.updateItems();
    }
  };
  CastleTextScrollComponent.prototype.removeEventListeners = function () {
    if (this.scrollVO.btn_scrollDown) {
      this.scrollVO.btn_scrollDown.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_scrollUp) {
      this.scrollVO.btn_scrollUp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.mc_sliderLine) {
      this.scrollVO.mc_sliderLine.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_slider) {
      this._scrollVO.btn_slider.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      if (this._scrollVO.stage) {
        this._scrollVO.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
        this._scrollVO.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
      }
    }
    if (this._scrollVO.txt_content.parent) {
      this._scrollVO.txt_content.parent.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.handleScroll));
      this._scrollVO.txt_content.parent.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.handleTouchScroll));
      this._touchHelper.dispose();
    }
    try {
      this._itxt_content.change.remove(this.bindFunction(this.onTextChanged));
    } catch (__s44local0) {
      __dep_exact_9e901e8e2483a22f_1.debug(__s44local0.stack);
    }
  };
  CastleTextScrollComponent.prototype.invalidateScrollState = function () {
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.updateItems = function () {
    this.updateSliderButtonPos();
    this.updateItemVisibility();
  };
  CastleTextScrollComponent.prototype.updateSliderButtonPos = function () {
    if (this._itxt_content) {
      var __s50local0;
      var __s50local1;
      try {
        __s50local1 = this._itxt_content.scrollV;
        __s50local0 = this._itxt_content.maxScrollV;
      } catch (__s54local0) {
        return;
      }
      if (typeof __s50local0 != "number" || isNaN(__s50local0) || __s50local0 <= 0) {
        __s50local0 = 1;
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.btn_scrollUp, __s50local1 > 1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.btn_scrollDown, __s50local1 != __s50local0);
      if (this.scrollVO.btn_slider) {
        var __s50local2 = __s50local1 / __s50local0;
        if (__s50local1 <= 1) {
          __s50local2 = 0;
        }
        __s50local2 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s50local2, 0, 1);
        this.scrollVO.btn_slider.y = this.scrollVO.mc_sliderLine.y + this.scrollVO.mc_sliderLine.height * __s50local2;
      }
    }
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "deltaScroll", {
    get: function () {
      var __s59local0 = this._scrollSteps;
      if (__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode) {
        __s59local0 = __dep_exact_f855840627e6e145.int(this._itxt_content.size * 1.3);
      }
      return __s59local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTextScrollComponent.prototype.scrollUp = function () {
    if (this._itxt_content.scrollV - this.deltaScroll < 0) {
      this._itxt_content.scrollV = 0;
    } else {
      this._itxt_content.scrollV -= this.deltaScroll;
    }
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollDown = function () {
    if (this._itxt_content.scrollV + this.deltaScroll > this._itxt_content.maxScrollV) {
      this._itxt_content.scrollV = this._itxt_content.maxScrollV;
    } else {
      this._itxt_content.scrollV += this.deltaScroll;
    }
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollToStart = function () {
    this._itxt_content.scrollV = 0;
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollToEnd = function () {
    this._itxt_content.scrollV = this._itxt_content.maxScrollV;
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.enableComponent = function (__s74param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.btn_scrollUp, __s74param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.btn_scrollDown, __s74param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.btn_slider, __s74param0);
    this._enabled = __s74param0;
  };
  CastleTextScrollComponent.prototype.updateItemVisibility = function () {
    if (this.invisibleOnFit || this.hideArrowsOnScrollToEdges) {
      for (var __s76local0 = this.getIofItems(), __s76local1 = !this.invisibleOnFit || this._itxt_content.maxScrollV > 1, __s76local2 = 0; __s76local2 < __s76local0.length; ++__s76local2) {
        __s76local0[__s76local2].visible = __s76local1;
      }
      if (this.hideArrowsOnScrollToEdges && __s76local1 && this.scrollVO.btn_scrollUp && this.scrollVO.btn_scrollDown) {
        this.scrollVO.btn_scrollUp.visible = this._itxt_content.scrollV > 1;
        this.scrollVO.btn_scrollDown.visible = this._itxt_content.scrollV < this._itxt_content.maxScrollV;
      }
    }
  };
  CastleTextScrollComponent.prototype.getIofItems = function () {
    var __s82local0 = [];
    this.addIofItemToList(__s82local0, this.scrollVO.btn_scrollDown);
    this.addIofItemToList(__s82local0, this.scrollVO.btn_scrollUp);
    this.addIofItemToList(__s82local0, this.scrollVO.btn_slider);
    this.addIofItemToList(__s82local0, this.scrollVO.mc_sliderLine);
    if (this.scrollVO.visibilityItems) {
      for (var __s82local1 = 0; __s82local1 < this.scrollVO.visibilityItems.length; __s82local1++) {
        __s82local0.push(this.scrollVO.visibilityItems[__s82local1]);
      }
    }
    return __s82local0;
  };
  CastleTextScrollComponent.prototype.addIofItemToList = function (__s87param0, __s87param1) {
    if (__s87param1) {
      __s87param0.push(__s87param1);
    }
  };
  CastleTextScrollComponent.prototype.onMouseClick = function (__s90param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s90param0.target)) {
      if (this.scrollVO.btn_scrollUp && __s90param0.target == this.scrollVO.btn_scrollUp) {
        this.scrollUp();
      } else if (this.scrollVO.btn_scrollDown && __s90param0.target == this.scrollVO.btn_scrollDown) {
        this.scrollDown();
      } else if (this.scrollVO.mc_sliderLine && __s90param0.target == this.scrollVO.mc_sliderLine && this.scrollVO.btn_slider) {
        if (__s90param0.stageY < this.scrollVO.btn_slider.parent.localToGlobal(new __s0local1(this.scrollVO.btn_slider.x, this.scrollVO.btn_slider.y)).y) {
          this.scrollUp();
        } else if (__s90param0.stageY > this.scrollVO.btn_slider.parent.localToGlobal(new __s0local1(this.scrollVO.btn_slider.x, this.scrollVO.btn_slider.y)).y) {
          this.scrollDown();
        }
      }
    }
  };
  CastleTextScrollComponent.prototype.onMouseDown = function (__s98param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s98param0.target)) {
      this._isDraggingSliderButton = true;
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  CastleTextScrollComponent.prototype.onMouseUp = function (__s101param0) {
    if (this._isDraggingSliderButton) {
      this.updateItems();
    }
    this._isDraggingSliderButton = false;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
  };
  CastleTextScrollComponent.prototype.onMouseMove = function (__s104param0) {
    if (this._isDraggingSliderButton) {
      this.scrollVO.btn_slider.y = __dep_export_CastleMathHelper.CastleMathHelper.clamp(this.scrollVO.mc_sliderLine.mouseY + this.scrollVO.mc_sliderLine.y, this.scrollVO.mc_sliderLine.y, this.scrollVO.mc_sliderLine.y + this.scrollVO.mc_sliderLine.height);
      var __s104local0 = __dep_exact_f855840627e6e145.int(this.scrollVO.btn_slider.y - this.scrollVO.mc_sliderLine.y) / __dep_exact_f855840627e6e145.int(this.scrollVO.mc_sliderLine.height);
      __s104local0 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s104local0, 0, 1);
      this._itxt_content.scrollV = this._itxt_content.maxScrollV * __s104local0;
    }
  };
  CastleTextScrollComponent.prototype.onScrollInnerText = function (__s107param0 = null) {
    if (this._enabled) {
      if (!this._isDraggingSliderButton) {
        this.updateItems();
      }
    } else {
      this.scrollToEnd();
    }
  };
  CastleTextScrollComponent.prototype.onTextChanged = function (__s112param0) {
    this.updateItems();
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "scrollSteps", {
    get: function () {
      return this._scrollSteps;
    },
    set: function (__s118param0) {
      this._scrollSteps = __s118param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "invisibleOnFit", {
    get: function () {
      return this._invisibleOnFit;
    },
    set: function (__s122param0) {
      this._invisibleOnFit = __s122param0;
      this.updateItemVisibility();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "hideArrowsOnScrollToEdges", {
    get: function () {
      return this._hideArrowsOnScrollToEdges;
    },
    set: function (__s126param0) {
      this._hideArrowsOnScrollToEdges = __s126param0;
      this.updateItemVisibility();
    },
    enumerable: true,
    configurable: true
  });
  CastleTextScrollComponent.prototype.isScrolledToEnd = function () {
    return !!this._itxt_content && this._itxt_content.scrollV == this._itxt_content.maxScrollV;
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "scrollVO", {
    get: function () {
      return this._scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTextScrollComponent;
}();
exports.CastleTextScrollComponent = __s0local2;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_TouchScrollHelper = require("gge-module:export_TouchScrollHelper");
