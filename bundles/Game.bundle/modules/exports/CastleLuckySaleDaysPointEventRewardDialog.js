Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleLuckySaleDaysPointEventRewardDialog() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_LUCKY;
    __s3local0.headerFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_HEADER_LUCKY;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckySaleDaysPointEventRewardDialog, __s1param0);
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotRoyalReward_title";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotRoyalReward_desc";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotTopxReward_title";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotTopxReward_desc";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotReward_title";
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_gotReward_desc";
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_eventEnd_title";
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckySaleDaysPointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_luckyWheel_saleDays_pointsEvent_eventEnd_desc";
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckySaleDaysPointEventRewardDialog.NAME = "CastleLuckyEventReward";
  return CastleLuckySaleDaysPointEventRewardDialog;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastleLuckySaleDaysPointEventRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
