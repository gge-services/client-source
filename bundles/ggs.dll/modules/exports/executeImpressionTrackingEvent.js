Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
exports.executeImpressionTrackingEvent = function (__s1param0) {
  if (!__s1param0.isLocal) {
    var __s1local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.IMPRESSION);
    __s1local0.accountId = __s1param0.accountId;
    __s1local0.creative = __s1param0.campainVars.creative;
    __s1local0.keyword = __s1param0.campainVars.keyword;
    __s1local0.lp = __s1param0.campainVars.lp;
    __s1local0.network = __s1param0.campainVars.network;
    __s1local0.partnerId = __s1param0.campainVars.partnerId;
    __s1local0.placement = __s1param0.campainVars.placement;
    __s1local0.channelId = __s1param0.campainVars.channelId;
    __s1local0.trafficSourceId = __s1param0.campainVars.trafficSource;
    __s1local0.aid = __s1param0.campainVars.aid;
    __s1local0.camp = __s1param0.campainVars.camp;
    __s1local0.adgr = __s1param0.campainVars.adgr;
    __s1local0.matchtype = __s1param0.campainVars.matchtype;
    __s1local0.journeyHash = __s1param0.jsVariables.journeyHash;
    __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.IMPRESSION);
  }
};
