Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstInstanceIDs() {}
  ClientConstInstanceIDs.isBetaInstance = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstInstanceIDs.INSTANCE_ID_BETA || ClientConstInstanceIDs.fakeBetaInstance;
  };
  ClientConstInstanceIDs.__initialize_static_members = function () {
    ClientConstInstanceIDs.ZONE_ID_US1 = 203;
    ClientConstInstanceIDs.ZONE_ID_DE1 = 2;
    ClientConstInstanceIDs.INSTANCE_ID_BETA = 39;
  };
  ClientConstInstanceIDs.INSTANCE_ID_TEMP = 42;
  ClientConstInstanceIDs.INSTANCE_ID_ABG = 45;
  ClientConstInstanceIDs.INSTANCE_ID_TESTSERVER_START = 250;
  ClientConstInstanceIDs.INSTANCE_ID_GR1 = 28;
  ClientConstInstanceIDs.fakeBetaInstance = false;
  return ClientConstInstanceIDs;
}();
exports.ClientConstInstanceIDs = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__s0local0.__initialize_static_members();
