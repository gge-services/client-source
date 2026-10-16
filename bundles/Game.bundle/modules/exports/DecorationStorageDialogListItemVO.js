Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function DecorationStorageDialogListItemVO(__s3param0) {
    this._buildingVO = __s3param0;
    this._searchName = this._buildingVO.getInfoTooltipLine1().toLowerCase();
  }
  DecorationStorageDialogListItemVO.prototype.getOrderValue = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "CustomDecoBuildingVO")) {
      return __dep_exact_f855840627e6e145.int(this.buildingVO.decoPoints);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "AEffectBuildingVO")) {
      if (__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage()) {
        return __dep_exact_f855840627e6e145.int(this.buildingVO.morality);
      } else if (this.buildingVO instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO) {
        return __dep_exact_f855840627e6e145.int(this.buildingVO.decoPoints);
      } else {
        return __dep_exact_f855840627e6e145.int(this.buildingVO.level);
      }
    } else {
      return 0;
    }
  };
  DecorationStorageDialogListItemVO.prototype.getMightPoints = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "AEffectBuildingVO") ? this.buildingVO.mightValue : 0);
  };
  DecorationStorageDialogListItemVO.prototype.getSellPrice = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "AShopVO")) {
      var __s15local0 = this.buildingVO;
      if (__s15local0.sellCostC1 > 0) {
        return __dep_exact_f855840627e6e145.int(__s15local0.sellCostC1);
      }
      if (__s15local0.sellBuildingVO && __s15local0.sellBuildingVO.hasCosts) {
        return __dep_exact_f855840627e6e145.int(__s15local0.sellBuildingVO.list[0].amount);
      }
    }
    return 0;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionLevel = function () {
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "CustomDecoBuildingVO")) {
      var __s20local0 = this.buildingVO;
      if (__s20local0) {
        return __dep_exact_f855840627e6e145.int(__s20local0.fusionInfoVO.getCurrentLevel());
      }
    }
    return -1;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionXP = function () {
    if (this.buildingVO instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO) {
      var __s24local0 = this.buildingVO;
      return __dep_exact_f855840627e6e145.int(__s24local0.fusionInfoVO.getCurrentTotalXp());
    }
    return 0;
  };
  DecorationStorageDialogListItemVO.prototype.canBeSold = function () {
    return !__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "FactionDecoBuildingVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(this.buildingVO, "AllianceDecoBuildingVO") && this.getSellPrice() > 0;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionInfoVO = function () {
    var __s29local0 = this.buildingVO;
    if (__s29local0) {
      return __s29local0.fusionInfoVO;
    } else {
      return null;
    }
  };
  Object.defineProperty(DecorationStorageDialogListItemVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationStorageDialogListItemVO.prototype, "searchName", {
    get: function () {
      return this._searchName;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationStorageDialogListItemVO;
}();
exports.DecorationStorageDialogListItemVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
