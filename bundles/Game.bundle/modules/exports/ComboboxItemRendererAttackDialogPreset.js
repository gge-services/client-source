Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePresetComboboxItemRendererEvent = require("gge-module:export_CastlePresetComboboxItemRendererEvent");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ComboboxItemRendererAttackDialogPreset() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererAttackDialogPreset, __s1param0);
  ComboboxItemRendererAttackDialogPreset.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = new this.itemMCClass();
    __s5local0.actLikeButton = true;
    __s5local0.mouseChildren = false;
    __s5local0.txt_label_dark.defaultCacheScale = 2;
    __s5local0.txt_label_light.defaultCacheScale = 2;
    this.presetVO = __s5param0.data;
    __s5local0.mc_bg_locked.visible = !this.presetVO.unlocked;
    __s5local0.mc_c2.visible = !this.presetVO.unlocked;
    __s5local0.mc_bg_selected.visible = false;
    __s5local0.itxt_item_light = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local0.txt_label_light, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s5local0.itxt_item_dark = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local0.txt_label_dark, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s5local0.itxt_item_light.visible = true;
    __s5local0.itxt_item_dark.visible = false;
    __s5local0.mc_down.visible = false;
    if (this.presetVO.unlocked) {
      __s5local0.tooltipText = "";
    } else {
      __s5local0.tooltipText = "dialog_troopPreset_unlock_header";
    }
    this.initListener(__s5local0);
    __s5local0.itxt_item_light.visible = true;
    __s5local0.itxt_item_dark.visible = false;
    __s5local0.id = __s5param1;
    return __s5local0;
  };
  ComboboxItemRendererAttackDialogPreset.prototype.initListener = function (__s9param0) {
    var __s9local0 = this;
    __s9param0.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    __s9param0.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    __s9param0.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s9param0.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    function __s9local1(__s11param0) {
      __s9param0.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, __s9local1);
      __s9param0.removeEventListener(__s0local0.MOUSE_OVER, __s9local0.bindFunction(__s9local0.onMouseOver));
      __s9param0.removeEventListener(__s0local0.MOUSE_OUT, __s9local0.bindFunction(__s9local0.onMouseOut));
      __s9param0.removeEventListener(__s0local0.MOUSE_UP, __s9local0.bindFunction(__s9local0.onMouseUp));
      __s9param0.removeEventListener(__s0local0.MOUSE_DOWN, __s9local0.bindFunction(__s9local0.onMouseDown));
    }
    __s9param0.addEventListener(createjs.Event.REMOVED_FROM_STAGE, __s9local1);
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseOver = function (__s13param0) {
    __s13param0.target.mc_bg_selected.visible = true;
    __s13param0.target.itxt_item_light.visible = false;
    __s13param0.target.itxt_item_dark.visible = true;
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseOut = function (__s15param0) {
    __s15param0.target.mc_bg_selected.visible = false;
    __s15param0.target.itxt_item_light.visible = true;
    __s15param0.target.itxt_item_dark.visible = false;
    if (__s15param0.target.mc_down) {
      __s15param0.target.mc_down.visible = false;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseDown = function (__s18param0) {
    if (__s18param0.target.mc_down) {
      __s18param0.target.mc_down.visible = true;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseUp = function (__s21param0) {
    if (__s21param0.target.mc_down) {
      __s21param0.target.mc_down.visible = false;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.handleOptions = function (__s24param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      __s24param0.target.parent.dispatchEvent(new __dep_export_CastlePresetComboboxItemRendererEvent.CastlePresetComboboxItemRendererEvent(__dep_export_CastlePresetComboboxItemRendererEvent.CastlePresetComboboxItemRendererEvent.OPTIONS, __s24param0.target.presetVO));
    }
  };
  Object.defineProperty(ComboboxItemRendererAttackDialogPreset.prototype, "itemMCClass", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName("Preset_List_Element");
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererAttackDialogPreset;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererAttackDialogPreset = __s0local1;
