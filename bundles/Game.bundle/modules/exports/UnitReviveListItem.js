Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSlotVOEvent = require("gge-module:export_CastleSlotVOEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UnitBuildListItem = require("gge-module:export_UnitBuildListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function UnitReviveListItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitReviveListItem, __s1param0);
  UnitReviveListItem.prototype.setIcons = function () {
    this.unitPackageReviveListItemMC.icon_Lock.visible = this.isLocked;
    this.unitPackageReviveListItemMC.red_overlay.visible = !this.isLocked && !this.isFree;
    this.unitPackageReviveListItemMC.red_underlay.visible = !this.isLocked && !this.isFree;
    this.unitPackageReviveListItemMC.infoAmount.visible = !this.isLocked && !this.isFree && this.unitPackageSlotVO && this.unitPackageSlotVO.unitVO.level <= 0;
    this.unitPackageReviveListItemMC.infoAmount_mead.visible = !this.isLocked && !this.isFree && this.unitPackageSlotVO && this.unitPackageSlotVO.unitVO.level > 0;
    this.unitPackageReviveListItemMC.progressBar.visible = !this.isLocked && !this.isFree && this.showProgressbar;
    this.unitPackageReviveListItemMC.icon_wait.visible = !this.isLocked && !this.isFirst && !this.isFree;
    this.unitPackageReviveListItemMC.icon_unlocked.visible = !this.isLocked && this.isFree;
    if (this.unitPackageSlotVO) {
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }, 0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount_mead.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }, 0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      if (this.unitPackageSlotVO.unitReadyInPercent) {
        this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.progressBar.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_exact_f855840627e6e145.int(this.unitPackageSlotVO.unitReadyInPercent * 100)]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  UnitReviveListItem.prototype.initItem = function () {
    if (this.hasItem) {
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.unitPackageSlotVO.wodId), this.unitPackageReviveListItemMC.mc_unitContainer, this.targetMcSize, this.targetMcSize, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 20, new __s0local0(0, 10));
    }
    this.unitPackageSlotVO.addEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot_0));
    this.refreshData();
  };
  UnitReviveListItem.prototype.refreshData = function () {
    this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount_mead.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    if (this.showProgressbar) {
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.progressBar.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_exact_f855840627e6e145.int(this.unitPackageSlotVO.healingReadyInPercent * 100)]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      this.unitPackageReviveListItemMC.progressBar.mc_bar.scaleX = this.unitPackageSlotVO.healingReadyInPercent;
    }
    this.unitPackageReviveListItemMC.progressBar.visible = !this.isLocked && !this.isFree && this.showProgressbar;
  };
  Object.defineProperty(UnitReviveListItem.prototype, "enableIcons", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_UnitBuildListItem.UnitBuildListItem.prototype, "enableIcons").get.call(this);
    },
    set: function (__s17param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitReviveListItem.prototype, "hasItem", {
    get: function () {
      return this.unitPackageSlotVO.wodId > 0;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitBuildListItem.UnitBuildListItem.prototype, "hasItem").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitReviveListItem.prototype.onUpdateSlot_0 = function (__s23param0) {
    this.refreshData();
  };
  Object.defineProperty(UnitReviveListItem.prototype, "unitPackageReviveListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  UnitReviveListItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.unitPackageSlotVO.removeEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot_0));
  };
  return UnitReviveListItem;
}(__dep_export_UnitBuildListItem.UnitBuildListItem);
exports.UnitReviveListItem = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
