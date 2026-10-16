Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SGetSpyInfo = require("gge-module:export_C2SGetSpyInfo");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSpyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSpyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyDialog, __s1param0);
  CastleSpyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._spyState = new __dep_export_CastleSpyDialogSpyState.CastleSpyDialogSpyState(this);
    this._sabotageState = new __dep_export_CastleSpyDialogSabotageState.CastleSpyDialogSabotageState(this);
    this._plagueState = new __dep_export_CastleSpyDialogPlagueState.CastleSpyDialogPlagueState(this);
    this.initBasicButtons([this.dialogDisp.btnOk, this.dialogDisp.btnTabSpy, this.dialogDisp.btnTabSabotage, this.dialogDisp.btnTabPlague, this.dialogDisp.btnClose, this.dialogDisp.btnCancel]);
  };
  CastleSpyDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    this._spyState.removeEventListenerOnHide();
    this._sabotageState.removeEventListenerOnHide();
    this._plagueState.removeEventListenerOnHide();
    this.controller.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    this.controller.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_FAILED, this.bindFunction(this.onPreSpyInfoFailed));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(this.dialogProperties.worldmapObjectVO.absAreaPosX, this.dialogProperties.worldmapObjectVO.absAreaPosY, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleSpyDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this._spyState.removeEventListenerOnHide();
    this._sabotageState.removeEventListenerOnHide();
    this._plagueState.removeEventListenerOnHide();
    this.controller.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    this.controller.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PRE_SPYINFO_FAILED, this.bindFunction(this.onPreSpyInfoFailed));
  };
  CastleSpyDialog.prototype.onPreSpyInfoUpdate = function (__s11param0) {
    if (!__s11param0.params[1] || __s11param0.params[1].equals(this.dialogProperties.worldmapObjectVO.absAreaPos)) {
      this._startSpyVO = __s11param0.params[0];
      this._startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      switch (this.dialogProperties.tabOpenAtStart) {
        default:
        case CastleSpyDialog.TAB_SPY:
          this.setState(this._spyState);
          this._spyState.selectSpyType(this.dialogProperties.wasEcoSpy ? 1 : 0);
          break;
        case CastleSpyDialog.TAB_SABOTAGE:
          this.setState(this._sabotageState);
          break;
        case CastleSpyDialog.TAB_PLAGUE:
          this.setState(this._plagueState);
      }
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    }
  };
  CastleSpyDialog.prototype.onPreSpyInfoFailed = function (__s15param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    this.hide();
  };
  CastleSpyDialog.prototype.setState = function (__s17param0) {
    if (this.currentState) {
      this.currentState.resetState();
    }
    this.currentState = __s17param0;
    this.currentState.updateElements();
    this.currentState.updateTexts();
    this.currentState.updateData();
    this.currentState.addEventListenerOnShow();
  };
  CastleSpyDialog.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (this.currentState) {
      this.currentState.onClick(__s20param0);
    }
  };
  Object.defineProperty(CastleSpyDialog.prototype, "spyState", {
    get: function () {
      return this._spyState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "sabotageState", {
    get: function () {
      return this._sabotageState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "plagueState", {
    get: function () {
      return this._plagueState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "startSpyVO", {
    get: function () {
      return this._startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyDialog.__initialize_static_members = function () {
    CastleSpyDialog.NAME = "CastleSpyEx";
    CastleSpyDialog.TAB_SPY = 0;
    CastleSpyDialog.TAB_SABOTAGE = 1;
    CastleSpyDialog.TAB_PLAGUE = 2;
  };
  return CastleSpyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSpyDialog = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleSpyDialogPlagueState = require("gge-module:export_CastleSpyDialogPlagueState");
var __dep_export_CastleSpyDialogSabotageState = require("gge-module:export_CastleSpyDialogSabotageState");
var __dep_export_CastleSpyDialogSpyState = require("gge-module:export_CastleSpyDialogSpyState");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
