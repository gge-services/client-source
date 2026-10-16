Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ButtonJumpToAllianceBookmark(__s3param0) {
    this._button = __s3param0;
  }
  ButtonJumpToAllianceBookmark.prototype.init = function (__s5param0) {
    this._wmoVO = __s5param0;
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._button);
    if (this._button.txt_label) {
      this.textFieldManager.registerTextField(this._button.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("Bookmarks_Menu_jumpTo_copy")).autoFitToBounds = true;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, this.isEnabled);
    this._button.toolTipText = this.toolTipText;
  };
  ButtonJumpToAllianceBookmark.prototype.onLevelUp = function (__s8param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, this.isEnabled);
    this._button.toolTipText = this.toolTipText;
  };
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "isEnabled", {
    get: function () {
      var __s10local0 = this._wmoVO.kingdomID;
      return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s10local0).minLevel && __dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(__s10local0) && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "toolTipText", {
    get: function () {
      var __s12local0 = this._wmoVO.kingdomID;
      if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s12local0).minLevel) {
        if (__dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(this._wmoVO.kingdomID)) {
          return "";
        } else {
          return "dialog_kingdom_notYetAvailable";
        }
      } else {
        return "errorCode_12";
      }
    },
    enumerable: true,
    configurable: true
  });
  ButtonJumpToAllianceBookmark.prototype.onClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this._wmoVO);
  };
  ButtonJumpToAllianceBookmark.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this._wmoVO = null;
  };
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonJumpToAllianceBookmark;
}();
exports.ButtonJumpToAllianceBookmark = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
