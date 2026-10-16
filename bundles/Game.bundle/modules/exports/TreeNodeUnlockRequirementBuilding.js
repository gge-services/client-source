Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __s0local0 = function () {
  function TreeNodeUnlockRequirementBuilding() {
    this._wodIDs = [];
    this._buildingVOs = [];
  }
  TreeNodeUnlockRequirementBuilding.prototype.addSingleBuildingRequirement = function (__s5param0) {
    this._buildingVOs.push(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s5param0));
  };
  TreeNodeUnlockRequirementBuilding.prototype.addMultipleBuildingRequirements = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
      this._buildingVOs.push(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s7param0[__s7local0]));
    }
  };
  TreeNodeUnlockRequirementBuilding.prototype.isUnlocked = function () {
    var __s11local0;
    for (var __s11local1 = 0; __s11local1 < this._buildingVOs.length; __s11local1++) {
      __s11local0 = __dep_export_Iso.Iso.data.objects.provider.getObjectsByType(this._buildingVOs[__s11local1].objectType);
      for (var __s11local2 = 0; __s11local2 < __s11local0.length; __s11local2++) {
        if (__s11local0[__s11local2] && __s11local0[__s11local2].buildingState.isFunctionally && __s11local0[__s11local2].level >= this._buildingVOs[__s11local1].level) {
          return true;
        }
      }
    }
    return false;
  };
  TreeNodeUnlockRequirementBuilding.prototype.getUnlockRequirementText = function () {
    var __s18local0;
    var __s18local1;
    if (this._buildingVOs.length > 1) {
      var __s18local2 = "";
      for (var __s18local3 = 0; __s18local3 < this._buildingVOs.length; __s18local3++) {
        if (__s18local3 > 0) {
          __s18local2 += "; ";
        }
        __s18local0 = this._buildingVOs[__s18local3].getNameString();
        __s18local1 = this._buildingVOs[__s18local3].level;
        __s18local2 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockBuilding", [__s18local0, __s18local1]);
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockBuilding_conditionmultipleBuildingss", [__s18local2]);
    }
    __s18local0 = this._buildingVOs[0].getNameString();
    __s18local1 = this._buildingVOs[0].level;
    if (this._buildingVOs[0].objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.KEEP) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockKeepLevel", [__s18local1]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_unlockBuilding", [__s18local0, __s18local1]);
    }
  };
  Object.defineProperty(TreeNodeUnlockRequirementBuilding.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementBuilding.prototype, "buildingVO", {
    get: function () {
      return this._buildingVOs[0];
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementBuilding;
}();
exports.TreeNodeUnlockRequirementBuilding = __s0local0;
