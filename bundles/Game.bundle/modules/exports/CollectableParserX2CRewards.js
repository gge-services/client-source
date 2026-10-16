Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableParserX2CRewards() {}
  CollectableParserX2CRewards.prototype.createList = function (__s5param0) {
    var __s5local0 = new __dep_export_CollectableList.CollectableList();
    if (__s5param0) {
      var __s5local1 = __s5param0;
      for (var __s5local2 in __s5param0) {
        var __s5local3 = __dep_export_CollectableEnum.CollectableEnum.getTypeByXmlKey(__s5local2);
        if (__s5local3 != __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
          for (var __s5local4 = 0, __s5local5 = String(__s5local1[__s5local2]).split("#"); __s5local4 < __s5local5.length; __s5local4++) {
            var __s5local6 = __s5local5[__s5local4];
            var __s5local7 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s5local3);
            if (!__s5local7) {
              break;
            }
            __s5local7.parseXmlObject(__s5local6);
            __s5local0.addItem(__s5local7);
          }
        }
      }
      __s5local0.addList(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_ADD), true);
      __s5local0 = CollectableParserX2CRewards.parseSortOrder(__s5local0, __s5param0);
      CollectableParserX2CRewards.parseGrantType(__s5local0, __s5param0);
    }
    return __s5local0;
  };
  CollectableParserX2CRewards.parseSortOrder = function (__s14param0, __s14param1) {
    var __s14local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s14param1, "-1", false);
    if (__s14local0 != "-1" && __s14local0 != "") {
      return __dep_export_CollectableManager.CollectableManager.sorter.sortListBySortOrderExpression(__s14param0, __s14local0);
    } else {
      return __s14param0;
    }
  };
  CollectableParserX2CRewards.parseGrantType = function (__s18param0, __s18param1) {
    var __s18local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("grantType", __s18param1, "0", false)));
    for (var __s18local1 = 0; __s18local1 < __s18param0.length; ++__s18local1) {
      __s18param0.list[__s18local1].grantType = __s18local0;
    }
  };
  return CollectableParserX2CRewards;
}();
exports.CollectableParserX2CRewards = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
