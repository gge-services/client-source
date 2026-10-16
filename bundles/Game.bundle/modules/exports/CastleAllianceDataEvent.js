Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDataEvent(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = true, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this;
    __s3local0.allianceInfoVO = __s3param1;
    __s3local0.params = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDataEvent, __s1param0);
  CastleAllianceDataEvent.ALLIANCE_FOUNDED = "allianceFounded";
  CastleAllianceDataEvent.ALLIANCEDATA_UPDATED = "alliancedataUpdated";
  CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED = "myAlliancedataUpdated";
  CastleAllianceDataEvent.ALLIANCE_INVITATION = "allianceInvitation";
  CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED = "allianceActionListUpdated";
  CastleAllianceDataEvent.ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED = "ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED = "ALLIANCE_SEARCH_MEMBER_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED = "ALLIANCE_APPLICATION_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED = "ALLIANCE_AUTO_WAR_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_CREST_SAVED_OK = "ALLIANCE_CREST_SAVED_OK";
  CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED = "allianceNameChanged";
  return CastleAllianceDataEvent;
}(createjs.Event);
exports.CastleAllianceDataEvent = __s0local0;
