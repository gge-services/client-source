Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleSlotVOEvent = require("gge-module:export_CastleSlotVOEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_BasicBuildListItem = require("gge-module:export_BasicBuildListItem");
var __s0local0 = function (__s1param0) {
  function UnitBuildListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itemSize = 64;
    __s3local0.itemSpace = 5;
    __s3local0.itemSlotSize = __s3local0.itemSize + __s3local0.itemSpace;
    if (__s3param0.boostMarker) {
      __s3param0.boostMarker.visible = false;
    }
    if (__s3param0.allianceHelpMarker) {
      __s3param0.allianceHelpMarker.visible = false;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitBuildListItem, __s1param0);
  UnitBuildListItem.prototype.setIcons = function () {
    this.unitPackageListItemMC.icon_Lock.visible = this.isLocked;
    this.unitPackageListItemMC.content.visible = !this.isLocked && !this.isFree;
    this.unitPackageListItemMC.icon_wait.visible = !this.isLocked && !this.isFree && !this.slotVO.isCurrentlyRecruiting && !!this.unitPackageSlotVO.unitVO;
    this.enableIcons = this.isAvailable;
    this.unitPackageListItemMC.rentedFrame.visible = false;
    this.unitPackageListItemMC.vipFrame.visible = false;
    if (!this._slotVO.isAlwaysUnlocked && !this._slotVO.isLocked) {
      if (this.unitPackageSlotVO && this.unitPackageSlotVO.isVIP) {
        this.unitPackageListItemMC.vipFrame.visible = true;
      } else {
        this.unitPackageListItemMC.rentedFrame.visible = true;
      }
    }
    if (this.unitPackageSlotVO) {
      this.textFieldManager.registerTextField(this.unitPackageListItemMC.content.infoAmount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.unitPackageSlotVO.amount), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
      if (this.unitPackageListItemMC.boostMarker) {
        var __s7local0 = __dep_exact_f855840627e6e145.int(this.unitPackageSlotVO.numOfBoost);
        this.unitPackageListItemMC.boostMarker.visible = __s7local0 > 0;
        this.unitPackageListItemMC.boostMarker.boost_txt.text = "x" + Math.pow(2, __s7local0);
      }
      if (this.unitPackageListItemMC.allianceHelpMarker) {
        this.unitPackageListItemMC.allianceHelpMarker.visible = false;
        if (this.unitPackageSlotVO.receivedAllianceHelp) {
          this.unitPackageListItemMC.allianceHelpMarker.visible = true;
        }
      }
    }
  };
  Object.defineProperty(UnitBuildListItem.prototype, "isAvailable", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListItem.BasicBuildListItem.prototype, "isAvailable").get.call(this) && __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_UNLOCK_RECRUIT_SLOT);
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListItem.BasicBuildListItem.prototype, "isAvailable").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListItem.prototype.initItem = function () {
    if (this.hasItem) {
      __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(this.unitPackageSlotVO.unitVO, this.unitPackageListItemMC.mc_bg, Library.CastleInterfaceElements.recruitListItemBackground, Library.CastleInterfaceElements.recruitListItemBackground_Berimond);
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.unitPackageSlotVO.wodId), this.unitPackageListItemMC.content.mc_container, this.targetMcSize, this.targetMcSize, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 20, null);
      this.unitPackageListItemMC.vipFrame.statusInfo.visible = false;
      this.unitPackageListItemMC.rentedFrame.statusInfo.visible = false;
    } else {
      this.unitPackageListItemMC.rentedFrame.statusInfo.visible = true;
      this.unitPackageListItemMC.vipFrame.statusInfo.visible = true;
    }
    this.unitPackageSlotVO.addEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.refreshData();
  };
  Object.defineProperty(UnitBuildListItem.prototype, "enableIcons", {
    set: function (__s24param0) {
      var __s24local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s24local0.desaturate();
      var __s24local1 = __s24param0 ? null : [__s24local0.filter];
      if (this.unitPackageListItemMC.content.visible) {
        this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters(__s24local1);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "hasItem", {
    get: function () {
      return this.unitPackageSlotVO.wodId > 0;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicBuildListItem.BasicBuildListItem.prototype, "hasItem").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListItem.prototype.onUpdateSlot = function (__s32param0) {
    this.refreshData();
  };
  UnitBuildListItem.prototype.refreshData = function () {
    this.textFieldManager.registerTextField(this.unitPackageListItemMC.content.infoAmount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.unitPackageSlotVO.amount), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
  };
  UnitBuildListItem.prototype.remove = function () {
    this.unitPackageSlotVO.removeEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
  };
  Object.defineProperty(UnitBuildListItem.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "unitPackageSlotVO", {
    get: function () {
      return this.slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "unitPackageListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return UnitBuildListItem;
}(__dep_export_BasicBuildListItem.BasicBuildListItem);
exports.UnitBuildListItem = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
