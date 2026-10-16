Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedToolsSelectionScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.singleEffect = new __dep_export_ToolEffectView.ToolEffectView(__s3param0.mc_tool_info, 0, 28, 22);
    __s3local0.effect1 = new __dep_export_ToolEffectView.ToolEffectView(__s3param0.mc_tool_info_0, 0, 28, 18);
    __s3local0.effect2 = new __dep_export_ToolEffectView.ToolEffectView(__s3param0.mc_tool_info_1, 1, 28, 18);
    __s3local0.disp.btn_instantBuy.toolTipText = "dialog_fight_instantBuy";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedToolsSelectionScrollItem, __s1param0);
  CastleAdvancedToolsSelectionScrollItem.prototype.fillAdditionalComponents = function () {
    __dep_export_FightScreenHelper.FightScreenHelper.initInstantBuyButton(this.disp.btn_instantBuy, this.troopSelectionScrollItemVO.unitVO, this.troopSelectionScrollItemVO.sourceArea);
    var __s5local0 = this.troopSelectionScrollItemVO.unitVO;
    if (__s5local0.effectTypes.length > 1) {
      this.singleEffect.hide();
      this.effect1.update(__s5local0);
      this.effect2.update(__s5local0);
    } else {
      this.singleEffect.update(__s5local0);
      this.effect1.hide();
      this.effect2.hide();
    }
  };
  return CastleAdvancedToolsSelectionScrollItem;
}(require("gge-module:export_ACastleAdvancedTroopSelectionScrollItem").ACastleAdvancedTroopSelectionScrollItem);
exports.CastleAdvancedToolsSelectionScrollItem = __s0local0;
var __dep_export_FightScreenHelper = require("gge-module:export_FightScreenHelper");
var __dep_export_ToolEffectView = require("gge-module:export_ToolEffectView");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
