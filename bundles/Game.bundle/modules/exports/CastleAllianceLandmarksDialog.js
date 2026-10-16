Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceLandmarksDialog() {
    var __s3local0 = this;
    __s3local0._currentItemStartIndex = 0;
    __s3local0._currentSortType = __dep_exact_f855840627e6e145.int(__dep_export_AllianceLandmarksList.AllianceLandmarksList.SORT_BY_LANDMARK);
    __s3local0._isReverseSortOrder = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceLandmarksDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceLandmarksDialog, __s1param0);
  CastleAllianceLandmarksDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_sortByLandmarks, this.dialogDisp.btn_sortByUser, this.dialogDisp.btn_sortByLevel, this.dialogDisp.btn_sortByKingdom]);
    this._itemRenderer = [];
    for (var __s5local0 = 0; __s5local0 < CastleAllianceLandmarksDialog.ITEM_COUNT; ++__s5local0) {
      var __s5local1 = new __dep_export_CastleAllianceLandmarksDialogItemRenderer.CastleAllianceLandmarksDialogItemRenderer(this.dialogDisp["mc_item" + __s5local0]);
      this._itemRenderer.push(__s5local1);
    }
  };
  CastleAllianceLandmarksDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_landmarkList_Header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByLandmarks.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_landmarkList_Landmark"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByUser.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_landmarkList_Owner"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sortByLevel.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_landmarkList_Level"));
    this.dialogDisp.btn_sortByKingdom.toolTipText = "dialog_landmarkList_Kingdom";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.hideLoaded = function (__s11param0 = null) {
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.removeItemEventListner();
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
  };
  CastleAllianceLandmarksDialog.prototype.removeItemEventListner = function () {
    if (this._itemRenderer) {
      for (var __s13local0 = 0; __s13local0 < this._itemRenderer.length; ++__s13local0) {
        this._itemRenderer[__s13local0].onHide();
      }
    }
  };
  CastleAllianceLandmarksDialog.prototype.updateItemList = function () {
    this.removeItemEventListner();
    var __s18local0 = this.landmarksList.getCompleteListBySortType(this._currentSortType, this._isReverseSortOrder);
    for (var __s18local1 = 0; __s18local1 < CastleAllianceLandmarksDialog.ITEM_COUNT; ++__s18local1) {
      var __s18local2 = this._itemRenderer[__s18local1];
      __s18local2.onShow();
      __s18local2.worldmapObjectVO = this._currentItemStartIndex + __s18local1 < __s18local0.length ? __s18local0[this._currentItemStartIndex + __s18local1] : null;
      __s18local2.updateDisp();
    }
    this.updateScrollButtons();
  };
  CastleAllianceLandmarksDialog.prototype.onMouseWheel = function (__s22param0) {
    if (__s22param0.delta < 0) {
      this.onScrollButton(-CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
    } else if (__s22param0.delta > 0) {
      this.onScrollButton(CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
    }
  };
  CastleAllianceLandmarksDialog.prototype.onClick = function (__s26param0) {
    __s1param0.prototype.onClick.call(this, __s26param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_up:
          this.onScrollButton(-CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
          break;
        case this.dialogDisp.btn_down:
          this.onScrollButton(CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE);
          break;
        case this.dialogDisp.btn_sortByLandmarks:
          this.onChangeSortType(__dep_export_AllianceLandmarksList.AllianceLandmarksList.SORT_BY_LANDMARK);
          break;
        case this.dialogDisp.btn_sortByUser:
          this.onChangeSortType(__dep_export_AllianceLandmarksList.AllianceLandmarksList.SORT_BY_USER);
          break;
        case this.dialogDisp.btn_sortByLevel:
          this.onChangeSortType(__dep_export_AllianceLandmarksList.AllianceLandmarksList.SORT_BY_LEVEL);
          break;
        case this.dialogDisp.btn_sortByKingdom:
          this.onChangeSortType(__dep_export_AllianceLandmarksList.AllianceLandmarksList.SORT_BY_KINGDOM);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("help_landmarkList_helpText")));
      }
    }
  };
  CastleAllianceLandmarksDialog.prototype.onChangeSortType = function (__s30param0) {
    this._isReverseSortOrder = this._currentSortType == __s30param0 && !this._isReverseSortOrder;
    this._currentSortType = __s30param0;
    this._currentItemStartIndex = 0;
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.onScrollButton = function (__s32param0) {
    this._currentItemStartIndex += __s32param0;
    var __s32local0 = __dep_exact_f855840627e6e145.int(Math.max(0, this.landmarksList.completeListCount - CastleAllianceLandmarksDialog.ITEM_COUNT));
    this._currentItemStartIndex = __dep_exact_f855840627e6e145.int(Math.min(Math.max(0, this._currentItemStartIndex), __s32local0));
    this.updateItemList();
  };
  CastleAllianceLandmarksDialog.prototype.updateScrollButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_up, this._currentItemStartIndex > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_down, this._currentItemStartIndex < this.landmarksList.completeListCount - CastleAllianceLandmarksDialog.ITEM_COUNT);
  };
  Object.defineProperty(CastleAllianceLandmarksDialog.prototype, "landmarksList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceLandmarksDialog.NAME = "CastleAllianceLandmarks";
  CastleAllianceLandmarksDialog.ITEM_COUNT = 3;
  CastleAllianceLandmarksDialog.SCROLL_DELTA_VALUE = 1;
  return CastleAllianceLandmarksDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceLandmarksDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_AllianceLandmarksList = require("gge-module:export_AllianceLandmarksList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceLandmarksDialogItemRenderer = require("gge-module:export_CastleAllianceLandmarksDialogItemRenderer");
