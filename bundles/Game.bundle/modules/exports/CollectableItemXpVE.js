Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemXpVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemXpVE, __s1param0);
  CollectableItemXpVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemXpVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemXpVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByTextId(__dep_export_CastleModel.CastleModel.userData.isLegend ? __dep_export_ClientConstTextIds.ClientConstTextIds.LEGEND_XP : this.vo.getTooltipTextId());
  };
  Object.defineProperty(CollectableItemXpVE.prototype, "iconClass", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_XP_Big;
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemXpVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemXpVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
