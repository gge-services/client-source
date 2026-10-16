Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __dep_export_CastleAttackOrderCanceledDialog = require("gge-module:export_CastleAttackOrderCanceledDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAttackOrderReceivedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAttackOrderReceivedDialog, __s1param0);
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "isMessageObsolete", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete").get.call(this) || !this.dialogProperties.bookmarkVO.attackOrderDetails;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderReceivedDialog.prototype.initAttackOrderDetails = function () {
    var __s9local0 = this.dialogDisp.mc_details;
    __s9local0.visible = true;
    var __s9local1 = this.dialogProperties.bookmarkVO.attackOrderDetails;
    var __s9local2 = __s9local1.attackDate;
    var __s9local3 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s9local2, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE));
    this.textFieldManager.registerTextField(__s9local0.txt_date, __s9local3);
    var __s9local4 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s9local2, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT));
    this.textFieldManager.registerTextField(__s9local0.txt_time, __s9local4);
    var __s9local5 = __s9local1.assignedAttackers.length > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this.textFieldManager.registerTextField(__s9local0.mc_participants.txt_participants, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s9local5, [__s9local1.assignedAttackers.length]));
    __s9local0.mc_participants.actLikeButton = true;
    __s9local0.mc_participants.mouseChildren = false;
    __s9local0.mc_participants.toolTipText = "dialog_alliance_bookmarks_attackerList_tooltip";
  };
  CastleAttackOrderReceivedDialog.prototype.getPosition = function () {
    return new __s0local0(this.dialogProperties.bookmarkVO.posX, this.dialogProperties.bookmarkVO.posY);
  };
  CastleAttackOrderReceivedDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.mc_details.mc_participants:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBookmarkShowAttackersDialog.CastleBookmarkShowAttackersDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(this.dialogProperties.bookmarkVO));
    }
  };
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "copyTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackMessage_copy";
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog.prototype, "copyTextId").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderReceivedDialog.prototype, "titleTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackMessage_header";
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog.prototype, "titleTextId").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderReceivedDialog.__initialize_static_members = function () {
    CastleAttackOrderReceivedDialog.NAME = "CastleAttackOrderReceivedDialog";
  };
  return CastleAttackOrderReceivedDialog;
}(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog);
exports.CastleAttackOrderReceivedDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBookmarkShowAttackersDialog = require("gge-module:export_CastleBookmarkShowAttackersDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
