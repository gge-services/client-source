Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualInterfaceButton(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._buttonType = __s3param0;
    this._panelType = __s3param1;
    this._tooltipId = __s3param2;
    this._isVisible = __s3param3;
  }
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_INTERFACE_BUTTON;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.parseFromObjectParam = function (__s7param0) {
    this._buttonType = __s7param0.BT;
    this._panelType = __s7param0.PT;
    this._tooltipId = __s7param0.TID;
    this._isVisible = false;
  };
  OfferDescriptionVisualInterfaceButton.prototype.execute = function (__s9param0) {
    if (__s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY || __s9param0.offerState === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible && !this.IsInvisbleAtExecutionHook()) {
        return false;
      }
    } else if (this._isVisible && !this.isVisibleAtExecutionHook()) {
      return false;
    }
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.IsInvisbleAtExecutionHook = function () {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.isVisibleAtExecutionHook = function () {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.toExecuteInState = function (__s18param0) {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.dispose = function () {
    this._buttonType = null;
    this._tooltipId = null;
  };
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "buttonType", {
    get: function () {
      return this._buttonType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "panelType", {
    get: function () {
      return this._panelType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "tooltipId", {
    get: function () {
      return this._tooltipId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_INTERFACE_BUTTON";
  };
  return OfferDescriptionVisualInterfaceButton;
}();
exports.OfferDescriptionVisualInterfaceButton = __s0local0;
