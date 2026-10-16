Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function QuestListEpicItem(__s3param0, __s3param1) {
    return __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestListEpicItemMC"))(), __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestListEpicItem, __s1param0);
  QuestListEpicItem.prototype.addQuestItem = function (__s5param0, __s5param1 = true) {
    if (!this.itxt_name) {
      this.itxt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__s5param0.questVO.getQuestSeriesText())), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      this.itxt_name.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    __s1param0.prototype.addQuestItem.call(this, __s5param0, __s5param1);
    this.contentMC.mask.height = 0;
  };
  return QuestListEpicItem;
}(require("gge-module:export_AQuestCollapsibleItem").AQuestCollapsibleItem);
exports.QuestListEpicItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
