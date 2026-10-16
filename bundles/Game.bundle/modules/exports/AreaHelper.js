Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AreaHelper() {}
  AreaHelper.getAreaKey = function (__s5param0, __s5param1) {
    return __s5param0 + "-" + __s5param1;
  };
  AreaHelper.getAreaKeyByArea = function (__s7param0) {
    if (__s7param0) {
      return __s7param0.areaInfo.kingdomID + "-" + __s7param0.areaInfo.objectId;
    } else {
      return "0_1";
    }
  };
  return AreaHelper;
}();
exports.AreaHelper = __s0local0;
