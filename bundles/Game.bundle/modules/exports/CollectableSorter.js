Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableSorter() {}
  CollectableSorter.prototype.sortListBySortOrderExpression = function (__s5param0, __s5param1) {
    if (__s5param1 == "random") {
      return this.sortListByRandom(__s5param0);
    } else {
      return this.sortListByIds(__s5param0, __s5param1.split("#"));
    }
  };
  CollectableSorter.prototype.sortListByRandom = function (__s9param0) {
    var __s9local0 = __s9param0.length;
    if (__s9local0 <= 2) {
      return __s9param0;
    }
    var __s9local1 = new Array(__s9local0);
    for (var __s9local2 = 0; __s9local2 < __s9local0; ++__s9local2) {
      __s9local1[__s9local2] = __s9local2;
    }
    var __s9local3;
    var __s9local4;
    for (var __s9local5 = __s9local1.length; __s9local5;) {
      __s9local4 = Math.floor(Math.random() * __s9local5--);
      __s9local3 = __s9local1[__s9local5];
      __s9local1[__s9local5] = __s9local1[__s9local4];
      __s9local1[__s9local4] = __s9local3;
    }
    var __s9local6 = new __dep_export_CollectableList.CollectableList();
    for (var __s9local7 = 0; __s9local7 < __s9local0; ++__s9local7) {
      __s9local6.addItem(__s9param0.getItemByIndex(__s9local1[__s9local7]));
    }
    return __s9local6;
  };
  CollectableSorter.prototype.sortListByIds = function (__s18param0, __s18param1, __s18param2 = true) {
    if (__s18param0.length <= 1) {
      return __s18param0;
    }
    var __s18local0;
    var __s18local1;
    var __s18local2;
    var __s18local3 = new __dep_export_CollectableList.CollectableList();
    var __s18local4 = [];
    var __s18local5 = 0;
    var __s18local6 = 0;
    for (var __s18local7 = 0; __s18local7 < __s18param1.length; ++__s18local7) {
      var __s18local8 = this.partUpSortId(__s18param1[__s18local7]);
      __s18local0 = __s18local8.prefix;
      __s18local5 = __dep_exact_f855840627e6e145.int(__s18local8.subIndex);
      if ((__s18local1 = __dep_export_CollectableEnum.CollectableEnum.getTypeByServerKey(__s18local0)) != __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
        if (__s18local5 < (__s18local2 = __s18param0.getIndicesByType(__s18local1)).length) {
          __s18local6 = __s18local2[__s18local5];
          if (__s18local4.indexOf(__s18local6) < 0) {
            __s18local3.addItem(__s18param0.getItemByIndex(__s18local6));
            __s18local4.push(__s18local6);
          }
        } else if (__s18param2) {
          __dep_exact_9e901e8e2483a22f.debug("CollectableSorter.sortListByIds(): The mentioned sortOrder entry '" + __s18param1[__s18local7] + "' couldn't be found in sourceList.");
        }
      }
    }
    for (var __s18local9 = 0; __s18local9 < __s18param0.length; ++__s18local9) {
      if (__s18local4.indexOf(__s18local9) < 0) {
        __s18local3.addItem(__s18param0.getItemByIndex(__s18local9));
      }
    }
    return __s18local3;
  };
  CollectableSorter.prototype.sortListByTypes = function (__s30param0, __s30param1, __s30param2 = false) {
    if (!__s30param1 || __s30param1.length <= 0 || __s30param0.length <= 1) {
      return __s30param0;
    }
    var __s30local0 = new Array(__s30param1.length);
    for (var __s30local1 = 0; __s30local1 < __s30param1.length; ++__s30local1) {
      __s30local0[__s30local1] = __s30param1[__s30local1].serverKey;
    }
    return this.sortListByIds(__s30param0, __s30local0, __s30param2);
  };
  CollectableSorter.prototype.partUpSortId = function (__s35param0) {
    var __s35local0 = __dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__s35param0).split("_");
    var __s35local1 = __s35local0[0];
    var __s35local2 = 0;
    if (__s35local0.length >= 2 && __s35local0[1] != "") {
      __s35local2 = parseInt(__s35local0[1]);
    }
    return {
      prefix: __s35local1,
      subIndex: __s35local2
    };
  };
  return CollectableSorter;
}();
exports.CollectableSorter = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
