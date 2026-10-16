Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __s0local0 = function (__s1param0) {
  function CraftingDialogClickHandler(__s3param0) {
    var __s3local0 = this;
    __s3local0._isLocked = false;
    __s3local0.isWaitingForServerMessage = false;
    __s3local0._craftingStarted = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).craftingDialog = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingDialogClickHandler, __s1param0);
  CraftingDialogClickHandler.prototype.handleDialogClick = function (__s5param0) {
    if (this.tabChangeAllowed) {
      switch (__s5param0.target) {
        case this.craftingDisp.btn_backToEquip:
          this.craftingDialog.hide();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog);
          break;
        case this.craftingDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helpTextId));
          break;
        case this.craftingDisp.btn_close:
          this.craftingDialog.hide();
          break;
        case this.craftingDisp.mc_equipmentList.tab0:
        case this.craftingDisp.mc_equipmentList.tab1:
        case this.craftingDisp.mc_equipmentList.tab2:
        case this.craftingDisp.mc_equipmentList.tab3:
          var __s5local0 = __s5param0.target.name;
          var __s5local1 = parseInt(__s5local0.charAt(__s5local0.length - 1));
          this._inventory.currentFilterIndex = __s5local1;
          this.craftingDialog.lastFilter = this._inventory.currentFilterIndex;
      }
    }
  };
  Object.defineProperty(CraftingDialogClickHandler.prototype, "helpTextId", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CraftingDialogClickHandler.prototype.handleInventoryClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target) && this.tabChangeAllowed) {
      switch (__s11param0.target) {
        case this.inventoryDisp.tab0:
          if (this._inventory.currentFilterIndex == __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_ALL;
          break;
        case this.inventoryDisp.tab1:
          if (this._inventory.currentFilterIndex == __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GENERAL;
          break;
        case this.inventoryDisp.tab2:
          if (this._inventory.currentFilterIndex == __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_BARON;
          break;
        case this.inventoryDisp.tab3:
          if (this._inventory.currentFilterIndex != __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = __dep_export_CastleCraftingSublayer.CastleCraftingSublayer.FILTER_GEM;
      }
    }
  };
  CraftingDialogClickHandler.prototype.cancelDragMovement = function () {
    if (this._dragMovement && this._dragMovement.sourceSlotMC && this.isEmptySlot(this._dragMovement.sourceSlotMC)) {
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(this._dragMovement.sourceLocation.locationType, this._dragMovement.sourceLocation.lordID), this._dragMovement.sourceSlotMC);
    } else {
      this.endDrag(new __dep_export_EquipableDragLocationVO.EquipableDragLocationVO(__dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingDialogClickHandler.prototype.endDrag = function (__s23param0, __s23param1 = null) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CraftingDialogClickHandler.prototype.isEmptySlot = function (__s25param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(CraftingDialogClickHandler.prototype, "craftingDisp", {
    get: function () {
      return this.craftingDialog.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingDialogClickHandler;
}(require("gge-module:export_AEquipableClickHandler").AEquipableClickHandler);
exports.CraftingDialogClickHandler = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleCraftingSublayer = require("gge-module:export_CastleCraftingSublayer");
