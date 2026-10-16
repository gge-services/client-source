Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SRequestGoodgamesGift = require("gge-module:export_C2SRequestGoodgamesGift");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_SkinnableDialog = require("gge-module:export_SkinnableDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleGGSGiftDialog() {
    var __s3local0 = this;
    __s3local0.rewardIcons = [];
    __s3local0.startIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleGGSGiftDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGGSGiftDialog, __s1param0);
  CastleGGSGiftDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons(this.dialogButtons());
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_collect, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pickGift_button")).autoFitToBounds = true;
  };
  CastleGGSGiftDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GGS_GIFT);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    var __s7local0 = this._eventVO && this._eventVO.skinID ? "_" + this._eventVO.skinID : "";
    this.textFieldManager.registerTextField(this.dialogDisp.text_plate.txt_tip, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pickGift" + __s7local0)).autoFitToBounds = true;
    this.setStartIndex(0);
    this.onTimer();
  };
  CastleGGSGiftDialog.prototype.dialogButtons = function () {
    return [this.dialogDisp.btn_collect, this.dialogDisp.btn_cancel, this.dialogDisp.btn_left, this.dialogDisp.btn_right];
  };
  CastleGGSGiftDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_left:
          this.setStartIndex(this.startIndex - CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
          break;
        case this.dialogDisp.btn_right:
          this.setStartIndex(this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
          break;
        case this.dialogDisp.btn_collect:
          if (!this.dialogProperties.isTest) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRequestGoodgamesGift.C2SRequestGoodgamesGift(1));
            this._eventVO.collect();
          }
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleGGSGiftDialog.prototype.setStartIndex = function (__s16param0) {
    this.startIndex = __s16param0;
    this.updateRewardItems();
    this.dialogDisp.btn_left.visible = __s16param0 > 0;
    this.dialogDisp.btn_right.visible = this.rewardList.length > __s16param0 + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS;
  };
  CastleGGSGiftDialog.prototype.onTimer = function (__s18param0 = null) {
    if (!this.dialogProperties.isTest && (!this._eventVO || !this._eventVO.isCollectable() || !!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventVO.eventId))) {
      this.hide();
    }
  };
  CastleGGSGiftDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleGGSGiftDialog.prototype.updateRewardItems = function () {
    this.destroyCollectableRenderList();
    if (this.rewardIcons != null) {
      for (var __s23local0 = 0, __s23local1 = this.rewardIcons; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.dispose();
        }
      }
    }
    this.rewardIcons = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_reward_list);
    var __s23local3 = this.rewardList.list.slice(this.startIndex, this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
    var __s23local4 = 0;
    var __s23local5 = 0;
    if (__s23local3.length > CastleGGSGiftDialog.REWARD_ICON_COLUMNS) {
      var __s23local6 = __dep_exact_f855840627e6e145.int(__s23local3.length / CastleGGSGiftDialog.REWARD_ICON_ROWS);
      for (var __s23local7 = 0; __s23local7 < CastleGGSGiftDialog.REWARD_ICON_ROWS; ++__s23local7) {
        __s23local5 = __s23local6 + (__s23local7 == CastleGGSGiftDialog.REWARD_ICON_ROWS - 1 ? 0 : Math.ceil(__s23local3.length % 2));
        this.createRewardIconRow(__s23local5, CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y * __s23local7, __s23local4);
        __s23local4 += __s23local5;
      }
    } else {
      var __s23local8 = __dep_exact_f855840627e6e145.int(__s23local3.length);
      for (var __s23local9 = 0; __s23local9 < CastleGGSGiftDialog.REWARD_ICON_ROWS; ++__s23local9) {
        __s23local5 = __dep_exact_f855840627e6e145.int(Math.min(CastleGGSGiftDialog.REWARD_ICON_COLUMNS, __s23local8));
        this.createRewardIconRow(__s23local5, CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y * __s23local9, __s23local4);
        __s23local4 += __s23local5;
        __s23local8 -= __s23local5;
      }
    }
  };
  CastleGGSGiftDialog.prototype.createRewardIconRow = function (__s35param0, __s35param1, __s35param2) {
    var __s35local0 = CastleGGSGiftDialog.REWARD_ICON_WIDTH * (CastleGGSGiftDialog.REWARD_ICON_COLUMNS - __s35param0);
    var __s35local1 = CastleGGSGiftDialog.REWARD_ICON_WIDTH * __s35param0;
    var __s35local2 = Math.min((384 - __s35local1 - __s35local0) / (__s35param0 - 1), 200);
    var __s35local3 = -(__s35local1 + __s35local2 * (__s35param0 - 1)) / 2 + CastleGGSGiftDialog.REWARD_ICON_WIDTH / 2;
    var __s35local4 = this.rewardList.list.slice(this.startIndex, this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
    for (var __s35local5 = 0; __s35local5 < __s35param0; ++__s35local5) {
      var __s35local6 = new __dep_exact_9e901e8e2483a22f_1.GoodgameDisplayObjectClipExternal(CastleGGSGiftDialog.REWARD_ICON_ASSET_NAME, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleGGSGiftDialog.NAME));
      __s35local6.recycleAsset = false;
      this.rewardIcons.push(__s35local6);
      this.dialogDisp.mc_reward_list.addChild(__s35local6);
      __s35local6.name = "mc_reward" + (__s35param2 + __s35local5);
      __s35local6.x = __s35local3;
      __s35local6.y = __s35param1;
      __s35local3 += CastleGGSGiftDialog.REWARD_ICON_WIDTH + __s35local2;
      var __s35local7 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(50, 50));
      __s35local7.textfield.useKiloAbbreviationForAmount = true;
      var __s35local8 = __s35local6.currentshownDisplayObject;
      var __s35local9 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s35local8);
      __s35local9.addItemMc(__s35local8.reward_basic);
      __s35local9.addIconMc(__s35local8.reward_basic.mc_icon);
      __s35local9.addInfoBtn(__s35local8.btn_info);
      __s35local9.addTextfield(__s35local8.reward_basic.txt_text);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s35local9, __s35local4[__s35param2 + __s35local5], __s35local7);
    }
  };
  Object.defineProperty(CastleGGSGiftDialog.prototype, "rewardList", {
    get: function () {
      return this.dialogProperties.rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGGSGiftDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGGSGiftDialog.NAME = "CastleGGSGiftDialogExternalBigList";
  CastleGGSGiftDialog.REWARD_ICON_COLUMNS = 5;
  CastleGGSGiftDialog.REWARD_ICON_ROWS = 2;
  CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y = 96;
  CastleGGSGiftDialog.REWARD_ICON_WIDTH = 67;
  CastleGGSGiftDialog.REWARD_ICON_ASSET_NAME = "GGSGiftReward_MC";
  return CastleGGSGiftDialog;
}(__dep_export_SkinnableDialog.SkinnableDialog);
exports.CastleGGSGiftDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
