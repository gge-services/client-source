Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function NewServerBanner() {
    this._disp = new __s0local0();
  }
  NewServerBanner.prototype.updateBanner = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this._disp);
    if (__dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.networkId == NewServerBanner.NETWORK_ID && this.isVisibleByDate()) {
      this._disp.visible = true;
      var __s5local0 = "";
      if (this.hasNewServerInstance()) {
        __s5local0 += "Release_";
      }
      if (NewServerBanner.COUNTRY_VARIANTS.includes(__dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsCountryCode)) {
        __s5local0 += __dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsCountryCode;
      } else {
        __s5local0 += "Default";
      }
      var __s5local1 = NewServerBanner.ASSET_NAME + "_" + __s5local0;
      var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local1, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(NewServerBanner.ASSET_NAME), null, 0, false);
      this._disp.addChild(__s5local2);
      if (this._res) {
        this.updatePosition(this._res[0], this._res[1], this._res[2]);
      }
    } else {
      this._disp.visible = false;
    }
  };
  NewServerBanner.prototype.hasNewServerInstance = function () {
    var __s13local0 = Date.now() > this.getReleaseDate().getTime();
    var __s13local1 = __dep_exact_9e901e8e2483a22f_2.BasicModel.instanceProxy.instanceMap.some(function (__s15param0) {
      return __s15param0.instanceId === NewServerBanner.INSTANCE_ID && __s15param0.zoneId === NewServerBanner.ZONE_ID;
    });
    return __s13local0 && __s13local1;
  };
  NewServerBanner.prototype.isVisibleByDate = function () {
    return Date.now() > this.getAnnounceDate().getTime() || Date.now() > this.getReleaseDate().getTime();
  };
  NewServerBanner.prototype.getAnnounceDate = function () {
    var __s19local0 = __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.isTest && __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.urlVariables.urlParams.get("serverAnnounceDate") ? __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.urlVariables.urlParams.get("serverAnnounceDate") : NewServerBanner.ANNOUNCE_DATE;
    return new Date(__s19local0);
  };
  NewServerBanner.prototype.getReleaseDate = function () {
    var __s21local0 = __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.isTest && __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.urlVariables.urlParams.get("serverReleaseDate") ? __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.urlVariables.urlParams.get("serverReleaseDate") : NewServerBanner.RELEASE_DATE;
    return new Date(__s21local0);
  };
  NewServerBanner.prototype.updatePosition = function (__s23param0, __s23param1, __s23param2) {
    this._res = [__s23param0, __s23param1, __s23param2];
    this.disp.x = __s23param2 * 220;
    this.disp.y = __s23param1 / 2;
    var __s23local0 = Math.min(__s23param2, (__s23param0 / 2 - this.disp.x - 20) / 370);
    __s23local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s23local0, 0.57, 1);
    this.disp.scaleX = this.disp.scaleY = __s23local0;
    if (__dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsCountryCode == "KR") {
      this.disp.x = __s23param2 * -220 - __s23local0 * 370;
    }
  };
  Object.defineProperty(NewServerBanner.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  NewServerBanner.ASSET_NAME = "StartscreenNewServerBanner";
  NewServerBanner.NETWORK_ID = 1;
  NewServerBanner.INSTANCE_ID = 49;
  NewServerBanner.ZONE_ID = 926;
  NewServerBanner.COUNTRY_VARIANTS = ["US", "DE"];
  NewServerBanner.ANNOUNCE_DATE = "2025-12-22";
  NewServerBanner.RELEASE_DATE = "2026-01-05";
  return NewServerBanner;
}();
exports.NewServerBanner = __s0local1;
