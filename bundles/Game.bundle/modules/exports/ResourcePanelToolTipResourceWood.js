Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AResourcePanelToolTipResource = require("gge-module:export_AResourcePanelToolTipResource");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipResourceWood() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipResourceWood, __s1param0);
  Object.defineProperty(ResourcePanelToolTipResourceWood.prototype, "hunterReduction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.hunterData.woodStoneReduction;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "hunterReduction").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceWood.prototype, "resource", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.WOOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "resource").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceWood;
}(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceWood = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
