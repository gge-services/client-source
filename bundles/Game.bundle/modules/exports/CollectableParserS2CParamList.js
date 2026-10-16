Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableParserS2CParamList() {}
  CollectableParserS2CParamList.prototype.createList = function (__s5param0) {
    var __s5local0 = false;
    var __s5local1 = new __dep_export_CollectableList.CollectableList();
    if (__s5param0) {
      if (Array.isArray(__s5param0)) {
        var __s5local2 = __s5param0;
        if (__s5local2.length > 0 && typeof __s5local2[0] == "number") {
          __s5local0 = true;
        }
        if (__s5local2.length > 0 && Array.isArray(__s5local2[0]) && Array.isArray(__s5local2[0][0])) {
          var __s5local3 = [];
          for (var __s5local4 = 0; __s5local4 < __s5local2.length; __s5local4++) {
            __s5local3 = __s5local3.concat(__s5local2[__s5local4]);
          }
          __s5param0 = __s5local3;
        }
      }
      if (__s5local0) {
        __s5local1 = __dep_export_CollectableManager.CollectableManager.parser.s2cOldGoods.createList(__s5param0);
      } else {
        CollectableParserS2CParamList.createByParamListMethod(__s5local1, __s5param0);
      }
    }
    return __s5local1;
  };
  CollectableParserS2CParamList.createByParamListMethod = function (__s15param0, __s15param1) {
    var __s15local0 = __s15param1;
    if (__s15local0 && __s15local0.length > 0) {
      for (var __s15local1 = 0; __s15local1 < __s15local0.length; ++__s15local1) {
        var __s15local2 = __s15local0[__s15local1][0];
        var __s15local3 = __s15local0[__s15local1][1];
        var __s15local4 = __s15local0[__s15local1][2] ? __s15local0[__s15local1][2] : -Number.MAX_VALUE;
        var __s15local5 = __dep_export_CollectableHelper.CollectableHelper.getTypeByServerKey(__s15local2, __s15local3);
        var __s15local6 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s15local5.type, __s15local4, __s15local5.id);
        if (__s15local6) {
          __s15local6.parseServerObject(__s15local3);
          __s15param0.addItem(__s15local6);
        }
      }
    }
  };
  return CollectableParserS2CParamList;
}();
exports.CollectableParserS2CParamList = __s0local0;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
