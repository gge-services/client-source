Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ConstructionItemSlotSmall = require("gge-module:export_ConstructionItemSlotSmall");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __s0local0 = function (__s1param0) {
  function CIBuildingListItem() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.isSmallItem = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CIBuildingListItem, __s1param0);
  CIBuildingListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this.itxt_name = __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this.itxt_name.mouseEnabled = false;
    if (this.getItemMc().txt_level) {
      this.itxt_level = __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("building_level"));
      this.itxt_level.mouseEnabled = false;
    } else {
      this.isSmallItem = true;
    }
    this.getItemMc().mc_downState.mouseEnabled = false;
    this.getItemMc().mc_mouseOver.mouseEnabled = false;
    this.getItemMc().mc_selected.mouseEnabled = false;
    this.getItemMc().bg.mouseEnabled = false;
    this.getItemMc().mc_buildingIcon.mouseEnabled = false;
    this.getItemMc().mc_downState.mouseChildren = false;
    this.getItemMc().mc_mouseOver.mouseChildren = false;
    this.getItemMc().mc_selected.mouseChildren = false;
    this.getItemMc().bg.mouseChildren = false;
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
    this.getItemMc().mc_item.mouseChildren = false;
    this.getItemMc().mc_expired.toolTipText = "dialog_ci_assign_tempCiExpired_label_tooltip";
    this._clickFeedbackBehaviour = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.getItemMc());
  };
  CIBuildingListItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    this.removeListenerOnSlots();
    this.slots = [];
    for (var __s9local0 = 0; __s9local0 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++__s9local0) {
      for (var __s9local1 = 0; __s9local1 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS[__s9local0]; ++__s9local1) {
        var __s9local2 = new __dep_export_ConstructionItemSlotSmall.ConstructionItemSlotSmall(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__s9local0, __s9local1), this.ciBuildingScrollItemVO.interactionData, this.ciBuildingScrollItemVO.slotClickCallback, this.getItemMc()["slot_" + __s9local0 + "_" + __s9local1]);
        this.slots.push(__s9local2);
      }
    }
    this.addListenerOnSlots();
    this.drawIcon();
    if (this.isSmallItem) {
      this.itxt_name.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_DASH_SPLIT;
      this.itxt_name.textContentVO.textReplacements = [this.ciBuildingScrollItemVO.buildingVO.getNameString(), this.ciBuildingScrollItemVO.buildingVO.level];
    } else {
      this.itxt_name.textContentVO.textId = this.ciBuildingScrollItemVO.buildingVO.getNameString();
      this.itxt_level.textContentVO.textReplacements = [this.ciBuildingScrollItemVO.buildingVO.level];
    }
    if (this.slots != null) {
      for (var __s9local3 = 0, __s9local4 = this.slots; __s9local3 < __s9local4.length; __s9local3++) {
        var __s9local5 = __s9local4[__s9local3];
        if (__s9local5 !== undefined) {
          __s9local5.buildingVO = this.ciBuildingScrollItemVO.buildingVO;
        }
      }
    }
    if (this.ciBuildingScrollItemVO.interactionData && this.ciBuildingScrollItemVO.interactionData.selectedBuilding == this.ciBuildingScrollItemVO.buildingVO) {
      this.getItemMc().mc_selected.visible = true;
    } else {
      this.getItemMc().mc_selected.visible = false;
    }
    this.getItemMc().mc_expired.visible = this.ciBuildingScrollItemVO.interactionData.hasBuildingExpired(this.ciBuildingScrollItemVO.buildingVO.objectId);
  };
  CIBuildingListItem.prototype.drawIcon = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.getItemMc().mc_buildingIcon);
    var __s23local0 = this.isSmallItem ? 22 : 33;
    var __s23local1 = this.isSmallItem ? 22 : 33;
    var __s23local2 = new Library.CastleInterfaceElements.BuildingGroundBg();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s23local2, __s23local0, __s23local1);
    this.getItemMc().mc_buildingIcon.addChild(__s23local2);
    var __s23local3 = new (__dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(this.ciBuildingScrollItemVO.buildingVO).buildingGroundIconClass)();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s23local3, __s23local0 * 0.7, __s23local1 * 0.7);
    this.getItemMc().mc_buildingIcon.addChild(__s23local3);
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
  };
  CIBuildingListItem.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    if (__s25param0.target == this.getItemMc().mc_item) {
      this.ciBuildingScrollItemVO.scrollItemClickCallback(this.ciBuildingScrollItemVO.buildingVO);
    }
  };
  CIBuildingListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.addListenerOnSlots();
    this._clickFeedbackBehaviour.addEventListener();
  };
  CIBuildingListItem.prototype.addListenerOnSlots = function () {
    if (this.slots) {
      for (var __s30local0 = 0, __s30local1 = this.slots; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2 !== undefined) {
          __s30local2.show();
        }
      }
    }
  };
  CIBuildingListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.removeListenerOnSlots();
    this._clickFeedbackBehaviour.removeEventListener();
  };
  CIBuildingListItem.prototype.removeListenerOnSlots = function () {
    if (this.slots) {
      for (var __s38local0 = 0, __s38local1 = this.slots; __s38local0 < __s38local1.length; __s38local0++) {
        var __s38local2 = __s38local1[__s38local0];
        if (__s38local2 !== undefined) {
          __s38local2.hide();
        }
      }
    }
  };
  Object.defineProperty(CIBuildingListItem.prototype, "ciBuildingScrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return CIBuildingListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CIBuildingListItem = __s0local0;
