Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DonationEventEndDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventEndDialogItem, __s1param0);
  DonationEventEndDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_empty.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("noRewards"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_reached, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eventEndDonationEvent_Reached"));
    this._itxt_type = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_type, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_level = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon"));
    this.getItemMc().icon_type.gotoAndStop(1);
  };
  DonationEventEndDialogItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    this.getItemMc().icon_type.gotoAndStop(this.donationTypeID);
    this._itxt_type.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_eventEndDonationEvent_EventType" + this.donationTypeID);
    if (this.donationRewardID == -1) {
      this.getItemMc().mc_empty.visible = true;
    } else {
      this.getItemMc().mc_empty.visible = false;
      this._itxt_level.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.donationRewardID)];
      var __s7local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.getItemMc().mc_reward.mc_item).addInfoBtn(this.getItemMc().mc_reward.btn_info);
      var __s7local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(136, 132));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s7local0, this.reward, __s7local1);
    }
  };
  Object.defineProperty(DonationEventEndDialogItem.prototype, "reward", {
    get: function () {
      var __s11local0 = __dep_export_CastleModel.CastleModel.donationEventData.getRewardVOByID(this.donationRewardID);
      var __s11local1 = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s11local0.rewardID);
      if (__s11local1) {
        return __s11local1.getItemByIndex(0);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationTypeVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getPointTypeVOByID(this.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationTypeID", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationRewardID", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventEndDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.DonationEventEndDialogItem = __s0local1;
