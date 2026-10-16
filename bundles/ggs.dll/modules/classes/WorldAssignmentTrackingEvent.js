Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_DeviceId = require("gge-module:class_DeviceId");
var __dep_exact_7fea326698a8c76f = require("gge-module:exact_7fea326698a8c76f");
var __dep_class_TimezoneUtil = require("gge-module:class_TimezoneUtil");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function WorldAssignmentTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.deviceId = __dep_class_DeviceId.DeviceId.DESKTOP;
    __s3local0.websiteId = "0";
    __s3local0.storeId = __dep_exact_7fea326698a8c76f.StoreId.WEB;
    __s3local0.geoIpRequestTime = 0;
    __s3local0.countryDetectionFactor = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(WorldAssignmentTrackingEvent, __s1param0);
  WorldAssignmentTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      eventId: __dep_export_AllianceCreate.WorldAssignment.ID,
      event_mapping_version: 2,
      accountHash: this.accountId,
      clientTimeZone: __dep_class_TimezoneUtil.TimezoneUtil.getTrackingTimezoneInUTC(),
      deviceId: this.deviceId,
      websiteId: this.websiteId,
      storeId: this.storeId,
      clientCountryCode: this.country.ggsCountryCode,
      browserLang: __dep_export_CSSMouseCursor.Capabilities.language
    };
    __s5local0.lang = this.country.ggsLanguageCode;
    if (this.campaignVars && this.campaignVars.isValid()) {
      __s5local0.partnerId = parseInt(this.campaignVars.partnerId);
      __s5local0.creative = parseInt(this.campaignVars.creative);
      __s5local0.placement = this.campaignVars.placement;
      __s5local0.keyword = this.campaignVars.keyword;
      __s5local0.googleNetwork = this.campaignVars.network;
      __s5local0.lp = parseInt(this.campaignVars.lp);
      __s5local0.cid = this.campaignVars.channelId;
      __s5local0.tid = this.campaignVars.trafficSource;
      __s5local0.aid = parseInt(this.campaignVars.aid);
      __s5local0.camp = parseInt(this.campaignVars.camp);
      __s5local0.adgr = parseInt(this.campaignVars.adgr);
      __s5local0.matchtype = this.campaignVars.matchtype;
    }
    __s5local0.referrer = this.referrer;
    __s5local0.geoIpRequestTime = this.geoIpRequestTime;
    __s5local0.countryDetectionFactor = this.countryDetectionFactor;
    return __s5local0;
  };
  return WorldAssignmentTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.WorldAssignmentTrackingEvent = __s0local0;
