Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleScrollComponent(__s3param0, __s3param1 = 0) {
    this.startYPos = 0;
    this.dragChatButton = false;
    this.overScrollDown = 0;
    this.disp = __s3param0;
    this.startYPos = __s3param0.mc_contentHolder.y;
    this.overScrollDown = __s3param1;
  }
  CastleScrollComponent.prototype.show = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.updateDisp();
  };
  CastleScrollComponent.prototype.hide = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleScrollComponent.prototype.onMouseClick = function (__s9param0) {
    this.disp.btn_up.mouseChildren = false;
    switch (__s9param0.target) {
      case this.disp.btn_up:
        this.scrollUp();
        break;
      case this.disp.btn_down:
        this.scrollDown();
        break;
      case this.disp.scroll_slide_holder:
      case this.disp.mc_sliderLine:
        this.onSliding(__s9param0, true);
        this.updateDisp();
    }
  };
  CastleScrollComponent.prototype.onMouseUp = function (__s12param0) {
    this.dragChatButton = false;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.onMouseWheel = function (__s14param0) {
    var __s14local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s14param0.target, "TextField");
    if (!__s14local0 || __s14local0.type != __dep_exact_81dacdf05bd32292.TextFieldType.INPUT || __s14local0.stage.focus != __s14local0 || !(__s14local0.maxScrollV > 1)) {
      if (__s14param0.delta < 0) {
        this.scrollUp();
      } else if (__s14param0.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleScrollComponent.prototype.onMouseDown = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target) && __s19param0.target == this.disp.btn_slider) {
      this.dragChatButton = true;
    }
  };
  CastleScrollComponent.prototype.updateDisp = function () {
    var __s22local0 = (this.startYPos - this.disp.mc_contentHolder.y) / (this.contentHeight - this.disp.mc_mask.height);
    __s22local0 = Math.min(Math.max(__s22local0, 0), 1);
    this.disp.btn_slider.y = this.disp.mc_sliderLine.y + this.disp.btn_slider.height / 2 + (this.disp.mc_sliderLine.height - this.disp.btn_slider.height) * __s22local0;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_up, __s22local0 > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_down, __s22local0 < 1);
  };
  CastleScrollComponent.prototype.scrollUp = function () {
    this.disp.mc_contentHolder.y = Math.min(this.disp.mc_contentHolder.y + CastleScrollComponent.STEP, this.startYPos);
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollDown = function () {
    if (this.disp.mc_contentHolder.y + this.contentHeight > this.disp.mc_mask.y + this.disp.mc_mask.height) {
      this.disp.mc_contentHolder.y = Math.max(this.disp.mc_contentHolder.y - CastleScrollComponent.STEP, this.startYPos - (this.contentHeight - this.disp.mc_mask.height));
    }
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollToEnd = function () {
    if (this.contentHeight > this.disp.mc_mask.height) {
      this.disp.mc_contentHolder.y = this.startYPos - (this.contentHeight - this.disp.mc_mask.height);
    }
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollToStart = function () {
    this.disp.mc_contentHolder.y = this.startYPos;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollTo = function (__s34param0) {
    this.disp.mc_contentHolder.y = this.startYPos - __s34param0;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.onSliding = function (__s36param0, __s36param1 = false) {
    if (__s36param1 || this.dragChatButton) {
      this.disp.btn_slider.y = Math.min(Math.max(this.disp.mc_sliderLine.mouseY + this.disp.mc_sliderLine.y, this.disp.mc_sliderLine.y + this.disp.btn_slider.height / 2), this.disp.mc_sliderLine.y + this.disp.mc_sliderLine.height - this.disp.btn_slider.height / 2);
      var __s36local0 = (this.disp.btn_slider.y - this.disp.mc_sliderLine.y - this.disp.btn_slider.height / 2) / (this.disp.mc_sliderLine.height - this.disp.btn_slider.height);
      __s36local0 = Math.min(Math.max(__s36local0, 0), 1);
      this.disp.mc_contentHolder.y = this.startYPos - __s36local0 * (this.contentHeight - this.disp.mc_mask.height);
    }
  };
  Object.defineProperty(CastleScrollComponent.prototype, "contentHeight", {
    get: function () {
      return this.disp.mc_contentHolder.height + this.overScrollDown;
    },
    enumerable: true,
    configurable: true
  });
  CastleScrollComponent.STEP = 30;
  return CastleScrollComponent;
}();
exports.CastleScrollComponent = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
