Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicScreen = require("gge-module:class_BasicScreen");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_IdleScreenEvent = require("gge-module:class_IdleScreenEvent");
var __dep_class_SimplePreloadAnim = require("gge-module:class_SimplePreloadAnim");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function BasicIdleScreen(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicIdleScreen, __s1param0);
  BasicIdleScreen.prototype.drawBackground = function () {
    this.bg.alpha = 0.5;
    this.bg.graphics.clear().beginFill("#000000").drawRect(0, 0, this.disp.stage.stageWidth, this.disp.stage.stageHeight).endFill();
    this.idleScreenBackground.addChildAt(this.bg, 0);
  };
  BasicIdleScreen.prototype.applyProperties = function () {
    this.idleScreenBackground = new __s0local0();
    this.idleScreen.addChild(this.idleScreenBackground);
    this.loadingAnimation = new __dep_class_SimplePreloadAnim.SimplePreloadAnim();
    __dep_class_BasicController.BasicController.getInstance().addEventListener(__dep_class_IdleScreenEvent.IdleScreenEvent.SHOW, this.bindFunction(this.showScreen));
    __dep_class_BasicController.BasicController.getInstance().addEventListener(__dep_class_IdleScreenEvent.IdleScreenEvent.HIDE, this.bindFunction(this.hideScreen));
  };
  BasicIdleScreen.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.idleScreenBackground.addChild(this.loadingAnimation);
  };
  BasicIdleScreen.prototype.hide = function () {
    if (this.idleScreenBackground && this.idleScreenBackground.contains(this.loadingAnimation)) {
      this.idleScreenBackground.removeChild(this.loadingAnimation);
    }
    __s1param0.prototype.hide.call(this);
  };
  BasicIdleScreen.prototype.init = function () {
    __s1param0.prototype.init.call(this);
  };
  BasicIdleScreen.prototype.hideScreen = function (__s16param0) {
    this.hide();
  };
  BasicIdleScreen.prototype.onResize = function (__s18param0) {
    this.drawBackground();
  };
  BasicIdleScreen.prototype.showScreen = function (__s20param0) {
    this.drawBackground();
    this.show();
  };
  Object.defineProperty(BasicIdleScreen.prototype, "idleScreen", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicIdleScreen.NAME = "BasicIdleScreen";
  return BasicIdleScreen;
}(__dep_class_BasicScreen.BasicScreen);
exports.BasicIdleScreen = __s0local1;
