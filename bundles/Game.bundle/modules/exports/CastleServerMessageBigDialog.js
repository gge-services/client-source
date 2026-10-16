Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleDialog = require("gge-module:export_CastleDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleServerMessageBigDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleServerMessageBig()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleServerMessageBigDialog, __s1param0);
  CastleServerMessageBigDialog.prototype.applyProperties = function () {
    this.textFieldManager.registerTextField(this.dialog.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.title));
  };
  CastleServerMessageBigDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (!this.htmlText) {
      var __s7local0 = this.dialog.localToGlobal(new __s0local0(this.dialog.txt_copy.x, this.dialog.txt_copy.y));
      var __s7local1 = this.dialog.txt_copy.getTextFormat();
      this.htmlText = document.createElement("div");
      this.htmlText.style.overflow = "auto";
      this.htmlText.style.height = this.dialog.txt_copy.height + "px";
      this.htmlText.style.width = this.dialog.txt_copy.width + "px";
      this.htmlText.style.position = "absolute";
      this.htmlText.style.left = __s7local0.x + "px";
      this.htmlText.style.top = __s7local0.y + "px";
      this.htmlText.style.fontFamily = __s7local1.font;
      this.htmlText.style.fontSize = __s7local1.size + "px";
      this.htmlText.style.whiteSpace = "pre-wrap";
      this.htmlText.innerHTML = this.dialogProperties.copy;
      document.body.appendChild(this.htmlText);
    }
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onTopDialogChanged));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onTopDialogChanged));
  };
  CastleServerMessageBigDialog.prototype.onTopDialogChanged = function (__s10param0) {
    var __s10local0 = this.layoutManager.highestShownDialog;
    this.htmlText.style.visibility = __s10local0 && this == __s10local0 ? "visible" : "hidden";
  };
  CastleServerMessageBigDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialog.btn_close:
        this.hide();
    }
  };
  CastleServerMessageBigDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.htmlText) {
      this.htmlText.parentElement.removeChild(this.htmlText);
      this.htmlText = null;
    }
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onTopDialogChanged));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onTopDialogChanged));
  };
  Object.defineProperty(CastleServerMessageBigDialog.prototype, "dialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleServerMessageBigDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleServerMessageBigDialog.__initialize_static_members = function () {
    CastleServerMessageBigDialog.NAME = "CastleServerMessageBigDialog";
  };
  return CastleServerMessageBigDialog;
}(__dep_export_CastleDialog.CastleDialog);
exports.CastleServerMessageBigDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
