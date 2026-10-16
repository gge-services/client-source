Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function PlayerIgnoreList_Item() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerIgnoreList_Item, __s1param0);
  PlayerIgnoreList_Item.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.btn_delete], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.itemMc.mc_item.mc_down.visible = false;
    this.itemMc.mc_item.mc_hover.visible = false;
    this.itemMc.mc_item.actLikeButton = true;
    this.itemMc.mc_item.mouseChildren = false;
  };
  PlayerIgnoreList_Item.prototype.fill = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_item.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.data[0]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_item.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.ignoredPlayerVO.playerName));
  };
  Object.defineProperty(PlayerIgnoreList_Item.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  PlayerIgnoreList_Item.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.itemMc.btn_delete:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_unignore_player_tooltip"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_inbox_unignore_player_confirm_copy"), this.bindFunction(this.unignorePlayer)));
        break;
      default:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.ignoredPlayerVO.playerID));
    }
  };
  PlayerIgnoreList_Item.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  PlayerIgnoreList_Item.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  PlayerIgnoreList_Item.prototype.onRollOver = function (__s18param0) {
    this.itemMc.mc_item.mc_hover.visible = true;
  };
  PlayerIgnoreList_Item.prototype.onRollOut = function (__s20param0) {
    this.itemMc.mc_item.mc_hover.visible = false;
    this.itemMc.mc_item.mc_down.visible = false;
  };
  PlayerIgnoreList_Item.prototype.onMouseDown = function (__s22param0) {
    this.itemMc.mc_item.mc_down.visible = true;
    this.itemMc.mc_item.mc_hover.visible = false;
  };
  PlayerIgnoreList_Item.prototype.onMouseUp = function (__s24param0) {
    this.itemMc.mc_item.mc_down.visible = false;
    this.itemMc.mc_item.mc_hover.visible = true;
  };
  PlayerIgnoreList_Item.prototype.unignorePlayer = function (__s26param0 = null) {
    __dep_export_CastleModel.CastleModel.messageData.ignorePlayer(this.ignoredPlayerVO.playerID, false);
  };
  Object.defineProperty(PlayerIgnoreList_Item.prototype, "ignoredPlayerVO", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return PlayerIgnoreList_Item;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.PlayerIgnoreList_Item = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
