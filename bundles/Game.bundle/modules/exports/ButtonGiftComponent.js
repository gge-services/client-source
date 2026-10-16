Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePlayerGiftSelectionProperties = require("gge-module:export_CastlePlayerGiftSelectionProperties");
var __s0local0 = function (__s1param0) {
  function ButtonGiftComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._targetPlayerID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._targetPlayerID = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonGiftComponent, __s1param0);
  Object.defineProperty(ButtonGiftComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonGiftComponent.prototype, "targetPlayerID", {
    set: function (__s7param0) {
      this._targetPlayerID = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonGiftComponent.prototype.initAsRingmenuButton = function () {
    this.initButton();
  };
  ButtonGiftComponent.prototype.initAsPlayerInfoButton = function () {
    this.initButton();
  };
  ButtonGiftComponent.prototype.initButton = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.playerGiftData.playerGifts.length > 0;
    var __s13local1 = __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GIFT_TRADER);
    var __s13local2 = this._targetPlayerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    var __s13local3 = __dep_export_CastleModel.CastleModel.playerGiftData.sendablePackageAmount <= 0;
    var __s13local4 = true;
    if (this._worldMapObjectVO) {
      __s13local4 = !this._worldMapObjectVO.isOwnMapobject && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "CastleMapobjectVO") && this._worldMapObjectVO.kingdomID == __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID;
    }
    this._button.disp.visible = __s13local4 && !__s13local2 && (__s13local0 || __s13local1);
    this._button.enableButton = true;
    if (__s13local0) {
      this._button.disp.toolTipText = __s13local3 ? __dep_exact_92d05af59ee2ff30.Localize.text("giftTrader_giftLimit", [__dep_exact_26a421b704832cff_1.PackageConst.MAX_PLAYER_GIFT_PER_DAY]) : "dialog_sendGift_tooltip";
    } else {
      this._button.enableButton = false;
      this._button.disp.toolTipText = "ringmenu_noGifts_tooltip";
    }
  };
  ButtonGiftComponent.prototype.onClick = function () {
    var __s18local0 = __dep_exact_f855840627e6e145.int(this._targetPlayerID > -1 ? this._targetPlayerID : this._worldMapObjectVO.ownerInfo.playerID);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePlayerGiftSelectionDialog.CastlePlayerGiftSelectionDialog, new __dep_export_CastlePlayerGiftSelectionProperties.CastlePlayerGiftSelectionProperties(__s18local0));
  };
  Object.defineProperty(ButtonGiftComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_gift";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonGiftComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonGiftComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerGiftSelectionDialog = require("gge-module:export_CastlePlayerGiftSelectionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
