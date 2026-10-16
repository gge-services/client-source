Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonBookmarkConfigVO = require("gge-module:export_ButtonBookmarkConfigVO");
var __dep_export_CastleBookmarkHelper = require("gge-module:export_CastleBookmarkHelper");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ButtonBookmarkComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._showDefaultToolTip = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonBookmarkComponent, __s1param0);
  Object.defineProperty(ButtonBookmarkComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonBookmarkComponent.prototype.initAsRingmenuButton = function () {
    this.initBookmarkButton(false);
  };
  ButtonBookmarkComponent.prototype.initBookmarkButton = function (__s9param0 = false) {
    this._showDefaultToolTip = __s9param0;
    this._button.visible = __dep_export_CastleBookmarkData.CastleBookmarkData.isBookmarkableForPlayer(this._worldMapObjectVO) || __dep_export_CastleBookmarkData.CastleBookmarkData.isBookmarkableForAlliance(this._worldMapObjectVO);
    if (this._button.visible) {
      this._config = this.calcButtonState();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, this._config.enableButton);
      this._button.toolTipText = this._config.errorToolTipTextID;
    }
  };
  ButtonBookmarkComponent.prototype.calcButtonState = function () {
    var __s12local0 = null;
    __s12local0 = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive ? new __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO(false, __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE) : __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.getBookmarkButtonConfiguration(this._worldMapObjectVO);
    if (this._showDefaultToolTip) {
      __s12local0.errorToolTipTextID = "ringmenu_markLocation";
    }
    return __s12local0;
  };
  ButtonBookmarkComponent.prototype.onClick = function () {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._button) && this._config && this._config.buttonAction != __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_NONE) {
      var __s15local0;
      switch (this._config.buttonAction) {
        case __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK:
          __s15local0 = __dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog.CAT_ALLIANCE_BOOKMARK;
          break;
        case __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK:
          __s15local0 = __dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK;
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this._worldMapObjectVO, __s15local0));
    }
  };
  Object.defineProperty(ButtonBookmarkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_markLocation";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBookmarkComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonBookmarkComponent = __s0local0;
var __dep_export_CastleBookmarkData = require("gge-module:export_CastleBookmarkData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
