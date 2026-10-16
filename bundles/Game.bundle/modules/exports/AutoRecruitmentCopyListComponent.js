Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyListComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._itemClass = __dep_export_AAutoRecruitmentCopyListItemVE.AAutoRecruitmentCopyListItemVE;
    __s3local0._items = [];
    __s3local0._listData = [];
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._itemClass = __s3param1;
    __s3local0._selectAllButton = __s3param0.getChildByName("btn_selectAll");
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._selectAllButton);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(__s3param0.mc_scroller.btn_up, __s3param0.mc_scroller.btn_down, __s3param0.mc_scroller.btn_top, null, __s3param0.mc_scroller.mc_sliderLine, __s3param0.mc_scroller.btn_slider, [__s3param0.mc_scroller], [__s3param0.parent]), new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical());
    for (var __s3local1 = 0; __s3local1 < AutoRecruitmentCopyListComponent.ITEM_COUNT; ++__s3local1) {
      __s3local0.items.push(new __s3param1(__s3param0.getChildByName("mc_item" + __s3local1)));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyListComponent, __s1param0);
  AutoRecruitmentCopyListComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this.items != null) {
      for (var __s7local0 = 0, __s7local1 = this.items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this.updateList();
  };
  AutoRecruitmentCopyListComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this.items != null) {
      for (var __s13local0 = 0, __s13local1 = this.items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  AutoRecruitmentCopyListComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    if (this.items != null) {
      for (var __s19local0 = 0, __s19local1 = this.items; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    if (this.items != null) {
      for (var __s25local0 = 0, __s25local1 = this.items; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          __s25local2.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.destroy = function () {
    this._scrollComponent.destroy();
    this._scrollComponent = null;
    if (this.items != null) {
      for (var __s31local0 = 0, __s31local1 = this.items; __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined) {
          __s31local2.destroy();
        }
      }
    }
    this._items = [];
  };
  AutoRecruitmentCopyListComponent.prototype.initWithNewData = function (__s37param0) {
    this.changeVisualSelectAllButton(false);
    this._listData = [];
    if (__s37param0 != null) {
      for (var __s37local0 = 0, __s37local1 = __s37param0; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          this._listData.push(new __dep_export_AutoRecruitmentCopyListItemVO.AutoRecruitmentCopyListItemVO(__s37local2));
        }
      }
    }
    this._scrollComponent.init(0, Math.max(0, __s37param0.length - AutoRecruitmentCopyListComponent.ITEM_COUNT));
    this._scrollComponent.scrollToValue(0, false);
    this._scrollComponent.setVisibility(this._scrollComponent.maxValue > 0);
  };
  AutoRecruitmentCopyListComponent.prototype.updateList = function () {
    for (var __s43local0 = 0; __s43local0 < AutoRecruitmentCopyListComponent.ITEM_COUNT; ++__s43local0) {
      var __s43local1 = __s43local0 < this.items.length ? this.items[__s43local0] : null;
      var __s43local2 = this._scrollComponent.currentValue + __s43local0;
      var __s43local3 = this.listData && __s43local2 < this.listData.length ? this.listData[__s43local2] : null;
      if (__s43local1) {
        __s43local1.setVisibility(__s43local3 != null);
        if (__s43local3) {
          __s43local1.assignNewData(__s43local3);
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.setSelectAll = function (__s49param0) {
    this.changeVisualSelectAllButton(__s49param0);
    if (this.listData != null) {
      for (var __s49local0 = 0, __s49local1 = this.listData; __s49local0 < __s49local1.length; __s49local0++) {
        var __s49local2 = __s49local5 = __s49local1[__s49local0];
        if (__s49local2 !== undefined) {
          if (!__s49local2.hasError) {
            __s49local2.isSelected = __s49param0;
          }
        }
      }
    }
    if (this.items != null) {
      for (var __s49local3 = 0, __s49local4 = this.items; __s49local3 < __s49local4.length; __s49local3++) {
        var __s49local5;
        __s49local5 = __s49local4[__s49local3];
        if (__s49local5 !== undefined) {
          __s49local5.updateSelectButton(true);
        }
      }
    }
    this.onSelectionChanged.dispatch();
  };
  AutoRecruitmentCopyListComponent.prototype.changeVisualSelectAllButton = function (__s60param0) {
    this._selectAllButton.gotoAndStop(Object(__s60param0 ? 2 : 1));
    this._selectAllButton.toolTipText = __s60param0 ? "dialog_copyQueue_deselectAll" : "dialog_copyQueue_selectAll";
  };
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "areAllItemsSelected", {
    get: function () {
      return this._selectAllButton.currentFrame == 1;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListComponent.prototype.getSelectedCastlesCount = function () {
    var __s64local0 = 0;
    if (this.listData != null) {
      for (var __s64local1 = 0, __s64local2 = this.listData; __s64local1 < __s64local2.length; __s64local1++) {
        var __s64local3 = __s64local2[__s64local1];
        if (__s64local3 !== undefined && !__s64local3.hasError && __s64local3.isSelected) {
          __s64local0++;
        }
      }
    }
    return __s64local0;
  };
  AutoRecruitmentCopyListComponent.prototype.onClick = function (__s70param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s70param0.target)) {
      switch (__s70param0.target) {
        case this._selectAllButton:
          this.setSelectAll(!this.areAllItemsSelected);
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.onItemSelectionChanged = function () {
    var __s74local0 = true;
    if (this.listData != null) {
      for (var __s74local1 = 0, __s74local2 = this.listData; __s74local1 < __s74local2.length; __s74local1++) {
        var __s74local3 = __s74local2[__s74local1];
        if (__s74local3 !== undefined && !__s74local3.isSelected) {
          __s74local0 = false;
          break;
        }
      }
    }
    this.changeVisualSelectAllButton(__s74local0);
    this.onSelectionChanged.dispatch();
  };
  AutoRecruitmentCopyListComponent.prototype.onScrollValueChanged = function () {
    this.updateList();
  };
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "listData", {
    get: function () {
      return this._listData;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListComponent.__initialize_static_members = function () {
    AutoRecruitmentCopyListComponent.ITEM_COUNT = 8;
  };
  return AutoRecruitmentCopyListComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AutoRecruitmentCopyListComponent = __s0local0;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_AAutoRecruitmentCopyListItemVE = require("gge-module:export_AAutoRecruitmentCopyListItemVE");
var __dep_export_AutoRecruitmentCopyListItemVO = require("gge-module:export_AutoRecruitmentCopyListItemVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
