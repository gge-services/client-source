Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleInitServerListCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInitServerListCommand, __s1param0);
  CastleInitServerListCommand.prototype.initAdditionalServer = function () {};
  CastleInitServerListCommand.prototype.createInstanceVO_EM = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4, __s7param5 = 4) {
    var __s7local0 = new __dep_exact_9e901e8e2483a22f_1.TestInstanceVO();
    __s7local0.ip = __s7param0;
    __s7local0.port = __s7param1;
    __s7local0.zone = __s7param2;
    __s7local0.zoneId = __s7param5;
    __s7local0.instanceId = __s7param3;
    __s7local0.instanceLocaId = __s7param4;
    return __s7local0;
  };
  return CastleInitServerListCommand;
}(__dep_exact_9e901e8e2483a22f.BasicClientCommand);
exports.CastleInitServerListCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
