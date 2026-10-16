Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemWarEffortPointsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemWarEffortPointsVE, __s1param0);
  Object.defineProperty(CollectableItemWarEffortPointsVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_WarEffortPoints;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemWarEffortPointsVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemWarEffortPointsVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemWarEffortPointsVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  return CollectableItemWarEffortPointsVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemWarEffortPointsVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
