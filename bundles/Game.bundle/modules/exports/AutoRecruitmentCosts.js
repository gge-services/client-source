Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AutoRecruitmentCosts() {
    this._costs = new __dep_export_CollectableList.CollectableList();
    this._loopFee = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(0);
    this._duplicatingCosts = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(0);
    this._priceType = __dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum.SOLDIERS;
  }
  AutoRecruitmentCosts.prototype.fillByServerData = function (__s5param0) {
    this._costs = new __dep_export_CollectableList.CollectableList();
    if (__s5param0.CW) {
      this.costs.addItem(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__s5param0.CW));
    }
    if (__s5param0.CS) {
      this.costs.addItem(new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__s5param0.CS));
    }
    if (__s5param0.C1) {
      this.costs.addItem(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s5param0.C1));
    }
    this._duplicatingCosts = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s5param0.DC);
  };
  Object.defineProperty(AutoRecruitmentCosts.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    set: function (__s12param0) {
      this._costs = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "duplicatingCosts", {
    get: function () {
      return this._duplicatingCosts;
    },
    set: function (__s16param0) {
      this._duplicatingCosts = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "priceType", {
    get: function () {
      return this._priceType;
    },
    set: function (__s20param0) {
      this._priceType = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "loopFee", {
    get: function () {
      return this._loopFee;
    },
    set: function (__s24param0) {
      this._loopFee = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCosts;
}();
exports.AutoRecruitmentCosts = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
