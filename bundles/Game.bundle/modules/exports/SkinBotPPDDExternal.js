Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_PPDDExternalPart = require("gge-module:export_PPDDExternalPart");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function SkinBotPPDDExternal(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, "PivatePrimeDayDynamicDialog_BG_Skin_Bot_" + __s3param1 + "_Z") || this;
    __s3local0.txtValues = __s3param2;
    __s3local0.closeFunction = __s3param3;
    if (__s3local0.isLoaded) {
      __s3local0.onDisplayObjectClipIsLoaded(null);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkinBotPPDDExternal, __s1param0);
  SkinBotPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (__s6param0 = null) {
    this.clipDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.btn_close);
    if (this.txtValues) {
      if (this.clipDisp.txt_title && this.txtValues[0]) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.txt_title, this.txtValues[0]);
      }
      if (this.clipDisp.txt_copy && this.txtValues[1]) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.txt_copy, this.txtValues[1]);
      }
    }
  };
  SkinBotPPDDExternal.prototype.onClick = function (__s11param0) {
    if (__s11param0.target == this.btn_close) {
      this.clipDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this.closeFunction();
    }
  };
  Object.defineProperty(SkinBotPPDDExternal.prototype, "btn_close", {
    get: function () {
      if (this.isLoaded) {
        return this.clipDisp.btn_close;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SkinBotPPDDExternal;
}(__dep_export_PPDDExternalPart.PPDDExternalPart);
exports.SkinBotPPDDExternal = __s0local1;
