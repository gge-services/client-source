Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleBasicController(__s3param0 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    if (!__s3param0) {
      throw new Error("Singleton class! Please use CastleBasicController.getInstance()...");
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicController, __s1param0);
  CastleBasicController.getInstance = function () {
    CastleBasicController._instance ||= new CastleBasicController(new __s0local1());
    return CastleBasicController._instance;
  };
  CastleBasicController.CONNECT_TO_TEMPORARY_SERVER = "CONNECT_TO_TEMPORARY_SERVER";
  CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER = "CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER";
  CastleBasicController.TRACK_ATTACK_SCREEN_ACTION = "TRACK_ATTACK_SCREEN_ACTION";
  CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION = "TRACK_ACCOUNT_DELETION_ACTION";
  CastleBasicController.TRACK_SOCIAL_BUTTON = "TRACK_SOCIAL_BUTTON";
  CastleBasicController.TRACK_SSO_USER_MOVE_ACTION = "TRACK_SSO_USER_MOVE_ACTION";
  CastleBasicController.TRACK_GENERALS_ATTACK_SCREEN = "TRACK_GENERALS_ATTACK_SCREEN";
  CastleBasicController.TRACK_DONATION_EVENT = "TRACK_DONATION_EVENT";
  CastleBasicController.TRACK_NEWSHUB_OPENED = "TRACK_NEWSHUB_OPENED";
  CastleBasicController.OPEN_DISCORD = "OPEN_DISCORD";
  return CastleBasicController;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.CastleBasicController = __s0local0;
var __s0local1 = function () {
  return function SingletonEnforcer() {};
}();
