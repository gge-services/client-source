Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AreaDataEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataEvent, __s1param0);
  AreaDataEvent.__initialize_static_members = function () {
    AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED = "onConstructionListChanged";
    AreaDataEvent.ON_RESOURCES_CHANGED = "onResourcesChanged";
    AreaDataEvent.ON_INFO_VALUES_CHANGED = "onCommonInfoChanged";
    AreaDataEvent.ON_SLUM_LEVEL_CHANGED = "onSlumLevelChanged";
    AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED = "onConstructionItemsUpdated";
    AreaDataEvent.ON_BURNING_CASTLE_UPDATED = "onBurningCastleUpdated";
    AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET = "onHunterBuildingDataSet";
    AreaDataEvent.ON_SPY_DATA_CHANGED = "onSpyDataChanged";
  };
  return AreaDataEvent;
}(createjs.Event);
exports.AreaDataEvent = __s0local0;
__s0local0.__initialize_static_members();
