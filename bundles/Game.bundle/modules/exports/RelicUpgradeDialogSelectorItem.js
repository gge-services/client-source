Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RelicUpgradeDialogSelectorItem(__s3param0, __s3param1 = -1) {
    var __s3local0 = __s1param0.call(this, null, __s3param1) || this;
    __s3local0._onSelected = new __dep_exact_5c7bc328fca9e4de.Signal(RelicUpgradeDialogSelectorItem);
    __s3local0._disp = __s3local0._clip.currentshownDisplayObject;
    __s3local0._relicVO = __s3param0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogSelectorItem, __s1param0);
  RelicUpgradeDialogSelectorItem.prototype.preConstructorBG = function (__s5param0) {
    this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(RelicUpgradeDialogSelectorItem.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_RelicUpgradeDialog.RelicUpgradeDialog.NAME));
    this._lordID = __s5param0;
  };
  RelicUpgradeDialogSelectorItem.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1.02);
    this.update();
  };
  RelicUpgradeDialogSelectorItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._clip = null;
  };
  RelicUpgradeDialogSelectorItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setSelection(false);
  };
  RelicUpgradeDialogSelectorItem.prototype.update = function () {
    var __s13local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(61, 61));
    __s13local0.icon.useFavIcon = true;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp), this.relicVO, __s13local0);
  };
  RelicUpgradeDialogSelectorItem.prototype.setSelection = function (__s15param0) {
    this.disp.mc_select.visible = __s15param0;
  };
  RelicUpgradeDialogSelectorItem.prototype.isSelected = function () {
    return this.disp.mc_select.visible;
  };
  RelicUpgradeDialogSelectorItem.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      __s1param0.prototype.onClick.call(this, __s19param0);
      this._onSelected.dispatch(this);
    }
  };
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "relicVO", {
    get: function () {
      return this._relicVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "onSelected", {
    get: function () {
      return this._onSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "filterType", {
    get: function () {
      return this._filterType;
    },
    set: function (__s28param0) {
      this._filterType = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelectorItem.ASSET_CLIP_NAME = "RelicUpgrade_Selection_Item";
  return RelicUpgradeDialogSelectorItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogSelectorItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_RelicUpgradeDialog = require("gge-module:export_RelicUpgradeDialog");
