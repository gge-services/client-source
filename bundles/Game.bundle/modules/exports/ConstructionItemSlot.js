Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function ConstructionItemSlot(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._disp = __s3param3;
    this._slotVO = __s3param0;
    this.interactionData = __s3param1;
    this.clickCallback = __s3param2;
    __s3param3.mc_item.mouseChildren = false;
    __s3param3.mc_lock.mouseEnabled = false;
  }
  ConstructionItemSlot.prototype.show = function () {
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    if (this.interactionData) {
      this.interactionData.SGN_UPDATE.add(this.bindFunction(this.sgnUpdate));
    }
  };
  ConstructionItemSlot.prototype.hide = function () {
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    if (this.interactionData) {
      this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.sgnUpdate));
    }
  };
  ConstructionItemSlot.prototype.sgnUpdate = function (__s11param0 = null) {
    this.update();
  };
  ConstructionItemSlot.prototype.update = function () {
    this._disp.mc_lock.visible = this.isLocked();
    var __s13local0 = !!this.interactionData && this.interactionData.isSlotLockedForDrop(this.slotVO, this.itemVO);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.mc_item, !__s13local0);
    this.setTooltip();
  };
  ConstructionItemSlot.prototype.onMouseOver = function (__s15param0) {
    if (__s15param0.target == this._disp.mc_item && this.itemVO && !this.isLocked()) {
      __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.showConstructionItemToolTip(this._disp, this.itemVO);
    }
  };
  ConstructionItemSlot.prototype.onMouseOut = function (__s18param0) {
    if (this.itemVO) {
      __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
    }
  };
  ConstructionItemSlot.prototype.onClick = function (__s21param0) {
    this.clickCallback(this);
  };
  ConstructionItemSlot.prototype.setTooltip = function () {
    if (__dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorForSlot(this._slotVO)) {
      if (this.interactionData && this.interactionData.draggedItem && this.interactionData.draggedItem.constructionItemVO.slotType != this._slotVO.slotType) {
        this._disp.mc_item.toolTipText = "dialog_ci_assign_info_wrongSlot_tooltip";
      } else if (this.interactionData && this.interactionData.isSlotLockedByAreaLimit(this._slotVO, this.itemVO)) {
        this._disp.mc_item.toolTipText = "dialog_ci_assign_maxLimit_tooltip";
      } else if (this.itemVO) {
        this._disp.mc_item.toolTipText = null;
      } else {
        this._disp.mc_item.toolTipText = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getSlotNameTextId(this._slotVO.slotType);
      }
    } else {
      var __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getMinimumConstructorLevelForSlot(this._slotVO));
      this._disp.mc_item.toolTipText = {
        t: "dialog_ci_assign_info_lockedSlot_tooltip",
        p: [__s23local0]
      };
    }
  };
  Object.defineProperty(ConstructionItemSlot.prototype, "itemVO", {
    get: function () {
      if (this.buildingVO) {
        return this.buildingVO.getConstructionItem(this._slotVO);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlot.prototype, "buildingVO", {
    get: function () {
      if (this.interactionData) {
        return this.interactionData.selectedBuilding;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlot.prototype.isLocked = function () {
    return !__dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorForSlot(this._slotVO) || !!this.interactionData && this.interactionData.isSlotLockedForDrop(this.slotVO, this.itemVO);
  };
  Object.defineProperty(ConstructionItemSlot.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlot.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemSlot;
}();
exports.ConstructionItemSlot = __s0local1;
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
