Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_CastleColumnSortingVO = require("gge-module:export_CastleColumnSortingVO");
var __dep_export_CastleTableSorter = require("gge-module:export_CastleTableSorter");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceMemberScrollItemComparer = require("gge-module:export_AllianceMemberScrollItemComparer");
var __dep_export_AllianceMemberScrollItemVO = require("gge-module:export_AllianceMemberScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleBookmarkAttackerSelectionDialog() {
    var __s3local0 = this;
    __s3local0._allMembersSelected = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleBookmarkAttackerSelectionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBookmarkAttackerSelectionDialog, __s1param0);
  CastleBookmarkAttackerSelectionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setParticipants_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_select_all, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setParticipants_selectAll"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_rank.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank"));
    this.dialogDisp.btn_column_sort_rank.toolTipText = "sortList";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_name.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    this.dialogDisp.btn_column_sort_name.toolTipText = "sortList";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_level.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.dialogDisp.btn_column_sort_level.toolTipText = "sortList";
    this.dialogDisp.btn_column_sort_distance.toolTipText = "distance_target";
    this.dialogDisp.btn_column_sort_distance.triangle.toolTipText = "sortList";
    this.dialogDisp.btn_column_sort_might.toolTipText = "playerMight";
    this.dialogDisp.btn_column_sort_selected.toolTipText = "Bookmarks_alliance_participants_tooltip";
    this.dialogDisp.btn_column_sort_selected.triangle.toolTipText = "sortList";
    this.dialogDisp.btn_select_all.actLikeButton = true;
    this.dialogDisp.btn_select_all.mouseChildren = false;
    this._scrollBarVO = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderBar, this.dialogDisp.mc_slider.btn_slider, 0, 1, this.dialogDisp);
    this._scrollBar = new __dep_export_ScrollComponent.ScrollComponent(this._scrollBarVO, __dep_export_ScrollComponent.ScrollComponent.VERTICAL_SLIDER);
    this._tableSorter = new __dep_export_CastleTableSorter.CastleTableSorter();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._changedMembers = [];
    this._targetPosition = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    this._savedSelectedMembers = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers;
    this.setupMembers();
    this.setupButtons();
    if (this._scrollList) {
      this._scrollList.clear();
      this._scrollList.remove();
    }
    this._scrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp);
    this._scrollList.scrollItemClass = __dep_export_CastleSelectableAllianceMemberScrollItem.CastleSelectableAllianceMemberScrollItem;
    this._scrollList.hideButtons = true;
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataChanged));
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateList();
    this.setSelectAllButtonState();
    this.writeSettingsToBookmarkVO();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setupMembers = function () {
    this._memberList = [];
    var __s10local0 = __dep_export_CastleModel.CastleModel.allianceData.getAllianceInfoVOByID(__dep_export_CastleModel.CastleModel.userData.allianceID).memberList;
    var __s10local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.dialogProperties.bookmarkVO.kingdomId).minLevel);
    if (__s10local0 != null) {
      for (var __s10local2 = 0, __s10local3 = __s10local0; __s10local2 < __s10local3.length; __s10local2++) {
        var __s10local4 = __s10local3[__s10local2];
        if (__s10local4 !== undefined) {
          if (!(__s10local4.playerLevel < __s10local1)) {
            this._memberList.push(__s10local4);
          }
        }
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onScrollItemClick = function (__s17param0) {
    this.checkMemberStateChange(__s17param0.scrollItem.scrollItem, true);
    this.setSelectAllButtonState();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setSelectAllButtonState = function () {
    this._allMembersSelected = !!this._scrollList.voList.every(CastleBookmarkAttackerSelectionDialog.memberIsSelected);
    this.dialogDisp.btn_select_all.gotoAndStop(this._allMembersSelected ? 2 : 1);
    this.dialogDisp.btn_select_all.toolTipText = this._allMembersSelected ? "Bookmarks_alliance_setParticipants_selectAll_tooltip" : "Bookmarks_alliance_setParticipants_selectAll_Inactive_tooltip";
  };
  CastleBookmarkAttackerSelectionDialog.prototype.checkMemberStateChange = function (__s21param0, __s21param1) {
    if (!this.getChangedMemberByMemberInfo(__s21param0)) {
      var __s21local0 = __s21param1 ? !__s21param0.selected : __s21param0.selected;
      this._changedMembers.push(new __s0local1(__s21param0, __s21local0));
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.getChangedMemberByMemberInfo = function (__s24param0) {
    if (this._changedMembers != null) {
      for (var __s24local0 = 0, __s24local1 = this._changedMembers; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined && __s24local2.memberInfoScrollItem == __s24param0) {
          return __s24local2;
        }
      }
    }
    return null;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.checkSubmitButtonState = function () {
    var __s30local0 = !!this._scrollList.voList.every(CastleBookmarkAttackerSelectionDialog.memberIsNotSelected);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !__s30local0);
    this.dialogDisp.btn_ok.toolTipText = __s30local0 ? "Bookmarks_alliance_setParticipants_nobodySelected_Tooltip" : "";
  };
  CastleBookmarkAttackerSelectionDialog.memberIsSelected = function (__s32param0) {
    var __s32local0 = [];
    for (var __s32local1 = 1; __s32local1 < arguments.length; __s32local1++) {
      __s32local0[__s32local1 - 1] = arguments[__s32local1];
    }
    return __s32param0.selected;
  };
  CastleBookmarkAttackerSelectionDialog.memberIsNotSelected = function (__s36param0) {
    var __s36local0 = [];
    for (var __s36local1 = 1; __s36local1 < arguments.length; __s36local1++) {
      __s36local0[__s36local1 - 1] = arguments[__s36local1];
    }
    return !__s36param0.selected;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.updateList = function () {
    this._scrollList.clear();
    var __s40local0 = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    var __s40local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.bookmarkVO.kingdomId);
    if (this._memberList != null) {
      for (var __s40local2 = 0, __s40local3 = this._memberList; __s40local2 < __s40local3.length; __s40local2++) {
        var __s40local4 = __s40local3[__s40local2];
        if (__s40local4 !== undefined) {
          var __s40local5 = new __dep_export_AllianceMemberScrollItemVO.AllianceMemberScrollItemVO(__s40local4, null, __s40local0, __s40local1);
          this._scrollList.pushContent(__s40local5);
          if (this._savedSelectedMembers.length == 0 && __s40local4.isOwnOwnerInfo) {
            this.checkMemberStateChange(__s40local5, false);
            __s40local5.selected = true;
          }
          for (var __s40local6 = 0, __s40local7 = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers; __s40local6 < __s40local7.length; __s40local6++) {
            var __s40local8 = __s40local7[__s40local6];
            if (__s40local8 !== undefined && __s40local4.playerID == __s40local8) {
              __s40local5.selected = true;
            }
          }
        }
      }
    }
    this._tableSorter.init(this._scrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
    this.showScrollList();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.showScrollList = function () {
    this._scrollList.initList();
    var __s50local0 = __dep_exact_f855840627e6e145.int(this._scrollList.voList.length);
    if (__s50local0 < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarVO.maxValue = __dep_exact_f855840627e6e145.int(__s50local0 - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onAllianceDataChanged = function (__s54param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.setupMembers();
      this.updateList();
    } else {
      this.hide();
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onMemberListSortingChanged = function (__s58param0) {
    if (this._sorters != null) {
      for (var __s58local0 = 0, __s58local1 = this._sorters; __s58local0 < __s58local1.length; __s58local0++) {
        var __s58local2 = __s58local1[__s58local0];
        if (__s58local2 !== undefined) {
          __s58local2.sortingTrigger.triangle.gotoAndStop(1);
        }
      }
    }
    __s58param0.sortingTrigger.triangle.gotoAndStop(__s58param0.isInAscendingOrder ? 2 : 1);
    this.showScrollList();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onClick = function (__s64param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s64param0.target)) {
      __s1param0.prototype.onClick.call(this, __s64param0);
      switch (__s64param0.target) {
        case this.dialogDisp.btn_select_all:
          this.toggleAllMemberSelection();
          break;
        case this.dialogDisp.btn_ok:
          this.writeSettingsToBookmarkVO();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_bookmarks_alliance_setParticipant"));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.revertSettings();
          this.hide();
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.revertSettings = function () {
    if (this._changedMembers != null) {
      for (var __s68local0 = 0, __s68local1 = this._changedMembers; __s68local0 < __s68local1.length; __s68local0++) {
        var __s68local2 = __s68local1[__s68local0];
        if (__s68local2 !== undefined) {
          __s68local2.memberInfoScrollItem.selected = __s68local2.originalSelectedValue;
        }
      }
    }
    this.dialogProperties.bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers = true;
    this._allMembersSelected = false;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.writeSettingsToBookmarkVO = function () {
    this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers.length = 0;
    for (var __s74local0 = 0, __s74local1 = this._scrollList.voList; __s74local0 < __s74local1.length; __s74local0++) {
      var __s74local2 = __s74local1[__s74local0];
      if (__s74local2 !== undefined && __s74local2.selected) {
        this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers.push(__s74local2.ownerInfoVO.playerID);
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.toggleAllMemberSelection = function () {
    this._allMembersSelected = !this._allMembersSelected;
    this.updateSelectionForAllMembers();
    this.showScrollList();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.updateSelectionForAllMembers = function () {
    this._scrollList.voList.forEach(this.bindFunction(this.changeSelectedState));
    this.setSelectAllButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.changeSelectedState = function (__s83param0) {
    var __s83local0 = [];
    for (var __s83local1 = 1; __s83local1 < arguments.length; __s83local1++) {
      __s83local0[__s83local1 - 1] = arguments[__s83local1];
    }
    if (__s83param0.selected != this._allMembersSelected) {
      this.checkMemberStateChange(__s83param0, false);
    }
    __s83param0.selected = this._allMembersSelected;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.hideLoaded = function (__s88param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s88param0);
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataChanged));
    this._tableSorter.hide();
    this.dialogProperties.checkButtonSubmitState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setupButtons = function () {
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_no, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_column_sort_rank, this.dialogDisp.btn_column_sort_name, this.dialogDisp.btn_column_sort_level, this.dialogDisp.btn_column_sort_distance, this.dialogDisp.btn_column_sort_might, this.dialogDisp.btn_column_sort_selected]);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_rank, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_name, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_level, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryLevel));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_distance, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_might, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareMightValue));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_selected, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimarySelected));
    return this._sorters;
  };
  Object.defineProperty(CastleBookmarkAttackerSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkAttackerSelectionDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this._scrollBar.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    this._scrollBar.enableComponent = true;
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onScrollListChanged = function (__s98param0) {
    var __s98local0 = __dep_exact_f855840627e6e145.int(this._scrollList.currentStartIndex);
    this._scrollBar.setSelectedIndex(__s98local0, false);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onSliderChanged = function (__s100param0) {
    var __s100local0 = __dep_exact_f855840627e6e145.int(this._scrollBar.selectedIndex);
    this._scrollList.initList(__s100local0);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this._scrollBar.dispose();
    this._scrollBar.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
  };
  CastleBookmarkAttackerSelectionDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._tableSorter) {
      this._tableSorter.destroy();
    }
  };
  CastleBookmarkAttackerSelectionDialog.__initialize_static_members = function () {
    CastleBookmarkAttackerSelectionDialog.NAME = "CastleBookmarkAttackerSelection";
  };
  return CastleBookmarkAttackerSelectionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBookmarkAttackerSelectionDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
var __dep_export_CastleSelectableAllianceMemberScrollItem = require("gge-module:export_CastleSelectableAllianceMemberScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __s0local1 = function () {
  function ChangedMemberVO(__s111param0, __s111param1) {
    this._originalSelectedValue = false;
    this._memberInfoScrollItem = __s111param0;
    this._originalSelectedValue = __s111param1;
  }
  Object.defineProperty(ChangedMemberVO.prototype, "memberInfoScrollItem", {
    get: function () {
      return this._memberInfoScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChangedMemberVO.prototype, "originalSelectedValue", {
    get: function () {
      return this._originalSelectedValue;
    },
    enumerable: true,
    configurable: true
  });
  return ChangedMemberVO;
}();
__s0local0.__initialize_static_members();
