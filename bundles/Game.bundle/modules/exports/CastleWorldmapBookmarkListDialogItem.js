Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleWorldmapBookmarkListDialogItem(__s3param0) {
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_jumpTo);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_remove);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_edit);
    this._disp.btn_jumpTo.mouseChildren = false;
    this.textFieldManager.registerTextField(this._disp.btn_jumpTo.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_Menu_jumpTo_copy"));
    this._disp.btn_remove.toolTipText = "Bookmarks_Menu_eraseBookmark_tooltip";
    this._disp.btn_jumpTo.toolTipText = "Bookmarks_Menu_jumpTo_tooltip";
    this._disp.btn_edit.toolTipText = "Bookmarks_Menu_changeName_tooltip";
  }
  CastleWorldmapBookmarkListDialogItem.prototype.show = function () {
    this.removeListener();
    this.addListener();
    this.setVisibility(true);
    this.updateItem();
  };
  CastleWorldmapBookmarkListDialogItem.prototype.hide = function () {
    this.removeListener();
    this.setVisibility(false);
  };
  CastleWorldmapBookmarkListDialogItem.prototype.addListener = function () {
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleWorldmapBookmarkListDialogItem.prototype.removeListener = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleWorldmapBookmarkListDialogItem.prototype.updateItem = function () {
    if (this._bookmarkVO) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._disp.mc_castleHolder);
      if (this._bookmarkVO.worldmapObjectVO) {
        var __s13local0 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this._bookmarkVO.worldmapObjectVO, CastleWorldmapBookmarkListDialogItem.WMO_ICON_SIZE, true, false, false);
        this._disp.mc_castleHolder.addChild(__s13local0);
      }
      this.textFieldManager.registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_1.TextValide.parseChatJSONMessage(this._bookmarkVO.name)));
      this._disp.mc_background.gotoAndStop(this._bookmarkVO.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND ? 1 : 2);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_jumpTo, __dep_export_CastleModel.CastleModel.kingdomData.canPlayerGoToKingdom(this._bookmarkVO.kingdomId));
      this._disp.btn_jumpTo.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_jumpTo) ? null : "not_unlocked";
    }
  };
  CastleWorldmapBookmarkListDialogItem.prototype.setVisibility = function (__s17param0) {
    this._disp.visible = __s17param0;
  };
  CastleWorldmapBookmarkListDialogItem.prototype.onClick = function (__s19param0) {
    if (this._bookmarkVO && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      switch (__s19param0.target) {
        case this._disp.btn_jumpTo:
          this.onJumpToButtonClicked();
          break;
        case this._disp.btn_edit:
          CastleWorldmapBookmarkListDialogItem.dialogHandler.registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this._bookmarkVO.worldmapObjectVO));
          break;
        case this._disp.btn_remove:
          __dep_export_CastleModel.CastleModel.bookmarkData.deleteBookmark(this._bookmarkVO);
      }
    }
  };
  CastleWorldmapBookmarkListDialogItem.prototype.onJumpToButtonClicked = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
    if (this._bookmarkVO.worldmapObjectVO != null) {
      __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this._bookmarkVO.worldmapObjectVO);
    } else {
      __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this._bookmarkVO.kingdomId, this._bookmarkVO.posX, this._bookmarkVO.posY]);
    }
  };
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "bookmarkVO", {
    set: function (__s27param0) {
      this._bookmarkVO = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkListDialogItem, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapBookmarkListDialogItem.__initialize_static_members = function () {
    CastleWorldmapBookmarkListDialogItem.WMO_ICON_SIZE = new __s0local1(72, 48);
  };
  return CastleWorldmapBookmarkListDialogItem;
}();
exports.CastleWorldmapBookmarkListDialogItem = __s0local2;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
__s0local2.__initialize_static_members();
