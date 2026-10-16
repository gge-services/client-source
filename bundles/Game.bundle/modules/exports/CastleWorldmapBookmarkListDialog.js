Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetBookmarkList = require("gge-module:export_C2SGetBookmarkList");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleWorldmapBookmarkListDialog() {
    var __s3local0 = this;
    __s3local0._itemRenderer = [];
    __s3local0._currentFilter = CastleWorldmapBookmarkListDialog.FILTER_ALL;
    __s3local0._currentScrollIndex = 0;
    __s3local0._filteredList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleWorldmapBookmarkListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapBookmarkListDialog, __s1param0);
  CastleWorldmapBookmarkListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_scrollUp, this.dialogDisp.btn_scrollDown, this.dialogDisp.btn_tabAll, this.dialogDisp.btn_tabFriend, this.dialogDisp.btn_tabEnemy, this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this._itemRenderer = [];
    for (var __s5local0 = 0; __s5local0 < CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT; ++__s5local0) {
      this._itemRenderer.push(new __dep_export_CastleWorldmapBookmarkListDialogItem.CastleWorldmapBookmarkListDialogItem(this.dialogDisp["mc_item" + __s5local0]));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_markedLocations_tooltip"));
    this.dialogDisp.btn_tabAll.toolTipText = "Bookmarks_Menu_allBookmarks_tooltip";
    this.dialogDisp.btn_tabFriend.toolTipText = "Bookmarks_Menu_friendlyBookmarks_tooltip";
    this.dialogDisp.btn_tabEnemy.toolTipText = "Bookmarks_Menu_enemyBookmarks_tooltip";
    this.dialogDisp.btn_tabAll.mc_icon.gotoAndStop(1);
    this.dialogDisp.btn_tabFriend.mc_icon.gotoAndStop(2);
    this.dialogDisp.btn_tabEnemy.mc_icon.gotoAndStop(3);
  };
  CastleWorldmapBookmarkListDialog.prototype.showLoaded = function (__s9param0 = null) {
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    __dep_export_CastleModel.CastleModel.bookmarkData.addEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.updateData();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetBookmarkList.C2SGetBookmarkList());
  };
  CastleWorldmapBookmarkListDialog.prototype.hideLoaded = function (__s13param0 = null) {
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    __dep_export_CastleModel.CastleModel.bookmarkData.removeEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
  };
  CastleWorldmapBookmarkListDialog.prototype.validateScrollIndex = function () {
    this._currentScrollIndex = __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(this._filteredList.length - CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT, this._currentScrollIndex)));
  };
  CastleWorldmapBookmarkListDialog.prototype.getListByFilter = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.bookmarkData.worldmapBookmarks;
    (__s17local0 = __s17local0.filter(this.bindFunction(this.isBookmarkInFilter))).sort(__dep_export_ClientConstSort.ClientConstSort.sortByBookmarks);
    return __s17local0;
  };
  CastleWorldmapBookmarkListDialog.prototype.isBookmarkInFilter = function (__s19param0) {
    var __s19local0 = [];
    for (var __s19local1 = 1; __s19local1 < arguments.length; __s19local1++) {
      __s19local0[__s19local1 - 1] = arguments[__s19local1];
    }
    return this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_ALL && __s19param0.isPlayerBookmark || this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_FRIEND && __s19param0.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND || this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_ENEMY && __s19param0.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY;
  };
  CastleWorldmapBookmarkListDialog.prototype.changeFilter = function (__s23param0) {
    if (this._currentFilter != __s23param0) {
      this._currentFilter = __s23param0;
      this._currentScrollIndex = 0;
      this.updateData();
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.scrollUp = function () {
    this._currentScrollIndex -= CastleWorldmapBookmarkListDialog.SCROLL_DELTA;
    this.validateScrollIndex();
    this.updateItems();
  };
  CastleWorldmapBookmarkListDialog.prototype.scrollDown = function () {
    this._currentScrollIndex += CastleWorldmapBookmarkListDialog.SCROLL_DELTA;
    this.validateScrollIndex();
    this.updateItems();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateFilteredList = function () {
    this._filteredList = this.getListByFilter();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateDialog = function () {
    this.updateFilteredList();
    this.updateTabs();
    this.updateCount();
    this.updateItems();
    this.updateEmptyText();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateCount = function () {
    var __s34local0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_count.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("numbersXY", [__dep_export_CastleModel.CastleModel.bookmarkData.numPlayerBookmarks, __dep_exact_26a421b704832cff.PlayerConst.BOOKMARKS_MAX_ENTRYS]));
    if (__dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull) {
      __s34local0.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
      this.dialogDisp.mc_count.toolTipText = "Bookmarks_Menu_counterLimit_tooltip";
    } else {
      __s34local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.dialogDisp.mc_count.toolTipText = "Bookmarks_Menu_counter_tooltip";
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.updateEmptyText = function () {
    var __s38local0 = "";
    if (this._filteredList.length <= 0) {
      switch (this._currentFilter) {
        case CastleWorldmapBookmarkListDialog.FILTER_ALL:
          __s38local0 = "Bookmarks_Menu_copy";
          break;
        case CastleWorldmapBookmarkListDialog.FILTER_FRIEND:
          __s38local0 = "Bookmarks_Menu_copy_noFriendly";
          break;
        case CastleWorldmapBookmarkListDialog.FILTER_ENEMY:
          __s38local0 = "Bookmarks_Menu_copy_noEnemy";
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptyText.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s38local0));
  };
  CastleWorldmapBookmarkListDialog.prototype.updateItems = function () {
    this.validateScrollIndex();
    for (var __s42local0 = 0; __s42local0 < CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT; ++__s42local0) {
      var __s42local1 = this._currentScrollIndex + __s42local0;
      if (__s42local1 < this._filteredList.length) {
        this._itemRenderer[__s42local0].bookmarkVO = this._filteredList[__s42local1];
        this._itemRenderer[__s42local0].show();
      } else {
        this._itemRenderer[__s42local0].bookmarkVO = null;
        this._itemRenderer[__s42local0].hide();
      }
    }
    this.updateScrollButtons();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateScrollButtons = function () {
    var __s48local0 = this._filteredList.length > CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT;
    this.dialogDisp.btn_scrollUp.visible = __s48local0;
    this.dialogDisp.btn_scrollDown.visible = __s48local0;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_scrollUp, this._currentScrollIndex > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_scrollDown, this._filteredList.length - CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT - this._currentScrollIndex > 0);
  };
  CastleWorldmapBookmarkListDialog.prototype.updateTabs = function () {
    var __s50local0 = __dep_export_CastleModel.CastleModel.bookmarkData.worldmapBookmarks.length <= 0;
    this._currentFilter = __dep_exact_f855840627e6e145.int(__s50local0 ? CastleWorldmapBookmarkListDialog.FILTER_ALL : this._currentFilter);
    for (var __s50local1 = 0; __s50local1 < CastleWorldmapBookmarkListDialog.NUMBER_OF_FILTERS; ++__s50local1) {
      this.markTabAsSelected(__s50local1, this._currentFilter == __s50local1);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tabFriend, !__s50local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tabEnemy, !__s50local0);
  };
  CastleWorldmapBookmarkListDialog.prototype.markTabAsSelected = function (__s54param0, __s54param1) {
    var __s54local0;
    switch (__s54param0) {
      case CastleWorldmapBookmarkListDialog.FILTER_ALL:
        __s54local0 = this.dialogDisp.btn_tabAll;
        break;
      case CastleWorldmapBookmarkListDialog.FILTER_FRIEND:
        __s54local0 = this.dialogDisp.btn_tabFriend;
        break;
      case CastleWorldmapBookmarkListDialog.FILTER_ENEMY:
        __s54local0 = this.dialogDisp.btn_tabEnemy;
    }
    if (__s54local0) {
      var __s54local1 = __s54local0.mc_icon.currentFrame + 1;
      __s54local0.gotoAndStop(__s54param1 ? 2 : 1);
      if (__s54param1) {
        __s54local0._2.gotoAndStop(__s54local1);
      } else {
        __s54local0.mc_icon.gotoAndStop(__s54local1);
      }
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onClick = function (__s60param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s60param0.target)) {
      __s1param0.prototype.onClick.call(this, __s60param0);
      switch (__s60param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_BookmarksMenu_copy"));
          break;
        case this.dialogDisp.btn_scrollUp:
          this.scrollUp();
          break;
        case this.dialogDisp.btn_scrollDown:
          this.scrollDown();
          break;
        case this.dialogDisp.btn_tabAll:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_ALL);
          break;
        case this.dialogDisp.btn_tabFriend:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_FRIEND);
          break;
        case this.dialogDisp.btn_tabEnemy:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_ENEMY);
      }
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onMouseWheel = function (__s64param0) {
    if (__s64param0.delta < 0) {
      this.scrollUp();
    } else if (__s64param0.delta > 0) {
      this.scrollDown();
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onDataUpdated = function (__s68param0) {
    this.updateDialog();
  };
  CastleWorldmapBookmarkListDialog.__initialize_static_members = function () {
    CastleWorldmapBookmarkListDialog.NAME = "CastleWorldmapBookmarkList";
    CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT = 3;
    CastleWorldmapBookmarkListDialog.NUMBER_OF_FILTERS = 3;
    CastleWorldmapBookmarkListDialog.SCROLL_DELTA = 1;
    CastleWorldmapBookmarkListDialog.FILTER_ALL = 0;
    CastleWorldmapBookmarkListDialog.FILTER_FRIEND = 1;
    CastleWorldmapBookmarkListDialog.FILTER_ENEMY = 2;
  };
  return CastleWorldmapBookmarkListDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleWorldmapBookmarkListDialog = __s0local1;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWorldmapBookmarkListDialogItem = require("gge-module:export_CastleWorldmapBookmarkListDialogItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
