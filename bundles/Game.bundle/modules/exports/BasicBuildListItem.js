Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function BasicBuildListItem(__s3param0) {
    this.itemSize = 70;
    this.itemSpace = 15;
    this.itemSlotSize = this.itemSize + this.itemSpace;
    this.targetMcSize = __dep_exact_f855840627e6e145.int(this.itemSize * 0.8);
    this._pos = 0;
    this._oldPos = 0;
    this._arrayPos = 0;
    this._oldArrayPos = 0;
    this._isSelected = false;
    this._showProgressbar = true;
    this._isVisibleLocked = true;
    this._disp = __s3param0;
    this._disp.mouseChildren = false;
    this._disp.bItem = this;
    this._disp.actLikeButton = true;
    this.isSelected = false;
  }
  BasicBuildListItem.prototype.initItem = function () {};
  Object.defineProperty(BasicBuildListItem.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (__s9param0) {
      this._isSelected = __s9param0;
      if (this._disp.mc_selected) {
        this._disp.mc_selected.visible = this._isSelected;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isAvailable", {
    get: function () {
      return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListItem.prototype.remove = function () {
    __dep_exact_9e901e8e2483a22f.assetsPool.recycle(this.disp);
    this.disp;
  };
  BasicBuildListItem.prototype.setIcons = function () {};
  Object.defineProperty(BasicBuildListItem.prototype, "hasItem", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isFree", {
    get: function () {
      return this.slotVO.isFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isLocked", {
    get: function () {
      return this.slotVO.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isFirst", {
    get: function () {
      return this._pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (__s28param0) {
      this._pos = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    set: function (__s34param0) {
      this._slotVO = __s34param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "oldPos", {
    get: function () {
      return this._oldPos;
    },
    set: function (__s38param0) {
      this._oldPos = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "showProgressbar", {
    get: function () {
      return this._showProgressbar;
    },
    set: function (__s42param0) {
      this._showProgressbar = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "arrayPos", {
    get: function () {
      return this._arrayPos;
    },
    set: function (__s46param0) {
      this._arrayPos = __s46param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "oldArrayPos", {
    get: function () {
      return this._oldArrayPos;
    },
    set: function (__s50param0) {
      this._oldArrayPos = __s50param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListItem.prototype.setVisible = function (__s52param0) {
    this.disp.visible = __s52param0;
    this._isVisibleLocked = !__s52param0;
  };
  Object.defineProperty(BasicBuildListItem.prototype, "isVisibleLocked", {
    get: function () {
      return this._isVisibleLocked;
    },
    enumerable: true,
    configurable: true
  });
  return BasicBuildListItem;
}();
exports.BasicBuildListItem = __s0local0;
