Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ResourcePanelSublayerButton() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = new Library.CastleInterfaceElements.SpecialResourcePanelButton();
    __s3local0._disp.mouseChildren = false;
    __s3local0.displayObject.mc_storagebar0.visible = false;
    __s3local0.displayObject.mc_storagebar1.visible = false;
    __s3local0.displayObject.mc_storagebar2.visible = false;
    __s3local0.displayObject.mc_storagebar3.visible = false;
    __s3local0.displayObject.mc_boosted.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelSublayerButton, __s1param0);
  Object.defineProperty(ResourcePanelSublayerButton.prototype, "isBoosted", {
    set: function (__s5param0) {
      this.displayObject.mc_boosted.visible = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelSublayerButton.prototype.setResourceBars = function (__s7param0) {
    this._visibleResourceBars = [];
    for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
      if (__s7local0 <= ResourcePanelSublayerButton.LAST_STORAGE_BAR_INDEX) {
        var __s7local1 = this._disp["mc_storagebar" + __s7local0];
        __s7local1.visible = true;
        __s7local1.resourceType = __s7param0[__s7local0];
        this._visibleResourceBars.push(__s7local1);
      }
    }
    this.setBarAmounts();
  };
  ResourcePanelSublayerButton.prototype.setBarAmounts = function () {
    if (this._visibleResourceBars != null) {
      for (var __s12local0 = 0, __s12local1 = this._visibleResourceBars; __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2 !== undefined) {
          this.setStorageBar(__s12local2, __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s12local2.resourceType).filledInPercent);
        }
      }
    }
  };
  ResourcePanelSublayerButton.prototype.setStorageBar = function (__s18param0, __s18param1) {
    __s18param0.scaleX = __s18param1;
    var __s18local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s18local0.color = __s18param1 == 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __s18param1 >= 0.8 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW : __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_GREEN;
    __s18param0.useFilters([new createjs.ColorFilter(__s18local0.redMultiplier, __s18local0.greenMultiplier, __s18local0.blueMultiplier, __s18local0.alphaMultiplier, __s18local0.redOffset, __s18local0.greenOffset, __s18local0.blueOffset, __s18local0.alphaOffset)]);
  };
  Object.defineProperty(ResourcePanelSublayerButton.prototype, "displayObject", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelSublayerButton.__initialize_static_members = function () {
    ResourcePanelSublayerButton.LAST_STORAGE_BAR_INDEX = 3;
  };
  return ResourcePanelSublayerButton;
}(require("gge-module:export_AResourcePanelItem").AResourcePanelItem);
exports.ResourcePanelSublayerButton = __s0local0;
__s0local0.__initialize_static_members();
