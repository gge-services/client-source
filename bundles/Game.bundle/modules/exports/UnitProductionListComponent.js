Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_BasicBuildListEvent = require("gge-module:export_BasicBuildListEvent");
var __dep_export_UnitBuildListComponent = require("gge-module:export_UnitBuildListComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function UnitProductionListComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.canInteract = true;
    __s3local0.canShowLocks = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0.mc_buildList, __s3param1) || this)._connector = __s3param0.mc_buildList.connector;
    __s3local0._connector.visible = false;
    __s3local0._productionItemMC = __s3param0.mc_buildList.productionItem;
    __s3local0._productionItemAreaMC = __s3param0.mc_buildList.productionItemArea;
    __s3local0._productionItemAreaMC.toolTipText = __s3local0.noProductionSlotText();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitProductionListComponent, __s1param0);
  UnitProductionListComponent.prototype.fillProductionItem = function () {
    this.clearProductionItem();
    if (this._productionItemSlot) {
      this._productionItem = this.createBuildListItem();
      this._productionItem.slotVO = this._productionItemSlot;
      this._productionItem.showProgressbar = true;
      this.initBuildListItem(this._productionItem);
      this._productionItemMC.addChild(this._productionItem.disp);
      this._connector.visible = false;
      var __s5local0 = this._buildlist.getSlotByPos(0);
      if (__s5local0 && this._productionItemSlot.sourceRecruitmentID == __s5local0.recruitmentID && this._productionItemSlot.amount > 0) {
        this._connector.visible = true;
      }
      if (this._productionItemSlot.amount > 0) {
        this._productionItemAreaMC.toolTipText = "";
      } else {
        this._productionItemAreaMC.toolTipText = this.noProductionSlotText();
      }
    } else {
      this._productionItemAreaMC.toolTipText = this.noProductionSlotText();
    }
  };
  UnitProductionListComponent.prototype.clearProductionItem = function () {
    if (this._productionItem) {
      if (this._productionItem.disp.stage) {
        this._productionItem.disp.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
        this._productionItem.disp.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
      }
      this._productionItem.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onItemClick));
      this._productionItem.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
      this._productionItem.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
      this._productionItem.remove();
      if (this._productionItem.disp.parent) {
        this._productionItemMC.removeChild(this._productionItem.disp);
      }
    }
  };
  UnitProductionListComponent.prototype.toggleConnector = function () {
    this._connector.visible = !this._connector.visible;
  };
  UnitProductionListComponent.prototype.fillItems = function (__s19param0, __s19param1 = 0) {
    this.showProgressbar = false;
    __s1param0.prototype.fillItems.call(this, __s19param0, __s19param1);
    this._productionItemSlot = __s19param0.currentProductionSlot;
    this.fillProductionItem();
  };
  UnitProductionListComponent.prototype.onItemClick = function (__s21param0) {
    if (this.canInteract) {
      var __s21local0 = __dep_exact_81dacdf05bd32292.castAs(__s21param0.target.bItem, "BasicBuildListItem");
      if (__s21local0 == this._productionItem) {
        if (this.selectedItem) {
          this.selectedItem.isSelected = false;
        }
        this._selectedSlot = -1;
        __s21local0.isSelected = true;
        this.dispatchEvent(new __dep_export_BasicBuildListEvent.BasicBuildListEvent(__dep_export_BasicBuildListEvent.BasicBuildListEvent.SELECTED_ITEM));
      } else {
        this._productionItem.isSelected = false;
        __s1param0.prototype.onItemClick.call(this, __s21param0);
      }
    }
  };
  UnitProductionListComponent.prototype.onMouseOverItem = function (__s27param0) {
    __s1param0.prototype.onMouseOverItem.call(this, __s27param0);
  };
  UnitProductionListComponent.prototype.onItemMouseDown = function (__s29param0) {
    var __s29local0 = __dep_exact_81dacdf05bd32292.castAs(__s29param0.target.bItem, "BasicBuildListItem");
    if (this._productionItem != __s29local0) {
      __s1param0.prototype.onItemMouseDown.call(this, __s29param0);
    }
  };
  UnitProductionListComponent.prototype.setItemTooltip = function (__s32param0) {
    __s1param0.prototype.setItemTooltip.call(this, __s32param0);
    if (__s32param0 == this._productionItem && this._productionItemSlot.amount <= 0) {
      __s32param0.disp.toolTipText = this.noProductionSlotText();
    }
  };
  Object.defineProperty(UnitProductionListComponent.prototype, "selectedItem", {
    get: function () {
      if (this._productionItem && this._productionItem.isSelected) {
        return this._productionItem;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListComponent.BasicBuildListComponent.prototype, "selectedItem").get.call(this);
      }
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitBuildListComponent.UnitBuildListComponent.prototype, "selectedItem").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitProductionListComponent.prototype.noProductionSlotText = function () {
    if (this.category == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return "recruitSlot_noProduction";
    } else {
      return "recruitSlot_noRecruitment";
    }
  };
  Object.defineProperty(UnitProductionListComponent.prototype, "productionItem", {
    get: function () {
      return this._productionItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitProductionListComponent.prototype, "isProductionItemSelected", {
    get: function () {
      return !!this._productionItem && this._productionItem.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  return UnitProductionListComponent;
}(__dep_export_UnitBuildListComponent.UnitBuildListComponent);
exports.UnitProductionListComponent = __s0local1;
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
