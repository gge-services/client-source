Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoInfoTopicEnum(__s3param0, __s3param1 = __dep_export_SamuraiDaimyoEventDialogInfo.SamuraiDaimyoEventDialogInfo.PAGE_TEXT) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoInfoTopicEnum, __s1param0);
  SamuraiDaimyoInfoTopicEnum.__initialize_static_members = function () {
    SamuraiDaimyoInfoTopicEnum.EVENT_SUMMARY = new SamuraiDaimyoInfoTopicEnum("eventSummary");
    SamuraiDaimyoInfoTopicEnum.DAIMYO_CASTLE = new SamuraiDaimyoInfoTopicEnum("daimyoCastle");
    SamuraiDaimyoInfoTopicEnum.TOWNSHIP = new SamuraiDaimyoInfoTopicEnum("township");
    SamuraiDaimyoInfoTopicEnum.SHOGUN_POINTS = new SamuraiDaimyoInfoTopicEnum("shogunPoints");
    SamuraiDaimyoInfoTopicEnum.SAMURAI_MEDALS = new SamuraiDaimyoInfoTopicEnum("samuraiMedals");
    SamuraiDaimyoInfoTopicEnum.ALLIANCE_CONTRACTS = new SamuraiDaimyoInfoTopicEnum("allianceContracts");
    SamuraiDaimyoInfoTopicEnum.WAR_EFFORT_POINTS = new SamuraiDaimyoInfoTopicEnum("warEffortPoints");
  };
  return SamuraiDaimyoInfoTopicEnum;
}(require("gge-module:export_InfoCatalogTopicEnum").InfoCatalogTopicEnum);
exports.SamuraiDaimyoInfoTopicEnum = __s0local0;
var __dep_export_SamuraiDaimyoEventDialogInfo = require("gge-module:export_SamuraiDaimyoEventDialogInfo");
__s0local0.__initialize_static_members();
