Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyCostSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._costComponent = new __dep_export_AutoRecruitmentCostComponent.AutoRecruitmentCostComponent(__s3param0, true);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyCostSublayer, __s1param0);
  AutoRecruitmentCopyCostSublayer.prototype.updateCosts = function () {
    this._costComponent.updateWithNewCosts(this.getCurrentCosts());
  };
  AutoRecruitmentCopyCostSublayer.prototype.getCurrentCosts = function () {
    var __s7local0 = new __dep_export_AutoRecruitmentCosts.AutoRecruitmentCosts();
    __s7local0.priceType = __dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum.getTypeByListId(this._properties.listId);
    for (var __s7local1 = 0, __s7local2 = this._properties.listComponent.listData; __s7local1 < __s7local2.length; __s7local1++) {
      var __s7local3 = __s7local2[__s7local1];
      if (__s7local3 !== undefined) {
        __s7local0.priceType = __s7local3.costs.priceType;
        if (__s7local3.isSelected) {
          __s7local0.costs.addList(__s7local3.costs.costs, true);
          __s7local0.duplicatingCosts.amount += __s7local3.costs.duplicatingCosts.amount;
        }
      }
    }
    __s7local0.loopFee.amount = this._properties.loopFeeCosts.amount * this._properties.listComponent.getSelectedCastlesCount();
    return __s7local0;
  };
  AutoRecruitmentCopyCostSublayer.prototype.show = function (__s13param0) {
    __s1param0.prototype.show.call(this, __s13param0);
    this._properties = __s13param0;
    this._properties.listComponent.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
    this.updateCosts();
  };
  AutoRecruitmentCopyCostSublayer.prototype.onItemSelectionChanged = function () {
    this.updateCosts();
  };
  AutoRecruitmentCopyCostSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._properties.listComponent.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
  };
  return AutoRecruitmentCopyCostSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.AutoRecruitmentCopyCostSublayer = __s0local0;
var __dep_export_AutoRecruitmentCostComponent = require("gge-module:export_AutoRecruitmentCostComponent");
var __dep_export_AutoRecruitmentCosts = require("gge-module:export_AutoRecruitmentCosts");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
