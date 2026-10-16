Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialog = require("gge-module:export_CastleDialog");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleExternalPreloaderDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleExternalPreloader()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalPreloaderDialog, __s1param0);
  CastleExternalPreloaderDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this.dialogDisp.btn_close.visible = false;
    var __s5local0 = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByNameFromLibrary("LoadingAnimation"))();
    __s5local0.scaleX = __s5local0.scaleY = 3;
    this.dialogDisp.mc_loading.addChild(__s5local0);
  };
  CastleExternalPreloaderDialog.prototype.hide = function () {
    if (this.dialogDisp.mc_loading.numChildren > 0) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loading);
      if (this.disp && this.disp.parent) {
        this.disp.parent.removeChild(this.disp);
      }
      this.properties = null;
    }
    if (this.disp && this.disp.stage) {
      this.disp.stage.removeEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize));
    }
    if (this.disp) {
      this.disp.visible = false;
    }
    this.layoutManager.hideDialog(CastleExternalPreloaderDialog);
    this.destroyCollectableRenderList();
    this.removeEventListenerOnHide();
    this.layoutManager.restrictToHighestDialog();
  };
  CastleExternalPreloaderDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_close:
        this.dialogProperties.hideFunction();
        this.hide();
    }
  };
  Object.defineProperty(CastleExternalPreloaderDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPreloaderDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPreloaderDialog.__initialize_static_members = function () {
    CastleExternalPreloaderDialog.NAME = "CastleExternalPreloaderDialog";
  };
  return CastleExternalPreloaderDialog;
}(__dep_export_CastleDialog.CastleDialog);
exports.CastleExternalPreloaderDialog = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
