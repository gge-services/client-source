Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __dep_export_IconStateVO = require("gge-module:export_IconStateVO");
var __s0local0 = function () {
  function OfferDescriptionVisualIsoObject() {
    this._isVisible = false;
    this._hiddenByABTest = false;
  }
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualIsoObject.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualIsoObject.prototype.parseFromObjectParam = function (__s9param0) {
    var __s9local0;
    this._objectType = __s9param0.OT;
    this._objectName = __s9param0.ON;
    this._areaTypes = __s9param0.ATS;
    this._iconForStates = [];
    if (__s9param0.IFS) {
      for (var __s9local1 = 0, __s9local2 = __s9param0.IFS; __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined && __s9local3.OS) {
          for (var __s9local4 = 0, __s9local5 = __s9local3.OS; __s9local4 < __s9local5.length; __s9local4++) {
            var __s9local6 = __s9local5[__s9local4];
            if (__s9local6 !== undefined) {
              (__s9local0 = new __dep_export_IconStateVO.IconStateVO()).iconClassName = __s9local3.ICN;
              __s9local0.offerState = __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.getEnumByStateId(__s9local6);
              this._iconForStates.push(__s9local0);
            }
          }
        }
      }
    }
    this._isVisible = false;
  };
  OfferDescriptionVisualIsoObject.prototype.execute = function (__s18param0) {
    this._isVisible = __s18param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED || __s18param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING || __s18param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY || __s18param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING;
    if (this._hiddenByABTest) {
      this._isVisible = false;
    }
    if (__dep_export_Iso.Iso.data) {
      __dep_export_Iso.Iso.data.updater.updateEventBuildings();
    }
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.getIconClassNameForOfferState = function (__s22param0) {
    if (this._iconForStates != null) {
      for (var __s22local0 = 0, __s22local1 = this._iconForStates; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined && __s22local2.offerState === __s22param0) {
          return __s22local2.iconClassName;
        }
      }
    }
    return null;
  };
  OfferDescriptionVisualIsoObject.prototype.toExecuteInState = function (__s28param0) {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.isIsoObjectVisibleByArea = function (__s30param0) {
    return !this._areaTypes || this._areaTypes.indexOf(__s30param0) > -1;
  };
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "objectName", {
    get: function () {
      return this._objectName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "hiddenByABTest", {
    set: function (__s40param0) {
      this._hiddenByABTest = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualIsoObject;
}();
exports.OfferDescriptionVisualIsoObject = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
