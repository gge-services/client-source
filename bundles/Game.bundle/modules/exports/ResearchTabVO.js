Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ResearchConnectionFinder = require("gge-module:export_ResearchConnectionFinder");
var __dep_export_ResearchPathfinderSearchableMap = require("gge-module:export_ResearchPathfinderSearchableMap");
var __s0local0 = function () {
  function ResearchTabVO() {
    this._tabId = 0;
    this._groups = [];
    this._requiredTowerLevel = 0;
    this._requiredLegendLevel = 0;
    this._rootGroupId = 0;
    this._enableCategories = false;
    this._categoryName = "";
  }
  ResearchTabVO.prototype.fillFromParamXML = function (__s5param0) {
    this._tabId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tabID", __s5param0, "1", true)) - 1;
    this._requiredTowerLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minResearchTowerLevel", __s5param0, "1", true));
    var __s5local0 = ResearchTabVO.TAB_DATA[this._tabId];
    this._toolTipText = __s5local0.toolTipText;
    this._iconClassName = __s5local0.iconClassName || ResearchTabVO.UNKNOWN_ICON_CLASS;
    if (__s5local0.rootGroupId) {
      this._rootGroupId = __dep_exact_f855840627e6e145.int(__s5local0.rootGroupId);
    }
    if (__s5local0.enableCategories) {
      this._enableCategories = __s5local0.enableCategories;
    }
    if (__s5local0.categoryName) {
      this._categoryName = __s5local0.categoryName;
    }
    if (__s5local0.requiredLegendLevel) {
      this._requiredLegendLevel = __s5local0.requiredLegendLevel;
    }
    this._pathfinderMap = new __dep_export_ResearchPathfinderSearchableMap.ResearchPathfinderSearchableMap();
    this._pathfinderConnectionFinder = new __dep_export_ResearchConnectionFinder.ResearchConnectionFinder();
  };
  Object.defineProperty(ResearchTabVO.prototype, "tabId", {
    get: function () {
      return this._tabId;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.prototype.addGroup = function (__s13param0) {
    this._groups.push(__s13param0);
    this._pathfinderMap.setWalkable(__s13param0.x, __s13param0.y, false);
    if (__s13param0.categoryID) {
      this._enableCategories = true;
    }
  };
  ResearchTabVO.prototype.checkRootResearch = function (__s16param0) {
    if (this.rootGroupId <= 0 && __s16param0.prerequisiteIDs.length == 0) {
      this._rootGroupId = __s16param0.groupID;
    }
  };
  ResearchTabVO.prototype.setupConnections = function () {
    var __s19local0 = this;
    this.groups.forEach(function (__s21param0) {
      return __s19local0.findConnectionsForGroup(__s21param0);
    });
  };
  ResearchTabVO.prototype.findConnectionsForGroup = function (__s23param0) {
    var __s23local0 = this;
    __s23param0.prerequisites.forEach(function (__s25param0) {
      return __s23param0.addPrerequisitePath(__s25param0, __s23local0._pathfinderConnectionFinder.getPathByVO(__s23param0, __s25param0, __s23local0._pathfinderMap));
    });
  };
  Object.defineProperty(ResearchTabVO.prototype, "toolTipText", {
    get: function () {
      if (this.isAvailable()) {
        return this._toolTipText;
      } else {
        return this.toolTipTextLocked;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "iconClassName", {
    get: function () {
      return this._iconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.prototype.isAvailable = function () {
    return __dep_export_CastleModel.CastleModel.researchData.researchTowerLevel >= this._requiredTowerLevel;
  };
  Object.defineProperty(ResearchTabVO.prototype, "toolTipTextLocked", {
    get: function () {
      var __s37local0 = [this._requiredTowerLevel];
      if (this._requiredLegendLevel) {
        __s37local0.push(this._requiredLegendLevel);
      }
      return {
        t: this._toolTipText + "Locked_tooltip",
        p: __s37local0
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "rootGroupId", {
    get: function () {
      return this._rootGroupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "enableCategories", {
    get: function () {
      return this._enableCategories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "categoryName", {
    get: function () {
      return this._categoryName;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.TAB_DATA = [{
    iconClassName: "Tab_Icon_LowLevel",
    toolTipText: "dialog_researchTower_lowLevelResearch",
    rootGroupId: 42
  }, {
    iconClassName: "Tab_Icon_Military",
    toolTipText: "dialog_researchTower_militaryResearch"
  }, {
    iconClassName: "Tab_Icon_Economy",
    toolTipText: "dialog_researchTower_economicResearch"
  }, {
    iconClassName: "Tab_Icon_Blueprints",
    toolTipText: "dialog_researchTower_blueprintResearch",
    rootGroupId: 65,
    enableCategories: true,
    categoryName: "blueprintsCategory"
  }, {
    iconClassName: "Tab_Icon_Recipes",
    toolTipText: "dialog_researchTower_craftingResearch",
    enableCategories: true,
    categoryName: "manualsCategory",
    requiredLegendLevel: 815
  }];
  ResearchTabVO.UNKNOWN_ICON_CLASS = "Tab_Icon_Unknown";
  return ResearchTabVO;
}();
exports.ResearchTabVO = __s0local0;
