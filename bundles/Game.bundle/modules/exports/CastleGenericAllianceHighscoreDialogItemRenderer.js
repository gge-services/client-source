Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleGenericAllianceHighscoreDialogItemRenderer(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itemVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericAllianceHighscoreDialogItemRenderer, __s1param0);
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    if (this.itemVO && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      __s5param0.target;
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.userData.allianceID == this.itemVO.allianceVO.allianceId) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this.itemVO.allianceVO.allianceId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.updateItem = function (__s10param0 = "") {
    if (!this._itemVO) {
      this.disp.visible = false;
      this.onHide();
      return;
    }
    this.disp.visible = true;
    this.onShow();
    var __s10local0 = this.itemVO.rank <= 1;
    var __s10local1 = this.itemVO.rank == 2;
    var __s10local2 = __dep_export_CastleModel.CastleModel.userData.isInAlliance && this.itemVO.allianceVO.allianceName && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName && this.itemVO.allianceVO.allianceName.toLowerCase() == __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName.toLowerCase();
    this.disp.mc_first.visible = __s10local0 && !__s10local2;
    this.disp.mc_second.visible = __s10local1 && !__s10local2;
    this.disp.mc_own.visible = __s10local2;
    if (this.disp.mc_search) {
      this.disp.mc_search.visible = !!__s10param0 && this.itemVO.allianceVO.allianceName && (this.itemVO.allianceVO.allianceName.toLowerCase() == __s10param0.toLowerCase() || parseInt(__s10param0) == this.itemVO.rank);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.rank), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.itemVO.allianceVO.allianceName || ""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(this.itemVO.allianceVO.allianceCurrentFame)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_membercount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.allianceVO.memberAmount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.amount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onRollOver = function (__s14param0) {
    this.disp.scaleX = this.disp.scaleY = 1.02;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onRollOut = function (__s16param0) {
    this.disp.scaleX = __s16param0.target.scaleY = 1;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onMouseOver = function (__s18param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    __s1param0.prototype.onMouseOver.call(this, __s18param0);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onMouseOut = function (__s20param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    __s1param0.prototype.onMouseOut.call(this, __s20param0);
  };
  Object.defineProperty(CastleGenericAllianceHighscoreDialogItemRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    set: function (__s24param0) {
      this._itemVO = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericAllianceHighscoreDialogItemRenderer.prototype, "isOwnAlliance", {
    get: function () {
      return !!this.disp && !!this.disp.mc_own && this.disp.mc_own.visible;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericAllianceHighscoreDialogItemRenderer;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleGenericAllianceHighscoreDialogItemRenderer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
