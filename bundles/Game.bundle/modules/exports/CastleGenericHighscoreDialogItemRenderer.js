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
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleGenericHighscoreDialogItemRenderer(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itemVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericHighscoreDialogItemRenderer, __s1param0);
  CastleGenericHighscoreDialogItemRenderer.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    if (this.itemVO && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      __s5param0.target;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.itemVO.ownerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.updateItem = function (__s8param0 = "") {
    if (!this._itemVO) {
      this.disp.visible = false;
      this.onHide();
      return;
    }
    this.disp.visible = true;
    this.onShow();
    var __s8local0 = __dep_export_CastleModel.CastleModel.userData.userName;
    var __s8local1 = __s8param0 != "" ? __s8param0 : null;
    var __s8local2 = this.itemVO.rank <= 1;
    var __s8local3 = this.itemVO.rank == 2;
    var __s8local4 = this.itemVO.ownerInfo.playerName.toLowerCase() == __s8local0.toLowerCase();
    this.disp.mc_first.visible = __s8local2 && !__s8local4;
    this.disp.mc_second.visible = __s8local3 && !__s8local4;
    this.disp.mc_own.visible = __s8local4 || __s8local2 || __s8local3;
    if (this.disp.mc_search) {
      this.disp.mc_search.visible = !!__s8local1 && (this.itemVO.ownerInfo.playerName.toLowerCase() == __s8local1.toLowerCase() || parseInt(__s8local1) == this.itemVO.rank);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.rank), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.itemVO.ownerInfo.playerName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.itemVO.ownerInfo.isInAlliance ? this.itemVO.ownerInfo.allianceName : " - "), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(this.itemVO.ownerInfo.playerLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getDistanceToOwnMainCastle()), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    if (this.disp.txt_amount) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemVO.amount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.getDistanceToOwnMainCastle = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    return Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(this.itemVO.ownerInfo.getMainCastlePositionByKingdomID(0), new __s0local0(__s13local0.absAreaPosX, __s13local0.absAreaPosY)));
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.onRollOver = function (__s15param0) {
    this.disp.scaleX = this.disp.scaleY = 1.02;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.onRollOut = function (__s17param0) {
    this.disp.scaleX = __s17param0.target.scaleY = 1;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleGenericHighscoreDialogItemRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    set: function (__s21param0) {
      this._itemVO = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialogItemRenderer.prototype.isSelected = function () {
    return !!this.disp && !!this.disp.mc_own && this.disp.mc_own.visible;
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.select = function () {
    this.disp.mc_own.visible = true;
  };
  return CastleGenericHighscoreDialogItemRenderer;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleGenericHighscoreDialogItemRenderer = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
