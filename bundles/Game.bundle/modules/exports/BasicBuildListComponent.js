Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_BasicBuildListEvent = require("gge-module:export_BasicBuildListEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function BasicBuildListComponent(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._alignment = 0;
    __s3local0._selectedSlot = -1;
    __s3local0._showProgressbar = true;
    __s3local0._slotsDraggable = true;
    __s3local0.currentIndex = 0;
    __s3local0.maxShowableItems = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._componentMC = __s3param0;
    __s3local0._itemMC = __s3local0._componentMC.mc_items;
    __s3local0._alignment = __s3param1;
    __s3local0.maxShowableItems = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicBuildListComponent, __s1param0);
  Object.defineProperty(BasicBuildListComponent.prototype, "selectedSlot", {
    get: function () {
      return this._selectedSlot;
    },
    set: function (__s7param0) {
      if (this.selectedItem) {
        this.selectedItem.isSelected = false;
      }
      this._selectedSlot = __s7param0;
      if (this._selectedSlot >= 0 && this._selectedSlot < this._items.length) {
        this._items[this._selectedSlot].isSelected = true;
      }
      this.dispatchEvent(new __dep_export_BasicBuildListEvent.BasicBuildListEvent(__dep_export_BasicBuildListEvent.BasicBuildListEvent.SELECTED_ITEM));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "selectedItem", {
    get: function () {
      if (this._selectedSlot >= 0 && this._selectedSlot < this._items.length) {
        return this._items[this._selectedSlot];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.fillItems = function (__s15param0, __s15param1 = 0) {
    this.clearItems();
    if (this._buildlist != __s15param0) {
      this.selectedSlot = 0;
    }
    this._buildlist = __s15param0;
    if (this._buildlist) {
      for (var __s15local0 = this.listLength, __s15local1 = 0; __s15local1 < __s15local0; __s15local1++) {
        var __s15local2 = this.createBuildListItem();
        __s15local2.slotVO = __s15param0.getSlotByArrayPos(__s15local1);
        __s15local2.pos = __s15local1;
        __s15local2.showProgressbar = this.showProgressbar;
        if (__s15local2.pos == this._selectedSlot) {
          if (__s15local2.isFree || __s15local2.isLocked) {
            this._selectedSlot = -1;
          } else {
            __s15local2.isSelected = true;
          }
        }
        this.initBuildListItem(__s15local2);
        this._itemMC.addChild(__s15local2.disp);
        this._items.push(__s15local2);
      }
      this.updateAllPositions();
    }
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "listLength", {
    get: function () {
      return this._buildlist.numOfSlots;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.createBuildListItem = function () {
    return null;
  };
  BasicBuildListComponent.prototype.initBuildListItem = function (__s28param0) {
    __s28param0.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onItemClick));
    __s28param0.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
    if (!__s28param0.slotVO.isFree && !__s28param0.slotVO.isLocked) {
      __s28param0.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
    }
    switch (this._alignment) {
      case BasicBuildListComponent.ALIGN_HORIZONTAL:
        __s28param0.disp.x = (__s28param0.pos - this.currentIndex) * __s28param0.itemSlotSize;
        break;
      case BasicBuildListComponent.ALIGN_VERTICAL:
        __s28param0.disp.y = (__s28param0.pos - this.currentIndex) * __s28param0.itemSlotSize;
    }
    __s28param0.setIcons();
  };
  BasicBuildListComponent.prototype.onItemClick = function (__s32param0) {
    var __s32local0 = __s32param0.target.bItem;
    if (__s32local0.isLocked) {
      this.onItemLockedClick(__s32local0);
    }
  };
  BasicBuildListComponent.prototype.onItemLockedClick = function (__s35param0) {};
  BasicBuildListComponent.prototype.onItemMouseUp = function (__s37param0) {
    this.updateAllPositions();
    if (this._selectedDragItem) {
      var __s37local0 = this._selectedDragItem;
      if (this._selectedDragItem.disp.stage) {
        this._selectedDragItem.disp.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
        this._selectedDragItem.disp.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
      }
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s37local0.disp, 0.1, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s37local0.disp, 0.1, {
        scaleY: 1,
        scaleX: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      switch (this._alignment) {
        case BasicBuildListComponent.ALIGN_HORIZONTAL:
          __s37local0.disp.x = Math.round(__s37local0.disp.x / __s37local0.itemSlotSize) * __s37local0.itemSlotSize;
          break;
        case BasicBuildListComponent.ALIGN_VERTICAL:
          __s37local0.disp.y = Math.round(__s37local0.disp.y / __s37local0.itemSlotSize) * __s37local0.itemSlotSize;
      }
      if (this._selectedDragItem.pos != this._selectedDragItem.oldPos) {
        this.selectedSlot = this._selectedDragItem.pos;
        this.requestMoveFromServer(this._selectedDragItem);
      }
      this._selectedDragItem = null;
    }
  };
  BasicBuildListComponent.prototype.updateAllPositions = function () {
    if (this._selectedDragItem) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this._selectedDragItem);
    }
    var __s43local0 = 0;
    for (var __s43local1 = 0; __s43local1 < this._itemMC.numChildren; __s43local1++) {
      var __s43local2 = this._itemMC.getChildAt(__s43local1).bItem;
      __s43local2.disp.alpha = 1;
      __s43local2.disp.scaleY = 1;
      var __s43local3 = __s43local2.pos >= this.currentIndex && __s43local2.pos < this.currentIndex + this.maxShowableItems;
      __s43local2.setVisible(__s43local3);
      if (__s43local3 && __s43local2.pos < __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.numConstructionSlots) {
        __s43local0++;
      }
      switch (this._alignment) {
        case BasicBuildListComponent.ALIGN_HORIZONTAL:
          __s43local2.disp.x = (__s43local2.pos - this.currentIndex) * __s43local2.itemSlotSize;
          break;
        case BasicBuildListComponent.ALIGN_VERTICAL:
          __s43local2.disp.y = (__s43local2.pos - this.currentIndex) * __s43local2.itemSlotSize;
      }
    }
    if (this._componentMC.mc_OneConstructingSlots) {
      this._componentMC.mc_OneConstructingSlots.visible = __s43local0 == 1;
    }
    if (this._componentMC.mc_TwoConstructingSlots) {
      this._componentMC.mc_TwoConstructingSlots.visible = __s43local0 == 2;
    }
  };
  BasicBuildListComponent.prototype.requestMoveFromServer = function (__s52param0) {};
  BasicBuildListComponent.prototype.onItemMouseDown = function (__s54param0) {
    if (this.isItemDraggable) {
      var __s54local0 = __s54param0.target.bItem;
      this._itemMC.setChildIndex(__s54local0.disp, this._buildlist.useableSlots - 1);
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s54local0.disp, 0.1, {
        alpha: 0.6,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s54local0.disp, 0.1, {
        scaleY: 1.1,
        scaleX: 1.1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      this._selectedDragItem = __s54local0;
      this._selectedDragItem.oldPos = this._selectedDragItem.pos;
      this._selectedDragItem.disp.stage.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
      this._selectedDragItem.disp.stage.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
    }
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "isItemDraggable", {
    get: function () {
      return !!this.slotsDraggable;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.onMouseOverItem = function (__s59param0) {
    if (!this.isItemDraggable) {
      this.updateAllPositions();
    }
    var __s59local0 = __s59param0.target.bItem;
    __s59local0 ||= __s59param0.target.parent.bItem;
    if (__s59local0.isLocked) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    } else if (__s59local0.isFree) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    } else {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_HAND);
    }
  };
  BasicBuildListComponent.prototype.onItemMouseMove = function (__s65param0) {
    var __s65local0 = (this.maxShowableItems - 1) * this._selectedDragItem.itemSlotSize;
    var __s65local1 = 0;
    var __s65local2 = 0;
    var __s65local3 = this._componentMC.getBounds(null);
    switch (this._alignment) {
      case BasicBuildListComponent.ALIGN_HORIZONTAL:
        __s65local1 = __dep_exact_f855840627e6e145.int(this._componentMC.mouseX + __s65local3.x - (this._selectedDragItem.itemSlotSize + this._selectedDragItem.itemSpace) / 2);
        this._selectedDragItem.disp.x = Math.max(Math.min(__s65local1, __s65local0), 0);
        __s65local2 = Math.round(this._selectedDragItem.disp.x / this._selectedDragItem.itemSlotSize) + this.currentIndex;
        break;
      case BasicBuildListComponent.ALIGN_VERTICAL:
        __s65local1 = __dep_exact_f855840627e6e145.int(this._componentMC.mouseY + __s65local3.y - (this._selectedDragItem.itemSlotSize + this._selectedDragItem.itemSpace) / 2);
        this._selectedDragItem.disp.y = Math.max(Math.min(__s65local1, __s65local0), 0);
        __s65local2 = Math.round(this._selectedDragItem.disp.y / this._selectedDragItem.itemSlotSize) + this.currentIndex;
    }
    if (this._selectedDragItem.pos != __s65local2) {
      this.switchItemPos(this._selectedDragItem, __s65local2);
    }
  };
  BasicBuildListComponent.prototype.getConstructionItemVOByPos = function (__s69param0) {
    for (var __s69local0 = 0; __s69local0 < this._itemMC.numChildren; __s69local0++) {
      var __s69local1 = this._itemMC.getChildAt(__s69local0).bItem;
      if (__s69local1.slotVO.pos == __s69param0) {
        return __s69local1.slotVO;
      }
    }
  };
  BasicBuildListComponent.prototype.switchItemPos = function (__s74param0, __s74param1) {
    if (!this.getConstructionItemVOByPos(__s74param1).isLockedProductionSlot && !this.getConstructionItemVOByPos(__s74param1).isLocked && !this.additionalBlockForSwitchItemPos(__s74param0, __s74param1)) {
      var __s74local0;
      for (var __s74local1 = 0; __s74local1 < this._itemMC.numChildren; __s74local1++) {
        if (!(__s74local0 = this._itemMC.getChildAt(__s74local1).bItem).isVisibleLocked && __s74local0.pos == __s74param1) {
          __s74local0.pos = __s74param0.pos;
          break;
        }
      }
      if (__s74local0) {
        switch (this._alignment) {
          case BasicBuildListComponent.ALIGN_HORIZONTAL:
            __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s74local0.disp, 0.25, {
              x: (__s74local0.pos - this.currentIndex) * __s74local0.itemSlotSize,
              ease: __dep_exact_608de47b6498f9b0_1.Sine.easeInOut
            });
            break;
          case BasicBuildListComponent.ALIGN_VERTICAL:
            __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s74local0.disp, 0.25, {
              y: (__s74local0.pos - this.currentIndex) * __s74local0.itemSlotSize,
              ease: __dep_exact_608de47b6498f9b0_1.Sine.easeInOut
            });
        }
        this._buildlist.switchSlots(__s74param0.pos, __s74param1);
        __s74param0.pos = __s74param1;
        __s74local0.setIcons();
        __s74param0.setIcons();
      }
    }
  };
  BasicBuildListComponent.prototype.additionalBlockForSwitchItemPos = function (__s82param0, __s82param1) {
    return false;
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.clearItems = function () {
    if (this._selectedDragItem && this._selectedDragItem.disp.stage) {
      this._selectedDragItem.disp.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
      this._selectedDragItem.disp.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
    }
    this._selectedDragItem = null;
    if (this._items != null) {
      for (var __s86local0 = 0, __s86local1 = this._items; __s86local0 < __s86local1.length; __s86local0++) {
        var __s86local2 = __s86local1[__s86local0];
        if (__s86local2 !== undefined) {
          if (__s86local2.disp.stage) {
            __s86local2.disp.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
            __s86local2.disp.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
          }
          __s86local2.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onItemClick));
          __s86local2.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
          __s86local2.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
          __s86local2.remove();
          this._itemMC.removeChild(__s86local2.disp);
        }
      }
    }
    this._items = [];
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "slotsDraggable", {
    get: function () {
      return this._slotsDraggable;
    },
    set: function (__s100param0) {
      this._slotsDraggable = __s100param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "showProgressbar", {
    get: function () {
      return this._showProgressbar;
    },
    set: function (__s104param0) {
      this._showProgressbar = __s104param0;
      if (this._items != null) {
        for (var __s104local0 = 0, __s104local1 = this._items; __s104local0 < __s104local1.length; __s104local0++) {
          var __s104local2 = __s104local1[__s104local0];
          if (__s104local2 !== undefined) {
            __s104local2.showProgressbar = __s104param0;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.setCurrentIndex = function (__s110param0) {
    this.currentIndex += __s110param0;
    this.currentIndex = Math.max(0, Math.min(this.currentIndex, __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.numOfSlots - this.maxShowableItems));
    this.updateAllPositions();
  };
  BasicBuildListComponent.__initialize_static_members = function () {
    BasicBuildListComponent.ALIGN_HORIZONTAL = 0;
    BasicBuildListComponent.ALIGN_VERTICAL = 1;
  };
  return BasicBuildListComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.BasicBuildListComponent = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local1.__initialize_static_members();
