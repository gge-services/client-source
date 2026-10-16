Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableParserS2CParamObject() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableParserS2CParamObject, __s1param0);
  CollectableParserS2CParamObject.prototype.createList = function (__s5param0) {
    var __s5local0;
    var __s5local1 = new __dep_export_CollectableList.CollectableList();
    if (__s5param0) {
      for (__s5local0 in __s5param0) {
        var __s5local2 = __s5param0[__s5local0];
        if (__s5local2 != null) {
          for (var __s5local3 = 0; __s5local3 < __s5local2.length; ++__s5local3) {
            var __s5local4 = __s5local2[__s5local3];
            var __s5local5 = __dep_export_CollectableHelper.CollectableHelper.getTypeByServerKey(__s5local0, __s5local4);
            var __s5local6 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s5local5.type, -Number.MAX_VALUE, __s5local5.id);
            if (__s5local6) {
              __s5local6.parseServerObject(__s5local4);
              __s5local1.addItem(__s5local6);
            }
          }
        } else {
          console.warn("Rewards object from server contained null! This is an error on server side, but the client can cope with it. Please report to a server dev.");
        }
      }
    }
    return __s5local1 = CollectableParserS2CParamObject.parseSortOrder(__s5local1, __s5param0.SO);
  };
  CollectableParserS2CParamObject.parseSortOrder = function (__s15param0, __s15param1) {
    if (__s15param1) {
      var __s15local0 = __s15param1;
      if (__s15local0 != "-1" && __s15local0 != "") {
        return __dep_export_CollectableManager.CollectableManager.sorter.sortListBySortOrderExpression(__s15param0, __s15local0);
      }
    }
    return __s15param0;
  };
  return CollectableParserS2CParamObject;
}(require("gge-module:export_CollectableParserS2CParamList").CollectableParserS2CParamList);
exports.CollectableParserS2CParamObject = __s0local0;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
