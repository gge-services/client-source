Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGeneratorEventBuildingPosition = require("gge-module:export_IsoGeneratorEventBuildingPosition");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupEvent() {
    var __s3local0 = this;
    __s3local0._buildingPoints = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupEvent, __s1param0);
  IsoDataObjectGroupEvent.prototype.initObjects = function () {
    this.resetList();
    if (this.isoData && this.isoData.areaData) {
      if (this.isoData.areaData.isLowLevelUnderworld) {
        this.addSpecialEventBuildingsByLowLevelUnderWorld();
      } else {
        this.addSpecialEventBuildings();
      }
      this.addOfferBuildings();
      this.list.sort(IsoDataObjectGroupEvent.sortBuildings);
      this.updateBuildingPoints();
      this.assignBuildingPoints();
    }
  };
  IsoDataObjectGroupEvent.prototype.addSpecialEventBuildings = function () {
    var __s10local0 = __dep_export_CastleModel.CastleModel.privateOfferData.getListOfHiddenEvents();
    for (var __s10local1 = 0, __s10local2 = Array.from(__dep_export_CastleModel.CastleModel.specialEventData.activeEvents.values()); __s10local1 < __s10local2.length; __s10local1++) {
      var __s10local3 = __s10local2[__s10local1];
      if (__s10local3 !== undefined) {
        if (!!this.hasSpecialEventABuildingInThisCastle(__s10local3) && (!(__s10local0.indexOf(__s10local3.eventId) >= 0) || !this.isoData.areaData.isMyHomeCastle)) {
          this.list.push(this.createEventBuildingByEvent(__s10local3));
        }
      }
    }
    for (var __s10local4 = 0, __s10local5 = Array.from(__dep_export_CastleModel.CastleModel.specialEventData.activeFakeEvents.values()); __s10local4 < __s10local5.length; __s10local4++) {
      var __s10local6 = __s10local5[__s10local4];
      if (__s10local6 !== undefined && this.hasSpecialEventABuildingInThisCastle(__s10local6) && __s10local0.indexOf(__s10local6.eventId) < 0) {
        this.list.push(this.createEventBuildingByEvent(__s10local6));
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.addSpecialEventBuildingsByLowLevelUnderWorld = function () {
    var __s19local0 = __dep_export_CastleModel.CastleModel.specialEventData.getEventByClass(__dep_export_PrivateUnitDealerEventVO.PrivateUnitDealerEventVO);
    if (__s19local0) {
      var __s19local1 = this.createEventBuildingByEvent(__s19local0);
      if (__s19local1) {
        this.list.push(__s19local1);
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.addOfferBuildings = function () {
    var __s23local0;
    var __s23local1 = __dep_export_CastleModel.CastleModel.privateOfferData.getPrivateOffersWithVisualParamter(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT);
    if (__s23local1 != null) {
      for (var __s23local2 = 0, __s23local3 = __s23local1; __s23local2 < __s23local3.length; __s23local2++) {
        var __s23local4 = __s23local3[__s23local2];
        if (__s23local4 !== undefined && (__s23local0 = __dep_exact_81dacdf05bd32292.castAs(__s23local4.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER).visuals.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT), "OfferDescriptionVisualIsoObject")) && __s23local0.isVisible && __s23local0.isIsoObjectVisibleByArea(this.isoData.areaData.areaInfo.areaType) && this.isoData.areaData.isMyHomeCastle) {
          this.list.push(this.createOfferBuilding(__s23local0, __s23local4));
        }
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.updateBuildingPoints = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._buildingPoints = __dep_export_IsoGeneratorEventBuildingPosition.IsoGeneratorEventBuildingPosition.getPosListByNewVersion(this.isoData.grid);
    } else {
      this._buildingPoints = __dep_export_IsoGeneratorEventBuildingPosition.IsoGeneratorEventBuildingPosition.getPosListByOldVersion(this.isoData.grid, this.list.length);
    }
  };
  IsoDataObjectGroupEvent.prototype.assignBuildingPoints = function () {
    var __s33local0 = 0;
    if (this.list != null) {
      for (var __s33local1 = 0, __s33local2 = this.list; __s33local1 < __s33local2.length; __s33local1++) {
        var __s33local3 = __s33local2[__s33local1];
        if (__s33local3 !== undefined) {
          var __s33local4 = this._buildingPoints[__s33local0];
          if (__s33local4) {
            __s33local3.x = __s33local4.x;
            __s33local3.y = __s33local4.y;
          }
          __s33local0++;
        }
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.createEventBuildingByEvent = function (__s40param0) {
    var __s40local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s40param0.eventBuildingWOD, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    __s40local0.eventVO = __s40param0;
    __s40local0.init(this.isoData);
    __s40local0.updateData();
    return __s40local0;
  };
  IsoDataObjectGroupEvent.prototype.createOfferBuilding = function (__s42param0, __s42param1) {
    var __s42local0 = new __dep_export_OfferBuildingVO.OfferBuildingVO(__s42param0.objectType, __s42param0.objectName, __s42param1);
    __s42local0.init(this.isoData);
    __s42local0.updateData();
    return __s42local0;
  };
  IsoDataObjectGroupEvent.prototype.hasSpecialEventABuildingInThisCastle = function (__s44param0) {
    return !!__s44param0.isVisible && !!this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess && !this.isoData.areaData.areaInfo.isUnderConquerControl && !!__s44param0.isActive && !(__s44param0.eventBuildingWOD <= 0) && !(__dep_export_CastleModel.CastleModel.userData.userLevel < __s44param0.minLevel) && !(__s44param0.kingdomIDs.indexOf(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) < 0) && __s44param0.allowedAreaTypes.indexOf(this.isoData.areaData.areaInfo.areaType) >= 0;
  };
  IsoDataObjectGroupEvent.sortBuildings = function (__s46param0, __s46param1) {
    return __s46param0.isoSortOrder - __s46param1.isoSortOrder;
  };
  return IsoDataObjectGroupEvent;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupEvent = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_PrivateUnitDealerEventVO = require("gge-module:export_PrivateUnitDealerEventVO");
var __dep_export_OfferBuildingVO = require("gge-module:export_OfferBuildingVO");
