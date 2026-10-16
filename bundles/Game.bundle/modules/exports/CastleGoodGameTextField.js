Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGGSTextFieldDefaultStrategy = require("gge-module:export_CastleGGSTextFieldDefaultStrategy");
var __s0local0 = function (__s1param0) {
  function CastleGoodGameTextField(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGoodGameTextField, __s1param0);
  CastleGoodGameTextField.prototype.useDefaultStrategy = function () {
    this._availableStrategies[0] ||= new __dep_export_CastleGGSTextFieldDefaultStrategy.CastleGGSTextFieldDefaultStrategy(this);
    this.activateStrategy(this._availableStrategies[0]);
  };
  return CastleGoodGameTextField;
}(__dep_exact_9e901e8e2483a22f.GoodgameTextField);
exports.CastleGoodGameTextField = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInternalGGSTextField", "IBasicGGSTextField");
