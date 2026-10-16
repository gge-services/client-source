Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePointEventRewardDialog = require("gge-module:export_CastlePointEventRewardDialog");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventRewardDialog() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.wonFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_GOT_REWARD;
    __s3local0.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_BEGGING;
    __s3local0.headerFrame = LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_DEFAULT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventRewardDialog, __s1param0);
  LongTermPointEventRewardDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.headerFrame = this.dialogProperties.skin.id;
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "assetClassName", {
    get: function () {
      return LongTermPointEventRewardDialog.ASSET_NAME;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "assetClassName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotRoyalReward_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotRoyalReward_copy" + this.dialogProperties.skin.textSuffix;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotTopxReward_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "topXTitleTextId").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_longPointsEvent_gotTopxReward_copy" + this.dialogProperties.skin.textSuffix;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "topXCopyTextId").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.skin.id == LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_NEW_KING) {
        if (this.dialogProperties.points == 1) {
          return "dialog_pointEvent_gotReward_kingEric_copy_singular";
        } else {
          return "dialog_pointEvent_gotReward_kingEric_copy";
        }
      } else if (this.dialogProperties.points == 1) {
        return "dialog_longPointsEvent_gotReward_copy_singular";
      } else {
        return "dialog_longPointsEvent_gotReward_copy";
      }
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_longPointsEvent_eventEnd_title" + this.dialogProperties.skin.textSuffix;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_longPointsEvent_eventEnd" + this.dialogProperties.skin.textSuffix + "_singular";
      } else {
        return "dialog_longPointsEvent_eventEnd" + this.dialogProperties.skin.textSuffix;
      }
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardDialog.__initialize_static_members = function () {
    LongTermPointEventRewardDialog.NAME = "LongTermPeRewardDialog";
    LongTermPointEventRewardDialog.ASSET_NAME = "LongTermPointEventReward";
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_DEFAULT = 1;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_HALLOWEEN = 2;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_WINTER = 3;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_SPRING = 4;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_REUSABLE = 5;
    LongTermPointEventRewardDialog.LTPE_FRAME_HEADER_NEW_KING = 6;
  };
  return LongTermPointEventRewardDialog;
}(__dep_export_CastlePointEventRewardDialog.CastlePointEventRewardDialog);
exports.LongTermPointEventRewardDialog = __s0local0;
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
