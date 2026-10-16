Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AEventBuildingVO = require("gge-module:export_AEventBuildingVO");
var __s0local0 = function (__s1param0) {
  function EventBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventBuildingVO, __s1param0);
  Object.defineProperty(EventBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return this.eventVO.isoSortOrder;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEventBuildingVO.AEventBuildingVO.prototype, "isoSortOrder").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  EventBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.eventVO.eventBuildingNameId);
  };
  EventBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.eventVO.eventBuildingNameId == "eventBuilding_fameBoost" || this.eventVO.eventBuildingNameId == "eventBuilding_Colossus") {
      return __dep_exact_92d05af59ee2ff30.Localize.text("glory_camp_hover");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("clickToOpen");
    }
  };
  Object.defineProperty(EventBuildingVO.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    set: function (__s17param0) {
      this._eventVO = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  return EventBuildingVO;
}(__dep_export_AEventBuildingVO.AEventBuildingVO);
exports.EventBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
