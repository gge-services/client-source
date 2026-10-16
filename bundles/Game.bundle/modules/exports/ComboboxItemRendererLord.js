Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererLord(__s3param0 = false) {
    var __s3local0 = this;
    __s3local0.useOldAsset = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).useOldAsset = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererLord, __s1param0);
  ComboboxItemRendererLord.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __s5param0.data;
    var __s5local1 = new this.itemMCClass();
    __s5local1.actLikeButton = true;
    __s5local1.mouseChildren = false;
    __s5local1.txt_lordName.defaultCacheScale = 2;
    __s5local1.itxt_item = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local1.txt_lordName, __s5local0.name, new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s5local1.itxt_item.mouseEnabled = false;
    if (__s5local1.bg) {
      __s5local1.bg.gotoAndStop(1);
    }
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s5local1.mc_featherHolder);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordFeather(__s5local0, __s5local1.mc_featherHolder, 0.65);
    if (__s5param2 > 0) {
      if (__s5local1.bg) {
        __s5local1.bg.width = __s5param2;
      }
      __s5local1.itxt_item.width = __s5param2 - __s5local1.comboSeparationItem.width - ComboboxItemRendererLord.FEATHER_WIDTH;
      __s5local1.comboSeparationItem.x = __s5local1.itxt_item.x + __s5local1.itxt_item.width + __s5local1.comboSeparationItem.width / 2;
      __s5local1.mc_featherHolder.x = __s5local1.comboSeparationItem.x + __s5local1.comboSeparationItem.width / 2 + ComboboxItemRendererLord.FEATHER_WIDTH / 2;
    }
    if (__s5local1.bg) {
      __s5local1.bg.height = __s5param3;
    }
    __s5local1.comboSeparationItem.height = __s5local1.bg.height;
    __s5local1.comboSeparationItem.y = __s5local1.bg.y;
    __s5local1.id = __s5param1;
    return __s5local1;
  };
  Object.defineProperty(ComboboxItemRendererLord.prototype, "itemMCClass", {
    get: function () {
      if (this.useOldAsset) {
        return __dep_exact_81dacdf05bd32292.getDefinitionByName("CastleLordComboboxItem_Toaster");
      } else {
        return __dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralOverviewLordComboboxItem");
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererLord.__initialize_static_members = function () {
    ComboboxItemRendererLord.FEATHER_WIDTH = 25;
  };
  return ComboboxItemRendererLord;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererLord = __s0local0;
__s0local0.__initialize_static_members();
