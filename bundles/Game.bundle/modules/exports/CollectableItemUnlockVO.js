Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemUnlockVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemUnlockVO, __s1param0);
  CollectableItemUnlockVO.prototype.parseXmlObject = function (__s5param0) {
    var __s5local0 = __s5param0.substr(0, 1) == CollectableItemUnlockVO.KEY_BUILDING ? __dep_export_CollectableEnum.CollectableEnum.BUILDING : __dep_export_CollectableEnum.CollectableEnum.UNITS;
    var __s5local1 = parseInt(__s5param0.substr(1));
    this._collectableVO = __dep_export_CollectableHelper.CollectableHelper.createVO(__s5local0, 1, __s5local1);
  };
  CollectableItemUnlockVO.prototype.isCombineAbleWith = function (__s7param0) {
    return false;
  };
  CollectableItemUnlockVO.prototype.getDescriptionTextParams = function () {
    return this.collectableVO.getDescriptionTextParams();
  };
  CollectableItemUnlockVO.prototype.getTooltipTextId = function () {
    return this.collectableVO.getTooltipTextId();
  };
  CollectableItemUnlockVO.prototype.getTextfieldText = function () {
    return this.collectableVO.getTextfieldText();
  };
  CollectableItemUnlockVO.prototype.getNameTextId = function () {
    return this.collectableVO.getNameTextId();
  };
  CollectableItemUnlockVO.prototype.getDescriptionTextId = function () {
    return this.collectableVO.getDescriptionTextId();
  };
  CollectableItemUnlockVO.prototype.getNameTextParams = function () {
    return this.collectableVO.getNameTextParams();
  };
  Object.defineProperty(CollectableItemUnlockVO.prototype, "collectableVO", {
    get: function () {
      return this._collectableVO;
    },
    set: function (__s23param0) {
      this._collectableVO = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnlockVO.__initialize_static_members = function () {
    CollectableItemUnlockVO.KEY_BUILDING = "B";
  };
  return CollectableItemUnlockVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemUnlockVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
__s0local0.__initialize_static_members();
