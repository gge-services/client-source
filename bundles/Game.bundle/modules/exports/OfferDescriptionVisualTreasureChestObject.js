Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualTreasureChestObject() {
    this._isVisible = false;
  }
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualTreasureChestObject.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualTreasureChestObject.prototype.parseFromObjectParam = function (__s9param0) {
    this._objectType = __s9param0.OT;
    this._objectName = __s9param0.ON;
    this._areaTypes = __s9param0.ATS;
    this._isVisible = false;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.execute = function (__s11param0) {
    this._isVisible = __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING;
    if (__dep_export_Iso.Iso.data) {
      __dep_export_Iso.Iso.controller.dataUpdater.initObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.TREASURE_CHESTS);
    }
    return true;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.checkVisibility = function () {};
  OfferDescriptionVisualTreasureChestObject.prototype.toExecuteInState = function (__s16param0) {
    return true;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.isTreasureChestVisibleByArea = function (__s18param0) {
    return !this._areaTypes || this._areaTypes.indexOf(__s18param0) > -1;
  };
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "objectName", {
    get: function () {
      return this._objectName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "offerBuilding", {
    get: function () {
      return this._offerBuilding;
    },
    set: function (__s30param0) {
      this._offerBuilding = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualTreasureChestObject;
}();
exports.OfferDescriptionVisualTreasureChestObject = __s0local0;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
