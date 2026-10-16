Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemVipTimeVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemVipTimeVE, __s1param0);
  Object.defineProperty(CollectableItemVipTimeVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_VipTime;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemVipTimeVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemVipTimeVE.prototype.tooltipCreate = function () {
    return {
      t: "dialog_StarterDailyLoginBonus_premiumTime_v2",
      p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(this.itemVipTimeVO.duration)]
    };
  };
  Object.defineProperty(CollectableItemVipTimeVE.prototype, "itemVipTimeVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemVipTimeVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemVipTimeVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
