Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ToggleSwitchButton = require("gge-module:export_ToggleSwitchButton");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function OptionsDialogOptionsItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_OptionItem"))(), __s3param1) || this;
    __s3local0.optionMCs = [];
    __s3local0.layout = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30.TextVO(__s3param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__s3param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.preExpand();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogOptionsItem, __s1param0);
  OptionsDialogOptionsItem.prototype.addOption = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_OptionItemContent"))();
    var __s5local1 = new __dep_export_ToggleSwitchButton.ToggleSwitchButton(__s5local0.btn_toggle);
    __s5local1.setValue(__s5param1);
    __s5local1.changeSignal.add(__s5param2);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s5param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __s5local0.bg.gotoAndStop(this.optionMCs.length % 2 + 1);
    __s5local0.toggleButton = __s5local1;
    this.contentMC.addChild(__s5local0);
    this.optionMCs.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s5local0));
    var __s5local2 = this.layout.apply(this.optionMCs, new __s0local0()).height;
    if (this.isExpanded) {
      this.contentMC.mask.height = __s5local2;
    }
  };
  OptionsDialogOptionsItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.optionMCs.forEach(function (__s10param0) {
      return __s10param0.disp.toggleButton.changeSignal.removeAll();
    });
    this.optionMCs = [];
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.contentMC);
  };
  return OptionsDialogOptionsItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogOptionsItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
