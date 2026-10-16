Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleJoinedRoomCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJoinedRoomCommand, __s1param0);
  CastleJoinedRoomCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0.params[0] == __dep_exact_9e901e8e2483a22f_1.BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      __dep_exact_9e901e8e2483a22f_3.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_2.ClientFunnelGameStates.VERSION_CHECK_SEND);
    }
    __s1param0.prototype.execute.call(this, __s5param0);
  };
  return CastleJoinedRoomCommand;
}(__dep_exact_9e901e8e2483a22f.BasicJoinedRoomCommand);
exports.CastleJoinedRoomCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
