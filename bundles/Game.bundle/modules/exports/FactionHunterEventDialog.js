Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFactionArmorerEventDialog = require("gge-module:export_CastleFactionArmorerEventDialog");
var __s0local0 = function (__s1param0) {
  function FactionHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionHunterEventDialog, __s1param0);
  Object.defineProperty(FactionHunterEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION).remainingEventTimeInSeconds;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog.prototype, "remainingEventTimeInSeconds").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_FactionHunterMerchantScrollItem.FactionHunterMerchantScrollItem;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog.prototype, "merchantScrollItem").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "speechBubbleTextID", {
    get: function () {
      return "dialog_berimondInvasion_armorer_speechBubble";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog.prototype, "speechBubbleTextID").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventDialog.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_berimondInvasion_armorer_hint";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog.prototype, "descriptionTextID").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionHunterEventDialog.__initialize_static_members = function () {
    FactionHunterEventDialog.NAME = "FactionHunterEventDialog";
  };
  return FactionHunterEventDialog;
}(__dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog);
exports.FactionHunterEventDialog = __s0local0;
var __dep_export_FactionHunterMerchantScrollItem = require("gge-module:export_FactionHunterMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
