Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SetAddPipesAtEndOfTextCommand(__s3param0 = false) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SetAddPipesAtEndOfTextCommand, __s1param0);
  SetAddPipesAtEndOfTextCommand.prototype.execute = function (__s5param0 = null) {
    __s1param0.prototype.execute.call(this, __s5param0);
    var __s5local0 = __dep_export_CastleModel.CastleModel.localData.readAddPipesOnEndOfText();
    __dep_export_CastleModel.CastleModel.languageData.addPipeToEndOfString = __s5local0;
    __dep_exact_92d05af59ee2ff30.Localization.usePipe = __s5local0;
  };
  return SetAddPipesAtEndOfTextCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.SetAddPipesAtEndOfTextCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
