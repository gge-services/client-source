Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ADynamicTabPackageShopDialog(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._currencies = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADynamicTabPackageShopDialog, __s1param0);
  ADynamicTabPackageShopDialog.prototype.initTabsByPackages = function (__s5param0, __s5param1 = null, __s5param2 = "tab_", __s5param3 = 12) {
    this._subLayer = new Map();
    this._tabMcPrefix = __s5param2;
    this._maxTabs = __s5param3;
    var __s5local0 = [];
    var __s5local1 = function (__s7param0) {
      var __s7local0 = __s7param0.getCostList().getItemByIndex(0);
      if (!__s5local0.some(function (__s9param0) {
        return __dep_export_CollectableHelper.CollectableHelper.haveSameIdAndType(__s9param0, __s7local0);
      })) {
        __s5local0.push(__s7local0.clone());
      }
    };
    for (var __s5local2 = 0, __s5local3 = this.getEventPackages(); __s5local2 < __s5local3.length; __s5local2++) {
      __s5local1(__s5local3[__s5local2]);
    }
    if (__s5param1) {
      __s5local0.sort(__s5param1);
    }
    this._currencies = __s5local0.map(function (__s15param0) {
      return new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s15param0);
    });
    this._defaultSublayer ||= new __s5param0(this.dialogDisp.tab_shop, this.dialogClassName);
    for (var __s5local4 = 0; __s5local4 < __s5param3; __s5local4++) {
      var __s5local5 = this.dialogDisp[__s5param2 + __s5local4];
      if (__s5local5) {
        if (__s5local4 < __s5local0.length) {
          __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local5], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
          var __s5local6 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(32, 32));
          __s5local6.icon.useDropShadowIcon = true;
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local5), __s5local0[__s5local4], __s5local6);
          __s5local5.toolTipText = __s5local0[__s5local4].getTooltipTextId();
          this._subLayer.set(__s5local4.toString(), this._defaultSublayer);
        } else {
          __s5local5.visible = false;
        }
      }
    }
  };
  ADynamicTabPackageShopDialog.prototype.changeCategory = function (__s22param0) {
    if (this._currentCategory != __s22param0) {
      __s1param0.prototype.changeCategory.call(this, __s22param0);
      this.showSublayer(this._subLayer.get(__s22param0), [this._currencies[parseInt(__s22param0)]]);
      for (var __s22local0 = 0; __s22local0 < this._maxTabs; __s22local0++) {
        var __s22local1 = this.dialogDisp[this._tabMcPrefix + __s22local0];
        if (__s22local1) {
          __s22local2 = __s22local1;
          __s22local3 = __s22local0.toString() == this._currentCategory;
          __s22local2.mc_selected.visible = __s22local3;
        }
      }
      var __s22local2;
      var __s22local3;
    }
  };
  ADynamicTabPackageShopDialog.prototype.onClick = function (__s28param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      __s1param0.prototype.onClick.call(this, __s28param0);
      if (__s28param0.target.name && __s28param0.target.name.startsWith(this._tabMcPrefix)) {
        this.changeCategory(__s28param0.target.name.replace(this._tabMcPrefix, ""));
      }
    }
  };
  ADynamicTabPackageShopDialog.prototype.getEventPackages = function () {
    return [];
  };
  return ADynamicTabPackageShopDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.ADynamicTabPackageShopDialog = __s0local1;
