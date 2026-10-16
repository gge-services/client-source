Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CollectableRendererTextfield() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererTextfield, __s1param0);
  CollectableRendererTextfield.prototype.reset = function () {
    this.setText("");
  };
  CollectableRendererTextfield.prototype.update = function () {
    if (this.clips.textfield) {
      if (this.renderer.options.textfield.forceRender) {
        this.itemVE.textfieldSetTextAsNumber(this.itemVO.amount);
      } else {
        this.itemVE.textfieldUpdate();
      }
      this.clips.textfield.visible = this.itemVE.textfieldBackgroundVisible() || this.renderer.options.textfield.forceRender;
    }
  };
  CollectableRendererTextfield.prototype.setVisibility = function (__s12param0) {
    if (this.clips.textfield) {
      this.clips.textfield.visible = __s12param0;
    }
  };
  CollectableRendererTextfield.prototype.setText = function (__s15param0) {
    if (this.clips.textfield) {
      var __s15local0 = __dep_export_CastleComponent.CastleComponent.textFieldManager.getTextField(this.clips.textfield);
      if (__s15local0 && __s15local0.textContentVO) {
        __s15local0.textContentVO.stringValue = "";
      } else {
        var __s15local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
        if (this.renderer.options.textfield.verticalAlign != "") {
          __s15local1.verticalAlign = this.renderer.options.textfield.verticalAlign;
        }
        __s15local1.autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
      }
    }
  };
  return CollectableRendererTextfield;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererTextfield = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
