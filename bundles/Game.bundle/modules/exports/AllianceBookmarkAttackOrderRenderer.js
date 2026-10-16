Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_AAllianceBookmarkRenderer = require("gge-module:export_AAllianceBookmarkRenderer");
var __s0local0 = function (__s1param0) {
  function AllianceBookmarkAttackOrderRenderer() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBookmarkAttackOrderRenderer, __s1param0);
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      return "Bookmarks_worldmap_alliance_plannedTarget_2_tooltip";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "backgroundFrame", {
    get: function () {
      return 3;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "backgroundFrame").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkAttackOrderRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      return 3;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBookmarkAttackOrderRenderer.prototype.renderAdditionalInfos = function (__s21param0, __s21param1) {
    var __s21local0 = __s21param1.attackOrderDetails;
    var __s21local1 = __s21local0.attackDate;
    var __s21local2 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s21local1, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE));
    this.textFieldManager.registerTextField(__s21param0.txt_date, __s21local2);
    var __s21local3 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s21local1, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT));
    this.textFieldManager.registerTextField(__s21param0.txt_time, __s21local3);
    var __s21local4 = __s21local0.assignedAttackers.length > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this.textFieldManager.registerTextField(__s21param0.mc_participants.txt_memberCount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s21local4, [__s21local0.assignedAttackers.length]));
    __s21param0.mc_participants.actLikeButton = true;
    __s21param0.mc_participants.mouseChildren = false;
    __s21param0.mc_participants.toolTipText = "dialog_alliance_bookmarks_attackerList_tooltip";
  };
  AllianceBookmarkAttackOrderRenderer.prototype.getSublayer = function (__s23param0) {
    return __s23param0.sublayer_attackOrderInfo;
  };
  AllianceBookmarkAttackOrderRenderer.prototype.showSublayer = function (__s25param0) {
    __s25param0.sublayer_attackOrderInfo.visible = true;
    __s25param0.sublayer_defaultInfo.visible = false;
  };
  AllianceBookmarkAttackOrderRenderer.__initialize_static_members = function () {
    AllianceBookmarkAttackOrderRenderer.ID = __dep_exact_f855840627e6e145.int(__dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER.typeIndex);
  };
  return AllianceBookmarkAttackOrderRenderer;
}(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer);
exports.AllianceBookmarkAttackOrderRenderer = __s0local0;
__s0local0.__initialize_static_members();
