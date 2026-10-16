Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicDialogHandler = require("gge-module:class_BasicDialogHandler");
var __dep_class_FlashUIComponent = require("gge-module:class_FlashUIComponent");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Shape;
var __s0local2 = function (__s1param0) {
  function BasicDialog(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.showBackground = true;
    __s3local0.backgroundAlpha = 0.3;
    __s3local0.backgroundColor = "#000000";
    __s3local0.dispBounds = __s3param0.getBounds();
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicDialog, __s1param0);
  BasicDialog.prototype.onBGAddedToStage = function (__s5param0) {
    this.bg.removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.bg.updateBounds();
    this.bg.width = this.bg.stage.stageWidth;
    this.bg.height = this.bg.stage.stageHeight;
    this.bg.x = -this.disp.x;
    this.bg.y = -this.disp.y;
    this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(this.bg.x, this.bg.y, this.bg.width, this.bg.height).endFill();
    if (this.bg.cacheCanvas) {
      this.bg.updateCache();
    } else {
      this.bg.cache(this.bg.x, this.bg.y, this.bg.width, this.bg.height);
    }
  };
  BasicDialog.prototype.init = function () {
    this.initBackground();
    __s1param0.prototype.init.call(this);
    this.addEventListenerOnInit();
  };
  BasicDialog.prototype.addEventListenerOnInit = function () {};
  BasicDialog.prototype.initBackground = function () {
    this.bg = new __s0local1();
    if (this.showBackground) {
      this.bg.alpha = this.backgroundAlpha;
    } else {
      this.bg.alpha = 0;
    }
    this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(0, 0, 1, 1).endFill();
    this.bg.addEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.disp.addChildAt(this.bg, 0);
  };
  BasicDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.addEventListenerOnShow();
  };
  BasicDialog.prototype.addEventListenerOnShow = function () {};
  BasicDialog.prototype.removeBackground = function () {
    if (this.bg) {
      if (this.disp.contains(this.bg)) {
        this.disp.removeChild(this.bg);
      }
      this.bg.uncache();
      this.bg = null;
    }
  };
  BasicDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.removeEventListenerOnHide();
    this.basicDialogHandler.onHideCurrentDialog();
  };
  BasicDialog.prototype.removeEventListenerOnHide = function () {};
  BasicDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListenerOnDestroy();
  };
  BasicDialog.prototype.removeEventListenerOnDestroy = function () {};
  BasicDialog.prototype.onResize = function (__s33param0) {
    this.updateBackground();
  };
  BasicDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.width = this.bg.stage.width / this.disp.scaleX;
      this.bg.width = this.bg.stage.height / this.disp.scaleY;
      this.bg.x = -this.disp.x / this.disp.scaleX;
      this.bg.y = -this.disp.y / this.disp.scaleY;
      this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(this.bg.x, this.bg.y, this.bg.width, this.bg.height).endFill();
      if (this.bg.cacheCanvas) {
        this.bg.updateCache();
      } else {
        this.bg.cache(this.bg.x, this.bg.y, this.bg.width, this.bg.height);
      }
    }
  };
  BasicDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s40local0 = 1;
      var __s40local1 = 1;
      var __s40local2 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        __s40local1 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s40local0) {
        __s40local2 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      __s40local0 = __s40local1 < __s40local2 ? __s40local1 : __s40local2;
      this.disp.x = -this.dispBounds.x * __s40local0 - this.dispBounds.width * __s40local0 * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.y * __s40local0 - this.dispBounds.height * __s40local0 * 0.5 + this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s40local0;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
    }
  };
  Object.defineProperty(BasicDialog.prototype, "basicDialogHandler", {
    get: function () {
      return __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicDialog.prototype.onMouseOver = function (__s47param0) {
    this.onCursorOver(__s47param0);
  };
  BasicDialog.prototype.onMouseOut = function (__s49param0) {
    this.onCursorOut(__s49param0);
  };
  BasicDialog.prototype.onCursorOver = function (__s51param0) {};
  BasicDialog.prototype.onCursorOut = function (__s53param0) {};
  BasicDialog.prototype.checkWaitingAnimState = function (__s55param0) {};
  Object.defineProperty(BasicDialog.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialog.NAME = "BasicDialog";
  return BasicDialog;
}(__dep_class_FlashUIComponent.FlashUIComponent);
exports.BasicDialog = __s0local2;
