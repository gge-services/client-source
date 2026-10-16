Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogInfoPagePasses(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogInfoPagePasses, __s1param0);
  SeasonLeagueMainDialogInfoPagePasses.prototype.init = function () {};
  SeasonLeagueMainDialogInfoPagePasses.prototype.update = function (__s7param0) {
    this.disp.mc_season.visible = __s7param0 == "season";
    this.disp.mc_promotion.visible = __s7param0 == "promotion";
    this.disp.mc_event.visible = __s7param0 == "event";
    switch (__s7param0) {
      case "season":
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_text_1")).autoFitToBounds = true;
        break;
      case "promotion":
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_infoSection_promotionPass_text_1")).autoFitToBounds = true;
        break;
      case "event":
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_infoSection_eventPass_text_1")).autoFitToBounds = true;
    }
  };
  return SeasonLeagueMainDialogInfoPagePasses;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPagePasses = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
