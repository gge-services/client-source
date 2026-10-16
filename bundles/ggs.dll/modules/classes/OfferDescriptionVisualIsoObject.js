Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualIsoObject(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._isVisible = false;
    this._objectType = __s3param0;
    this._objectName = __s3param1;
    this._areaTypes = __s3param2;
    this._isVisible = __s3param3;
  }
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_ISO_OBJECT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualIsoObject.prototype.parseFromObjectParam = function (__s7param0) {
    this._objectType = __s7param0.OT;
    this._objectName = __s7param0.ON;
    this._areaTypes = __s7param0.ATS;
    this._isVisible = false;
  };
  OfferDescriptionVisualIsoObject.prototype.execute = function (__s9param0) {
    if (__s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible && (this._isVisible = true, !this.executeVisibleHook())) {
        return false;
      }
    } else if (this._isVisible && (this._isVisible = false, !this.executeInvisibleHook())) {
      return false;
    }
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.executeVisibleHook = function () {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.executeInvisibleHook = function () {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.toExecuteInState = function (__s18param0) {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.isIsoObjectVisibleByArea = function (__s20param0) {
    return !this._areaTypes || this._areaTypes.indexOf(__s20param0) > -1;
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
  OfferDescriptionVisualIsoObject.prototype.dispose = function () {
    this._objectType = null;
    this._objectName = null;
  };
  OfferDescriptionVisualIsoObject.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_VISUAL_ISO_OBJECT";
  };
  return OfferDescriptionVisualIsoObject;
}();
exports.OfferDescriptionVisualIsoObject = __s0local0;
