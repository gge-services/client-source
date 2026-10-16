Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleAddExtraCurrencyCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAddExtraCurrencyCommand, __s1param0);
  CastleAddExtraCurrencyCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    __s1param0.prototype.execute.call(this, new __dep_exact_9e901e8e2483a22f.AddExtraCurrencyVO(__dep_exact_9e901e8e2483a22f_2.BasicController.getInstance().paymentHash, __s5local0.sourceId, __s5local0.shopTab));
  };
  return CastleAddExtraCurrencyCommand;
}(__dep_exact_9e901e8e2483a22f_1.BasicAddExtraCurrencyCommand);
exports.CastleAddExtraCurrencyCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
