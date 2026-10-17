// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 603
// Export: InputTextFieldService; preserved source: modules/webpack/exports/InputTextFieldService.js
// Original canonical SHA-256: 6ef719c388dfed006e355c42400f274448d44dde570a8f6bc3e129f442ebd36b
var __s0local1 = function () {
  function InputTextFieldService() {
    var __s3local0 = this;
    this.inputFields = new Set();
    window.addEventListener("keydown", function (__s5param0) {
      return __s3local0.handleWindowKeyDown(__s5param0);
    });
  }
  InputTextFieldService.prototype.registerInputField = function (__s7param0) {
    var __s7local0 = this;
    if (__s7param0.type != __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT) {
      __s0local0.warn("The given textfield is not setup correctly to be used as an input field");
    } else if (!this.inputFields.has(__s7param0)) {
      this.inputFields.add(__s7param0);
      var __s7local1 = __s7param0.getTextFieldHTMLElement();
      if (__s7local1) {
        __s7local1.addEventListener("keydown", function (__s12param0) {
          return __s7local0.handleKeyDown(__s7param0, __s12param0);
        });
      }
    }
  };
  InputTextFieldService.prototype.handleWindowKeyDown = function (__s14param0) {
    if (!Array.from(this.inputFields.values()).filter(function (__s16param0) {
      return __s16param0.isFocused;
    })[0]) {
      this.handleKeyDown(null, __s14param0);
    }
  };
  InputTextFieldService.prototype.handleKeyDown = function (__s19param0, __s19param1) {
    if (__s19param1.key === "Tab" || __s19param1.code === "Tab") {
      if (__s19param0) {
        __s19param0.blur();
      }
      var __s19local0 = this.nextTextField(__s19param0, __s19param1.shiftKey ? "up" : "down");
      if (__s19local0) {
        __s19param1.preventDefault();
        __s19local0.focus();
      }
    }
  };
  InputTextFieldService.prototype.nextTextField = function (__s24param0, __s24param1) {
    var __s24local0 = this;
    var __s24local1 = __s24param0 ? __dep_export_getUpperLeftCorner.getUpperLeftCorner(__s24param0) : {
      x: 0,
      y: 0
    };
    var __s24local2 = Array.from(this.inputFields.values()).filter(function (__s26param0) {
      return __s26param0 !== __s24param0 && isVisibleOnStage(__s26param0);
    }).map(function (__s28param0) {
      return {
        textField: __s28param0,
        position: __dep_export_getUpperLeftCorner.getUpperLeftCorner(__s28param0)
      };
    }).map(function (__s30param0) {
      var __s30local0 = __s30param0.textField;
      var __s30local1 = __s30param0.position;
      return {
        textField: __s30local0,
        position: __s30local1,
        inRightDirection: __s24local0.isInRightDirection(__s30local1, __s24local1, __s24param1)
      };
    }).sort(function (__s32param0, __s32param1) {
      var __s32local0 = __s32param0.position;
      var __s32local1 = __s32param0.inRightDirection;
      var __s32local2 = __s32param1.position;
      if (__s32local1 == __s32param1.inRightDirection) {
        var __s32local3 = __s24param1 == "up" ? -1 : 1;
        if (__s32local0.y === __s32local2.y) {
          return __s32local3 * (__s32local0.x - __s32local2.x);
        } else {
          return __s32local3 * (__s32local0.y - __s32local2.y);
        }
      }
      if (__s32local1) {
        return -1;
      } else {
        return 1;
      }
    })[0];
    if (__s24local2) {
      return __s24local2.textField;
    } else {
      return undefined;
    }
  };
  InputTextFieldService.prototype.isInRightDirection = function (__s41param0, __s41param1, __s41param2) {
    switch (__s41param2) {
      case "up":
        if (__s41param0.y === __s41param1.y) {
          return __s41param0.x <= __s41param1.x;
        } else {
          return __s41param0.y <= __s41param1.y;
        }
      case "down":
        if (__s41param0.y === __s41param1.y) {
          return __s41param0.x >= __s41param1.x;
        } else {
          return __s41param0.y >= __s41param1.y;
        }
      default:
        return false;
    }
  };
  InputTextFieldService.prototype.unregisterInputField = function (__s48param0) {
    this.inputFields.delete(__s48param0);
    __s0local0.warn("The given textfield has not been registered. Skipping removal...");
  };
  InputTextFieldService.singleton = function () {
    if (InputTextFieldService.INSTANCE === undefined) {
      InputTextFieldService.INSTANCE = new InputTextFieldService();
    }
    return InputTextFieldService.INSTANCE;
  };
  return InputTextFieldService;
}();
exports.InputTextFieldService = __s0local1;
