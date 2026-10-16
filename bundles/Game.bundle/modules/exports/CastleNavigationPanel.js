Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleEilandPanel = require("gge-module:export_CastleEilandPanel");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleNavigationPanel() {
    return __s1param0.call(this, new Library.CastleInterfaceElements.NavigationPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNavigationPanel, __s1param0);
  CastleNavigationPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.navigationPanel.mc_block1);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.navigationPanel.mc_block2);
    new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.navigationPanel.mc_block3);
    this.iinputx = this.textFieldManager.registerTextField(this.navigationPanel.input_x, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.iinputx.autoFitToBounds = true;
    this.iinputy = this.textFieldManager.registerTextField(this.navigationPanel.input_y, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.iinputy.autoFitToBounds = true;
    this.icastlename = this.textFieldManager.registerTextField(this.navigationPanel.input_castleName, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("panel_navigation_playername")));
    this.icastlename.autoFitToBounds = true;
    this.icastlename.focusIn.add(this.bindFunction(this.onFocusIn));
    this.icastlename.focusOut.add(this.bindFunction(this.onFocusOut));
    this.iinputx.tabIndex = 150;
    this.iinputy.tabIndex = 151;
    this.icastlename.tabIndex = 152;
    this.iinputx.restrict = "0-9";
    this.iinputy.restrict = "0-9";
    this.eilandPanel = new __dep_export_CastleEilandPanel.CastleEilandPanel(this.navigationPanel.mc_islandPanel, this);
    this.updateButtons();
  };
  CastleNavigationPanel.prototype.addEventListener = function () {
    this.iinputx.keyUp.add(this.bindFunction(this.onKeyUpXY));
    this.iinputy.keyUp.add(this.bindFunction(this.onKeyUpXY));
    this.icastlename.keyUp.add(this.bindFunction(this.onKeyUpName));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this.bindFunction(this.updateFactionBar));
    this.iinputx.focusOut.add(this.bindFunction(this.onFocusOutXY));
    this.iinputy.focusOut.add(this.bindFunction(this.onFocusOutXY));
  };
  CastleNavigationPanel.prototype.removeEventListener = function () {
    this.iinputx.keyUp.remove(this.bindFunction(this.onKeyUpXY));
    this.iinputy.keyUp.remove(this.bindFunction(this.onKeyUpXY));
    this.icastlename.keyUp.remove(this.bindFunction(this.onKeyUpName));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this.bindFunction(this.updateFactionBar));
    this.eilandPanel.removeListeners();
    this.iinputx.focusOut.remove(this.bindFunction(this.onFocusOutXY));
    this.iinputy.focusOut.remove(this.bindFunction(this.onFocusOutXY));
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
  };
  CastleNavigationPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.addEventListener();
    this.resetInputText();
    this.updateFactionBar();
    this.updateButtons();
    this.eilandPanel.initIslandPanel();
    this.eilandPanel.panel.visible = this.eilandPanel.isAvailable();
    this.allowCaching = true;
  };
  CastleNavigationPanel.prototype.hide = function () {
    this.removeEventListener();
    __s1param0.prototype.hide.call(this);
  };
  CastleNavigationPanel.prototype.updateButtons = function () {
    var __s15local0 = !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    var __s15local1 = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.navigationPanel.btn_jumpTo, __s15local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.navigationPanel.btn_playerSearch, __s15local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.navigationPanel.btn_bookmarks, __s15local0);
    this.navigationPanel.btn_bookmarks.toolTipText = __s15local0 ? "Bookmarks_markedLocations_tooltip" : __s15local1;
    this.navigationPanel.btn_playerSearch.toolTipText = __s15local0 ? "panel_navigation_playername" : __s15local1;
    this.navigationPanel.btn_jumpTo.toolTipText = __s15local0 ? "dialog_jumpto_targetSelected" : __s15local1;
  };
  CastleNavigationPanel.prototype.onEnterFrame = function (__s17param0) {
    this.invalidatedCache = false;
    this.updateCache();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
  };
  CastleNavigationPanel.prototype.onKeyUpName = function (__s19param0) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      if (__s19param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
        document.activeElement.blur();
        this.onPlayerSearch();
      }
    }
  };
  CastleNavigationPanel.prototype.onKeyUpXY = function (__s23param0) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      if (__s23param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
        document.activeElement.blur();
        this.onJumpTo();
      }
    }
  };
  CastleNavigationPanel.prototype.onFocusOutXY = function (__s27param0) {
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.resetInputText = function () {
    this.iinputx.maxChars = 5;
    this.iinputy.maxChars = 5;
    this.icastlename.maxChars = __dep_exact_26a421b704832cff_2.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    this.iinputx.textContentVO.stringValue = "";
    this.iinputy.textContentVO.stringValue = "";
    this.icastlename.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("panel_navigation_playername");
  };
  CastleNavigationPanel.prototype.onFocusIn = function (__s31param0) {
    if (this.icastlename.text == __dep_exact_92d05af59ee2ff30.Localize.text("panel_navigation_playername")) {
      this.icastlename.clearText();
      this.icastlename.maxChars = __dep_exact_26a421b704832cff_2.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    }
    this.icastlename.setSelection(0, this.icastlename.text.length);
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.onFocusOut = function (__s34param0) {
    if (this.icastlename.text == "") {
      this.icastlename.maxChars = __dep_exact_26a421b704832cff_2.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
      this.icastlename.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("panel_navigation_playername");
    }
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.icastlename.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.icastlename.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  CastleNavigationPanel.prototype.onJumpTo = function () {
    if (this.checkInput(this.iinputx.text, this.iinputy.text)) {
      var __s39local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this.iinputx.text));
      var __s39local1 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this.iinputy.text));
      var __s39local2 = new __s0local1(__s39local0, __s39local1);
      if (__s39local0 < 0 || __s39local1 < 0 || __s39local0 >= __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH || __s39local1 >= __dep_export_ClientConstCastle.ClientConstCastle.WORLD_HEIGHT) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_noAvailableWorldmapPosition")));
        return;
      }
      this.layoutManager.worldmapScreen.camera.centerArea(__s39local2);
      var __s39local3 = __dep_exact_81dacdf05bd32292_1.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(__s39local0, __s39local1), "InteractiveMapobject");
      if (__s39local3) {
        __s39local3.showRingMenu();
      } else {
        var __s39local4 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s39local0, __s39local1), "InteractiveMapobjectVO");
        if (__s39local4 && __s39local4.ownerInfo && __s39local4.ownerInfo.playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
          this.layoutManager.worldmapScreen.delayOpenRingMenu(__s39local4);
        }
      }
    }
  };
  CastleNavigationPanel.prototype.onPlayerSearch = function () {
    if (this.icastlename.text != __dep_exact_92d05af59ee2ff30.Localize.text("panel_navigation_playername")) {
      __dep_export_CastleModel.CastleModel.worldmapData.searchPlayerByName(__dep_exact_9e901e8e2483a22f_1.TextValide.trimPassword(this.icastlename.text).replace(/&quot;/g, "\""));
    }
  };
  CastleNavigationPanel.prototype.onOpenBookmarks = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkListDialog.CastleWorldmapBookmarkListDialog);
  };
  CastleNavigationPanel.prototype.updateFactionBar = function (__s51param0 = null) {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && this.factionEventVO) {
      this.navigationPanel.mc_factionbar.visible = true;
      this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.scaleX = this.factionEventVO.percentRedFactionPoints * 0.01;
      this.navigationPanel.mc_factionbar.mc_mid.x = this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.x + this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.width;
      this.navigationPanel.mc_factionbar.mouseChildren = false;
      this.navigationPanel.mc_factionbar.toolTipText = {
        t: "faction_percentage_score",
        p: [this.factionEventVO.percentRedFactionPoints, this.factionEventVO.percentBlueFactionPoints]
      };
      if (__s51param0) {
        this.navigationPanel.updateCacheIfCached();
      }
    } else {
      this.navigationPanel.mc_factionbar.visible = false;
    }
  };
  CastleNavigationPanel.prototype.onClick = function (__s56param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s56param0.target)) {
      __s1param0.prototype.onClick.call(this, __s56param0);
      switch (__s56param0.target) {
        case this.navigationPanel.btn_jumpTo:
          this.onJumpTo();
          break;
        case this.navigationPanel.btn_playerSearch:
          this.onPlayerSearch();
          break;
        case this.navigationPanel.btn_bookmarks:
          this.onOpenBookmarks();
      }
    }
  };
  CastleNavigationPanel.prototype.checkInput = function (__s60param0, __s60param1) {
    return __s60param0 != "" && __s60param1 != "";
  };
  CastleNavigationPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth / 2;
    }
  };
  Object.defineProperty(CastleNavigationPanel.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNavigationPanel.prototype, "navigationPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleNavigationPanel.prototype.invalidateCache = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.invalidatedCache = true;
  };
  CastleNavigationPanel.NAME = "CastleNavigationPanel";
  return CastleNavigationPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleNavigationPanel = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleWorldmapBookmarkListDialog = require("gge-module:export_CastleWorldmapBookmarkListDialog");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
