Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleAllianceTournamentEventRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceTournamentEventRewardDialog, __s1param0);
  CastleAllianceTournamentEventRewardDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    this.headerFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_HEADER_SAMURAI;
    this.wonFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_WON;
    this.gotReward = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_GOT_REWARD;
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
  };
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotRoyalReward_title";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotRoyalReward_copy";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotTopxReward_title";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotTopxReward_copy";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_allianceTournament_gotReward_title";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_allianceTournament_gotReward_copy";
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventRewardDialog.__initialize_static_members = function () {
    CastleAllianceTournamentEventRewardDialog.NAME = "CastleAllianceTournamentEventReward";
  };
  return CastleAllianceTournamentEventRewardDialog;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastleAllianceTournamentEventRewardDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
