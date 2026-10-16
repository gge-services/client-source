Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function CastleBasicItemListScrollComponent(__s3param0 = null, __s3param1 = null, __s3param2 = null, __s3param3 = CastleBasicItemListScrollComponent.DEFAULT_SCROLL_STEP, __s3param4 = 0, __s3param5 = 0) {
    var __s3local0 = this;
    __s3local0._currentScrollIndex = 0;
    __s3local0._currentPageIndex = 1;
    __s3local0._itemsPerPage = 0;
    __s3local0._amountOfItems = 0;
    __s3local0._startItemIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._itemsPerPage = __s3param3;
    __s3local0._amountOfItems = __s3param4;
    __s3local0._startItemIndex = __s3param5;
    if (__s3param0) {
      __s3local0.buttonDown = __s3param0;
    }
    if (__s3param1) {
      __s3local0.buttonUp = __s3param1;
    }
    if (__s3param2) {
      __s3local0.pageCounterTextField = __s3param2;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicItemListScrollComponent, __s1param0);
  CastleBasicItemListScrollComponent.prototype.show = function (__s8param0) {
    if (!__s8param0) {
      throw new Error(" itemScrollList has not to be null! ");
    }
    this._itemScrollList = __s8param0;
    this.initPageNumber();
    this.updatePageNumber();
    this._itemScrollList.initList(this._currentScrollIndex, true);
    this.addEventListener();
  };
  CastleBasicItemListScrollComponent.prototype.hide = function () {
    this.removeEventListener();
    this._itemScrollList = null;
  };
  CastleBasicItemListScrollComponent.prototype.addEventListener = function () {
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleBasicItemListScrollComponent.prototype.removeEventListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    }
  };
  CastleBasicItemListScrollComponent.prototype.initPageNumber = function () {
    var __s18local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this._startItemIndex / this._itemsPerPage));
    if (__s18local0 < this.pages) {
      this._currentPageIndex = __s18local0 + 1;
      this._currentScrollIndex = __dep_exact_f855840627e6e145.int(__s18local0 * this._itemsPerPage);
    } else {
      this._currentPageIndex = this.pages;
      this._currentScrollIndex = __dep_exact_f855840627e6e145.int((this.pages - 1) * this._itemsPerPage);
    }
  };
  CastleBasicItemListScrollComponent.prototype.onScroll = function (__s22param0) {
    var __s22local0 = __dep_exact_f855840627e6e145.int(this._itemScrollList.currentStartIndex);
    if (__s22local0 != this._currentScrollIndex) {
      if (this._currentScrollIndex < __s22local0) {
        this._currentPageIndex++;
      } else {
        this._currentPageIndex--;
      }
      this._currentScrollIndex = __s22local0 - __s22local0 % CastleBasicItemListScrollComponent.PAGE_SCROLL_STEP;
      this.updatePageNumber();
    }
  };
  CastleBasicItemListScrollComponent.prototype.updatePageNumber = function () {
    if (this._itxt_pageCounter) {
      this._itxt_pageCounter.textContentVO.textReplacements = [this._currentPageIndex, this.pages];
    }
  };
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "pages", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(Math.ceil(this._amountOfItems / this._itemsPerPage));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "pageCounterTextField", {
    set: function (__s32param0) {
      if (this._itxt_pageCounter) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.unregisterTextFieldByReference(this._itxt_pageCounter);
      }
      this._itxt_pageCounter = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s32param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "buttonUp", {
    set: function (__s35param0) {
      this._buttonUp = __s35param0;
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._buttonUp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "buttonDown", {
    set: function (__s37param0) {
      this._buttonDown = __s37param0;
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._buttonDown);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "itemsPerPage", {
    set: function (__s39param0) {
      this._itemsPerPage = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "startItemIndex", {
    set: function (__s41param0) {
      this._startItemIndex = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "amountOfItems", {
    set: function (__s43param0) {
      this._amountOfItems = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicItemListScrollComponent.__initialize_static_members = function () {
    CastleBasicItemListScrollComponent.DEFAULT_SCROLL_STEP = 9;
    CastleBasicItemListScrollComponent.PAGE_SCROLL_STEP = 1;
  };
  return CastleBasicItemListScrollComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleBasicItemListScrollComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
