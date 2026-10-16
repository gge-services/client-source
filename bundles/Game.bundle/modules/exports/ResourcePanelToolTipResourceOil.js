Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleLaboratoryEffectHelper = require("gge-module:export_CastleLaboratoryEffectHelper");
var __dep_export_AResourcePanelToolTipResource = require("gge-module:export_AResourcePanelToolTipResource");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipResourceOil() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipResourceOil, __s1param0);
  Object.defineProperty(ResourcePanelToolTipResourceOil.prototype, "resource", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.OIL;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "resource").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceOil.prototype, "laboratoryResourceBonus", {
    get: function () {
      return __dep_export_CastleLaboratoryEffectHelper.CastleLaboratoryEffectHelper.laboratoryResourceBonus(__dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceOil;
}(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceOil = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
