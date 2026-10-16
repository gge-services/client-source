Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_C2SAddBookmark = require("gge-module:export_C2SAddBookmark");
var __dep_export_C2SChangeBookmark = require("gge-module:export_C2SChangeBookmark");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBookmarkHelper = require("gge-module:export_CastleBookmarkHelper");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleWorldmapBookmarkSetDialog() {
    var __s3local0 = this;
    __s3local0._isInRenameMode = false;
    __s3local0._playerBookmarkEditMode = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleWorldmapBookmarkSetDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapBookmarkSetDialog, __s1param0);
  CastleWorldmapBookmarkSetDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_edit]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_personal_bookmark, this.dialogDisp.btn_tab_alliance_bookmark]);
    this._subLayer = new Map();
    this._subLayer.set(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK, new __dep_export_CreatePersonalBookmarkSublayer.CreatePersonalBookmarkSublayer(this.dialogDisp.cat_personal));
    this._subLayer.set(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK, new __dep_export_CreateAllianceBookmarkSublayer.CreateAllianceBookmarkSublayer(this.dialogDisp.cat_alliance, this.bindFunction(this.checkButtonSubmitState)));
    this._itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_name.maxChars = __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    this._itxt_name.keyDown.add(this.bindFunction(this.onKeDownOnNameTextfield));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleWorldmapBookmarkSetDialog.prototype.checkButtonSubmitState = function () {
    var __s7local0 = this._currentBookmarkVO.type != __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER || this._currentBookmarkVO.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && this._currentBookmarkVO.attackOrderDetails.assignedAttackers.length > 0;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, __s7local0);
  };
  CastleWorldmapBookmarkSetDialog.prototype.setTabToolTips = function () {
    var __s9local0;
    var __s9local1;
    __s9local0 = __dep_export_CastleModel.CastleModel.userData.isInAlliance ? __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForAlliance(this.dialogProperties.worldMapObjectVO) ? __dep_export_CastleModel.CastleModel.bookmarkData.isAllianceListFull ? "Bookmarks_addBookmark_allianceTab_limitReached_tooltip" : "Bookmarks_addBookmark_allianceTab_tooltip" : "Bookmarks_addBookmark_allianceTab_noBookmark_tooltip" : "Bookmarks_addBookmark_allianceTab_noAlliance_tooltip";
    __s9local1 = __dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull ? "Bookmarks_addBookmark_playerTab_limitReached_tooltip" : "Bookmarks_addBookmark_playerTab_tooltip";
    this.dialogDisp.btn_tab_personal_bookmark.toolTipText = __s9local1;
    this.dialogDisp.btn_tab_alliance_bookmark.toolTipText = __s9local0;
  };
  CastleWorldmapBookmarkSetDialog.prototype.showLoaded = function (__s11param0 = null) {
    this.selectBookmarks();
    this.updateTexts();
    this.setTabToolTips();
    this.showFirstSublayer();
    this.updateCastleAndName();
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_personal_bookmark, this.playerCanCreatePersonalBookmark());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_alliance_bookmark, this.playerCanCreateAllianceBookmark());
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._tempPlayerBookmarkName = null;
    this._tempAllianceBookmarkName = null;
  };
  CastleWorldmapBookmarkSetDialog.prototype.updateTexts = function () {
    var __s13local0;
    var __s13local1;
    if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK) {
      __s13local0 = this._playerBookmarkEditMode ? "Bookmarks_editBookmark_header" : "ringmenu_markLocation";
      __s13local1 = this._playerBookmarkEditMode ? "Bookmarks_editBookmark_copy" : "Bookmarks_addBookmark_copy";
    } else {
      __s13local0 = "ringmenu_markLocation_alliance";
      __s13local1 = "Bookmarks_addBookmark_alliance_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s13local0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s13local1));
  };
  CastleWorldmapBookmarkSetDialog.prototype.selectBookmarks = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.bookmarkData.getBookmarksForWMO(this.dialogProperties.worldMapObjectVO);
    this._playerBookmarkVO = this.getPlayerBookmarkVO(__s17local0);
    this._playerBookmarkEditMode = this._playerBookmarkVO != null;
    if (this._playerBookmarkVO == null) {
      this._playerBookmarkVO = __dep_export_CastleBookmarkData.CastleBookmarkData.createBookmarkFromWorldmapObjectVO(this.dialogProperties.worldMapObjectVO);
      this._newPlayerBookmarkVO = this._playerBookmarkVO.clone();
      this._newPlayerBookmarkVO.name = this._playerBookmarkVO.worldmapObjectVO.areaNameString;
    } else {
      this._newPlayerBookmarkVO = this._playerBookmarkVO.clone();
    }
    this._allianceBookmarkVO = this._playerBookmarkVO.clone();
    this._allianceBookmarkVO.name = this._playerBookmarkVO.worldmapObjectVO.areaNameString;
  };
  CastleWorldmapBookmarkSetDialog.prototype.onBookmarkListChanged = function (__s21param0) {
    this.selectBookmarks();
  };
  CastleWorldmapBookmarkSetDialog.prototype.getPlayerBookmarkVO = function (__s23param0) {
    if (__s23param0 != null) {
      for (var __s23local0 = 0, __s23local1 = __s23param0; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined && __s23local2.isPlayerBookmark) {
          return __s23local2;
        }
      }
    }
    return null;
  };
  CastleWorldmapBookmarkSetDialog.prototype.showFirstSublayer = function () {
    if (this.dialogProperties.tabToOpen == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK) {
      this._currentBookmarkVO = this._allianceBookmarkVO;
      this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
    } else {
      this._currentBookmarkVO = this._newPlayerBookmarkVO;
      this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.playerCanCreateAllianceBookmark = function () {
    return __dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleBookmarkData.CastleBookmarkData.isBookmarkableForAlliance(this.dialogProperties.worldMapObjectVO) && !__dep_export_CastleModel.CastleModel.bookmarkData.isAllianceListFull;
  };
  CastleWorldmapBookmarkSetDialog.prototype.playerCanCreatePersonalBookmark = function () {
    return !__dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull && __dep_export_CastleBookmarkData.CastleBookmarkData.isBookmarkableForPlayer(this.dialogProperties.worldMapObjectVO);
  };
  CastleWorldmapBookmarkSetDialog.prototype.saveSwitchRenameMode = function (__s37param0) {
    if (__s37param0 || this.isNameValid) {
      this.switchRenameMode(__s37param0);
      return true;
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("Bookmarks_addBookmark_shortName_text")));
      return false;
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.switchRenameMode = function (__s41param0) {
    this._isInRenameMode = __s41param0;
    this.dialogDisp.mc_textBackground.gotoAndStop(this._isInRenameMode ? 2 : 1);
    this.dialogDisp.btn_edit.gotoAndStop(this._isInRenameMode ? 2 : 1);
    this._itxt_name.selectable = this._isInRenameMode;
    this._itxt_name.tabEnabled = this._isInRenameMode;
    this._itxt_name.mouseEnabled = this._isInRenameMode;
    if (this._isInRenameMode) {
      this._itxt_name.setFocus();
      this._itxt_name.setSelection(0, this._itxt_name.text.length);
      this.dialogDisp.btn_edit.toolTipText = "Bookmarks_addBookmark_confirm_tooltip";
    } else {
      if (this._itxt_name.text != this._currentBookmarkVO.name) {
        if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK) {
          this._tempPlayerBookmarkName = this._itxt_name.text;
        } else if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK) {
          this._tempAllianceBookmarkName = this._itxt_name.text;
        }
      }
      document.activeElement.blur();
      this.dialogDisp.btn_edit.toolTipText = "Bookmarks_addBookmark_changeName_tooltip";
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.updateCastleAndName = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_coordinates, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleBookmarkData.CastleBookmarkData.getCoordinateString(this._currentBookmarkVO)));
    this._itxt_name.textContentVO.stringValue = this._currentBookmarkVO.name;
    this.switchRenameMode(false);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
    if (this._currentBookmarkVO.worldmapObjectVO) {
      var __s48local0 = this.dialogDisp.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this._currentBookmarkVO.worldmapObjectVO, new __s0local0(80, 50), true, true, false));
      this.dialogDisp.mc_castleHolder.addChild(__s48local0);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkSetDialog.prototype, "isNameValid", {
    get: function () {
      return !!this._itxt_name.text && this._itxt_name.text.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkSetDialog.prototype.onClick = function (__s53param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      __s1param0.prototype.onClick.call(this, __s53param0);
      if (this._isInRenameMode && __s53param0.target != this.dialogDisp.txt_name && __s53param0.target != this.dialogDisp.btn_edit && __s53param0.target != this.dialogDisp.btn_close) {
        this.saveSwitchRenameMode(!this._isInRenameMode);
      }
      switch (__s53param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onSubmitButtonClicked();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_edit:
          this.saveSwitchRenameMode(!this._isInRenameMode);
          break;
        case this.dialogDisp.btn_tab_personal_bookmark:
          this._currentBookmarkVO = this._newPlayerBookmarkVO;
          this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
          break;
        case this.dialogDisp.btn_tab_alliance_bookmark:
          this._currentBookmarkVO = this._allianceBookmarkVO;
          this.changeCategory(CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.onSubmitButtonClicked = function () {
    if (this.saveSwitchRenameMode(false)) {
      this._currentBookmarkVO.name = this._itxt_name.text;
      if (this._currentBookmarkVO.isPlayerBookmark && this._playerBookmarkEditMode) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangeBookmark.C2SChangeBookmark(this._currentBookmarkVO));
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAddBookmark.C2SAddBookmark(this._currentBookmarkVO));
      }
      this.hide();
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.changeCategory = function (__s63param0) {
    if (this._currentCategory != __s63param0) {
      __s1param0.prototype.changeCategory.call(this, __s63param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this._currentBookmarkVO]);
      if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK && this._tempPlayerBookmarkName) {
        this._itxt_name.textContentVO.stringValue = this._tempPlayerBookmarkName;
      } else if (this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK && this._tempAllianceBookmarkName) {
        this._itxt_name.textContentVO.stringValue = this._tempAllianceBookmarkName;
      } else {
        this._itxt_name.textContentVO.stringValue = this._currentBookmarkVO.name;
      }
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_personal_bookmark, this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_alliance_bookmark, this._currentCategory == CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      this.updateTexts();
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.onKeDownOnNameTextfield = function (__s69param0) {
    __s69param0.stopPropagation();
    if (__s69param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      this.saveSwitchRenameMode(!this._isInRenameMode);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkSetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkSetDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.bookmarkData.addEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.controller.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, this.bindFunction(this.onTargetRemoved));
  };
  CastleWorldmapBookmarkSetDialog.prototype.onTargetRemoved = function (__s76param0) {
    var __s76local0 = __s76param0.params;
    if (__s76local0 != null) {
      for (var __s76local1 = 0, __s76local2 = __s76local0; __s76local1 < __s76local2.length; __s76local1++) {
        var __s76local3 = __s76local2[__s76local1];
        if (__s76local3 !== undefined && __s76local3[0] == this.dialogProperties.worldMapObjectVO.absAreaPosX && __s76local3[1] == this.dialogProperties.worldMapObjectVO.absAreaPosY) {
          this.hide();
          break;
        }
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.bookmarkData.removeEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.controller.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, this.bindFunction(this.onTargetRemoved));
  };
  CastleWorldmapBookmarkSetDialog.prototype.onEventRemoved = function (__s84param0) {
    if (__dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(__dep_export_ClientConstEvent.ClientConstEvent.EVENT_TO_AREA_TYPE, __s84param0.specialEventVO.eventId)) {
      var __s84local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstEvent.ClientConstEvent.EVENT_TO_AREA_TYPE.get(__s84param0.specialEventVO.eventId));
      var __s84local1 = this.dialogProperties.worldMapObjectVO;
      if (__s84local1 && __s84local1.areaType == __s84local0) {
        this.hide();
      }
    }
  };
  CastleWorldmapBookmarkSetDialog.__initialize_static_members = function () {
    CastleWorldmapBookmarkSetDialog.NAME = "CastleWorldmapBookmarkSet";
    CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK = "personal";
    CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK = "alliance";
    CastleWorldmapBookmarkSetDialog.BOSS_DUNGEON_ICON_SCALE = 0.8;
    CastleWorldmapBookmarkSetDialog.EILAND_ICON_SCALE = 1;
  };
  return CastleWorldmapBookmarkSetDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CastleWorldmapBookmarkSetDialog = __s0local1;
var __dep_export_CastleBookmarkData = require("gge-module:export_CastleBookmarkData");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CreateAllianceBookmarkSublayer = require("gge-module:export_CreateAllianceBookmarkSublayer");
var __dep_export_CreatePersonalBookmarkSublayer = require("gge-module:export_CreatePersonalBookmarkSublayer");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
