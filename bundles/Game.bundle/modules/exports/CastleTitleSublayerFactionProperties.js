Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __s0local0 = function (__s1param0) {
  function CastleTitleSublayerFactionProperties() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleSublayerFactionProperties, __s1param0);
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "titleSystem", {
    get: function () {
      return __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_factionTitles_noDecay_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "headerTextID", {
    get: function () {
      return "dialog_factionTitles_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "neededPointsTextID", {
    get: function () {
      return "dialog_factionTitles_pointsNeeded";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "decayTextID", {
    get: function () {
      return "dialog_factionTitles_dailyLoss";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "helpText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_titles", [__dep_exact_26a421b704832cff.FactionConst.TITLE_RESET_INTERVAL_SECONDS / __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC]);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleSublayerFactionProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTitleSublayerFactionProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITitleSublayerProperties");
