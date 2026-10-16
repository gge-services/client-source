Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function ImpressionTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.journeyHash = "";
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ImpressionTrackingEvent, __s1param0);
  ImpressionTrackingEvent.prototype.getVars = function () {
    return {
      eventId: __dep_export_AllianceCreate.Impression.ID,
      accountHash: this.accountId,
      adgr: parseInt(this.adgr),
      aid: parseInt(this.aid),
      camp: parseInt(this.camp),
      cid: this.channelId,
      creative: parseInt(this.creative),
      event_mapping_version: 2,
      journeyHash: parseInt(this.journeyHash),
      keyword: this.keyword,
      lp: parseInt(this.lp),
      matchtype: this.matchtype,
      network: this.network,
      partnerId: parseInt(this.partnerId),
      placement: this.placement,
      tid: this.trafficSourceId
    };
  };
  return ImpressionTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.ImpressionTrackingEvent = __s0local0;
