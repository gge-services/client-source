Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleIngameMessagePopup(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).dispBounds = __s3param0.getBounds(null);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleIngameMessagePopup, __s1param0);
  CastleIngameMessagePopup.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.removeBackground();
  };
  CastleIngameMessagePopup.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.tweenIn();
    window.setTimeout(this.bindFunction(this.tweenOut), 2500);
  };
  CastleIngameMessagePopup.prototype.hide = function () {
    if (Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent.prototype, "disp").get.call(this) && Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent.prototype, "disp").get.call(this).stage) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent.prototype, "disp").get.call(this).stage.removeEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize));
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent.prototype, "disp").get.call(this).visible = false;
    }
    __dep_export_CastleIngameMessageHandler.CastleIngameMessageHandler.getInstance().onHideCurrentMessage();
  };
  CastleIngameMessagePopup.prototype.tweenIn = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  CastleIngameMessagePopup.prototype.tweenOut = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.hide)
    });
  };
  CastleIngameMessagePopup.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s16local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        __s16local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s16local0) {
        __s16local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * __s16local0 - this.dispBounds.width * __s16local0 * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.top * __s16local0 - this.dispBounds.height * __s16local0 * 0.5 + (this.disp.stage.stageHeight - 135);
      this.disp.scaleX = this.disp.scaleY = __s16local0;
      this.disp.x = __dep_exact_f855840627e6e145.int(this.disp.x);
      this.disp.y = __dep_exact_f855840627e6e145.int(this.disp.y);
    }
  };
  Object.defineProperty(CastleIngameMessagePopup.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessagePopup.__initialize_static_members = function () {
    CastleIngameMessagePopup.NAME = "CastleIngameMessagePopup";
  };
  return CastleIngameMessagePopup;
}(__dep_exact_9e901e8e2483a22f.BasicDialog);
exports.CastleIngameMessagePopup = __s0local1;
var __dep_export_CastleIngameMessageHandler = require("gge-module:export_CastleIngameMessageHandler");
__s0local1.__initialize_static_members();
