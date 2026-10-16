Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ButtonDeleteAllianceBookmarkComponent(__s3param0) {
    this._button = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._button);
  }
  ButtonDeleteAllianceBookmarkComponent.prototype.init = function (__s5param0) {
    this._bookmark = __s5param0;
    var __s5local0 = __s5param0.creatorPlayerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO().allianceRank);
    var __s5local2 = __dep_export_CastleModel.CastleModel.allianceData.hasRight(__s5local1, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_MANAGE_BOOKMARKS);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, __s5local0 || __s5local2);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._button)) {
      this._button.toolTipText = "Bookmarks_Menu_eraseBookmark_tooltip";
    } else {
      this._button.toolTipText = "dialog_unavailable_onlyForGenerals_tooltip";
    }
  };
  ButtonDeleteAllianceBookmarkComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDeleteAllianceBookmarkDialog.CastleDeleteAllianceBookmarkDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(this._bookmark));
  };
  ButtonDeleteAllianceBookmarkComponent.prototype.destroy = function () {
    this._bookmark = null;
  };
  return ButtonDeleteAllianceBookmarkComponent;
}();
exports.ButtonDeleteAllianceBookmarkComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDeleteAllianceBookmarkDialog = require("gge-module:export_CastleDeleteAllianceBookmarkDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
