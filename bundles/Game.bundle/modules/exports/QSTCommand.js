Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function QSTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QSTCommand, __s1param0);
  Object.defineProperty(QSTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_START;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  QSTCommand.prototype.exec = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        for (var __s9local2 = 0, __s9local3 = JSON.parse(__s9local1[1]).QIDS; __s9local2 < __s9local3.length; __s9local2++) {
          var __s9local4 = __s9local3[__s9local2];
          if (__s9local4) {
            __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState("quest_QuestID_" + __s9local4);
            __dep_export_CastleModel.CastleModel.questData.startQuest(__s9local4);
          }
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  };
  return QSTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.QSTCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
