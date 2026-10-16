Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleEilandTextComposer = require("gge-module:export_CastleEilandTextComposer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleEilandAssignTitleDialogProperties = require("gge-module:export_CastleEilandAssignTitleDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleEilandTitleItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleItem, __s1param0);
  CastleEilandTitleItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleEilandTitleItem.prototype.customFillItem = function () {
    this._disp.btn_assignTitle.visible = this.titleItemVO.canAssignTitles;
    var __s7local0 = this.titleItemVO.canAssignTitles && !(this.titleVO.assignmentCooldown > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_assignTitle, __s7local0);
    var __s7local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getLongEventTimeString(this.titleVO.assignmentCooldown);
    this._disp.btn_assignTitle.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_assignTitle) ? "dialog_eiland_titleMenu_title_give" : {
      t: "dialog_eiland_titleMenu_title_wait",
      p: [__s7local1]
    };
    this._disp.btn_revokeTitle.visible = this.titleItemVO.canAssignTitles && this.titleVO.isAssigned;
    this._disp.btn_revokeTitle.toolTipText = "dialog_eiland_titleMenu_title_take";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_revokeTitle, this.titleItemVO.canAssignTitles && this.titleVO.isAssigned);
    this.textFieldManager.registerTextField(this._disp.txt_titleName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.titleVO.textID));
    if (this.titleVO.isAssigned) {
      this.textFieldManager.registerTextField(this._disp.txt_playerName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.titleVO.currentAssignee));
    } else {
      this.textFieldManager.registerTextField(this._disp.txt_playerName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMenu_title_unassigned"));
    }
    this.textFieldManager.registerTextField(this._disp.txt_description, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleEilandTextComposer.CastleEilandTextComposer.generateBonusText(this.titleVO)));
    this.disp.txt_playerName.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverName));
    this.disp.txt_playerName.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOutName));
  };
  CastleEilandTitleItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.disp.txt_playerName.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverName));
    this.disp.txt_playerName.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOutName));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleEilandTitleItem.prototype.onTimerUpdate = function (__s13param0) {
    if (!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.disp.btn_assignTitle) && this.titleVO.assignmentCooldown <= 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_assignTitle, true);
    }
    this.updateTooltip();
  };
  CastleEilandTitleItem.prototype.onMouseClick = function (__s16param0) {
    __s1param0.prototype.onMouseClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      if (__s16param0.target == this.disp.btn_revokeTitle || __s16param0.target == this.disp.btn_assignTitle) {
        var __s16local0 = __s16param0.target == this.disp.btn_revokeTitle;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandAssignTitleDialog.CastleEilandAssignTitleDialog, new __dep_export_CastleEilandAssignTitleDialogProperties.CastleEilandAssignTitleDialogProperties(this.titleVO, __s16local0));
      } else if (this.titleVO.isAssigned && __s16param0.target == this.disp.txt_playerName) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.titleVO.currentAssigneePID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleEilandTitleItem.prototype.updateTooltip = function () {
    var __s21local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getLongEventTimeString(this.titleVO.assignmentCooldown);
    this._disp.btn_revokeTitle.toolTipText = "dialog_eiland_titleMenu_title_take";
    this._disp.btn_assignTitle.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_assignTitle) ? "dialog_eiland_titleMenu_title_give" : {
      t: "dialog_eiland_titleMenu_title_wait",
      p: [__s21local0]
    };
  };
  CastleEilandTitleItem.prototype.onMouseOverName = function (__s23param0) {
    if (this.titleVO.isAssigned) {
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleEilandTitleItem.prototype.onMouseOutName = function (__s26param0) {
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleEilandTitleItem.prototype, "titleVO", {
    get: function () {
      return this.titleItemVO.titleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "titleItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandTitleItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleEilandTitleItem = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleEilandAssignTitleDialog = require("gge-module:export_CastleEilandAssignTitleDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
