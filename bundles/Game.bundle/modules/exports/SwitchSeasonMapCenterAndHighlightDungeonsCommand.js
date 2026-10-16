Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleQuestConditionEvent = require("gge-module:export_CastleQuestConditionEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = function (__s1param0) {
  function SwitchSeasonMapCenterAndHighlightDungeonsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SwitchSeasonMapCenterAndHighlightDungeonsCommand, __s1param0);
  SwitchSeasonMapCenterAndHighlightDungeonsCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleQuestConditionEvent.CastleQuestConditionEvent(__dep_export_CastleQuestConditionEvent.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, __s5param0));
    }
  };
  return SwitchSeasonMapCenterAndHighlightDungeonsCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.SwitchSeasonMapCenterAndHighlightDungeonsCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
