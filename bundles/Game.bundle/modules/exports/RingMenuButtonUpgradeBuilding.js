Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonUpgradeBuilding() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonUpgradeBuilding, __s1param0);
  RingMenuButtonUpgradeBuilding.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = !!this.disp && this.disp.visible;
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_upgradeBuilding;
    this._disp.gotoAndStop(1);
    if (__s5param2.buildingVO && __s5param2.buildingVO.isDamaged) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_building_isDamaged";
    } else if (__s5param2.buildingVO && !__s5param2.buildingVO.hasUserLevelAndEffectsForUpgrade()) {
      this._disp.enableButton = false;
      var __s5local1 = __dep_exact_81dacdf05bd32292.castAs(__s5param2.buildingVO.getUpgradeVO(), "ABasicBuildingVO");
      if (__s5local1) {
        this._disp.enableButton = false;
        if (__s5local1.sceatSkillLocked > 0 && !__s5local1.isAvailableByEffect) {
          var __s5local2 = __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillByID(__s5local1.sceatSkillLocked);
          this._disp.toolTipText = {
            t: "needLegendTemple_skill",
            p: [__s5local2.nameTextID, __s5local2.level]
          };
        } else {
          this._disp.toolTipText = {
            t: __s5local1.requiredLegendLevel > 1 ? __dep_export_ClientConstTextIds.ClientConstTextIds.LEGEND_LEVEL_NEEDED : __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED,
            p: [__s5local1.requiredLegendLevel > 1 ? __s5local1.requiredLegendLevel : __s5local1.requiredLevel]
          };
        }
      }
    } else if ((__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "BasicGateVE") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "GuardTowerVE") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "FactionGateGateVE") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "FactionLookoutTowerVE")) && __s5param2.buildingVO.level >= __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "needWallUpgrade";
    } else if (__s5param2.buildingVO && __s5param2.buildingVO.isConstructionExpertRequiredForUpgrade && !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT)) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_architectNeeded";
    } else if (__s5param2.buildingVO) {
      this._disp.toolTipText = {
        t: __s5param2.buildingVO.getUpgradeInfoString(),
        p: []
      };
      var __s5local3 = false;
      for (var __s5local4 = 0, __s5local5 = __dep_export_BuildingCostHelper.BuildingCostHelper.getUpgradeCostList(__s5param2.buildingVO).list; __s5local4 < __s5local5.length; __s5local4++) {
        var __s5local6 = __s5local5[__s5local4];
        if (__s5local6 !== undefined) {
          var __s5local7 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s5local6.itemType) >= 0;
          var __s5local8 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s5local6.itemType);
          if (__s5local7 && __s5local6.amount > __s5local8.amount && __s5local6.amount > __s5local8.maxAmount) {
            __s5local3 = true;
          }
        }
      }
      this.handlePrimeSale();
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "RubyWishingWellFixedPositionBuildingVE") && !__s5local0) {
        this._disp.delayEnableButton(true);
      } else if (__s5local3) {
        this._disp.enableButton = false;
        this._disp.toolTipText = "dialog_storageFull";
      } else {
        this._disp.enableButton = true;
      }
    }
    this._disp.visible = __s5param2.buildingVO && __s5param2.buildingVO.hasUpgrade && !this.isBuildingInProgress() && !__s5param2.buildingVO.isDamaged;
  };
  RingMenuButtonUpgradeBuilding.prototype.handlePrimeSale = function () {
    if (this.targetBuilding && __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.targetBuilding.buildingVO, true)) {
      this._disp.gotoAndStop(2);
      this._disp.toolTipText = "dialog_primeday_primesale_noise";
    } else if (this.targetBuilding) {
      this._disp.gotoAndStop(1);
      this._disp.toolTipText = {
        t: this.targetBuilding.buildingVO.getUpgradeInfoString(),
        p: []
      };
    }
  };
  RingMenuButtonUpgradeBuilding.prototype.getAction = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_UPGRADE);
  };
  RingMenuButtonUpgradeBuilding.prototype.removeEventListeners = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEventEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  RingMenuButtonUpgradeBuilding.prototype.addEventListeners = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEventEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  RingMenuButtonUpgradeBuilding.prototype.onRemoveSpecialEventEvent = function (__s32param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s32param0.specialEventVO, "PrimeSaleEventVO")) {
      this.handlePrimeSale();
    }
  };
  RingMenuButtonUpgradeBuilding.prototype.onOfferRemoved = function (__s35param0) {
    this.handlePrimeSale();
  };
  RingMenuButtonUpgradeBuilding.prototype.onClick = function (__s37param0, __s37param1) {
    __dep_export_Iso.Iso.controller.server.upgradeBuilding(this.targetBuilding.vo.objectId, this.targetBuilding.vo.wodId);
  };
  return RingMenuButtonUpgradeBuilding;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonUpgradeBuilding = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_BuildingCostHelper = require("gge-module:export_BuildingCostHelper");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IRingMenuButton");
