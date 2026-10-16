Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AInventoryList(__s3param0, __s3param1 = 5) {
    this._currentPage = 0;
    this.maxPage = 0;
    this.itemsPerPage = 0;
    this.pageChangedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.disp = __s3param0;
    this.itemsPerPage = __s3param1;
  }
  AInventoryList.prototype.init = function () {
    this.inventoryListItems = [];
    this.tooltip = this.createTooltipComponent(this.disp.mc_unitTooltip);
    for (var __s5local0 = 0; __s5local0 < this.itemsPerPage; __s5local0++) {
      var __s5local1 = this.disp["i" + __s5local0];
      this.inventoryListItems[__s5local0] = this.createListItemComponent(__s5local1, this.tooltip);
    }
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.disp.btn_leftArrow, this.disp.btn_rightArrow]);
    this.show();
  };
  AInventoryList.prototype.show = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    for (var __s9local0 = 0; __s9local0 < this.inventoryListItems.length; ++__s9local0) {
      this.inventoryListItems[__s9local0].show();
    }
  };
  AInventoryList.prototype.destroy = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    for (var __s13local0 = 0; __s13local0 < this.inventoryListItems.length; ++__s13local0) {
      this.inventoryListItems[__s13local0].destroy();
    }
  };
  AInventoryList.prototype.createTooltipComponent = function (__s17param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AInventoryList.prototype.createListItemComponent = function (__s19param0, __s19param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AInventoryList.prototype.changeUnitInventory = function (__s21param0) {
    this._unitInventory = __s21param0;
    this.update();
  };
  Object.defineProperty(AInventoryList.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  AInventoryList.prototype.onClick = function (__s25param0) {
    switch (__s25param0.target) {
      case this.disp.btn_leftArrow:
        this.currentPage = this.currentPage - 1;
        break;
      case this.disp.btn_rightArrow:
        this.currentPage = this.currentPage + 1;
    }
  };
  AInventoryList.prototype.updateArrows = function (__s28param0) {
    this.maxPage = __dep_exact_f855840627e6e145.int((__s28param0 - 1) / this.itemsPerPage);
    this.disp.btn_rightArrow.visible = this.maxPage > 0 && this._currentPage < this.maxPage;
    this.disp.btn_leftArrow.visible = this.maxPage > 0 && this._currentPage > 0;
  };
  AInventoryList.prototype.update = function () {
    this.updateArrows(this._unitInventory.length);
    this._currentPage = __dep_exact_f855840627e6e145.int(Math.min(this._currentPage, this.maxPage));
    var __s30local0 = this._currentPage * this.itemsPerPage;
    for (var __s30local1 = 0; __s30local1 < this.itemsPerPage; __s30local1++) {
      if (__s30local0 < this._unitInventory.length) {
        this.inventoryListItems[__s30local1].unitVO = this._unitInventory[__s30local0];
      } else {
        this.inventoryListItems[__s30local1].unitVO = null;
      }
      __s30local0++;
    }
  };
  Object.defineProperty(AInventoryList.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (__s38param0) {
      var __s38local0 = __dep_exact_f855840627e6e145.int(this.currentPage);
      this._currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(this.maxPage, __s38param0)));
      if (__s38local0 != this.currentPage) {
        this.update();
        this.pageChangedSignal.dispatch();
      }
    },
    enumerable: true,
    configurable: true
  });
  return AInventoryList;
}();
exports.AInventoryList = __s0local1;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
