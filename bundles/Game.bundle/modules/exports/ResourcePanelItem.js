Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __s0local0 = function (__s1param0) {
  function ResourcePanelItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._iconFrame = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = new Library.CastleInterfaceElements.ResourcePanelContainer();
    __s3local0._disp.mc_icon.gotoAndStop(__s3param0);
    __s3local0._disp.mouseChildren = false;
    __s3local0._iconFrame = __s3param0;
    __s3local0.isStorageBarVisible = true;
    __s3local0._disp.hunterBoostIndicator.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelItem, __s1param0);
  ResourcePanelItem.prototype.setValue = function (__s5param0) {
    if (!isFinite(__s5param0)) {
      __s5param0 = 0;
    }
    if (!this._dispTextValue || !this._dispTextValue.textContentVO || this._dispTextValue.textContentVO.numberValue !== __s5param0) {
      var __s5local0 = 0;
      switch (true) {
        case __s5param0 < 1000000:
        case __s5param0 >= 10000000:
          __s5local0 = 0;
          break;
        default:
          __s5local0 = 2;
      }
      if (this._dispTextValue && this._dispTextValue.textContentVO) {
        this._dispTextValue.textContentVO.numberValue = __s5param0;
      } else {
        this._dispTextValue = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0, {
          compactThreshold: 100000,
          compactFractionalDigits: __s5local0
        }, __s5local0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      }
      this._dispTextValue.autoFitToBounds = true;
    }
  };
  ResourcePanelItem.prototype.setBoostIndicator = function (__s12param0, __s12param1) {
    this.displayObject.hunterBoostIndicator.visible = __s12param0;
    if (__s12param1) {
      this.displayObject.hunterBoostIndicator.gotoAndStop(2);
    } else {
      this.displayObject.hunterBoostIndicator.gotoAndStop(1);
    }
  };
  Object.defineProperty(ResourcePanelItem.prototype, "isBoosted", {
    set: function (__s16param0) {
      this.displayObject.mc_boosted.visible = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "isValueRed", {
    set: function (__s18param0) {
      if (this._dispTextValue && this._dispTextValue.textContentVO) {
        this._dispTextValue.color = __s18param0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "isStorageBarVisible", {
    set: function (__s21param0) {
      this.displayObject.mc_storagebar.visible = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelItem.prototype.setStorageBar = function (__s23param0) {
    __s23param0 = parseFloat(__s23param0.toFixed(2));
    this.displayObject.mc_storagebar.scaleX = __s23param0;
    var __s23local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s23local0.color = __s23param0 >= 1 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __s23param0 >= 0.8 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_YELLOW : __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_GREEN;
    this.displayObject.mc_storagebar.useFilters([new createjs.ColorFilter(__s23local0.redMultiplier, __s23local0.greenMultiplier, __s23local0.blueMultiplier, __s23local0.alphaMultiplier, __s23local0.redOffset, __s23local0.greenOffset, __s23local0.blueOffset, __s23local0.alphaOffset)]);
  };
  Object.defineProperty(ResourcePanelItem.prototype, "iconFrame", {
    get: function () {
      return this._iconFrame;
    },
    set: function (__s27param0) {
      this._iconFrame = __s27param0;
      this.displayObject.mc_icon.gotoAndStop(this._iconFrame);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "displayObject", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    set: function (__s33param0) {
      this._resourceType = __s33param0;
      this._isResourceContainer = true;
      this.disp.resourceType = this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelItem.prototype.setFrozen = function () {
    this._dispTextValue.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    var __s35local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s35local0.color = ResourcePanelItem.COLOR_BAR_FROZEN;
    this.displayObject.mc_storagebar.useFilters([new createjs.ColorFilter(__s35local0.redMultiplier, __s35local0.greenMultiplier, __s35local0.blueMultiplier, __s35local0.alphaMultiplier, __s35local0.redOffset, __s35local0.greenOffset, __s35local0.blueOffset, __s35local0.alphaOffset)]);
    this.displayObject.bg.gotoAndStop(2);
  };
  ResourcePanelItem.__initialize_static_members = function () {
    ResourcePanelItem.ICON_FRAME_WOOD = 1;
    ResourcePanelItem.ICON_FRAME_STONE = 2;
    ResourcePanelItem.ICON_FRAME_FOOD = 3;
    ResourcePanelItem.ICON_FRAME_POPULATION = 4;
    ResourcePanelItem.ICON_FRAME_UNITCOUNT = 5;
    ResourcePanelItem.ICON_FRAME_COAL = 6;
    ResourcePanelItem.ICON_FRAME_OLIVEOIL = 7;
    ResourcePanelItem.ICON_FRAME_GLASS = 8;
    ResourcePanelItem.ICON_FRAME_AQUAMARINE = 9;
    ResourcePanelItem.ICON_FRAME_IRON = 11;
    ResourcePanelItem.ICON_FRAME_AUXCOUNT = 12;
    ResourcePanelItem.ICON_FRAME_HONEY = 13;
    ResourcePanelItem.ICON_FRAME_MEAD = 14;
    ResourcePanelItem.ICON_FRAME_BEEF = 17;
  };
  ResourcePanelItem.ICON_FRAME_FOOD_FROZEN = 15;
  ResourcePanelItem.ICON_FRAME_MEAD_FROZEN = 16;
  ResourcePanelItem.ICON_FRAME_BEEF_FROZEN = 18;
  ResourcePanelItem.COLOR_BAR_FROZEN = 2211055;
  return ResourcePanelItem;
}(require("gge-module:export_AResourcePanelItem").AResourcePanelItem);
exports.ResourcePanelItem = __s0local0;
__s0local0.__initialize_static_members();
