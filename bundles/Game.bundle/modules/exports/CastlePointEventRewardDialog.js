Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastlePointEventRewardDialog() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.noRewardFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    __s3local0.headerFrame = __dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.FRAME_HEADER_POINT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePointEventRewardDialog, __s1param0);
  CastlePointEventRewardDialog.prototype.makeSpecialRewardLocalizedTextVO = function (__s5param0, __s5param1, __s5param2) {
    if (__s5param1 != 1) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5param0, [__s5param1, __s5param2]);
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5param0, [__s5param2]);
    }
  };
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotRoyalReward_title";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_pointsEvent_gotRoyalReward_copy";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotTopxReward_title";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "dialog_pointsEvent_gotTopxReward_copy";
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points, this.dialogProperties.topXCount];
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_gotReward_title";
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_pointsEvent_gotReward_copy_singular";
      } else {
        return "dialog_pointsEvent_gotReward_copy";
      }
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "dialog_pointsEvent_eventEnd_title";
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      if (this.dialogProperties.points == 1) {
        return "dialog_pointsEvent_eventEnd_copy_singular";
      } else {
        return "dialog_pointsEvent_eventEnd_copy";
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePointEventRewardDialog.__initialize_static_members = function () {
    CastlePointEventRewardDialog.NAME = "CastlePointEventReward";
  };
  return CastlePointEventRewardDialog;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastlePointEventRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
