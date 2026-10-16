Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __s0local0 = function (__s1param0) {
  function CastleMultiInfoBuildingLayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    var __s3local1 = new Map();
    __s3local1.set(1, CastleMultiInfoBuildingLayer.ONE_ICON_POSITION);
    __s3local1.set(2, CastleMultiInfoBuildingLayer.TWO_ICONS_POSITIONS);
    __s3local1.set(3, CastleMultiInfoBuildingLayer.THREE_ICONS_POSITIONS);
    __s3local1.set(4, CastleMultiInfoBuildingLayer.FOUR_ICONS_POSITIONS);
    __s3local1.set(5, CastleMultiInfoBuildingLayer.FIVE_ICONS_POSITIONS);
    __s3local1.set(6, CastleMultiInfoBuildingLayer.SIX_ICONS_POSITIONS);
    __s3local1.set(7, CastleMultiInfoBuildingLayer.SEVEN_ICONS_POSITIONS);
    __s3local1.set(8, CastleMultiInfoBuildingLayer.EIGHT_ICONS_POSITIONS);
    __s3local1.set(CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION + 2, CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED);
    __s3local0.buildingStats = new __dep_export_CastleBuildingStats.CastleBuildingStats(__s3local0.infoLayer, __s3local1, CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION);
    if (!__s3local0.infoLayer.mc_constructionItemPanel.slot_2_0) {
      var __s3local2 = new Library.CastleInterfaceElements.SmallSlotSecondary();
      __s3local2.x = 5;
      __s3local2.name = "slot_2_0";
      __s3local2.scaleX = __s3local2.scaleY = 1.26;
      __s3local0.infoLayer.mc_constructionItemPanel.addChild(__s3local2);
      __s3local0.infoLayer.mc_constructionItemPanel.slot_2_0 = __s3local2;
    }
    __s3local0.slots = [];
    for (var __s3local3 = 0; __s3local3 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++__s3local3) {
      for (var __s3local4 = 0; __s3local4 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS[__s3local3]; ++__s3local4) {
        var __s3local5 = new __dep_export_ConstructionItemSlotSmall.ConstructionItemSlotSmall(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__s3local3, __s3local4), null, CastleMultiInfoBuildingLayer.onClickConstructionItemSlot, __s3local0.infoLayer.mc_constructionItemPanel["slot_" + __s3local3 + "_" + __s3local4]);
        __s3local5.disp.y = CastleMultiInfoBuildingLayer.CONSTRUCTION_ITEM_SLOT_POSITION[__s3local3];
        __s3local0.slots.push(__s3local5);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMultiInfoBuildingLayer, __s1param0);
  CastleMultiInfoBuildingLayer.onClickConstructionItemSlot = function (__s10param0) {
    if (__s10param0.isLocked()) {
      __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.handleSlotClickLocked(__s10param0.slotVO);
    } else {
      var __s10local0 = new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, __s10param0.slotVO, __s10param0.buildingVO);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, __s10local0);
    }
  };
  CastleMultiInfoBuildingLayer.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (this.slots != null) {
      for (var __s14local0 = 0, __s14local1 = this.slots; __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined) {
          __s14local2.show();
        }
      }
    }
  };
  CastleMultiInfoBuildingLayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.currentDisplayedBuilding = null;
    if (this.slots != null) {
      for (var __s20local0 = 0, __s20local1 = this.slots; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          __s20local2.hide();
        }
      }
    }
  };
  CastleMultiInfoBuildingLayer.prototype.setBuildingInfo = function (__s26param0) {
    this.currentDisplayedBuilding = __s26param0;
    var __s26local0 = __s26param0.multiInfoPanelVO;
    if (!__s26local0) {
      return false;
    }
    var __s26local1 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1);
    var __s26local2 = __s26local1.requiredLevel <= __dep_export_CastleModel.CastleModel.userData.level;
    var __s26local3 = __s26local1.isAvailableInAreaTypeAndKingdomId(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID);
    var __s26local4 = __s26param0.hasConstructionItemSlots;
    this.infoLayer.mc_constructionItemPanel.visible = __s26local2 && __s26local4 && __s26local3 && !__s26param0.buildingState.isUnderInitialConstruction;
    if (this.slots != null) {
      for (var __s26local5 = 0, __s26local6 = this.slots; __s26local5 < __s26local6.length; __s26local5++) {
        var __s26local7 = __s26local6[__s26local5];
        if (__s26local7 !== undefined) {
          __s26local7.buildingVO = __s26param0;
        }
      }
    }
    this.textFieldmanager.registerTextField(this.infoLayer.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s26local0.titleID)).autoFitToBounds = true;
    var __s26local8 = this.textFieldmanager.registerTextField(this.infoLayer.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s26local0.copyID));
    __s26local8.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.LEFT;
    __s26local8.visible = __s26param0 instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO ? __s26local0.items.length <= 4 : __s26local0.items.length <= 6;
    this.buildingStats.showBuildingInfo(__s26param0, __s26local0);
    return true;
  };
  CastleMultiInfoBuildingLayer.prototype.refreshBuildingInfo = function () {
    return !!this.currentDisplayedBuilding && this.setBuildingInfo(this.currentDisplayedBuilding);
  };
  Object.defineProperty(CastleMultiInfoBuildingLayer.prototype, "infoLayer", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiInfoBuildingLayer.prototype, "textFieldmanager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiInfoBuildingLayer.ONE_ICON_POSITION = [85, 100];
  CastleMultiInfoBuildingLayer.TWO_ICONS_POSITIONS = [44, 107, 123, 107];
  CastleMultiInfoBuildingLayer.THREE_ICONS_POSITIONS = [80, 86, 39, 110, 123, 110];
  CastleMultiInfoBuildingLayer.FOUR_ICONS_POSITIONS = [46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.FIVE_ICONS_POSITIONS = [46, 58, 124, 58, 46, 85, 124, 85, 80, 111];
  CastleMultiInfoBuildingLayer.SIX_ICONS_POSITIONS = [46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.SEVEN_ICONS_POSITIONS = [80, 31, 46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.EIGHT_ICONS_POSITIONS = [46, 31, 124, 31, 46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED = [80, 86, 80, 110];
  CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION = 7;
  CastleMultiInfoBuildingLayer.CONSTRUCTION_ITEM_SLOT_POSITION = [0, -32, 32];
  return CastleMultiInfoBuildingLayer;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.CastleMultiInfoBuildingLayer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuildingStats = require("gge-module:export_CastleBuildingStats");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_ConstructionItemSlotSmall = require("gge-module:export_ConstructionItemSlotSmall");
