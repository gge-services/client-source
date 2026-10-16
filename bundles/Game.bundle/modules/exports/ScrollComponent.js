Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_HorizontalSliderStrategy = require("gge-module:export_HorizontalSliderStrategy");
var __dep_export_VerticalSliderStrategy = require("gge-module:export_VerticalSliderStrategy");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ScrollComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._sliderDown = false;
    __s3local0._selectedIndex = 0;
    __s3local0._enabled = false;
    __s3local0._centerButtonOnDefault = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._sliderData = __s3param0;
    __s3local0.sliderType = __s3param1;
    __s3local0.enableComponent = true;
    __s3local0.sliderDown = false;
    __s3local0.setSelectedIndex(0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ScrollComponent, __s1param0);
  ScrollComponent.prototype.onClickSliderBar = function (__s5param0) {
    this.sliderDown = true;
    this.setSliderBtn(this._sliderType.transformMousePosition(this._sliderData.sliderBar, __s5param0));
    this.onSliding(null);
    this.sliderDown = false;
  };
  ScrollComponent.prototype.onSliderUp = function (__s7param0) {
    if (this._stageRef) {
      this._stageRef.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
      this._stageRef.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onSliding));
      this._stageRef = null;
    }
    if (this.sliderDown) {
      this.sliderDown = false;
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
      __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
    }
  };
  ScrollComponent.prototype.onSliderDown = function (__s11param0) {
    if (!this.sliderDown) {
      this.sliderDown = true;
      this._stageRef = this._sliderData.parent.stage;
      this._stageRef.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
      this._stageRef.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onSliding));
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  ScrollComponent.prototype.setSliderBtn = function (__s14param0) {
    var __s14local0 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s14param0, 0, this.sliderLength);
    this._sliderType.setPosition(this._sliderData.sliderButton, __s14local0);
  };
  ScrollComponent.prototype.onSliding = function (__s16param0) {
    if (this.sliderDown) {
      var __s16local0 = this._sliderType.getMousePosition(this._sliderData.sliderBar);
      var __s16local1 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s16local0, 0, this.sliderLength);
      var __s16local2 = this.sliderLength / Math.max(1, this.sliderSteps);
      var __s16local3 = Math.round(__s16local1 / __s16local2);
      this.setSelectedIndex(__s16local3);
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "selectedIndex", {
    get: function () {
      if (!this._selectedIndex || isNaN(this._selectedIndex)) {
        return 0;
      } else {
        return Math.max(this._selectedIndex, 0);
      }
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.prototype.setMaxIndex = function (__s23param0) {
    this._sliderData.numOfElements = __s23param0;
  };
  ScrollComponent.prototype.setSelectedIndex = function (__s25param0, __s25param1 = true) {
    var __s25local0 = this.sliderLength;
    var __s25local1 = this.sliderSteps;
    if (!__s25param0 || !!isNaN(__s25param0)) {
      __s25param0 = 0;
    }
    __s25param0 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s25param0, 0, __s25local1);
    var __s25local2 = 0;
    __s25local2 = this.sliderSteps == 0 ? this._centerButtonOnDefault ? __s25local0 / 2 : 0 : __s25param0 * __s25local0 / this.sliderSteps;
    this.setSliderBtn(__s25local2);
    if (__s25param0 != this._selectedIndex) {
      this._selectedIndex = __s25param0;
      if (__s25param1 || this._sliderDown) {
        this.dispatchEvent(new __dep_export_SliderEvent.SliderEvent(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this._selectedIndex));
      }
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "sliderLength", {
    get: function () {
      return this._sliderType.getElementLength(this._sliderData.sliderBar);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "enableComponent", {
    set: function (__s32param0) {
      this._enabled = __s32param0;
      if (this._colorMatrix == null) {
        this._colorMatrix = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
        this._colorMatrix.desaturate();
      }
      var __s32local0 = this._sliderData.parent;
      __s32local0.mouseEnabled = __s32param0;
      __s32local0.mouseChildren = __s32param0;
      if (__s32param0) {
        __s32local0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        __s32local0.useFilters([this._colorMatrix.filter]);
      }
      if (this._enabled) {
        this._sliderData.sliderButton.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
        this._sliderData.sliderBar.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickSliderBar));
        this._sliderData.sliderButton.actLikeButton = true;
        this._sliderData.changeCallback = this.bindFunction(this.update);
      } else {
        this._sliderData.sliderButton.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
        this._sliderData.sliderBar.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickSliderBar));
        if (this._stageRef) {
          this._stageRef.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
          this._stageRef.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onSliding));
          this._stageRef = null;
        }
        this._sliderData.changeCallback = null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.prototype.update = function () {
    this.setSelectedIndex(this._selectedIndex);
  };
  ScrollComponent.prototype.dispose = function () {
    if (this._enabled) {
      this._sliderData.sliderButton.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
      this._sliderData.sliderBar.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickSliderBar));
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onSliding));
      this._sliderData.changeCallback = null;
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "sliderType", {
    set: function (__s45param0) {
      this._sliderType = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "sliderDown", {
    get: function () {
      return this._sliderDown;
    },
    set: function (__s49param0) {
      this._sliderDown = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "percentValue", {
    get: function () {
      if (this.sliderSteps == 0) {
        return 0;
      } else {
        return this.selectedIndex / this.sliderSteps;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "sliderSteps", {
    get: function () {
      var __s55local0 = this._sliderData.numOfElements;
      return Math.max(0, __s55local0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "maxSliderSteps", {
    get: function () {
      return this._sliderData.numOfElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "centerButtonOnDefault", {
    set: function (__s59param0) {
      this._centerButtonOnDefault = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.__initialize_static_members = function () {
    ScrollComponent.VERTICAL_SLIDER = new __dep_export_VerticalSliderStrategy.VerticalSliderStrategy();
    ScrollComponent.HORIZONTAL_SLIDER = new __dep_export_HorizontalSliderStrategy.HorizontalSliderStrategy();
  };
  return ScrollComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.ScrollComponent = __s0local1;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local1.__initialize_static_members();
