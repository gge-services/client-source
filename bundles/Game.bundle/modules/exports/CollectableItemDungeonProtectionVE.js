Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemDungeonProtectionVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemDungeonProtectionVE, __s1param0);
  CollectableItemDungeonProtectionVE.prototype.tooltipCreate = function () {
    return {
      t: __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dungeonProtection"),
      p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getLongEventTimeString(this.itemDungeonProtectionVO.duration)]
    };
  };
  Object.defineProperty(CollectableItemDungeonProtectionVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_NoDungeonAttacks;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemDungeonProtectionVE.prototype, "itemDungeonProtectionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemDungeonProtectionVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemDungeonProtectionVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
