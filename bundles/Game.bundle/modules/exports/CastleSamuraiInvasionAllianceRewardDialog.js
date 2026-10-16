Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleSamuraiInvasionAllianceRewardDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiInvasionAllianceRewardDialog, __s1param0);
  CastleSamuraiInvasionAllianceRewardDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI_ALLIANCE;
    this.headerFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_HEADER_SAMURAI_ALLIANCE;
    this.wonFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_WON_SAMURAI_ALLIANCE;
    this.gotReward = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI_ALLIANCE;
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
  };
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotRoyalReward_title";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotRoyalReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotTopxReward_title";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotTopxReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotReward_title";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_gotReward" + this.grantTypeSuffix + "_copy";
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_eventEnd_title";
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSamuraiInvasionAllianceRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_samuraiInvasionAlliance_eventEnd_copy";
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiInvasionAllianceRewardDialog.__initialize_static_members = function () {
    CastleSamuraiInvasionAllianceRewardDialog.NAME = "CastleSamuraiInvasionAllianceReward";
  };
  return CastleSamuraiInvasionAllianceRewardDialog;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastleSamuraiInvasionAllianceRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
