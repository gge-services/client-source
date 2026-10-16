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
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_CastleColumnSortingVO = require("gge-module:export_CastleColumnSortingVO");
var __dep_export_CastleTableSorter = require("gge-module:export_CastleTableSorter");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceMemberScrollItemComparer = require("gge-module:export_AllianceMemberScrollItemComparer");
var __dep_export_AllianceMemberScrollItemVO = require("gge-module:export_AllianceMemberScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleBookmarkShowAttackersDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBookmarkShowAttackersDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBookmarkShowAttackersDialog, __s1param0);
  CastleBookmarkShowAttackersDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_bookmarks_attackerList_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_rank.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_name.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_level.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.dialogDisp.btn_column_sort_distance.toolTipText = "distance_target";
    this.dialogDisp.btn_column_sort_might.toolTipText = "playerMight";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_column_sort_rank, this.dialogDisp.btn_column_sort_name, this.dialogDisp.btn_column_sort_level, this.dialogDisp.btn_column_sort_distance, this.dialogDisp.btn_column_sort_might]);
    this._scrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp);
    this._scrollList.hideButtons = true;
    this._scrollList.scrollItemClass = __dep_export_CastleAllianceMemberScrollItem.CastleAllianceMemberScrollItem;
    this._scrollBarConfig = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderBar, this.dialogDisp.mc_slider.btn_slider, 0, 1, this.dialogDisp);
    this._scrollBar = new __dep_export_ScrollComponent.ScrollComponent(this._scrollBarConfig, __dep_export_ScrollComponent.ScrollComponent.VERTICAL_SLIDER);
    this._tableSorter = new __dep_export_CastleTableSorter.CastleTableSorter();
  };
  CastleBookmarkShowAttackersDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
    this.lockDialog();
    this.hideMemberList();
    this.dialogDisp.mc_slider.visible = false;
    this.dialogDisp.mc_sliderDeco.visible = false;
    this.fillScrollListVO();
    this._tableSorter.init(this._scrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
  };
  CastleBookmarkShowAttackersDialog.prototype.hideMemberList = function () {
    for (var __s9local0 = 0, __s9local1 = this._scrollList.veList; __s9local0 < __s9local1.length; __s9local0++) {
      var __s9local2 = __s9local1[__s9local0];
      if (__s9local2 !== undefined) {
        __s9local2.hide();
      }
    }
    this.dialogDisp.btn_up.visible = false;
    this.dialogDisp.btn_down.visible = false;
  };
  CastleBookmarkShowAttackersDialog.prototype.onAllianceDataUpdated = function (__s14param0) {
    if (this.isLocked) {
      this.unLockDialog();
    }
    this.restartList();
  };
  CastleBookmarkShowAttackersDialog.prototype.fillScrollListVO = function () {
    this.assignees = this.getAssignedPlayers();
    this._scrollList.clear();
    var __s17local0 = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    var __s17local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.bookmarkVO.kingdomId);
    if (this.assignees != null) {
      for (var __s17local2 = 0, __s17local3 = this.assignees; __s17local2 < __s17local3.length; __s17local2++) {
        var __s17local4 = __s17local3[__s17local2];
        if (__s17local4 !== undefined) {
          this._scrollList.pushContent(new __dep_export_AllianceMemberScrollItemVO.AllianceMemberScrollItemVO(__s17local4, null, __s17local0, __s17local1));
        }
      }
    }
    this._scrollList.initList();
  };
  CastleBookmarkShowAttackersDialog.prototype.restartList = function () {
    this.assignees = this.getAssignedPlayers();
    this._scrollList.initList();
    if (this.assignees.length < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarConfig.maxValue = __dep_exact_f855840627e6e145.int(this.assignees.length - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkShowAttackersDialog.prototype.refreshList = function () {
    this._scrollList.initList();
    this.assignees ||= this.getAssignedPlayers();
    if (this.assignees.length < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarConfig.maxValue = __dep_exact_f855840627e6e145.int(this.assignees.length - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkShowAttackersDialog.prototype.getAssignedPlayers = function () {
    var __s31local0 = [];
    for (var __s31local1 = 0, __s31local2 = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers; __s31local1 < __s31local2.length; __s31local1++) {
      var __s31local3 = __s31local2[__s31local1];
      if (__s31local3 !== undefined) {
        var __s31local4 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s31local3);
        __s31local0.push(__s31local4);
      }
    }
    return __s31local0;
  };
  CastleBookmarkShowAttackersDialog.prototype.showLoaded = function (__s36param0 = null) {
    this.dialogDisp.btn_column_sort_rank.gotoAndStop(2);
    __s1param0.prototype.showLoaded.call(this, __s36param0);
  };
  CastleBookmarkShowAttackersDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
    this._scrollBar.enableComponent = true;
    this._scrollBar.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  CastleBookmarkShowAttackersDialog.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_rank, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_name, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_level, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryLevel));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_distance, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new __dep_export_CastleColumnSortingVO.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_might, __dep_export_AllianceMemberScrollItemComparer.AllianceMemberScrollItemComparer.compareMightValue));
    return this._sorters;
  };
  CastleBookmarkShowAttackersDialog.prototype.onMemberListSortingChanged = function (__s42param0) {
    if (this._sorters != null) {
      for (var __s42local0 = 0, __s42local1 = this._sorters; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined) {
          __s42local2.sortingTrigger.triangle.gotoAndStop(1);
        }
      }
    }
    __s42param0.sortingTrigger.triangle.gotoAndStop(__s42param0.isInAscendingOrder ? 2 : 1);
    this.refreshList();
  };
  CastleBookmarkShowAttackersDialog.prototype.onScrollListChanged = function (__s48param0 = null) {
    var __s48local0 = __dep_exact_f855840627e6e145.int(this._scrollList.currentStartIndex);
    this._scrollBar.setSelectedIndex(__s48local0, false);
  };
  CastleBookmarkShowAttackersDialog.prototype.onSliderChanged = function (__s50param0) {
    var __s50local0 = __dep_exact_f855840627e6e145.int(this._scrollBar.selectedIndex);
    this._scrollList.initList(__s50local0);
  };
  CastleBookmarkShowAttackersDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this._scrollBar.dispose();
    this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
    this._scrollBar.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  CastleBookmarkShowAttackersDialog.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
  };
  CastleBookmarkShowAttackersDialog.prototype.hideLoaded = function (__s56param0 = null) {
    this._tableSorter.hide();
    __s1param0.prototype.hideLoaded.call(this, __s56param0);
  };
  CastleBookmarkShowAttackersDialog.prototype.onClick = function (__s58param0) {
    __s1param0.prototype.onClick.call(this, __s58param0);
    switch (__s58param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_alliance_bookmarks_attackerList"));
    }
  };
  Object.defineProperty(CastleBookmarkShowAttackersDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkShowAttackersDialog.__initialize_static_members = function () {
    CastleBookmarkShowAttackersDialog.NAME = "CastleBookmarkShowAttackers";
  };
  return CastleBookmarkShowAttackersDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBookmarkShowAttackersDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
var __dep_export_CastleAllianceMemberScrollItem = require("gge-module:export_CastleAllianceMemberScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
