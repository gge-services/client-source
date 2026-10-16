Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResourcePanelToolTipManager() {
    throw new Error("ResourcePanelToolTipManager is static class");
  }
  ResourcePanelToolTipManager.initialize = function () {
    ResourcePanelToolTipManager._toolTipClasses = new Map();
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, __dep_export_ResourcePanelToolTipFood.ResourcePanelToolTipFood);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, __dep_export_ResourcePanelToolTipPopulation.ResourcePanelToolTipPopulation);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER, __dep_export_ResourcePanelToolTipLawAndOrder.ResourcePanelToolTipLawAndOrder);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, __dep_export_ResourcePanelToolTipSeasonMilitary.ResourcePanelToolTipSeasonMilitary);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE, __dep_export_ResourcePanelToolTipMorale.ResourcePanelToolTipMorale);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, __dep_export_ResourcePanelToolTipResourceWood.ResourcePanelToolTipResourceWood);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, __dep_export_ResourcePanelToolTipResourceStone.ResourcePanelToolTipResourceStone);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE, __dep_export_ResourcePanelToolTipResourceAquamarine.ResourcePanelToolTipResourceAquamarine);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL, __dep_export_ResourcePanelToolTipResourceCoal.ResourcePanelToolTipResourceCoal);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL, __dep_export_ResourcePanelToolTipResourceOil.ResourcePanelToolTipResourceOil);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS, __dep_export_ResourcePanelToolTipResourceGlass.ResourcePanelToolTipResourceGlass);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON, __dep_export_ResourcePanelToolTipResourceIron.ResourcePanelToolTipResourceIron);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY, __dep_export_ResourcePanelToolTipResourceHoney.ResourcePanelToolTipResourceHoney);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD, __dep_export_ResourcePanelToolTipResourceMead.ResourcePanelToolTipResourceMead);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF, __dep_export_ResourcePanelToolTipResourceBeef.ResourcePanelToolTipResourceBeef);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON, __dep_export_ResourcePanelToolTipSpecialButton.ResourcePanelToolTipSpecialButton);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES, __dep_export_ResourcePanelToolTipFactionAuxiliary.ResourcePanelToolTipFactionAuxiliary);
    ResourcePanelToolTipManager._tooltips = new Map();
    ResourcePanelToolTipManager._initialized = true;
  };
  ResourcePanelToolTipManager.hideAllToolTips = function () {
    if (ResourcePanelToolTipManager._tooltips != null) {
      for (var __s7local0 = 0, __s7local1 = Array.from(ResourcePanelToolTipManager._tooltips.values()); __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.hide();
        }
      }
    }
  };
  ResourcePanelToolTipManager.getToolTip = function (__s13param0) {
    if (!ResourcePanelToolTipManager._initialized || __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode != ResourcePanelToolTipManager._currentLanguageCode) {
      ResourcePanelToolTipManager._currentLanguageCode = __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      ResourcePanelToolTipManager.initialize();
    }
    var __s13local0 = ResourcePanelToolTipManager._tooltips.get(__s13param0);
    if (__s13local0 == null) {
      var __s13local1 = ResourcePanelToolTipManager._toolTipClasses.get(__s13param0);
      if (__s13local1 != null) {
        __s13local0 = new __s13local1();
        ResourcePanelToolTipManager._tooltips.set(__s13param0, __s13local0);
      }
    }
    return __s13local0;
  };
  Object.defineProperty(ResourcePanelToolTipManager, "toolTipContainer", {
    get: function () {
      return ResourcePanelToolTipManager._toolTipContainer;
    },
    set: function (__s20param0) {
      ResourcePanelToolTipManager._toolTipContainer = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipManager.__initialize_static_members = function () {
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD = 0;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER = 1;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION = 2;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD = 3;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE = 4;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE = 5;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY = 6;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE = 7;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL = 8;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL = 9;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS = 10;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON = 11;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON = 12;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES = 13;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY = 14;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD = 15;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF = 16;
    ResourcePanelToolTipManager._currentLanguageCode = "";
  };
  ResourcePanelToolTipManager._initialized = false;
  return ResourcePanelToolTipManager;
}();
exports.ResourcePanelToolTipManager = __s0local0;
var __dep_export_ResourcePanelToolTipFactionAuxiliary = require("gge-module:export_ResourcePanelToolTipFactionAuxiliary");
var __dep_export_ResourcePanelToolTipFood = require("gge-module:export_ResourcePanelToolTipFood");
var __dep_export_ResourcePanelToolTipLawAndOrder = require("gge-module:export_ResourcePanelToolTipLawAndOrder");
var __dep_export_ResourcePanelToolTipMorale = require("gge-module:export_ResourcePanelToolTipMorale");
var __dep_export_ResourcePanelToolTipPopulation = require("gge-module:export_ResourcePanelToolTipPopulation");
var __dep_export_ResourcePanelToolTipResourceAquamarine = require("gge-module:export_ResourcePanelToolTipResourceAquamarine");
var __dep_export_ResourcePanelToolTipResourceCoal = require("gge-module:export_ResourcePanelToolTipResourceCoal");
var __dep_export_ResourcePanelToolTipResourceGlass = require("gge-module:export_ResourcePanelToolTipResourceGlass");
var __dep_export_ResourcePanelToolTipResourceIron = require("gge-module:export_ResourcePanelToolTipResourceIron");
var __dep_export_ResourcePanelToolTipResourceOil = require("gge-module:export_ResourcePanelToolTipResourceOil");
var __dep_export_ResourcePanelToolTipResourceStone = require("gge-module:export_ResourcePanelToolTipResourceStone");
var __dep_export_ResourcePanelToolTipResourceWood = require("gge-module:export_ResourcePanelToolTipResourceWood");
var __dep_export_ResourcePanelToolTipSeasonMilitary = require("gge-module:export_ResourcePanelToolTipSeasonMilitary");
var __dep_export_ResourcePanelToolTipSpecialButton = require("gge-module:export_ResourcePanelToolTipSpecialButton");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ResourcePanelToolTipResourceMead = require("gge-module:export_ResourcePanelToolTipResourceMead");
var __dep_export_ResourcePanelToolTipResourceBeef = require("gge-module:export_ResourcePanelToolTipResourceBeef");
var __dep_export_ResourcePanelToolTipResourceHoney = require("gge-module:export_ResourcePanelToolTipResourceHoney");
__s0local0.__initialize_static_members();
