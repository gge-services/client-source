Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleForumAdvertisementDialogProperties = require("gge-module:export_CastleForumAdvertisementDialogProperties");
var __dep_export_CastleMessageTipDialogProperties = require("gge-module:export_CastleMessageTipDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessagePrivateOfferVO() {
    var __s3local0 = this;
    __s3local0._privateOfferType = 0;
    __s3local0._offerID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessagePrivateOfferVO, __s1param0);
  MessagePrivateOfferVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this._privateOfferType = parseInt(__s5local0[0]);
    this._offerID = parseInt(__s5local0[1]);
    this.checkMostRecentMessage();
  };
  MessagePrivateOfferVO.prototype.checkMostRecentMessage = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.messageData.mostRecentPOMessages.get(this.offerID);
    if (__s7local0) {
      var __s7local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s7local0), "MessagePrivateOfferVO");
      if (!__s7local1 || __s7local1 && __s7local1.getCumulativeSecondsSinceSent() > this.getCumulativeSecondsSinceSent()) {
        __dep_export_CastleModel.CastleModel.messageData.mostRecentPOMessages.set(this.offerID, this.messageID);
      }
    } else {
      __dep_export_CastleModel.CastleModel.messageData.mostRecentPOMessages.set(this.offerID, this.messageID);
    }
  };
  MessagePrivateOfferVO.prototype.parseSubject = function () {
    switch (this._privateOfferType) {
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_dungeon_treasure_chest");
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
        return __dep_exact_92d05af59ee2ff30.Localize.text("eventBuilding_decoOffer");
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_FORUM_ADVERTISING:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleForumAdvertisementDialog.CastleForumAdvertisementDialog.MESSAGE_TITLE);
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("custom_offer_messageHeader_" + this._offerID);
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DEFENSE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("custom_offer_messageHeader_DefenseOffer");
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_VOUCHER:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_specialOffer_title_4");
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_timeOffer_title");
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_privateBestsellerShop_title");
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageTip_title_" + this._offerID);
  };
  Object.defineProperty(MessagePrivateOfferVO.prototype, "subject", {
    get: function () {
      if (__dep_export_AMessageVO.AMessageVO.showOfferIDsInSubject) {
        return this.offerID.toString() + ":" + this._subject;
      } else {
        return this._subject;
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "subject").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  MessagePrivateOfferVO.prototype.parseSender = function () {
    if (this._privateOfferType == __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_0"));
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("system");
    }
  };
  Object.defineProperty(MessagePrivateOfferVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._privateOfferType) {
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
          return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_DUNGEON_TREASURE_CHEST_OFFER_DIALOG, this);
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DEFENSE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_WHALE_CHEST_OFFER_DIALOG, this);
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_VOUCHER:
          return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_VOUCHER_OFFER_DIALOG, this);
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_FORUM_ADVERTISING:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleForumAdvertisementDialog.CastleForumAdvertisementDialog, new __dep_export_CastleForumAdvertisementDialogProperties.CastleForumAdvertisementDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
        case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
          return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_GENERIC_OFFER_DIALOG, this);
      }
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageTipDialog.CastleMessageTipDialog, new __dep_export_CastleMessageTipDialogProperties.CastleMessageTipDialogProperties(this));
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "additionalIconName", {
    get: function () {
      if (this.isOfferActive()) {
        switch (this._privateOfferType) {
          case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_VOUCHER:
            return "CastleMessageIconsVoucherOffer";
          case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
            return "CastleMessageIconsTimeChallenge";
          case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
            return "CastleMessageIconsBestsellerShop";
          default:
            return "CastleMessageIconsPrivateOffer";
        }
      }
      return "";
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "privateOfferType", {
    get: function () {
      return this._privateOfferType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "offerID", {
    get: function () {
      return this._offerID;
    },
    enumerable: true,
    configurable: true
  });
  MessagePrivateOfferVO.prototype.isOfferActive = function () {
    switch (this.privateOfferType) {
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_DEFENSE:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_VOUCHER:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
      case __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
        return __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(this.offerID) != null && __dep_export_CastleModel.CastleModel.messageData.mostRecentPOMessages.get(this.offerID) == this.messageID;
    }
    return false;
  };
  MessagePrivateOfferVO.prototype.canBeArchived = function () {
    return __s1param0.prototype.canBeArchived.call(this) && this._privateOfferType != __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP;
  };
  MessagePrivateOfferVO.prototype.canBeDeleted = function () {
    return !this.isOfferActive() || this._privateOfferType == __dep_exact_26a421b704832cff.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE;
  };
  return MessagePrivateOfferVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessagePrivateOfferVO = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleForumAdvertisementDialog = require("gge-module:export_CastleForumAdvertisementDialog");
var __dep_export_CastleMessageTipDialog = require("gge-module:export_CastleMessageTipDialog");
