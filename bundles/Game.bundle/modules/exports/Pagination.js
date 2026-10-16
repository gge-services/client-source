Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Pagination(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    this._maxPages = 0;
    this._currentPage = 1;
    this._currentPageIndex = 0;
    this._controls = [];
    this._enabled = false;
    this._cyclic = false;
    this._container = __s3param0;
    this._maxPages = __s3param1;
    this._enabled = __s3param2;
    this._cyclic = __s3param3;
    if (__s3param1 < 1) {
      throw new Error("maxPages must not be < 1!");
    }
  }
  Object.defineProperty(Pagination.prototype, "maxPages", {
    get: function () {
      return this._maxPages;
    },
    set: function (__s8param0) {
      this._maxPages = __s8param0;
      this.reset();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Pagination.prototype, "currentPageIndex", {
    get: function () {
      return this._currentPageIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Pagination.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (__s14param0) {
      if (this._currentPage != __s14param0 && (this._cyclic && __s14param0 < 1 ? __s14param0 = this._maxPages + __s14param0 % this._maxPages : this._cyclic && __s14param0 > this.maxPages && (__s14param0 %= this._maxPages), !(__s14param0 < 1) && !(__s14param0 > this._maxPages))) {
        this._currentPage = __s14param0;
        var __s14local0 = this._currentPageIndex;
        this._currentPageIndex = __s14param0 - 1;
        this.updateElements();
        this._container.updatePages(__s14local0, this._currentPageIndex);
      }
    },
    enumerable: true,
    configurable: true
  });
  Pagination.prototype.canScrollLeft = function () {
    return this._cyclic && this._maxPages > 1 || this._currentPage > 1;
  };
  Pagination.prototype.canScrollRight = function () {
    return this._cyclic && this._maxPages > 1 || this._currentPage < this._maxPages;
  };
  Pagination.prototype.scrollLeft = function () {
    return this.scroll(Pagination.SCROLL_LEFT);
  };
  Pagination.prototype.scrollRight = function () {
    return this.scroll(Pagination.SCROLL_RIGHT);
  };
  Pagination.prototype.scroll = function (__s25param0) {
    return (!!this._cyclic || !(this._currentPage + __s25param0 < 1)) && (!!this._cyclic || !(this._currentPage + __s25param0 > this._maxPages)) && (this.currentPage = this._currentPage + __s25param0, true);
  };
  Pagination.prototype.updateElements = function () {
    if (this._enabled != 0 && this._controls != null) {
      for (var __s27local0 = 0, __s27local1 = this._controls; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.update();
        }
      }
    }
  };
  Pagination.prototype.reset = function () {
    this._currentPage = 1;
    this._currentPageIndex = 0;
    if (this._enabled != 0) {
      this.updateElements();
      this._container.updatePages(0, 0);
    }
  };
  Pagination.prototype.handleClick = function (__s36param0) {
    if (this._enabled == 0 || !__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      return false;
    }
    if (this._controls != null) {
      for (var __s36local0 = 0, __s36local1 = this._controls; __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined && __s36local2.onClick(__s36param0)) {
          return true;
        }
      }
    }
    return false;
  };
  Pagination.prototype.disable = function () {
    if (this._enabled != 0 && (this._enabled = false, this._controls != null)) {
      for (var __s43local0 = 0, __s43local1 = this._controls; __s43local0 < __s43local1.length; __s43local0++) {
        var __s43local2 = __s43local1[__s43local0];
        if (__s43local2 !== undefined) {
          __s43local2.disable();
        }
      }
    }
  };
  Pagination.prototype.enable = function () {
    if (this._enabled != 1 && (this._enabled = true, this._controls != null)) {
      for (var __s49local0 = 0, __s49local1 = this._controls; __s49local0 < __s49local1.length; __s49local0++) {
        var __s49local2 = __s49local1[__s49local0];
        if (__s49local2 !== undefined) {
          __s49local2.enable();
        }
      }
    }
  };
  Object.defineProperty(Pagination.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    enumerable: true,
    configurable: true
  });
  Pagination.prototype.addControl = function (__s57param0) {
    this._controls.push(__s57param0);
    if (this._enabled == 1) {
      __s57param0.update();
    }
  };
  Pagination.__initialize_static_members = function () {
    Pagination.SCROLL_RIGHT = 1;
  };
  Pagination.SCROLL_LEFT = -1;
  return Pagination;
}();
exports.Pagination = __s0local0;
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local0.__initialize_static_members();
