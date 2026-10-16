Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapObjectHelper = require("gge-module:export_MapObjectHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleRerollAlienSuccessDialog() {
    return __s1param0.call(this, CastleRerollAlienSuccessDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienSuccessDialog, __s1param0);
  CastleRerollAlienSuccessDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_spy], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
  };
  CastleRerollAlienSuccessDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    if (this.isHardReroll) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_feedback_fortify_title")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_feedback_fortify_desc"));
      this.dialogDisp.mc_icon.gotoAndStop(2);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_feedback_exile_title")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_feedback_exile_desc"));
      this.dialogDisp.mc_icon.gotoAndStop(1);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bookmark.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("ringmenu_markLocation")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_spy.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("ringmenu_spy_menu")));
    this.updateSpyButton();
  };
  CastleRerollAlienSuccessDialog.prototype.updateSpyButton = function () {
    var __s11local0 = this.targetMapObject.ownerInfo.isLegend || __dep_export_MapObjectHelper.MapObjectHelper.isLandmark(this.targetMapObject);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_spy, __dep_export_CastleModel.CastleModel.spyData.getNumAvailableSpies(__s11local0) > 0);
  };
  CastleRerollAlienSuccessDialog.prototype.onMouseOver = function (__s13param0) {
    __s1param0.prototype.onMouseOver.call(this, __s13param0);
    if (__s13param0.target == this.dialogDisp.btn_spy) {
      this.updateSpyButton();
    }
  };
  CastleRerollAlienSuccessDialog.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      __s1param0.prototype.onClick.call(this, __s16param0);
      switch (__s16param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          this.bookmarkTarget();
          break;
        case this.dialogDisp.btn_spy:
          this.spyTarget();
      }
    }
  };
  CastleRerollAlienSuccessDialog.prototype.bookmarkTarget = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.targetMapObject);
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this.targetMapObject));
    this.hide();
  };
  CastleRerollAlienSuccessDialog.prototype.spyTarget = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.targetMapObject);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(this.targetMapObject, __dep_export_CastleSpyDialog.CastleSpyDialog.TAB_SPY));
    this.hide();
  };
  Object.defineProperty(CastleRerollAlienSuccessDialog.prototype, "targetMapObject", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.alienRerollData.requestWMO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienSuccessDialog.prototype, "isHardReroll", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.alienRerollData.requestRerollIsHard;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienSuccessDialog.NAME = "CastleRerollAlienSuccess";
  return CastleRerollAlienSuccessDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRerollAlienSuccessDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
