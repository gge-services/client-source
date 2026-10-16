Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogInfoEnum(__s3param0, __s3param1 = __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo.PAGE_TEXT) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogInfoEnum, __s1param0);
  SeasonLeagueMainDialogInfoEnum.__initialize_static_members = function () {
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_SEASON = new SeasonLeagueMainDialogInfoEnum("seasonPass", __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_EVENT = new SeasonLeagueMainDialogInfoEnum("eventPass", __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_PROMOTION = new SeasonLeagueMainDialogInfoEnum("promotionPass", __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo.PAGE_PASSES);
    SeasonLeagueMainDialogInfoEnum.TOPIC_MEDALS = new SeasonLeagueMainDialogInfoEnum("medalOverview", __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo.PAGE_MEDALS);
    SeasonLeagueMainDialogInfoEnum.TOPIC_INSTRUCTION = new SeasonLeagueMainDialogInfoEnum("introduction");
    SeasonLeagueMainDialogInfoEnum.TOPIC_CONNECTED_EVENTS = new SeasonLeagueMainDialogInfoEnum("connectedEvents");
    SeasonLeagueMainDialogInfoEnum.TOPIC_DIVISION_RANKING = new SeasonLeagueMainDialogInfoEnum("divisionRanking");
    SeasonLeagueMainDialogInfoEnum.TOPIC_DIVISION_RANKING_ALLIANCE = new SeasonLeagueMainDialogInfoEnum("divisionRanking_alliance");
    SeasonLeagueMainDialogInfoEnum.TOPIC_REPUTATION_PROMOTIONS = new SeasonLeagueMainDialogInfoEnum("reputationPromotions");
    SeasonLeagueMainDialogInfoEnum.TOPIC_SEASON_RANKING = new SeasonLeagueMainDialogInfoEnum("seasonRanking");
    SeasonLeagueMainDialogInfoEnum.TOPIC_SEASON_RANKING_ALLIANCE = new SeasonLeagueMainDialogInfoEnum("seasonRanking_alliance");
    SeasonLeagueMainDialogInfoEnum.TOPIC_INVASION_LEAGUE_REWARDS = new SeasonLeagueMainDialogInfoEnum("invasionLeagueRewards");
    SeasonLeagueMainDialogInfoEnum.TOPIC_LEAGUE_EVENT_END = new SeasonLeagueMainDialogInfoEnum("leagueEventEnd");
    SeasonLeagueMainDialogInfoEnum.TOPIC_LEAGUE_SEASON_END = new SeasonLeagueMainDialogInfoEnum("leagueSeasonEnd");
  };
  return SeasonLeagueMainDialogInfoEnum;
}(require("gge-module:export_InfoCatalogTopicEnum").InfoCatalogTopicEnum);
exports.SeasonLeagueMainDialogInfoEnum = __s0local0;
var __dep_export_SeasonLeagueMainDialogInfo = require("gge-module:export_SeasonLeagueMainDialogInfo");
__s0local0.__initialize_static_members();
