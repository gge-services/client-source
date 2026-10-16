Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function UpdateDynamicTopXDataService() {}
  UpdateDynamicTopXDataService.prototype.updateDynamicTopXForVO = function (__s5param0, __s5param1 = -1) {
    var __s5local0 = __s5param1 != -1 ? __s5param1 : __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var __s5local1 = __dep_export_CastleModel.CastleModel.dynamicTopXxmlData.getTopX(__s5local0, __s5param0.eventId, __s5param0.leagueID);
    if (__s5local1 && __s5local1.length > 0 && __s5param0.topX.length > 0) {
      __s5param0.setDynamicTopX(__s5local1);
    }
  };
  return UpdateDynamicTopXDataService;
}();
exports.UpdateDynamicTopXDataService = __s0local0;
