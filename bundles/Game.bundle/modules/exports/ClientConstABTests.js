Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstABTests() {}
  ClientConstABTests.takesPartInPOCloseBtnTest = function () {
    return ClientConstABTests.hasUnevenPlayerID && (ClientConstABTests.isOnPolishServerInstance || ClientConstABTests.isOnDevServerInstance || ClientConstABTests.isOnQAServerInstance);
  };
  Object.defineProperty(ClientConstABTests, "takesPartInSkipRecruitingTest", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "hasUnevenPlayerID", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.playerID % 2 == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnPolishServerInstance", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstABTests.ZONE_ID_PL1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnKoreanServerInstance", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstABTests.ZONE_ID_KR1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnQAServerInstance", {
    get: function () {
      var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      return __s15local0 >= 250 && __s15local0 < 300;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnDevServerInstance", {
    get: function () {
      var __s17local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      return __s17local0 >= 300 && __s17local0 < 350;
    },
    enumerable: true,
    configurable: true
  });
  ClientConstABTests.__initialize_static_members = function () {
    ClientConstABTests.NETWORK_ID_1 = 1;
    ClientConstABTests.ZONE_ID_DE1 = 2;
    ClientConstABTests.ZONE_ID_PL1 = 5;
    ClientConstABTests.ZONE_ID_IT1 = 9;
    ClientConstABTests.ZONE_ID_KR1 = 23;
  };
  return ClientConstABTests;
}();
exports.ClientConstABTests = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__s0local0.__initialize_static_members();
