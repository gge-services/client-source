Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemSkipDiscountVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemSkipDiscountVE, __s1param0);
  CollectableItemSkipDiscountVE.prototype.tooltipCreate = function () {
    var __s5local0 = this.itemSkipDiscountVO.skipDiscountVO;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0.duration) / 60;
    var __s5local2 = __s5local1 / 60;
    var __s5local3 = __s5local1;
    var __s5local4 = "Minutes";
    if (__s5local3 < 1) {
      __s5local3 = 1;
    }
    if (__s5local2 > 0) {
      __s5local3 = __s5local2;
      __s5local4 = "Hours";
    }
    return {
      t: "dialog_StarterDailyLoginBonus_buildingSkip" + __s5local4 + (__s5local3 == 1 ? "_singular" : "_plural"),
      p: [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s5local0.discount], true), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local3)]
    };
  };
  Object.defineProperty(CollectableItemSkipDiscountVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SkipDiscount;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemSkipDiscountVE.prototype, "itemSkipDiscountVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSkipDiscountVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemSkipDiscountVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
