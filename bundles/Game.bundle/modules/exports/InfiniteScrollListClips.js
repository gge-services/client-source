Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function InfiniteScrollListClips(__s3param0 = null) {
    this._itemMc = __s3param0;
    this.getDefaultsFromItemMc();
  }
  InfiniteScrollListClips.prototype.getDefaultsFromItemMc = function () {
    this._sliderMc = this._maskMc = this._itemContainerMc = null;
    if (this._itemMc) {
      this._sliderMc ||= this._itemMc.mc_scroll;
      this._maskMc ||= this._itemMc.mc_mask;
      this._itemContainerMc ||= this._itemMc.mc_items;
    }
  };
  InfiniteScrollListClips.prototype.addItemMc = function (__s8param0, __s8param1 = false) {
    this._itemMc = __s8param0;
    if (__s8param1) {
      this.getDefaultsFromItemMc();
    }
    return this;
  };
  InfiniteScrollListClips.prototype.addMaskMc = function (__s11param0) {
    this._maskMc = __s11param0;
    return this;
  };
  InfiniteScrollListClips.prototype.addSliderMc = function (__s13param0) {
    this._sliderMc = __s13param0;
    return this;
  };
  InfiniteScrollListClips.prototype.addItemContainerMc = function (__s15param0) {
    this._itemContainerMc = __s15param0;
    return this;
  };
  InfiniteScrollListClips.prototype.addMouseWheelAreaMc = function (__s17param0) {
    this._mouseWheelAreaMc = __s17param0;
    return this;
  };
  Object.defineProperty(InfiniteScrollListClips.prototype, "itemMc", {
    get: function () {
      return this._itemMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "sliderMc", {
    get: function () {
      return this._sliderMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "maskMc", {
    get: function () {
      return this._maskMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "itemContainerMc", {
    get: function () {
      return this._itemContainerMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "mouseWheelAreaMc", {
    get: function () {
      return this._mouseWheelAreaMc;
    },
    enumerable: true,
    configurable: true
  });
  return InfiniteScrollListClips;
}();
exports.InfiniteScrollListClips = __s0local0;
