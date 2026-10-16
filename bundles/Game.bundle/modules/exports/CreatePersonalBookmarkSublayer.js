Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CreatePersonalBookmarkSublayer(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CreatePersonalBookmarkSublayer, __s1param0);
  CreatePersonalBookmarkSublayer.prototype.show = function (__s5param0) {
    this._currentBookmarkVO = __s5param0[0];
    __s1param0.prototype.show.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_friend, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_addBookmark_friendly_text"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_enemy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_addBookmark_enemy_text"));
    this.subLayerDisp.btn_friend.toolTipText = "Bookmarks_addBookmark_friendly_tooltip";
    this.subLayerDisp.btn_enemy.toolTipText = "Bookmarks_addBookmark_enemy_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this.subLayerDisp.btn_friend);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this.subLayerDisp.btn_enemy);
    this.switchMarkedAsFriend(this._currentBookmarkVO.type);
  };
  CreatePersonalBookmarkSublayer.prototype.switchMarkedAsFriend = function (__s7param0) {
    this._currentBookmarkVO.type = __s7param0;
    var __s7local0 = this._currentBookmarkVO.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_friend, __s7local0);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_enemy, !__s7local0);
  };
  CreatePersonalBookmarkSublayer.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      __s1param0.prototype.onClick.call(this, __s9param0);
      switch (__s9param0.target) {
        case this.subLayerDisp.btn_friend:
          this.switchMarkedAsFriend(__dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND);
          break;
        case this.subLayerDisp.btn_enemy:
          this.switchMarkedAsFriend(__dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY);
      }
    }
  };
  CreatePersonalBookmarkSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_addBookmark_copy"));
  };
  return CreatePersonalBookmarkSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CreatePersonalBookmarkSublayer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
