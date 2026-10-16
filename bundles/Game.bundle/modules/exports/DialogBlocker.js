Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClassHierarchyUtil = require("gge-module:export_ClassHierarchyUtil");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ACastlePostActionDialog = require("gge-module:export_ACastlePostActionDialog");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __dep_export_CastleTieredPrimeDayDialog = require("gge-module:export_CastleTieredPrimeDayDialog");
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
var __dep_export_CastleAbstractPrimeSaleDialog = require("gge-module:export_CastleAbstractPrimeSaleDialog");
var __dep_export_CastlePostSpyDialog = require("gge-module:export_CastlePostSpyDialog");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
var __s0local0 = function () {
  function DialogBlocker() {}
  DialogBlocker.isAllowedToShowDialog = function (__s5param0, __s5param1) {
    if (typeof __s5param0 == "string") {
      return true;
    }
    var __s5local0 = false;
    if (DialogBlocker.DIALOG_TYPES_TO_BLOCK != null) {
      for (var __s5local1 = 0, __s5local2 = DialogBlocker.DIALOG_TYPES_TO_BLOCK; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && __dep_export_ClassHierarchyUtil.ClassHierarchyUtil.inheritsFrom(__s5param0, __s5local3)) {
          __s5local0 = true;
        }
      }
    }
    return !__s5local0 || !DialogBlocker.isBlockerDialogOpen || (DialogBlocker.delayDialogDisplay(__s5param0, __s5param1), false);
  };
  Object.defineProperty(DialogBlocker, "isBlockerDialogOpen", {
    get: function () {
      var __s12local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().fix_dialogs;
      if (!__s12local0) {
        return false;
      }
      if (__s12local0 != null) {
        for (var __s12local1 = 0, __s12local2 = Array.from(__s12local0.values()); __s12local1 < __s12local2.length; __s12local1++) {
          var __s12local3 = __s12local2[__s12local1];
          if (__s12local3 !== undefined && __s12local3 && __s12local3.isVisible() && DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS != null) {
            for (var __s12local4 = 0, __s12local5 = DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS; __s12local4 < __s12local5.length; __s12local4++) {
              var __s12local6 = __s12local5[__s12local4];
              if (__s12local6 !== undefined && __dep_export_ClassHierarchyUtil.ClassHierarchyUtil.inheritsFrom(__dep_exact_81dacdf05bd32292.getDefinitionByName(__dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s12local3)), __s12local6)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DialogBlocker.delayDialogDisplay = function (__s22param0, __s22param1) {
    var __s22local0 = new __dep_export_DialogInfoVO.DialogInfoVO(__s22param0, __s22param1);
    DialogBlocker.queuedDialogs.push(__s22local0);
    DialogBlocker.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, DialogBlocker.onHideDialog);
  };
  DialogBlocker.onHideDialog = function (__s24param0) {
    if (!DialogBlocker.isBlockerDialogOpen && DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS != null) {
      for (var __s24local0 = 0, __s24local1 = DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined && __dep_export_ClassHierarchyUtil.ClassHierarchyUtil.inheritsFrom(__s24param0.params[0], __s24local2)) {
          if (DialogBlocker.queuedDialogs != null) {
            for (var __s24local3 = 0, __s24local4 = DialogBlocker.queuedDialogs; __s24local3 < __s24local4.length; __s24local3++) {
              var __s24local5 = __s24local4[__s24local3];
              if (__s24local5 !== undefined) {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__s24local5.dialogClass, __s24local5.properties);
              }
            }
          }
          DialogBlocker.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, DialogBlocker.onHideDialog);
          DialogBlocker.queuedDialogs = [];
          return;
        }
      }
    }
  };
  Object.defineProperty(DialogBlocker, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  DialogBlocker.__initialize_static_members = function () {
    DialogBlocker.DIALOG_TYPES_TO_BLOCK = [__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog, __dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog, __dep_export_CastleTieredPrimeDayDialog.CastleTieredPrimeDayDialog, __dep_export_CastleAbstractPrimeSaleDialog.CastleAbstractPrimeSaleDialog];
    DialogBlocker.DIALOGS_BLOCKING_OTHER_DIALOGS = [__dep_export_CastleFightDialog.CastleFightDialog, __dep_export_CastleStartAttackDialog.CastleStartAttackDialog, __dep_export_ACastlePostActionDialog.ACastlePostActionDialog, __dep_export_CastleSpyDialog.CastleSpyDialog, __dep_export_CastlePostSpyDialog.CastlePostSpyDialog];
  };
  DialogBlocker.queuedDialogs = [];
  return DialogBlocker;
}();
exports.DialogBlocker = __s0local0;
__s0local0.__initialize_static_members();
