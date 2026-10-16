Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicButtonTextField = require("gge-module:export_BasicButtonTextField");
var __dep_export_CastleGoodgameInputTextField = require("gge-module:export_CastleGoodgameInputTextField");
var __dep_export_CastleGoodGameTextField = require("gge-module:export_CastleGoodGameTextField");
var __s0local0 = function (__s1param0) {
  function CastleTextFieldFactory() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTextFieldFactory, __s1param0);
  CastleTextFieldFactory.prototype.createAdvancedTextField = function (__s5param0) {
    var __s5local0 = __s5param0.parent;
    if (__s5param0.parent && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s5param0.parent, "BasicButton") && __s5param0.parent.textField) {
      var __s5local1 = new __dep_export_BasicButtonTextField.BasicButtonTextField(__s5local0);
      var __s5local2 = __dep_exact_81dacdf05bd32292_1.castAs(__s5local1, "IInternalGGSTextField");
      if (__s5local2 != null) {
        return __s5local2;
      }
    }
    if (__s5param0.type == __dep_exact_81dacdf05bd32292.TextFieldType.INPUT) {
      return new __dep_export_CastleGoodgameInputTextField.CastleGoodgameInputTextField(__s5param0);
    } else {
      return new __dep_export_CastleGoodGameTextField.CastleGoodGameTextField(__s5param0);
    }
  };
  return CastleTextFieldFactory;
}(__dep_exact_9e901e8e2483a22f.GoodgameAdvancedTextFieldFactory);
exports.CastleTextFieldFactory = __s0local0;
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local0, "IGGSTextFieldFactory");
