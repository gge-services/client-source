Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionRewardDialogPlayer() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionRewardDialogPlayer, __s1param0);
  CastleAllianceAlienInvasionRewardDialogPlayer.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN_ALLIANCE;
    this.headerFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_HEADER_ALIEN_ALLIANCE;
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
  };
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotRoyalReward_title";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotRoyalReward_copy";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotTopxReward_title";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotTopxReward_copy";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_gotReward_title";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_gotReward_copy";
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_alienInvasion_eventEnd_title";
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardDialogPlayer.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_alienInvasion_eventEnd_copy";
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionRewardDialogPlayer.__initialize_static_members = function () {
    CastleAllianceAlienInvasionRewardDialogPlayer.NAME = "CastleAllianceAlienInvasionEventRewardPlayer";
  };
  return CastleAllianceAlienInvasionRewardDialogPlayer;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastleAllianceAlienInvasionRewardDialogPlayer = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
