Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_AMovementRenderStrategy = require("gge-module:export_AMovementRenderStrategy");
var __s0local0 = function (__s1param0) {
  function RenderPlaguemonk() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenderPlaguemonk, __s1param0);
  RenderPlaguemonk.prototype.renderData = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param1;
    __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.setDecoFrame(__s5param0, __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_SPY);
    __s5param0.btn_spyInfo.visible = true;
    __s5param0.fieldSpyCount.text = String(__s5local0.plagueMonkCount);
    this.textFieldManager.registerTextField(__s5param0.btn_spyInfo.txt_spyRisk, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.plagueMonkRisk]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s5param0.btn_spyInfo.icon_holder);
    var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Icon_PlaqueC2R", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"));
    __s5local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(25, 25);
    __s5param0.btn_spyInfo.icon_holder.addChild(__s5local1);
    __s5param0.btn_spyInfo.mc_icon.gotoAndStop(2);
    this.textFieldManager.registerTextField(__s5param0.btn_spyInfo.txt_spyEffect, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.plagueDamage]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("plaguemonks"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
  };
  return RenderPlaguemonk;
}(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy);
exports.RenderPlaguemonk = __s0local0;
