Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __s0local0 = function (__s1param0) {
  function CastleTitleSublayerPropertiesFAME() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleSublayerPropertiesFAME, __s1param0);
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "titleSystem", {
    get: function () {
      return __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "copyTextID", {
    get: function () {
      return "dialog_gloryTitles_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "headerTextID", {
    get: function () {
      return "dialog_gloryTitles_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "neededPointsTextID", {
    get: function () {
      return "dialog_gloryTitles_pointsNeeded";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "decayTextID", {
    get: function () {
      return "dialog_gloryTitles_dailyLoss";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "helpText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("help_fame");
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleSublayerPropertiesFAME;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTitleSublayerPropertiesFAME = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITitleSublayerProperties");
