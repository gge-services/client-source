Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSkipCraftingDialog() {
    return __s1param0.call(this, CastleSkipCraftingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSkipCraftingDialog, __s1param0);
  CastleSkipCraftingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_skipCrafting_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_skipCrafting_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleSkipCraftingDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.destroyCollectableRenderList();
    var __s7local0 = this.dialogProperties.slotVO.recipeVO.output.list[0];
    var __s7local1 = __s7local0.clone();
    __s7local1.amount = Math.floor(__s7local0.amount * (1 + this.dialogProperties.slotVO.boosterValue / 100));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_info.mc_reward).addInfoBtn(this.dialogDisp.mc_info.btn_info), __s7local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, CastleSkipCraftingDialog.REWARD_ICON_SIZE));
    var __s7local2 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.dialogProperties.slotVO.getAdjustedSkipCostC2());
    var __s7local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, CastleSkipCraftingDialog.COST_ICON_DIMENSION);
    __s7local3.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_cost), __s7local2, __s7local3);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  CastleSkipCraftingDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          this.dialogProperties.slotVO.rubySkip();
      }
    }
  };
  CastleSkipCraftingDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CraftingEvent.CraftingEvent(__dep_export_CraftingEvent.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON));
  };
  Object.defineProperty(CastleSkipCraftingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipCraftingDialog.NAME = "CraftingSkip";
  CastleSkipCraftingDialog.REWARD_ICON_SIZE = new __s0local0(136, 132);
  CastleSkipCraftingDialog.COST_ICON_DIMENSION = new __s0local0(42, 35);
  return CastleSkipCraftingDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSkipCraftingDialog = __s0local1;
