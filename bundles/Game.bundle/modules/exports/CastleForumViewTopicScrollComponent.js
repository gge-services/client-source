Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleForumViewTopicScrollComponent(__s3param0) {
    this._isDraggingSlideButton = false;
    this._isOverDisturbingDisp = false;
    this._disp = __s3param0;
    this._placeHolderStartPos = new __s0local1(__s3param0.mc_posts.mc_placeHolder.x, __s3param0.mc_posts.mc_placeHolder.y);
  }
  CastleForumViewTopicScrollComponent.prototype.onShow = function () {
    this.removeListeners();
    this.addListeners();
    this.scrollToStart();
  };
  CastleForumViewTopicScrollComponent.prototype.onHide = function () {
    this.removeListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.addExtraListeners = function () {
    if (this.disturbingDisp) {
      this.disturbingDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOverDisturbedDisp));
      this.disturbingDisp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOutDisturbedDisp));
    }
  };
  CastleForumViewTopicScrollComponent.prototype.removeExtraListeners = function () {
    if (this.disturbingDisp) {
      this.disturbingDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOverDisturbedDisp));
      this.disturbingDisp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOutDisturbedDisp));
    }
  };
  CastleForumViewTopicScrollComponent.prototype.addListeners = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.parent.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.addExtraListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.removeListeners = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.parent.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.removeExtraListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.onRollOverDisturbedDisp = function (__s19param0) {
    this._isOverDisturbingDisp = true;
  };
  CastleForumViewTopicScrollComponent.prototype.onRollOutDisturbedDisp = function (__s21param0) {
    var __s21local0 = this.disturbingDisp.getBounds(this.disturbingDisp.stage);
    if (__s21local0) {
      var __s21local1 = __s21local0.x + __s21local0.width;
      var __s21local2 = __s21local0.y + __s21local0.height;
      if (__s21param0.nativeEvent.clientX < __s21local0.x || __s21param0.nativeEvent.clientX > __s21local1 || __s21param0.nativeEvent.clientY < __s21local0.y || __s21param0.nativeEvent.clientY > __s21local2) {
        this._isOverDisturbingDisp = false;
        this.disturbingDisp.txt_text.blur();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseWheel = function (__s25param0) {
    if (!this._isOverDisturbingDisp) {
      if (__s25param0.delta < 0) {
        this.scrollUp();
      } else if (__s25param0.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseDown = function (__s30param0) {
    if (__s30param0.target == this.disp.btn_slider) {
      this._isDraggingSlideButton = true;
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseUp = function (__s33param0) {
    this._isDraggingSlideButton = false;
  };
  CastleForumViewTopicScrollComponent.prototype.onSliding = function (__s35param0) {
    if (this._isDraggingSlideButton) {
      this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.mouseY + this.disp.mc_slider.y);
      this.setPostPosFromSliderButtonPos();
    }
  };
  CastleForumViewTopicScrollComponent.prototype.getValidSliderButtonPos = function (__s38param0) {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      return this.disp.mc_slider.y;
    } else {
      return __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s38param0, this.disp.mc_slider.y, this.disp.mc_slider.y + this.disp.mc_slider.height);
    }
  };
  CastleForumViewTopicScrollComponent.prototype.getValidPostPos = function (__s42param0) {
    var __s42local0 = Math.min(__s42param0, this._placeHolderStartPos.y);
    return Math.max(__s42local0, -this.disp.mc_posts.mc_placeHolder.height + this.disp.mc_posts.mc_mask.height + this._placeHolderStartPos.y);
  };
  CastleForumViewTopicScrollComponent.prototype.setPostPosFromSliderButtonPos = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      var __s44local0 = this.disp.mc_posts.mc_placeHolder.height - this.disp.mc_posts.mc_mask.height;
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y + this.sliderPercentFromButtonPos * -__s44local0;
    }
    this.checkScrollButtonState();
  };
  CastleForumViewTopicScrollComponent.prototype.setSliderButtonPosFromPostPos = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.btn_slider.y = this.disp.mc_slider.y;
    } else {
      this.disp.btn_slider.y = this.disp.mc_slider.y + this.disp.mc_slider.height * this.sliderPercentFromPostPos;
    }
    this.checkScrollButtonState();
  };
  CastleForumViewTopicScrollComponent.prototype.checkScrollButtonState = function () {
    var __s52local0 = this.sliderPercentFromButtonPos;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_up, __s52local0 != 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_down, __s52local0 != 1);
  };
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "sliderPercentFromButtonPos", {
    get: function () {
      var __s54local0 = 1 - (this.disp.btn_slider.y - this.disp.mc_slider.y) / this.disp.mc_slider.height;
      return __s54local0 = 1 - Math.min(Math.max(__s54local0, 0), 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "sliderPercentFromPostPos", {
    get: function () {
      var __s56local0 = 1 - (this.disp.mc_posts.mc_placeHolder.height + (-this._placeHolderStartPos.y + this.disp.mc_posts.mc_placeHolder.y) - this.disp.mc_posts.mc_mask.height) / (this.disp.mc_posts.mc_placeHolder.height - this.disp.mc_posts.mc_mask.height);
      return __s56local0 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s56local0, 0, 1);
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopicScrollComponent.prototype.onMouseClick = function (__s58param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s58param0.target)) {
      switch (__s58param0.target) {
        case this.disp.btn_up:
          this.scrollUp();
          break;
        case this.disp.btn_down:
          this.scrollDown();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onExtraComponentMouseClick = function (__s62param0) {
    if (this.disp.btn_slider.y != this.getValidSliderButtonPos(this.disp.mc_slider.y + this.disp.mc_slider.height)) {
      this.scrollToEnd();
      this.disturbingDisp.txt_text.blur();
    }
  };
  CastleForumViewTopicScrollComponent.prototype.scrollUp = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      this.disp.mc_posts.mc_placeHolder.y = this.getValidPostPos(this.disp.mc_posts.mc_placeHolder.y + CastleForumViewTopicScrollComponent.STEP);
    }
    this.setSliderButtonPosFromPostPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollDown = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      this.disp.mc_posts.mc_placeHolder.y = this.getValidPostPos(this.disp.mc_posts.mc_placeHolder.y - CastleForumViewTopicScrollComponent.STEP);
    }
    this.setSliderButtonPosFromPostPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollToStart = function () {
    this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.y);
    this.setPostPosFromSliderButtonPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollToEnd = function () {
    this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.y + this.disp.mc_slider.height);
    this.setPostPosFromSliderButtonPos();
  };
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "disturbingDisp", {
    get: function () {
      return this.disp.mc_posts.mc_placeHolder.getChildByName("mc_answer");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopicScrollComponent.__initialize_static_members = function () {
    CastleForumViewTopicScrollComponent.STEP = 20;
  };
  return CastleForumViewTopicScrollComponent;
}();
exports.CastleForumViewTopicScrollComponent = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local2.__initialize_static_members();
