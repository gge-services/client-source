Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleEquipableListComponent(__s3param0, __s3param1) {
    this._currentFilterIndex = CastleEquipableListComponent.INVALID_FILTER;
    this._currentScrollIndex = 0;
    this._disp = __s3param0;
    this.filters = __s3param1;
    if (this.filters != null) {
      for (var __s3local0 = 0, __s3local1 = this.filters; __s3local0 < __s3local1.length; __s3local0++) {
        var __s3local2 = __s3local1[__s3local0];
        if (__s3local2 !== undefined) {
          __s3local2.clickHandler.inventory = this;
        }
      }
    }
    this._listUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.initTabs();
  }
  Object.defineProperty(CastleEquipableListComponent.prototype, "listUpdatedSignal", {
    get: function () {
      return this._listUpdatedSignal;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.initTabs = function () {
    for (var __s11local0 = 0; __s11local0 < this.filters.length; __s11local0++) {
      var __s11local1 = this.filters[__s11local0];
      var __s11local2 = this.getTab(__s11local0);
      __s11local2.toolTipText = __s11local1.tabToolTip;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s11local2, __s11local1.isTabActive);
    }
  };
  CastleEquipableListComponent.prototype.show = function () {
    this.initScrollList();
    this.currentFilterIndex = this._currentFilterIndex;
  };
  CastleEquipableListComponent.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this._disp);
    this._itemScrollList.scrollStep = CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
    this.addEventListener();
  };
  CastleEquipableListComponent.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this.removeEventListener();
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  CastleEquipableListComponent.prototype.addEventListener = function () {
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.currentFilter.addListeners();
    }
    if (this.filters != null) {
      for (var __s22local0 = 0, __s22local1 = this.filters; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          __s22local2.listChanged = this.bindFunction(this.onFilterListChanged);
        }
      }
    }
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onItemClicked));
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onItemTouchDragStart));
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onItemTouchDragEnd));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserLevelUp));
  };
  CastleEquipableListComponent.prototype.onUserLevelUp = function (__s29param0) {
    this.initTabs();
  };
  CastleEquipableListComponent.prototype.onScroll = function (__s31param0) {
    var __s31local0 = __dep_exact_f855840627e6e145.int(this._itemScrollList.currentStartIndex);
    this._currentScrollIndex = this.calcNewStartIndex(__s31local0);
  };
  CastleEquipableListComponent.prototype.calcNewStartIndex = function (__s33param0) {
    return __s33param0 - __s33param0 % CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
  };
  CastleEquipableListComponent.prototype.onClick = function (__s35param0) {
    if (!(__s35param0.target instanceof this.currentFilter.slotClass) && __s35param0.target != this._itemScrollList.componentDisp.btn_up && __s35param0.target != this._itemScrollList.componentDisp.btn_down) {
      this.currentClickHandler.handleInventoryClick(__s35param0);
    }
  };
  CastleEquipableListComponent.prototype.getTab = function (__s38param0) {
    return this._disp[CastleEquipableListComponent.BASE_TAB_NAME + __s38param0];
  };
  CastleEquipableListComponent.prototype.onItemClicked = function (__s40param0) {
    if (!__s40param0.originEvent || !__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s40param0.originEvent)) {
      this.currentClickHandler.handleInventoryEntryClick(__s40param0);
    }
  };
  CastleEquipableListComponent.prototype.onItemTouchDragStart = function (__s43param0) {
    this.currentClickHandler.handleInventoryEntryTouchDragStart(__s43param0);
  };
  CastleEquipableListComponent.prototype.onItemTouchDragEnd = function (__s45param0) {
    this.currentClickHandler.handleInventoryEntryTouchDragEnd(__s45param0);
  };
  CastleEquipableListComponent.prototype.onFilterListChanged = function (__s47param0) {
    if (__s47param0 == this.currentFilter) {
      this.updateScrollList();
      this.initTabs();
    }
  };
  CastleEquipableListComponent.prototype.updateScrollList = function () {
    this.initScrollList();
    this.currentFilter.fillScrollListData(this._itemScrollList);
    this.gotoCurrentScrollItem();
    for (var __s50local0 = 0, __s50local1 = this._itemScrollList.veList; __s50local0 < __s50local1.length; __s50local0++) {
      var __s50local2 = __s50local1[__s50local0];
      if (__s50local2 !== undefined) {
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s50local2.disp);
      }
    }
    this._listUpdatedSignal.dispatch();
  };
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentFilterIndex", {
    get: function () {
      return this._currentFilterIndex;
    },
    set: function (__s57param0) {
      if (this._currentFilterIndex != __s57param0) {
        if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
          this.deactivateFilterAndTab(this._currentFilterIndex);
        }
        this._currentFilterIndex = __s57param0;
        if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
          this.activateFilterAndTab(this._currentFilterIndex);
          if (this._tabChangedCallback) {
            this._tabChangedCallback(this._currentFilterIndex);
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.activateFilterAndTab = function (__s63param0) {
    var __s63local0 = this.filters[__s63param0];
    this.getTab(__s63param0).gotoAndStop(CastleEquipableListComponent.TAB_FRAME_ACTIVE);
    this._currentScrollIndex = 0;
    this.updateScrollList();
    __s63local0.addListeners();
    __s63local0.triggerLightUpdate();
  };
  CastleEquipableListComponent.prototype.deactivateFilterAndTab = function (__s65param0) {
    this.filters[__s65param0].removeListeners();
    var __s65local0 = this.getTab(__s65param0);
    __s65local0.gotoAndStop(CastleEquipableListComponent.TAB_FRAME_INACTIVE);
    if (__s65local0.mc_icon) {
      __s65local0.mc_icon.stop();
    }
  };
  CastleEquipableListComponent.prototype.hide = function () {
    if (this.currentClickHandler) {
      this.currentClickHandler.hideDialog();
      this.currentClickHandler.dispose();
    }
    this.removeEventListener();
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.deactivateFilterAndTab(this._currentFilterIndex);
    }
    this.disposeScrollList();
    this._currentFilterIndex = CastleEquipableListComponent.INVALID_FILTER;
  };
  CastleEquipableListComponent.prototype.removeEventListener = function () {
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.currentFilter.removeListeners();
    }
    if (this.filters != null) {
      for (var __s72local0 = 0, __s72local1 = this.filters; __s72local0 < __s72local1.length; __s72local0++) {
        var __s72local2 = __s72local1[__s72local0];
        if (__s72local2 !== undefined) {
          __s72local2.listChanged = null;
        }
      }
    }
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onItemClicked));
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onItemTouchDragStart));
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onItemTouchDragEnd));
    }
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserLevelUp));
  };
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentFilter", {
    get: function () {
      if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
        return this.filters[this._currentFilterIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentClickHandler", {
    get: function () {
      if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
        return this.filters[this._currentFilterIndex].clickHandler;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "tabChangedCallback", {
    set: function (__s88param0) {
      this._tabChangedCallback = __s88param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.lockList = function () {
    this._itemScrollList.lockList();
    for (var __s92local0 = 0; __s92local0 < this.filters.length; __s92local0++) {
      var __s92local1 = this.getTab(__s92local0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s92local1, false);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_up, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_down, false);
  };
  CastleEquipableListComponent.prototype.unlockList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.unlockList();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_up, true);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_down, true);
    }
    this.initTabs();
  };
  CastleEquipableListComponent.prototype.forEachItemVO = function (__s99param0) {
    var __s99local0 = __s99param0;
    if (this._itemScrollList && this._itemScrollList.voList) {
      this._itemScrollList.voList.forEach(__s99local0);
    }
  };
  CastleEquipableListComponent.prototype.forEachItemVE = function (__s102param0) {
    var __s102local0 = __s102param0;
    if (this._itemScrollList && this._itemScrollList.voList) {
      this._itemScrollList.veList.forEach(__s102local0);
    }
  };
  CastleEquipableListComponent.prototype.forEachFilter = function (__s105param0) {
    var __s105local0 = __s105param0;
    this.filters.forEach(__s105local0);
  };
  CastleEquipableListComponent.prototype.redraw = function () {
    this.gotoCurrentScrollItem();
  };
  CastleEquipableListComponent.prototype.gotoCurrentScrollItem = function () {
    if (this._itemScrollList.voList && this._currentScrollIndex >= this._itemScrollList.voList.length) {
      if (this._currentScrollIndex > 0 && this._itemScrollList.voList.length % CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE == 0) {
        this._currentScrollIndex -= CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
      } else {
        this._currentScrollIndex = 0;
      }
    }
    if (this._itemScrollList.veList) {
      this._itemScrollList.initList(this._currentScrollIndex, true);
    }
  };
  CastleEquipableListComponent.prototype.scrollToItem = function (__s115param0) {
    if (!this._itemScrollList || !this._itemScrollList.voList) {
      return null;
    }
    var __s115local0 = -1;
    for (var __s115local1 = 0; __s115local1 < this._itemScrollList.voList.length; __s115local1++) {
      var __s115local2 = this._itemScrollList.voList[__s115local1];
      if (this.currentFilter.matches(__s115local2, __s115param0)) {
        __s115local0 = __s115local1;
        break;
      }
    }
    if (__s115local0 > -1) {
      this._currentScrollIndex = this.calcNewStartIndex(__s115local0);
      this._itemScrollList.initList(this._currentScrollIndex);
      for (var __s115local3 = 0, __s115local4 = this._itemScrollList.veList; __s115local3 < __s115local4.length; __s115local3++) {
        var __s115local5 = __s115local4[__s115local3];
        if (__s115local5 !== undefined && this.currentFilter.matches(__s115local5.scrollItemVO, __s115param0)) {
          return __s115local5.disp;
        }
      }
    }
    return null;
  };
  CastleEquipableListComponent.prototype.update = function () {
    if (this.currentFilter) {
      this.currentFilter.triggerLightUpdate();
      this._listUpdatedSignal.dispatch();
    }
  };
  CastleEquipableListComponent.BASE_TAB_NAME = "tab";
  CastleEquipableListComponent.INVALID_FILTER = -1;
  CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE = 14;
  CastleEquipableListComponent.TAB_FRAME_INACTIVE = 1;
  CastleEquipableListComponent.TAB_FRAME_ACTIVE = 2;
  return CastleEquipableListComponent;
}();
exports.CastleEquipableListComponent = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
