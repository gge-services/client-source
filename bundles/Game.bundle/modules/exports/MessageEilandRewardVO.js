Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEilandTop1RewardDialogProperties = require("gge-module:export_CastleEilandTop1RewardDialogProperties");
var __dep_export_CastleEilandRewardDialogProperties = require("gge-module:export_CastleEilandRewardDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageEilandRewardVO() {
    var __s3local0 = this;
    __s3local0.subtype = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageEilandRewardVO, __s1param0);
  MessageEilandRewardVO.prototype.parseMessageHeader = function (__s5param0) {
    this.subtype = parseInt(__s5param0);
  };
  MessageEilandRewardVO.prototype.parseSubject = function () {
    if (this.subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_KING) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_eiland_reward_stormlord");
    } else if (this.subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_WINNER_ALLI) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_eiland_reward_alliance", [__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK]);
    } else if (this.subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_TOP_X) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_eiland_reward_topx", [__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK]);
    } else if (this.subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_POINTS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_eiland_reward");
    } else {
      return "";
    }
  };
  MessageEilandRewardVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageEilandRewardVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.subtype) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_KING:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandTop1RewardDialog.CastleEilandTop1RewardDialog, new __dep_export_CastleEilandTop1RewardDialogProperties.CastleEilandTop1RewardDialogProperties(true));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_WINNER_ALLI:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandTop1RewardDialog.CastleEilandTop1RewardDialog, new __dep_export_CastleEilandTop1RewardDialogProperties.CastleEilandTop1RewardDialogProperties(false));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_TOP_X:
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_REWARD_POINTS:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandRewardDialog.CastleEilandRewardDialog, new __dep_export_CastleEilandRewardDialogProperties.CastleEilandRewardDialogProperties(this.messageID));
      }
      return null;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandRewardVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsEiland";
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageEilandRewardVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageEilandRewardVO = __s0local0;
var __dep_export_CastleEilandRewardDialog = require("gge-module:export_CastleEilandRewardDialog");
var __dep_export_CastleEilandTop1RewardDialog = require("gge-module:export_CastleEilandTop1RewardDialog");
var __dep_export_CastleEilandRewardsVO = require("gge-module:export_CastleEilandRewardsVO");
