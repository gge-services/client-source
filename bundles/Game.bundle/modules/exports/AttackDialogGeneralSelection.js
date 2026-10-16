Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_GeneralSelection = require("gge-module:export_GeneralSelection");
var __dep_export_GeneralSelectionProperties = require("gge-module:export_GeneralSelectionProperties");
var __dep_export_GeneralsOverviewDialog = require("gge-module:export_GeneralsOverviewDialog");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogGeneralSelection() {
    this._isOpen = true;
  }
  AttackDialogGeneralSelection.prototype.init = function (__s5param0) {
    this._panelDisp = __s5param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.mc_selection.btn_generalOverview], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._panelDisp.mc_generalSelection_bg.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_selection.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_generals_quickSelection_header"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_selection.btn_generalOverview.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_rework2022_generals_overview_button")));
    if (!this._generalSelection) {
      var __s5local0 = new __dep_export_GeneralSelectionProperties.GeneralSelectionProperties();
      __s5local0.disableMovingGenerals = true;
      __s5local0.showPreviewGenerals = false;
      this._generalSelection = new __dep_export_GeneralSelection.GeneralSelection(this._panelDisp.mc_selection, __s5local0);
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
      this._posX = this._panelDisp.mc_selection.x;
    }
    this.close();
    var __s5local1 = Array.from(__dep_export_CastleModel.CastleModel.generalsData.playerGenerals.values()).filter(function (__s8param0) {
      return __s8param0.isUnlocked;
    });
    __s5local1.unshift(null);
    this._generalSelection.init(__s5local1);
    this._generalSelection.onShow();
    this._panelDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChanged));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.open));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.close));
  };
  AttackDialogGeneralSelection.prototype.destroy = function () {
    if (this._generalSelection) {
      this._generalSelection.onHide();
    }
    this._panelDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChanged));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.open));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.close));
  };
  AttackDialogGeneralSelection.prototype.open = function () {
    if (!this._isOpen) {
      this._isOpen = true;
      __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this._panelDisp.mc_selection);
      this._panelDisp.visible = true;
      __dep_exact_608de47b6498f9b0.TweenMax.to(this._panelDisp.mc_selection, 0.2, {
        x: this._posX,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut,
        onComplete: this.bindFunction(this.onOpenComplete)
      });
    }
  };
  AttackDialogGeneralSelection.prototype.close = function () {
    var __s16local0 = this;
    if (this._isOpen) {
      this._isOpen = false;
      __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this._panelDisp.mc_selection);
      __dep_exact_608de47b6498f9b0.TweenMax.to(this._panelDisp.mc_selection, 0.2, {
        x: this._posX - this._panelDisp.mc_selection.width,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: function () {
          __s16local0._panelDisp.visible = false;
        },
        onStart: this.bindFunction(this.onCloseStart)
      });
    }
  };
  AttackDialogGeneralSelection.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      switch (__s21param0.target) {
        case this._panelDisp.mc_selection.btn_generalOverview:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsOverviewDialog.GeneralsOverviewDialog);
          break;
        case this._panelDisp.mc_generalSelection_bg:
          __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.dispatch();
      }
    }
  };
  AttackDialogGeneralSelection.prototype.onSelectGeneral = function (__s25param0) {
    __dep_export_CastleModel.CastleModel.lordData.assignGeneral(__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord, __s25param0);
  };
  AttackDialogGeneralSelection.prototype.onLordChanged = function () {
    if (this._generalSelection) {
      var __s27local0 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
      var __s27local1 = __s27local0 ? __s27local0.assignedGeneralVO : null;
      this._generalSelection.selectGeneralVO(__s27local1, false);
    }
  };
  Object.defineProperty(AttackDialogGeneralSelection.prototype, "generalSelection", {
    get: function () {
      return this._generalSelection;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogGeneralSelection.prototype.onOpenComplete = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION));
  };
  AttackDialogGeneralSelection.prototype.onCloseStart = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION));
  };
  Object.defineProperty(AttackDialogGeneralSelection.prototype, "isVisble", {
    get: function () {
      return this._panelDisp.visible;
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogGeneralSelection;
}();
exports.AttackDialogGeneralSelection = __s0local1;
