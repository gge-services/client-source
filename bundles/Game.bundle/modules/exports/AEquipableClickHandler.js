Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AEquipableClickHandler() {
    this._tabChangeAllowed = true;
  }
  AEquipableClickHandler.prototype.init = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
  };
  AEquipableClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
  };
  AEquipableClickHandler.prototype.onShowDialog = function (__s9param0) {
    this.IGNORED_DRAG_CANCEL_DIALOGS ||= [__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, __dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, __dep_export_CastleSellEmbeddedEquipmentDialog.CastleSellEmbeddedEquipmentDialog, __dep_export_CastleNewSocketDialog.CastleNewSocketDialog, __dep_export_CastleReplaceSocketDialog.CastleReplaceSocketDialog];
    if (this.IGNORED_DRAG_CANCEL_DIALOGS.indexOf(__s9param0.params[0]) == -1) {
      this.cancelDragMovement();
    }
  };
  AEquipableClickHandler.prototype.cancelDragMovement = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.hideDialog = function () {};
  AEquipableClickHandler.prototype.setStorageWarning = function () {};
  AEquipableClickHandler.prototype.handleDialogClick = function (__s18param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleDialogMouseOver = function (__s20param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleDialogMouseOut = function (__s22param0) {};
  AEquipableClickHandler.prototype.handleInventoryClick = function (__s24param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryClick = function (__s26param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryTouchDragStart = function (__s28param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (__s30param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AEquipableClickHandler.prototype, "inventory", {
    set: function (__s32param0) {
      this._inventory = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "inventoryDisp", {
    get: function () {
      return this._inventory.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "tabChangeAllowed", {
    get: function () {
      return this._tabChangeAllowed;
    },
    set: function (__s42param0) {
      this._tabChangeAllowed = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  return AEquipableClickHandler;
}();
exports.AEquipableClickHandler = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleEquipmentSellDialog = require("gge-module:export_CastleEquipmentSellDialog");
var __dep_export_CastleNewSocketDialog = require("gge-module:export_CastleNewSocketDialog");
var __dep_export_CastleReplaceSocketDialog = require("gge-module:export_CastleReplaceSocketDialog");
var __dep_export_CastleSellEmbeddedEquipmentDialog = require("gge-module:export_CastleSellEmbeddedEquipmentDialog");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
