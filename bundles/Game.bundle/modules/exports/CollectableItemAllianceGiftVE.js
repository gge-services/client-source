Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AllianceGiftTypeEnum = require("gge-module:export_AllianceGiftTypeEnum");
var __s0local0 = function (__s1param0) {
  function CollectableItemAllianceGiftVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAllianceGiftVE, __s1param0);
  CollectableItemAllianceGiftVE.prototype.iconCreate = function () {
    var __s5local0 = __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.getTypeById(this.itemAllianceGiftVO.giftType.id);
    var __s5local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s5local0.iconName))();
    this.dispCreator.addDisp(__s5local1);
  };
  CollectableItemAllianceGiftVE.prototype.tooltipCreate = function () {
    return __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.getTypeById(this.itemAllianceGiftVO.giftType.id).tooltipTextId;
  };
  Object.defineProperty(CollectableItemAllianceGiftVE.prototype, "itemAllianceGiftVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemAllianceGiftVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemAllianceGiftVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
