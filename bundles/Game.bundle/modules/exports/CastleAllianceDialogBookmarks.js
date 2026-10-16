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
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleAllianceBookmarkScrollItemVO = require("gge-module:export_CastleAllianceBookmarkScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogBookmarks(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_emptyText.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_Menu_copy"));
    __s3local0.initButtons();
    __s3local0.initScrollList();
    __s3local0.setTooltips();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogBookmarks, __s1param0);
  CastleAllianceDialogBookmarks.prototype.setDefaultFilters = function () {
    this.activeFilters = [__dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER];
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
    this.subLayerDisp.mc_filterDefend.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
  };
  CastleAllianceDialogBookmarks.prototype.initScrollList = function () {
    this.scrollList = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.subLayerDisp);
    this.scrollList.scrollItemClass = __dep_export_CastleAllianceBookmarkScrollItem.CastleAllianceBookmarkScrollItem;
    this.scrollList.hideButtons = true;
  };
  CastleAllianceDialogBookmarks.prototype.initButtons = function () {
    var __s9local0 = [this.subLayerDisp.btn_up, this.subLayerDisp.btn_down];
    var __s9local1 = 0;
    for (var __s9local2 = this.subLayerDisp["item" + __s9local1]; __s9local2 != null;) {
      __s9local0.push(__s9local2.btn_jumpTo, __s9local2.btn_delete);
      __s9local1++;
      __s9local2 = this.subLayerDisp["item" + __s9local1];
    }
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons(__s9local0);
  };
  CastleAllianceDialogBookmarks.prototype.setTooltips = function () {
    this.subLayerDisp.mc_counter.toolTipText = "dialog_alliance_bookmarks_counter_tooltip";
    this.subLayerDisp.mc_counter.mouseChildren = false;
    this.subLayerDisp.mc_filterFreeAttacks.mc_icon.toolTipText = "dialog_alliance_bookmarks_freeTarget_tooltip";
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.toolTipText = "dialog_alliance_bookmarks_freeTarget_active_tooltip";
    this.subLayerDisp.mc_filterDefend.mc_icon.toolTipText = "dialog_alliance_bookmarks_supportTarget_tooltip";
    this.subLayerDisp.mc_filterDefend.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterDefend.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterDefend.cb_filter.toolTipText = "dialog_alliance_bookmarks_supportTarget_active_tooltip";
    this.subLayerDisp.mc_filterAttackOrder.mc_icon.toolTipText = "dialog_alliance_bookmarks_plannedTarget_tooltip";
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.toolTipText = "dialog_alliance_bookmarks_plannedTarget_active_tooltip";
  };
  CastleAllianceDialogBookmarks.prototype.show = function (__s15param0) {
    __s1param0.prototype.show.call(this, __s15param0);
    __dep_export_CastleModel.CastleModel.bookmarkData.addEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.setDefaultFilters();
    this.update();
  };
  CastleAllianceDialogBookmarks.prototype.update = function () {
    var __s17local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.bookmarkData.allianceBookmarks.length);
    var __s17local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.bookmarkData.maxAllianceBookmarks);
    var __s17local2 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_counter.txt_numBookmarks, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s17local0, __s17local1]));
    if (__s17local0 >= __s17local1) {
      __s17local2.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
      this.subLayerDisp.mc_counter.toolTipText = "Bookmarks_Menu_counterLimit_tooltip";
    } else {
      __s17local2.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.subLayerDisp.mc_counter.toolTipText = "dialog_alliance_bookmarks_counter_tooltip";
    }
    this.updateList();
  };
  CastleAllianceDialogBookmarks.prototype.updateList = function () {
    this.scrollList.clear();
    var __s21local0 = __dep_export_CastleModel.CastleModel.bookmarkData.getFilteredBookmarks(this.activeFilters);
    this.subLayerDisp.mc_emptyText.visible = __dep_export_CastleModel.CastleModel.bookmarkData.allianceBookmarks.length == 0;
    if (__s21local0 != null) {
      for (var __s21local1 = 0, __s21local2 = __s21local0; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined) {
          this.scrollList.pushContent(new __dep_export_CastleAllianceBookmarkScrollItemVO.CastleAllianceBookmarkScrollItemVO(__s21local3));
        }
      }
    }
    this.scrollList.initList(0);
  };
  CastleAllianceDialogBookmarks.prototype.onBookmarkListChanged = function (__s27param0) {
    this.update();
  };
  CastleAllianceDialogBookmarks.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.bookmarkData.removeEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
  };
  CastleAllianceDialogBookmarks.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      switch (__s31param0.target) {
        case this.subLayerDisp.mc_filterFreeAttacks.cb_filter:
          this.onCheckBoxClick(__s31param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK, "dialog_alliance_bookmarks_freeTarget");
          break;
        case this.subLayerDisp.mc_filterDefend.cb_filter:
          this.onCheckBoxClick(__s31param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND, "dialog_alliance_bookmarks_supportTarget");
          break;
        case this.subLayerDisp.mc_filterAttackOrder.cb_filter:
          this.onCheckBoxClick(__s31param0.target, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER, "dialog_alliance_bookmarks_plannedTarget");
      }
    }
  };
  CastleAllianceDialogBookmarks.prototype.onCheckBoxClick = function (__s35param0, __s35param1, __s35param2) {
    var __s35local0;
    var __s35local1 = __dep_exact_f855840627e6e145.int(this.activeFilters.indexOf(__s35param1));
    if (__s35local1 == -1) {
      this.activeFilters.push(__s35param1);
      __s35param0.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
      __s35local0 = "_active";
    } else {
      this.activeFilters.splice(__s35local1, 1);
      __s35param0.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_NOT_CHECKED);
      __s35local0 = "_inactive";
    }
    __s35param0.toolTipText = __s35param2 + __s35local0 + "_tooltip";
    this.updateList();
  };
  CastleAllianceDialogBookmarks.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_alliance_bookmarks"));
  };
  CastleAllianceDialogBookmarks.__initialize_static_members = function () {
    CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_NOT_CHECKED = 1;
    CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED = 2;
  };
  return CastleAllianceDialogBookmarks;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogBookmarks = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceBookmarkScrollItem = require("gge-module:export_CastleAllianceBookmarkScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
