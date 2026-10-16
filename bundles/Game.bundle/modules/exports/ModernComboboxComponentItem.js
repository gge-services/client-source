Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ModernComboboxComponentItem(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._assetClipName = __s3param0;
    __s3local0._assetFileName = __s3param1;
    __s3local0._fillContentFunc = __s3param2;
    __s3local0._data = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernComboboxComponentItem, __s1param0);
  ModernComboboxComponentItem.prototype.init = function () {
    this._dispCreator.init(this.disp);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1);
  };
  ModernComboboxComponentItem.prototype.createDisp = function () {
    this._dispCreator.cacheDisp = false;
    this._dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.assetClipName, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(this.assetFileName), null, 0, false));
  };
  ModernComboboxComponentItem.prototype.setHovered = function (__s9param0) {
    var __s9local0 = this.getItemMc();
    if (__s9local0.mc_background) {
      __s9local0.mc_background.gotoAndStop(__s9param0 ? 2 : 1);
    }
    if (__s9local0.mc_hover) {
      __s9local0.mc_hover.visible = __s9param0;
    }
    var __s9local1 = __s9local0.txt_text;
    if (__s9local1) {
      __s9local1.textColor = __s9param0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    }
  };
  ModernComboboxComponentItem.prototype.onAllClipsLoaded = function () {
    this.setHovered(false);
    if (this._fillContentFunc) {
      this._fillContentFunc(this);
    }
    __s1param0.prototype.onAllClipsLoaded.call(this);
  };
  ModernComboboxComponentItem.prototype.onRollOver = function (__s17param0) {
    __s1param0.prototype.onRollOver.call(this, __s17param0);
    if (this.isEnabled) {
      this.setHovered(true);
    }
  };
  ModernComboboxComponentItem.prototype.onRollOut = function (__s20param0) {
    this.setHovered(false);
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  ModernComboboxComponentItem.prototype.getItemMc = function () {
    var __s22local0 = this._dispCreator.firstClip;
    if (__s22local0) {
      return __s22local0.currentshownDisplayObject;
    } else {
      return null;
    }
  };
  Object.defineProperty(ModernComboboxComponentItem.prototype, "assetClipName", {
    get: function () {
      return this._assetClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernComboboxComponentItem.prototype, "assetFileName", {
    get: function () {
      return this._assetFileName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernComboboxComponentItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  return ModernComboboxComponentItem;
}(require("gge-module:export_ASimpleComboboxComponentItem").ASimpleComboboxComponentItem);
exports.ModernComboboxComponentItem = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
