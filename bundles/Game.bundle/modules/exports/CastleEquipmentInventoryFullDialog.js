Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_ACollectableItemEquipmentVO = require("gge-module:export_ACollectableItemEquipmentVO");
var __dep_export_ACollectableItemGemVO = require("gge-module:export_ACollectableItemGemVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentInventoryFullDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEquipmentInventoryFullDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentInventoryFullDialog, __s1param0);
  CastleEquipmentInventoryFullDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_eq_dialog], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_bundlePackage_inventoryFull_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_eq_dialog.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_equipment_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bundlePackage_inventoryFull_desc"));
    var __s5local0 = CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.packageVO, true);
    var __s5local1 = CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.packageVO, false);
    if (__s5local0 == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inventorySpace_equipment_sufficient_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inventorySpace_equipment_insufficient_desc", [__s5local0]));
    }
    if (__s5local1 == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inventorySpace_gem_sufficient_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_inventorySpace_gem_insufficient_desc", [__s5local1]));
    }
    this.dialogDisp.mc_eq_yes.visible = __s5local0 == 0;
    this.dialogDisp.mc_eq_no.visible = __s5local0 > 0;
    this.dialogDisp.mc_gem_yes.visible = __s5local1 == 0;
    this.dialogDisp.mc_gem_no.visible = __s5local1 > 0;
  };
  CastleEquipmentInventoryFullDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_eq_dialog:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog);
          this.hide();
      }
    }
  };
  CastleEquipmentInventoryFullDialog.getAmountOverMax = function (__s15param0, __s15param1) {
    var __s15local0 = __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace - __dep_export_CastleModel.CastleModel.equipData.filledInventorySpace;
    var __s15local1 = __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace - __dep_export_CastleModel.CastleModel.gemData.filledInventorySpace;
    var __s15local2 = __s15param1 ? __s15local0 : __s15local1;
    var __s15local3 = CastleEquipmentInventoryFullDialog.getPackageAmount(__s15param0, __s15param1);
    if (__s15local2 >= __s15local3) {
      return 0;
    } else {
      return Math.abs(__s15local2 - __s15local3);
    }
  };
  CastleEquipmentInventoryFullDialog.getPackageAmount = function (__s19param0, __s19param1) {
    var __s19local0 = 0;
    var __s19local1 = 0;
    if (__s19param0.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
      for (var __s19local2 = 0; __s19local2 < __s19param0.bundlePackageIds.length; __s19local2++) {
        var __s19local3 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s19param0.bundlePackageIds[__s19local2]);
        if (__s19local3) {
          if (__s19param1 && __s19local3.firstReward instanceof __dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO) {
            __s19local1++;
          }
          if (!__s19param1 && __s19local3.firstReward instanceof __dep_export_ACollectableItemGemVO.ACollectableItemGemVO) {
            __s19local0++;
          }
        }
      }
    } else {
      if (__s19param1 && __s19param0.firstReward instanceof __dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO) {
        __s19local1++;
      }
      if (!__s19param1 && __s19param0.firstReward instanceof __dep_export_ACollectableItemGemVO.ACollectableItemGemVO) {
        __s19local0++;
      }
    }
    if (__s19param1) {
      return __s19local1;
    } else {
      return __s19local0;
    }
  };
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "textMaxChars", {
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "defaultName", {
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentInventoryFullDialog.__initialize_static_members = function () {
    CastleEquipmentInventoryFullDialog.NAME = "EquipmentInventoryFull";
  };
  return CastleEquipmentInventoryFullDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEquipmentInventoryFullDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
