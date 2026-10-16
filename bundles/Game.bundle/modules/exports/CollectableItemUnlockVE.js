Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemUnlockVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemUnlockVE, __s1param0);
  CollectableItemUnlockVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    this._collectableVE = __dep_export_CollectableHelper.CollectableHelper.createVE(this.itemUnlockedVO.collectableVO, __s5param1);
    this.iconContainer.addChild(this.collectableVE.iconContainer);
  };
  CollectableItemUnlockVE.prototype.destroy = function () {
    if (this.collectableVE) {
      this.collectableVE.destroy();
      this._collectableVE = null;
    }
    __s1param0.prototype.destroy.call(this);
  };
  CollectableItemUnlockVE.prototype.iconUpdate = function () {
    __s1param0.prototype.iconUpdate.call(this);
    if (this.collectableVE) {
      this.collectableVE.iconUpdate();
    }
  };
  CollectableItemUnlockVE.prototype.iconDestroy = function () {
    if (this.collectableVE) {
      this.collectableVE.iconDestroy();
    }
    __s1param0.prototype.iconDestroy.call(this);
  };
  CollectableItemUnlockVE.prototype.textfieldUpdate = function () {
    this.collectableVE.textfieldUpdate();
  };
  CollectableItemUnlockVE.prototype.tooltipUpdate = function () {
    this.collectableVE.tooltipUpdate();
  };
  Object.defineProperty(CollectableItemUnlockVE.prototype, "itemUnlockedVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemUnlockVE.prototype, "collectableVE", {
    get: function () {
      return this._collectableVE;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemUnlockVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemUnlockVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
