Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleInitLoggerCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInitLoggerCommand, __s1param0);
  CastleInitLoggerCommand.prototype.configureLogger = function () {};
  return CastleInitLoggerCommand;
}(__dep_exact_9e901e8e2483a22f.BasicInitLoggerCommand);
exports.CastleInitLoggerCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
