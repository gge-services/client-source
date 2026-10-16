Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CollectableRendererCostTextfield() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererCostTextfield, __s1param0);
  CollectableRendererCostTextfield.prototype.reset = function () {
    if (this.clips.textfield) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    }
  };
  CollectableRendererCostTextfield.prototype.update = function () {
    if (this.clips.textfield) {
      this.itemVE.costTextfieldUpdate();
    }
  };
  CollectableRendererCostTextfield.prototype.setText = function (__s11param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new __dep_exact_92d05af59ee2ff30.TextVO(__s11param0), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CollectableRendererCostTextfield.prototype.setTextColor = function (__s13param0) {
    var __s13local0 = __dep_export_CastleComponent.CastleComponent.textFieldManager.getTextField(this.clips.textfield);
    if (__s13local0) {
      __s13local0.color = __s13param0;
    }
  };
  return CollectableRendererCostTextfield;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererCostTextfield = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
