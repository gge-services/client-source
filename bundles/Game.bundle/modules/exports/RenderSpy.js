Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AMovementRenderStrategy = require("gge-module:export_AMovementRenderStrategy");
var __s0local0 = function (__s1param0) {
  function RenderSpy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenderSpy, __s1param0);
  RenderSpy.prototype.renderData = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param1;
    __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.setDecoFrame(__s5param0, __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_SPY);
    __s5param0.btn_spyInfo.visible = true;
    __s5param0.fieldSpyCount.text = String(__s5local0.spyCount);
    this.textFieldManager.registerTextField(__s5param0.btn_spyInfo.txt_spyRisk, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.spyRisk]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.replaceMovieClip(__s5param0.btn_spyInfo.icon_holder, Library.CastleInterfaceElements.Icon_Spy);
    if (__s5local0.isSabotageSpyMovement) {
      __s5param0.btn_spyInfo.mc_icon.gotoAndStop(2);
      this.textFieldManager.registerTextField(__s5param0.btn_spyInfo.txt_spyEffect, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.sabotageDamage]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    } else {
      __s5param0.btn_spyInfo.mc_icon.gotoAndStop(1);
      this.textFieldManager.registerTextField(__s5param0.btn_spyInfo.txt_spyEffect, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.spyAccuracy]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
    if (__s5local0.canBeRetreated) {
      __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_spy"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    } else {
      __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_spy"), new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_wayHome")]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
  };
  return RenderSpy;
}(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy);
exports.RenderSpy = __s0local0;
