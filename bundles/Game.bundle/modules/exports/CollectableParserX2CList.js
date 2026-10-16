Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CollectableParserX2CList() {}
  CollectableParserX2CList.prototype.createList = function (__s5param0, __s5param1) {
    var __s5local0 = new __dep_export_CollectableList.CollectableList();
    if (__s5param0) {
      for (var __s5local1 in __s5param0) {
        var __s5local2 = String(__s5local1);
        if (__dep_exact_f855840627e6e145.int(__s5local2.indexOf(__s5param1)) == 0) {
          var __s5local3;
          var __s5local4 = __s5local2.substr(__s5param1.length);
          var __s5local5 = __dep_export_CollectableEnum.CollectableEnum.getTypeByXmlKey(__s5local4);
          if (__s5local5) {
            __s5local3 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s5local5);
          }
          if (__s5local3) {
            __s5local3.parseXmlObject(__s5param0[__s5local1]);
          } else {
            var __s5local6 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyByName(__s5local4);
            if (__s5local6) {
              __s5local3 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__s5local6.id, parseInt(__s5param0[__s5local1]));
            }
          }
          if (__s5local3) {
            __s5local0.addItem(__s5local3);
          }
        }
      }
      __s5local0 = CollectableParserX2CList.parseSortOrder(__s5local0, __s5param0);
      CollectableParserX2CList.parseGrantType(__s5local0, __s5param0);
    }
    return __s5local0;
  };
  CollectableParserX2CList.parseSortOrder = function (__s16param0, __s16param1) {
    var __s16local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s16param1, "-1", false);
    if (__s16local0 != "-1" && __s16local0 != "") {
      return __dep_export_CollectableManager.CollectableManager.sorter.sortListBySortOrderExpression(__s16param0, __s16local0);
    } else {
      return __s16param0;
    }
  };
  CollectableParserX2CList.parseGrantType = function (__s20param0, __s20param1) {
    var __s20local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("grantType", __s20param1, "0", false)));
    for (var __s20local1 = 0; __s20local1 < __s20param0.length; ++__s20local1) {
      __s20param0.list[__s20local1].grantType = __s20local0;
    }
  };
  return CollectableParserX2CList;
}();
exports.CollectableParserX2CList = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
