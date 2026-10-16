Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function OpenNewServerAnnouncementCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenNewServerAnnouncementCommand, __s1param0);
  OpenNewServerAnnouncementCommand.prototype.execute = function (__s5param0 = null) {
    __s1param0.prototype.execute.call(this, __s5param0);
  };
  return OpenNewServerAnnouncementCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenNewServerAnnouncementCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
