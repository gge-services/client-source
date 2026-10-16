Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_NewsHubTrackingEvent = require("gge-module:export_NewsHubTrackingEvent");
var __dep_export_CastleNewsHubOverlay = require("gge-module:export_CastleNewsHubOverlay");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function NewsHubSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NewsHubSurroundingsVE, __s1param0);
  NewsHubSurroundingsVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
  };
  NewsHubSurroundingsVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
  };
  NewsHubSurroundingsVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(NewsHubSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  NewsHubSurroundingsVE.prototype.onLevelUp = function (__s15param0) {
    this.updateAdditionalClips();
  };
  NewsHubSurroundingsVE.prototype.onMouseClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_NEWSHUB_OPENED, [__dep_export_NewsHubTrackingEvent.NewsHubTrackingEvent.SOURCE_BULLETIN_BOARD]);
    __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.open();
  };
  return NewsHubSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.NewsHubSurroundingsVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
