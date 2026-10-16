Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function EventOverviewDetailEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._detailViewClass = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventOverviewDetailEnum, __s1param0);
  EventOverviewDetailEnum.prototype.createView = function () {
    return new this._detailViewClass();
  };
  EventOverviewDetailEnum.__initialize_static_members = function () {
    EventOverviewDetailEnum.DETAILS_NONE = new EventOverviewDetailEnum("details_none", __dep_export_EventOverviewDetailsNone.EventOverviewDetailsNone);
    EventOverviewDetailEnum.DETAILS_FACTION_INVASION = new EventOverviewDetailEnum("details_factionInvasion", __dep_export_EventOverviewDetailsFactionInvasion.EventOverviewDetailsFactionInvasion);
    EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT = new EventOverviewDetailEnum("details_pointEventDefault", __dep_export_EventOverviewDetailsPointEventDefault.EventOverviewDetailsPointEventDefault);
    EventOverviewDetailEnum.DETAILS_POINT_EVENT_NEXT_REWARD_LIST = new EventOverviewDetailEnum("details_pointEventNextRewardList", __dep_export_EventOverviewDetailsPointEventNextRewardList.EventOverviewDetailsPointEventNextRewardList);
    EventOverviewDetailEnum.DETAILS_TREASURE_MAP = new EventOverviewDetailEnum("details_treasureMap", __dep_export_EventOverviewDetailsTreasureMap.EventOverviewDetailsTreasureMap);
  };
  return EventOverviewDetailEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.EventOverviewDetailEnum = __s0local0;
var __dep_export_EventOverviewDetailsFactionInvasion = require("gge-module:export_EventOverviewDetailsFactionInvasion");
var __dep_export_EventOverviewDetailsNone = require("gge-module:export_EventOverviewDetailsNone");
var __dep_export_EventOverviewDetailsPointEventDefault = require("gge-module:export_EventOverviewDetailsPointEventDefault");
var __dep_export_EventOverviewDetailsPointEventNextRewardList = require("gge-module:export_EventOverviewDetailsPointEventNextRewardList");
var __dep_export_EventOverviewDetailsTreasureMap = require("gge-module:export_EventOverviewDetailsTreasureMap");
__s0local0.__initialize_static_members();
