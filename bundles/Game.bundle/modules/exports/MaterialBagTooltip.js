Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function MaterialBagTooltip() {
    this.headerHeight = NaN;
    this.amount = 0;
  }
  Object.defineProperty(MaterialBagTooltip.prototype, "disp", {
    get: function () {
      this._disp ||= new Library.CastleInterfaceElements.MaterialBag_ToolTip();
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltip.prototype.initToolTip = function (__s7param0, __s7param1 = 1) {
    this.materialBagVO = __s7param0;
    this.amount = __s7param1;
    this.init();
    this.updateTooltipContent();
    this.arrangeElements();
  };
  MaterialBagTooltip.prototype.init = function () {
    if (this._renderer) {
      this._renderer.destroy();
    }
    this._renderer = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_focused), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(30, 30)));
    this._contentTexts = [];
    MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_focused.txt_guaranteed, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("ciMaterialSack_tooltip_guaranteed"));
    MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_content.txt_possible, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("ciMaterialSack_tooltip_possible"));
    this._itxt_title = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_header.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this._itxt_desc = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_header.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("ciMaterialSack_tooltip_minimum"));
    this._itxt_focusedAmount = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_focused.txt_focusedAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("ciMaterialSack_tooltip_focused"));
    for (var __s9local0 = 0; __s9local0 < MaterialBagTooltip.CONTENT_MAX; __s9local0++) {
      var __s9local1 = this.disp.mc_content["txt_mat_" + __s9local0];
      this._contentTexts[__s9local0] = MaterialBagTooltip.textFieldManager.registerTextField(__s9local1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this._contentTexts[__s9local0].autoFitToBounds = true;
    }
  };
  MaterialBagTooltip.prototype.updateTooltipContent = function () {
    if (this.materialBagVO.focused) {
      this.headerHeight = this.updateHeader();
      this.disp.mc_focused.visible = true;
      var __s14local0 = this.materialBagVO.focusedMaterialContent;
      var __s14local1 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __s14local0.craftingMaterial.id);
      this._itxt_focusedAmount.textContentVO.textReplacements = [__s14local0.minValue, __s14local0.maxValue, __dep_exact_92d05af59ee2ff30.Localize.text(__s14local1.getNameTextId())];
      this._itxt_focusedAmount.color = __dep_export_CraftingMaterialBagVO.CraftingMaterialBagVO.RARENESS_COLORS[__s14local0.craftingMaterial.rareness - 1];
      this._renderer.updateWithNewVO(__s14local1);
    } else {
      this.headerHeight = this.updateHeader();
      this.disp.mc_focused.visible = false;
    }
    var __s14local2 = this.materialBagVO.getContent();
    for (var __s14local3 = 0; __s14local3 < MaterialBagTooltip.CONTENT_MAX; __s14local3++) {
      if (__s14local2.length > __s14local3) {
        this._contentTexts[__s14local3].textContentVO.textId = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __s14local2[__s14local3].craftingMaterial.id).getNameTextId();
        this._contentTexts[__s14local3].color = __dep_export_CraftingMaterialBagVO.CraftingMaterialBagVO.RARENESS_COLORS[__s14local2[__s14local3].craftingMaterial.rareness - 1];
        this._contentTexts[__s14local3].visible = true;
      } else {
        this._contentTexts[__s14local3].visible = false;
      }
    }
  };
  MaterialBagTooltip.prototype.updateHeader = function () {
    var __s22local0 = this.materialBagVO.nameTextID;
    var __s22local1 = this.materialBagVO.focused ? [__dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.materialBagVO.focusedMaterialContent.craftingMaterial.id).getNameTextId())] : null;
    var __s22local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s22local0, __s22local1);
    this._itxt_title.textContentVO.stringValue = this.amount > 1 ? __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.amount), __s22local2]) : __s22local2;
    this._itxt_title.color = __dep_export_CraftingMaterialBagVO.CraftingMaterialBagVO.RARENESS_COLORS[this.materialBagVO.rareness - 1];
    this._itxt_desc.textContentVO.textReplacements = [this.materialBagVO.minMaterials];
    var __s22local3 = NaN;
    __s22local3 = this.disp.mc_header.line1.y = this._itxt_title.textHeight + MaterialBagTooltip.MC_GAP;
    __s22local3 = this._itxt_desc.y = __s22local3 + this.disp.mc_header.line1.height + MaterialBagTooltip.MC_GAP;
    return (__s22local3 = this._disp.mc_header.line2.y = __s22local3 + this._itxt_desc.textHeight + MaterialBagTooltip.MC_GAP) + this._disp.mc_header.line2.height;
  };
  MaterialBagTooltip.prototype.arrangeElements = function () {
    var __s24local0 = MaterialBagTooltip.CONTENT_LINES - Math.ceil(this.materialBagVO.getContent().length / MaterialBagTooltip.MATERIALS_PER_LINE);
    var __s24local1 = this._contentTexts[0].textHeight;
    var __s24local2 = this.disp.mc_content.y = __s24local0 * __s24local1 - this.disp.mc_content.height - MaterialBagTooltip.PADDING;
    if (this.materialBagVO.focused) {
      __s24local2 = this.disp.mc_focused.y = __s24local2 - MaterialBagTooltip.MC_GAP - this.disp.mc_focused.height;
    }
    __s24local2 = this.disp.mc_header.y = __s24local2 - MaterialBagTooltip.MC_GAP - this.headerHeight;
    this.disp.bg.height = Math.abs(__s24local2 - MaterialBagTooltip.PADDING);
  };
  Object.defineProperty(MaterialBagTooltip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltip.__initialize_static_members = function () {
    MaterialBagTooltip.CONTENT_MAX = 12;
    MaterialBagTooltip.CONTENT_LINES = 4;
    MaterialBagTooltip.MATERIALS_PER_LINE = 3;
    MaterialBagTooltip.PADDING = 8;
    MaterialBagTooltip.MC_GAP = 2;
  };
  return MaterialBagTooltip;
}();
exports.MaterialBagTooltip = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CraftingMaterialBagVO = require("gge-module:export_CraftingMaterialBagVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
__s0local1.__initialize_static_members();
