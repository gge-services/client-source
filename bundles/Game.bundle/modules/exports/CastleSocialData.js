Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSocialData() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSocialData, __s1param0);
  CastleSocialData.prototype.postFeed = function (__s5param0, __s5param1 = null) {
    this.externalInterface(__s5param0, __s5param1);
  };
  CastleSocialData.prototype.externalInterface = function (__s7param0, __s7param1 = null) {
    __s1param0.prototype.externalInterface.call(this, __s7param0, __s7param1);
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      try {
        switch (__s7param0) {
          case CastleSocialData.EXTERNAL_SHARE_LEVELUP:
          case CastleSocialData.EXTERNAL_SHARE_QUEST_FINISHED:
            __dep_exact_81dacdf05bd32292.ExternalInterface.call(__s7param0, __s7param1[0]);
            break;
          default:
            if (__s7param1) {
              __dep_exact_81dacdf05bd32292.ExternalInterface.call(__s7param0);
            }
        }
      } catch (__s13local0) {
        __dep_exact_9e901e8e2483a22f_1.error(" no External InterfaceCall possible ");
      }
    }
  };
  CastleSocialData.__initialize_static_members = function () {
    CastleSocialData.EXTERNAL_SHARE_LEVELUP = "postLevelUpFeed";
    CastleSocialData.EXTERNAL_SHARE_QUEST_FINISHED = "postQuestFeed";
  };
  return CastleSocialData;
}(__dep_exact_9e901e8e2483a22f.BasicSocialData);
exports.CastleSocialData = __s0local0;
__s0local0.__initialize_static_members();
