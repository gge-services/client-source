Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BoosterVO = require("gge-module:export_BoosterVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemBoosterVO, __s1param0);
  CollectableItemBoosterVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this._boosterVO = new __dep_export_BoosterVO.BoosterVO(__s5param0.ID, __s5param0.D);
  };
  CollectableItemBoosterVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7local0[0]);
    var __s7local2 = __dep_exact_f855840627e6e145.int(__s7local0[1]);
    var __s7local3 = __dep_exact_f855840627e6e145.int(__s7local0[2]);
    this._boosterVO = new __dep_export_BoosterVO.BoosterVO(__s7local1, __s7local2, __s7local3, 0);
  };
  CollectableItemBoosterVO.prototype.clone = function () {
    var __s9local0 = __s1param0.prototype.clone.call(this);
    __s9local0.boosterVO = this.boosterVO.clone();
    return __s9local0;
  };
  CollectableItemBoosterVO.prototype.isCombineAbleWith = function (__s11param0) {
    return false;
  };
  CollectableItemBoosterVO.prototype.getTextfieldText = function () {
    if (this.boosterVO) {
      return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this.boosterVO.duration);
    } else {
      return "";
    }
  };
  Object.defineProperty(CollectableItemBoosterVO.prototype, "boosterVO", {
    get: function () {
      return this._boosterVO;
    },
    set: function (__s19param0) {
      this._boosterVO = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBoosterVO.__initialize_static_members = function () {
    CollectableItemBoosterVO.SERVER_KEY = "B";
    CollectableItemBoosterVO.XML_KEY = "boosters";
  };
  return CollectableItemBoosterVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemBoosterVO = __s0local0;
__s0local0.__initialize_static_members();
