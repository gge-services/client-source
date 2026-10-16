Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleTableSorter() {}
  CastleTableSorter.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    if (this._columnSorters) {
      this.destroy();
    }
    this._sortableList = __s5param0;
    this._changedCallback = __s5param1;
    this._columnSorters = __s5param2;
    this._currentSortingVO = null;
    this.forceSort(__s5param2[0]);
  };
  CastleTableSorter.prototype.show = function () {
    this._columnSorters.forEach(this.bindFunction(this.addClickListener));
  };
  CastleTableSorter.prototype.hide = function () {
    if (this._columnSorters) {
      this._columnSorters.forEach(this.bindFunction(this.removeClickListener));
    }
  };
  CastleTableSorter.prototype.destroy = function () {
    if (this._columnSorters) {
      this.hide();
      this._columnSorters = null;
      this._changedCallback = null;
      this._sortableList = null;
    }
  };
  CastleTableSorter.prototype.forceSort = function (__s16param0) {
    if (__s16param0 != this._currentSortingVO) {
      this._currentSortingVO = __s16param0;
      this._currentSortingVO.isInAscendingOrder = false;
    }
    this._sortableList.sort(__s16param0.comparer);
    __s16param0.isInAscendingOrder = !__s16param0.isInAscendingOrder;
    if (!__s16param0.isInAscendingOrder) {
      this._sortableList.reverse();
    }
  };
  CastleTableSorter.prototype.addClickListener = function (__s20param0) {
    var __s20local0 = [];
    for (var __s20local1 = 1; __s20local1 < arguments.length; __s20local1++) {
      __s20local0[__s20local1 - 1] = arguments[__s20local1];
    }
    __s20param0.sortingTrigger.addEventListener(__s0local0.CLICK, this.bindFunction(this.onColumnClick));
  };
  CastleTableSorter.prototype.removeClickListener = function (__s24param0) {
    var __s24local0 = [];
    for (var __s24local1 = 1; __s24local1 < arguments.length; __s24local1++) {
      __s24local0[__s24local1 - 1] = arguments[__s24local1];
    }
    __s24param0.sortingTrigger.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onColumnClick));
  };
  CastleTableSorter.prototype.onColumnClick = function (__s28param0) {
    var __s28local0 = null;
    if (this._columnSorters != null) {
      for (var __s28local1 = 0, __s28local2 = this._columnSorters; __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        if (__s28local3 !== undefined && __s28local3.sortingTrigger == __s28param0.target) {
          this.forceSort(__s28local3);
          __s28local0 = __s28local3;
          break;
        }
      }
    }
    if (__s28local0 != null) {
      this._changedCallback(__s28local0);
    }
  };
  Object.defineProperty(CastleTableSorter.prototype, "currentSortingVO", {
    get: function () {
      return this._currentSortingVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTableSorter;
}();
exports.CastleTableSorter = __s0local1;
