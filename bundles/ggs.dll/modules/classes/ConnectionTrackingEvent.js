Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_TimezoneUtil = require("gge-module:class_TimezoneUtil");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function ConnectionTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ConnectionTrackingEvent, __s1param0);
  ConnectionTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      accountHash: this.accountId,
      bluebox: this.bluebox,
      clientTimeZone: __dep_class_TimezoneUtil.TimezoneUtil.getTrackingTimezone(),
      conTime: __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime,
      delay: this.delay,
      downloadrate: this.downloadRate,
      eventId: __dep_export_AllianceCreate.Connection.ID,
      event_mapping_version: 2,
      playerId: 0,
      roundTime: parseInt(this.roundTrip),
      referrer: this.referrer,
      deviceId: this.deviceId,
      connectionType: this.connectionType
    };
    if (this.cv && this.cv.isValid) {
      __s5local0.partner_id = parseInt(this.cv.partnerId);
      __s5local0.creative_id = parseInt(this.cv.creative);
      __s5local0.placement = this.cv.placement;
      __s5local0.keyword = this.cv.keyword;
      __s5local0.network = this.cv.network;
      __s5local0.landing_page = parseInt(this.cv.lp);
      __s5local0.channel_id = this.cv.channelId;
      __s5local0.traffic_source_id = this.cv.trafficSource;
      __s5local0.advertiser_id = parseInt(this.cv.aid);
      __s5local0.campaign_key = parseInt(this.cv.camp);
      __s5local0.adgroup_key = parseInt(this.cv.adgr);
      __s5local0.match_type = this.cv.matchtype;
    }
    return __s5local0;
  };
  return ConnectionTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ConnectionTrackingEvent = __s0local0;
