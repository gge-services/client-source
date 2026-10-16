Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function CastleStonewallBackgroundComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.bgMc = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStonewallBackgroundComponent, __s1param0);
  CastleStonewallBackgroundComponent.prototype.update = function () {
    this.bgMc.btn_help.toolTipText = "generic_help";
    this.bgMc.crest1.mouseChildren = false;
    this.bgMc.crest2.mouseChildren = false;
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.bgMc.crest1, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.bgMc.crest2, __dep_export_CastleModel.CastleModel.userData.playerCrest, null, true);
  };
  CastleStonewallBackgroundComponent.prototype.setCrestsVisibility = function (__s7param0) {
    this.bgMc.crest1.visible = __s7param0;
    this.bgMc.crest2.visible = __s7param0;
  };
  CastleStonewallBackgroundComponent.prototype.setHelpButtonVisibility = function (__s9param0) {
    this.bgMc.btn_help.visible = __s9param0;
  };
  CastleStonewallBackgroundComponent.prototype.setTitleText = function (__s11param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.bgMc.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s11param0)).autoFitToBounds = true;
  };
  CastleStonewallBackgroundComponent.prototype.setTitleByTextId = function (__s13param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.bgMc.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s13param0)).autoFitToBounds = true;
  };
  return CastleStonewallBackgroundComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleStonewallBackgroundComponent = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
