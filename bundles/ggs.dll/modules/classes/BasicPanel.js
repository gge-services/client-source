Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function (__s1param0) {
  function BasicPanel(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isLocked = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicPanel, __s1param0);
  BasicPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.addEventListenerOnInit();
  };
  BasicPanel.prototype.addEventListenerOnInit = function () {};
  BasicPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.addEventListenerOnShow();
  };
  BasicPanel.prototype.addEventListenerOnShow = function () {};
  BasicPanel.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.removeEventListenerOnHide();
  };
  BasicPanel.prototype.removeEventListenerOnHide = function () {};
  BasicPanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListenerOnDestroy();
  };
  BasicPanel.prototype.removeEventListenerOnDestroy = function () {};
  Object.defineProperty(BasicPanel.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicPanel.prototype.onMouseOver = function (__s23param0) {
    this.onCursorOver(__s23param0);
  };
  BasicPanel.prototype.onMouseOut = function (__s25param0) {
    this.onCursorOut(__s25param0);
  };
  BasicPanel.prototype.onCursorOver = function (__s27param0) {};
  BasicPanel.prototype.onCursorOut = function (__s29param0) {};
  BasicPanel.prototype.lockPanel = function () {
    this._isLocked = true;
  };
  BasicPanel.prototype.unLockPanel = function () {
    this._isLocked = false;
  };
  Object.defineProperty(BasicPanel.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  BasicPanel.prototype.checkWaitingAnimState = function (__s37param0) {};
  return BasicPanel;
}(require("gge-module:class_FlashUIComponent").FlashUIComponent);
exports.BasicPanel = __s0local0;
