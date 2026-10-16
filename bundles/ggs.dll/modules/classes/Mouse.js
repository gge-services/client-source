Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_MouseCursor = require("gge-module:class_MouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_curObjectURLFromCanvas = require("gge-module:export_curObjectURLFromCanvas");
var __dep_class_BrowserInfo = require("gge-module:class_BrowserInfo");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
var __s0local1 = function () {
  function Mouse() {
    this._registeredCustomCursors = new Set();
    this._mouseCursor = {
      type: "css",
      cursor: __dep_class_MouseCursor.CSSMouseCursor.AUTO,
      fallbackCustomCursor: null
    };
    var __s3local0 = document.createElement("style");
    __s3local0.setAttribute("id", "custom-cursor-css");
    __s3local0.appendChild(document.createTextNode(""));
    document.head.appendChild(__s3local0);
    this._styleSheet = __s3local0.sheet;
    this._styleSheet.insertRule("body.custom-cursor-none { cursor: none; }", 0);
    this._styleSheet.insertRule("body.custom-cursor-" + __dep_class_MouseCursor.CSSMouseCursor.AUTO + " { cursor: auto; }", 0);
    this._styleSheet.insertRule("body.custom-cursor-" + __dep_class_MouseCursor.CSSMouseCursor.TEXT + " { cursor: text; }", 0);
  }
  Object.defineProperty(Mouse.prototype, "mouseCursor", {
    get: function () {
      return this._mouseCursor;
    },
    set: function (__s7param0) {
      var __s7local0 = this._mouseCursor;
      this._mouseCursor = __s7param0;
      document.body.classList.remove("custom-cursor-" + __s7local0.cursor);
      document.body.classList.add("custom-cursor-" + __s7param0.cursor);
    },
    enumerable: true,
    configurable: true
  });
  Mouse.instance = function () {
    return Mouse.mouseInstance;
  };
  Mouse.prototype.registerCursor = function (__s11param0, __s11param1) {
    if (this._registeredCustomCursors.has(__s11param0)) {
      __s0local0.warn("registerCursor: A custom cursor with name \"" + __s11param0 + "\" is already registered");
    } else {
      this._registeredCustomCursors.add(__s11param0);
      var __s11local0;
      var __s11local1 = __s11param1.data[0];
      __s11local1.updateImageData();
      if (__dep_class_BrowserInfo.currentBrowserInfo.isEdge || __dep_class_BrowserInfo.currentBrowserInfo.isIE) {
        var __s11local2 = document.createElement("canvas");
        __s11local2.width = 32;
        __s11local2.height = 32;
        __s11local2.getContext("2d").drawImage(__s11local1.canvas, 0, 0);
        __s11local0 = __dep_export_curObjectURLFromCanvas.curObjectURLFromCanvas(__s11local2);
        __s11local2.width = __s11local2.height = 0;
      } else {
        __s11local0 = __s11local1.canvas.toDataURL();
      }
      var __s11local3 = "body.custom-cursor-" + __s11param0 + " {cursor:url(" + __s11local0 + "), auto}";
      this._styleSheet.insertRule(__s11local3, 0);
    }
  };
  Mouse.prototype.hideCustomCursor = function () {
    if (this.mouseCursor.type === "custom") {
      this.mouseCursor = {
        type: "css",
        cursor: this.mouseCursor.fallbackCssCustor || __dep_class_MouseCursor.CSSMouseCursor.NONE,
        fallbackCustomCursor: this.mouseCursor.cursor
      };
    } else {
      __s0local0.info("Not using custom cursor, so nothing to hide");
    }
  };
  Mouse.prototype.showCustomCursor = function (__s21param0) {
    if (this.mouseCursor.cursor !== __s21param0) {
      if (!this._registeredCustomCursors.has(__s21param0)) {
        __s0local0.warn("showCustomCursor: Custom cursor with name \"" + __s21param0 + "\" is not registered");
      }
      if (this.mouseCursor.type === "custom") {
        this.mouseCursor = {
          type: "custom",
          cursor: __s21param0,
          fallbackCssCustor: this.mouseCursor.fallbackCssCustor
        };
      } else {
        this.mouseCursor = {
          type: "custom",
          cursor: __s21param0,
          fallbackCssCustor: this.mouseCursor.cursor
        };
      }
    }
  };
  Mouse.prototype.showCssCursor = function (__s27param0) {
    if (this.mouseCursor.type === "custom") {
      this.mouseCursor = {
        type: "css",
        cursor: __s27param0,
        fallbackCustomCursor: this.mouseCursor.cursor
      };
    } else {
      if (__s27param0 === this.mouseCursor.cursor) {
        return;
      }
      this.mouseCursor = {
        type: "css",
        cursor: __s27param0,
        fallbackCustomCursor: this.mouseCursor.fallbackCustomCursor
      };
    }
  };
  Mouse.mouseInstance = new Mouse();
  return Mouse;
}();
exports.Mouse = __s0local1;
