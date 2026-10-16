Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function NewsHubTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NewsHubTrackingEvent, __s1param0);
  NewsHubTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      sourceName: this._sourceName
    };
    return __s5local0;
  };
  Object.defineProperty(NewsHubTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NewsHubTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NewsHubTrackingEvent.prototype, "sourceName", {
    set: function (__s11param0) {
      this._sourceName = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  NewsHubTrackingEvent.__initialize_static_members = function () {
    NewsHubTrackingEvent.SOURCE_SETTINGS_BAR = "option_panel";
    NewsHubTrackingEvent.SOURCE_BULLETIN_BOARD = "iso_world";
    NewsHubTrackingEvent.SOURCE_ANNOUNCEMENT = "announcement_popup";
  };
  return NewsHubTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.NewsHubTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
