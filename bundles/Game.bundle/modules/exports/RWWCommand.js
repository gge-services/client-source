Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function RWWCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RWWCommand, __s1param0);
  Object.defineProperty(RWWCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RUBY_WISHING_WELL;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RWWCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.rubyWishingWellData.parse_RWW(__s9local0);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_RESOURCES:
        this.layoutManager.hideDialog(__dep_export_RubyWishingWellDialog.RubyWishingWellDialog);
        if ((__s9local0 = __s9param1.length > 0 ? JSON.parse(__s9param1[1]) : {}).hasOwnProperty("W") && __s9local0.hasOwnProperty("S")) {
          this.showErrorDialog(__s9param0, __s9param1);
        }
        break;
      default:
        this.layoutManager.hideDialog(__dep_export_RubyWishingWellDialog.RubyWishingWellDialog);
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return RWWCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.RWWCommand = __s0local0;
var __dep_export_RubyWishingWellDialog = require("gge-module:export_RubyWishingWellDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
