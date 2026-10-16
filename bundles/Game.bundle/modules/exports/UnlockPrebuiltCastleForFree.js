Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AUnlockPrebuiltCastle = require("gge-module:export_AUnlockPrebuiltCastle");
var __s0local0 = function (__s1param0) {
  function UnlockPrebuiltCastleForFree(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.subLayerDisp.btn_unlock);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_free, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_detailsDialog_forFree_eyecatcher"));
    __s3local0.txt_btn = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_unlock.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.txt_btn.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnlockPrebuiltCastleForFree, __s1param0);
  UnlockPrebuiltCastleForFree.prototype.update = function (__s5param0) {
    __s1param0.prototype.update.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_unlock, true);
    this.txt_btn.textContentVO.textId = this.unlockButtonTextId;
  };
  Object.defineProperty(UnlockPrebuiltCastleForFree.prototype, "unlockTypeTextId", {
    get: function () {
      return "free";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnlockPrebuiltCastle.AUnlockPrebuiltCastle.prototype, "unlockTypeTextId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForFree.prototype.onClick = function (__s11param0) {
    if (__s11param0.target == this.subLayerDisp.btn_unlock) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent));
    }
  };
  UnlockPrebuiltCastleForFree.prototype.onUnlockRequestSent = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_unlock);
  };
  return UnlockPrebuiltCastleForFree;
}(__dep_export_AUnlockPrebuiltCastle.AUnlockPrebuiltCastle);
exports.UnlockPrebuiltCastleForFree = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
