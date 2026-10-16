Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleStringHelper = require("gge-module:export_CastleStringHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __s0local0 = function (__s1param0) {
  function CastleFacebookGetUserDataCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFacebookGetUserDataCommand, __s1param0);
  CastleFacebookGetUserDataCommand.prototype.execute = function (__s5param0) {
    __dep_export_CastleFacebookModule.CastleFacebookModule.getUserData(function (__s7param0) {
      if (__s7param0) {
        __dep_export_CastleModel.CastleModel.userData.facebookEmail = __dep_export_CastleStringHelper.CastleStringHelper.parseToStringOrEmpty(__s7param0.email);
        new __s0local1();
        if (!__s5param0 && !__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isDialogVisibleByName(__dep_export_OptionsDialog.OptionsDialog)) {
          return;
        }
        var __s7local0 = __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().getEvent(__dep_exact_9e901e8e2483a22f.TrackingEventIds.FACEBOOK_USER_DATA);
        __s7local0.playerId = __dep_export_CastleModel.CastleModel.userData.playerID;
        __s7local0.email = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
        JSON.stringify(__s7param0);
        __dep_exact_9e901e8e2483a22f.debug("Track FacebookUserData,playerId : " + __s7local0.getVars().playerId + ", email: " + __s7local0.getVars().email);
        console.warn("Track FacebookUserData,playerId : " + __s7local0.getVars().playerId + ", email: " + __s7local0.getVars().email + "\nFBData: " + JSON.stringify(__s7param0));
        __dep_exact_9e901e8e2483a22f.TrackingCache.getInstance().sendEvent(__dep_exact_9e901e8e2483a22f.TrackingEventIds.FACEBOOK_USER_DATA);
      }
    });
  };
  return CastleFacebookGetUserDataCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.CastleFacebookGetUserDataCommand = __s0local0;
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __s0local1 = function () {
  return function FacebookUserData() {};
}();
