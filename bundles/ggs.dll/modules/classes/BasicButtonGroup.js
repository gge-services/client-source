Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ButtonHelper = require("gge-module:class_ButtonHelper");
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function BasicButtonGroup(__s3param0, __s3param1 = true) {
    this._buttons = __s3param0;
    if (__s3param1) {
      this.initButtons();
    }
  }
  BasicButtonGroup.prototype.selectButton = function (__s6param0) {
    if (this._buttons != null) {
      for (var __s6local0 = 0, __s6local1 = this._buttons; __s6local0 < __s6local1.length; __s6local0++) {
        var __s6local2 = __s6local1[__s6local0];
        __s6local2.selectButton = __s6local2 == __s6param0;
      }
    }
  };
  Object.defineProperty(BasicButtonGroup.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  BasicButtonGroup.prototype.getSelectedButtonIndex = function () {
    for (var __s13local0 = 0; __s13local0 < this._buttons.length; ++__s13local0) {
      if (__dep_class_ButtonHelper.ButtonHelper.isButtonSelected(this._buttons[__s13local0])) {
        return __s13local0;
      }
    }
    return -1;
  };
  BasicButtonGroup.prototype.initButtons = function () {
    if (this._buttons != null) {
      for (var __s18local0 = 0, __s18local1 = this._buttons; __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        this.addListeners(__s18local2);
      }
    }
  };
  BasicButtonGroup.prototype.click = function (__s23param0) {
    var __s23local0 = __s23param0.currentTarget;
    this.selectButton(__s23local0.basicButton);
  };
  BasicButtonGroup.prototype.removedFromStage = function (__s25param0) {
    var __s25local0 = __s25param0.currentTarget;
    this.removeListeners(__s25local0);
    if (__s25local0 && __s25local0.disp) {
      __s25local0.disp.addEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.addedToStage), false, 0, true);
    }
  };
  BasicButtonGroup.prototype.addedToStage = function (__s28param0) {
    var __s28local0 = __s28param0.target;
    this.addListeners(__s28local0.basicButton);
  };
  BasicButtonGroup.prototype.addListeners = function (__s30param0) {
    __s30param0.disp.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.removedFromStage));
    __s30param0.disp.addEventListener("click", this.bindFunction(this.click));
  };
  BasicButtonGroup.prototype.removeListeners = function (__s32param0) {
    if (__s32param0 && __s32param0.disp) {
      __s32param0.disp.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.removedFromStage));
      __s32param0.disp.removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
      __s32param0.disp.removeEventListener("click", this.bindFunction(this.click));
    }
  };
  return BasicButtonGroup;
}();
exports.BasicButtonGroup = __s0local1;
