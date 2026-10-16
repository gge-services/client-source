Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualInterfaceButton() {
    this._panelType = 0;
    this._isVisible = false;
    this._offerStyle = 0;
    this._hiddenByABTest = false;
  }
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualInterfaceButton.prototype.parseFromObjectParam = function (__s9param0) {
    this._buttonType = __s9param0.BT;
    this._panelType = __dep_exact_f855840627e6e145.int(__s9param0.PT);
    this._tooltipId = __s9param0.TID;
    this._offerStyle = __s9param0.OS ? 1 : 0;
    this._isVisible = false;
  };
  OfferDescriptionVisualInterfaceButton.prototype.execute = function (__s11param0) {
    if (this._offerStyle && this._offerStyle == OfferDescriptionVisualInterfaceButton.OFFER_STYLE_OPEN_EMAIL_TRIGGER && __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED) {
      return false;
    }
    if (__s11param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) && !__dep_export_CastleModel.CastleModel.skipDiscountData.isBestOfferSoFar(__s11param0)) {
      return true;
    }
    if (__dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(__s11param0) === __dep_export_CastlePrivateBestsellerShopDialog.CastlePrivateBestsellerShopDialog.OFFER_NAME) {
      return true;
    }
    if (__s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY || __s11param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible) {
        var __s11local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleStatusPanel.CastleStatusPanel), "CastleStatusPanel");
        if (!__s11local0) {
          return false;
        }
        this._statusIcon = new __dep_export_StatusIconPrivateOffer.StatusIconPrivateOffer(this._buttonType, __s11param0, this._tooltipId, this._panelType);
        if (this._statusIcon) {
          __s11local0.addStatusIcon(this._panelType, this._statusIcon);
          this._isVisible = true;
        }
      }
    } else if (this._isVisible) {
      var __s11local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleStatusPanel.CastleStatusPanel), "CastleStatusPanel");
      if (__s11local1 && this._statusIcon) {
        if (this._statusIcon) {
          this._statusIcon.hide();
          __s11local1.removeStatusIcon(this._panelType, this._statusIcon);
          this._statusIcon.dispose();
        }
        this._isVisible = false;
      }
    }
    if (this._hiddenByABTest) {
      if (this._statusIcon) {
        this._statusIcon.hide();
      }
      this._isVisible = false;
    }
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.toExecuteInState = function (__s25param0) {
    return true;
  };
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "hiddenByABTest", {
    get: function () {
      return this._hiddenByABTest;
    },
    set: function (__s29param0) {
      this._hiddenByABTest = __s29param0;
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
  OfferDescriptionVisualInterfaceButton.__initialize_static_members = function () {
    OfferDescriptionVisualInterfaceButton.OFFER_STYLE_OPEN_EMAIL_TRIGGER = 1;
  };
  return OfferDescriptionVisualInterfaceButton;
}();
exports.OfferDescriptionVisualInterfaceButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_export_StatusIconPrivateOffer = require("gge-module:export_StatusIconPrivateOffer");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
var __dep_export_CastlePrivateBestsellerShopDialog = require("gge-module:export_CastlePrivateBestsellerShopDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
__s0local0.__initialize_static_members();
