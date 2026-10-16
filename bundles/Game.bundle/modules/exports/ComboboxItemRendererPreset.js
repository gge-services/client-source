Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePresetComboboxItemRendererEvent = require("gge-module:export_CastlePresetComboboxItemRendererEvent");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ComboboxItemRendererPreset() {
    var __s3local0 = this;
    __s3local0.BTN_WIDTH = 23;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererPreset, __s1param0);
  ComboboxItemRendererPreset.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = this;
    var __s5local1 = new this.itemMCClass();
    __s5local1.actLikeButton = true;
    __s5local1.mouseChildren = false;
    __s5local1.txt_label.defaultCacheScale = 2;
    var __s5local2 = __s5param0.data;
    if (__s5local2.unlocked) {
      __s5local1.gotoAndStop(1);
      var __s5local3 = __s5local1.btn_options;
      __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s5local3]);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s5local3, __dep_export_CastleModel.CastleModel.fightPresetData.multiWaveUnlocked);
      if (__dep_export_CastleModel.CastleModel.fightPresetData.multiWaveUnlocked) {
        __s5local3.toolTipText = "dialog_troopPreset_changePresetName_tt";
      } else {
        __s5local3.toolTipText = "dialog_troopPreset_changePresetName_noSlotPurchased_tt";
      }
      __s5local1.mouseChildren = true;
      for (var __s5local4 = 0; __s5local4 < __s5local1.numChildren; __s5local4++) {
        var __s5local5 = __s5local1.getChildAt(__s5local4);
        if (__s5local5 != __s5local3 && __s5local5 != __s5local1.bg && "mouseEnabled" in __s5local5) {
          __s5local5.mouseEnabled = false;
        }
        if ("mouseChildren" in __s5local5) {
          __s5local5.mouseChildren = false;
        }
      }
      __s5local3.presetVO = __s5local2;
      __s5local3.addEventListener(__s0local0.CLICK, this.bindFunction(this.handleOptions));
      __s5local1.tooltipText = "";
      __s5local1.itxt_item = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local1.txt_label, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      __s5local1.itxt_item.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      __s5local1.itxt_item.mouseEnabled = false;
      __s5local1.bg.gotoAndStop(1);
      if (__s5param2 > 0) {
        __s5local1.bg.width = __s5param2;
        __s5local1.itxt_item.width = __s5param2 - __s5local1.comboSeparationItem.width - this.BTN_WIDTH;
        __s5local1.comboSeparationItem.x = __s5local1.itxt_item.x + __s5local1.itxt_item.width + __s5local1.comboSeparationItem.width / 2;
        __s5local1.btn_options.x = __s5local1.comboSeparationItem.x + __s5local1.comboSeparationItem.width / 2 + this.BTN_WIDTH / 2;
      }
      __s5local1.bg.height = __s5param3;
      __s5local1.comboSeparationItem.height = __s5local1.bg.height;
      __s5local1.comboSeparationItem.y = __s5local1.bg.y;
      __s5local1.btn_options.y = __s5local1.bg.y + __s5local1.bg.height / 2;
      function __s7local0(__s15param0) {
        var __s15local0 = __s15param0.clone();
        __s15local0.target = __s15param0.target.parent;
        __s5local1.dispatchEvent(__s15local0);
      }
      __s5local1.bg.addEventListener(__s0local0.MOUSE_UP, __s7local0);
      __s5local1.bg.addEventListener(__s0local0.MOUSE_OVER, __s7local0);
      __s5local1.bg.addEventListener(__s0local0.MOUSE_OUT, __s7local0);
      __s5local1.bg.addEventListener(__s0local0.MOUSE_WHEEL, __s7local0);
      function __s7local1(__s17param0) {
        __s5local1.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, __s7local1);
        __s5local1.bg.removeEventListener(__s0local0.MOUSE_UP, __s7local0);
        __s5local1.bg.removeEventListener(__s0local0.MOUSE_OVER, __s7local0);
        __s5local1.bg.removeEventListener(__s0local0.MOUSE_OUT, __s7local0);
        __s5local1.bg.removeEventListener(__s0local0.MOUSE_WHEEL, __s7local0);
        __s5local3.removeEventListener(__s0local0.CLICK, __s5local0.bindFunction(__s5local0.handleOptions));
      }
      __s5local1.addEventListener(createjs.Event.REMOVED_FROM_STAGE, __s7local1);
    } else {
      __s5local1.gotoAndStop(2);
      __s5local1.itxt_item = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local1.txt_label, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      __s5local1.itxt_item.color = ComboboxItemRendererPreset.PRESET_LOCKED_COLOR;
      __s5local1.itxt_item.mouseEnabled = false;
      __s5local1.tooltipText = "dialog_troopPreset_unlock_header";
      if (__s5param2 > 0) {
        __s5local1.bg.width = __s5param2;
        __s5local1.itxt_item.width = __s5param2 - this.BTN_WIDTH;
        __s5local1.iconRuby.x = __s5local1.bg.x + __s5param2 - this.BTN_WIDTH / 2;
      }
      __s5local1.bg.height = __s5param3;
      __s5local1.iconRuby.y = __s5local1.bg.y + __s5param3 / 2;
    }
    __s5local1.id = __s5param1;
    return __s5local1;
  };
  ComboboxItemRendererPreset.prototype.handleOptions = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s21param0.target.parent.dispatchEvent(new __dep_export_CastlePresetComboboxItemRendererEvent.CastlePresetComboboxItemRendererEvent(__dep_export_CastlePresetComboboxItemRendererEvent.CastlePresetComboboxItemRendererEvent.OPTIONS, __s21param0.target.presetVO));
    }
  };
  Object.defineProperty(ComboboxItemRendererPreset.prototype, "itemMCClass", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName("CastlePresetComboboxItem_Toaster");
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererPreset.PRESET_LOCKED_COLOR = "#EAD0B2";
  return ComboboxItemRendererPreset;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererPreset = __s0local1;
