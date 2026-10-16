Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSlotVO = require("gge-module:export_BasicSlotVO");
var __s0local0 = function (__s1param0) {
  function ConstructionSlotVO() {
    var __s3local0 = this;
    __s3local0.objectId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._timeTillLocked = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionSlotVO, __s1param0);
  Object.defineProperty(ConstructionSlotVO.prototype, "isFree", {
    get: function () {
      return this.objectId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATEUNLOCKED;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isFree").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionSlotVO.prototype, "isLocked", {
    get: function () {
      return this.objectId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATELOCKED;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isLocked").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionSlotVO.prototype.isWaitingSlot = function () {
    return this.pos >= __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.numConstructionSlots;
  };
  return ConstructionSlotVO;
}(__dep_export_BasicSlotVO.BasicSlotVO);
exports.ConstructionSlotVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISlotVO", "IEventDispatcher");
