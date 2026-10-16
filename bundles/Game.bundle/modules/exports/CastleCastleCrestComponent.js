Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleUIComponent = require("gge-module:export_CastleUIComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleCastleCrestComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCastleCrestComponent, __s1param0);
  CastleCastleCrestComponent.prototype.initComponent = function (__s5param0 = null, __s5param1 = null) {
    if (__s5param0 == null) {
      __s5param0 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO().crest;
    }
    if (__s5param1 == null) {
      __s5param1 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest0, __s5param0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleIcon);
    this.dialogDisp.mc_castleIcon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s5param1, new __s0local0(85, 120), true, false, false));
    this.txtCastleNameIBasicGGSTextField = __dep_export_CastleUIComponent.CastleUIComponent.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(__s5param1.areaNameString), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastleCastleCrestComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.txtCastleNameIBasicGGSTextField) {
      this.txtCastleNameIBasicGGSTextField.clearText();
      this.txtCastleNameIBasicGGSTextField = null;
    }
  };
  Object.defineProperty(CastleCastleCrestComponent.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCastleCrestComponent;
}(__dep_export_CastleUIComponent.CastleUIComponent);
exports.CastleCastleCrestComponent = __s0local1;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
