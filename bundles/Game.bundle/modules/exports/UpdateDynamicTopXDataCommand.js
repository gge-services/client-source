Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_UpdateDynamicTopXDataService = require("gge-module:export_UpdateDynamicTopXDataService");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_DynamicTopXEvent = require("gge-module:export_DynamicTopXEvent");
var __s0local0 = function (__s1param0) {
  function UpdateDynamicTopXDataCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UpdateDynamicTopXDataCommand, __s1param0);
  UpdateDynamicTopXDataCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    if (__s5local1) {
      new __dep_export_UpdateDynamicTopXDataService.UpdateDynamicTopXDataService().updateDynamicTopXForVO(__s5local1, __s5local0);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_DynamicTopXEvent.DynamicTopXEvent(__dep_export_DynamicTopXEvent.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X));
    }
  };
  return UpdateDynamicTopXDataCommand;
}(__dep_exact_9e901e8e2483a22f.BasicCommand);
exports.UpdateDynamicTopXDataCommand = __s0local0;
