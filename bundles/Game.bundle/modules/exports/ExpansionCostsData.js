Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ExpansionCostsData(__s3param0) {
    this._getExpansionCostVOList(__s3param0);
  }
  ExpansionCostsData.prototype._getExpansionCostVOList = function (__s5param0) {
    var __s5local0 = __s5param0.expansions;
    this._expansionCostsVOList = [];
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4;
          for (var __s5local5 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("spaceIDs", __s5local3, ""), ","), __s5local6 = 0; __s5local6 < __s5local5.length; __s5local6++) {
            (__s5local4 = new __dep_export_ExpansionCostsVO.ExpansionCostsVO()).expansionID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("expansionID", __s5local3, "0"));
            __s5local4.spaceID = __dep_exact_f855840627e6e145.int(__s5local5[__s5local6]);
            __s5local4.expansionLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("expansionLevel", __s5local3, "0"));
            __s5local4.costs = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5local3, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST);
            __s5local4.costs = __s5local4.costs.getFilteredListWithoutType(__dep_export_CollectableEnum.CollectableEnum.C2);
            __s5local4.costC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costC2", __s5local3, "0"));
            __s5local4.sceatSkillLocked = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sceatSkillLocked", __s5local3, "0"));
            this._expansionCostsVOList.push(__s5local4);
          }
        }
      }
    }
  };
  ExpansionCostsData.prototype._getCurrentExpansionCostsVO = function () {
    if (!__dep_export_CastleModel.CastleModel.areaData || !__dep_export_CastleModel.CastleModel.areaData.activeArea || !__dep_export_CastleModel.CastleModel.areaData.activeIsoData) {
      return null;
    }
    var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId);
    var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.groundObjects.expansionAmount + 1);
    for (var __s13local2 = 0; __s13local2 < this._expansionCostsVOList.length; __s13local2++) {
      var __s13local3 = this._expansionCostsVOList[__s13local2];
      if (__s13local3 && __s13local3.spaceID == __s13local0 && __s13local3.expansionLevel == __s13local1) {
        return __s13local3;
      }
    }
    return null;
  };
  ExpansionCostsData.prototype.getExpandCostC2 = function () {
    if (this.expansionAvailable()) {
      return __dep_exact_f855840627e6e145.int(this._getCurrentExpansionCostsVO().costC2);
    } else {
      return 0;
    }
  };
  ExpansionCostsData.prototype.getExpandCostNormal = function () {
    if (this.expansionAvailable()) {
      return this._getCurrentExpansionCostsVO().costs;
    } else {
      return new __dep_export_CollectableList.CollectableList();
    }
  };
  ExpansionCostsData.prototype.getSceatSkillLocked = function () {
    if (this.expansionAvailable()) {
      return this._getCurrentExpansionCostsVO().sceatSkillLocked;
    } else {
      return 0;
    }
  };
  ExpansionCostsData.prototype.getCurrentExpansionCostsVO = function () {
    return this._getCurrentExpansionCostsVO();
  };
  ExpansionCostsData.prototype.expansionAvailable = function () {
    return !!this._getCurrentExpansionCostsVO();
  };
  return ExpansionCostsData;
}();
exports.ExpansionCostsData = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ExpansionCostsVO = require("gge-module:export_ExpansionCostsVO");
