Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientBetaHelper() {}
  ClientBetaHelper.setSupportContextMenu = function () {
    if (__dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.isBetaInstance() || __dep_exact_81dacdf05bd32292.instanceOfClass(__dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") && __dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.globals.isClosedBeta) {
      __dep_exact_9e901e8e2483a22f.BasicContextMenuController.instance.disableContextMenuItem(__dep_exact_9e901e8e2483a22f.BasicContextMenuController.SUPPORT_LABEL);
    } else {
      __dep_exact_9e901e8e2483a22f.BasicContextMenuController.instance.enableContextMenuItem(__dep_exact_9e901e8e2483a22f.BasicContextMenuController.SUPPORT_LABEL);
    }
  };
  Object.defineProperty(ClientBetaHelper, "isOnOpenBeta", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId.indexOf("openbeta") > -1;
    },
    enumerable: true,
    configurable: true
  });
  return ClientBetaHelper;
}();
exports.ClientBetaHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
