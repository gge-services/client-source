Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AllianceMobilizationDivisionChangeDialog = require("gge-module:export_AllianceMobilizationDivisionChangeDialog");
var __dep_export_AllianceMobilizationDivisionChangeDialogProperties = require("gge-module:export_AllianceMobilizationDivisionChangeDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __s0local0 = function (__s1param0) {
  function MessageDivisionChangeVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageDivisionChangeVO, __s1param0);
  MessageDivisionChangeVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this.eventID = parseInt(__s5local0[0]);
    this._divisionChange = parseInt(__s5local0[1]);
    this.forAlliance = !!parseInt(__s5local0[2]);
  };
  MessageDivisionChangeVO.prototype.parseSubject = function () {
    if (this._divisionChange > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("division_promotion_popup_title");
    } else if (this._divisionChange < 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("division_demotion_popup_title");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("division_maintain_popup_title");
    }
  };
  MessageDivisionChangeVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("event_title_" + this.eventID);
  };
  Object.defineProperty(MessageDivisionChangeVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsDivisionPromotionDemotion";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageDivisionChangeVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.eventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_AllianceMobilizationDivisionChangeDialog.AllianceMobilizationDivisionChangeDialog, new __dep_export_AllianceMobilizationDivisionChangeDialogProperties.AllianceMobilizationDivisionChangeDialogProperties(this));
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageDivisionChangeVO.prototype, "divisionChange", {
    get: function () {
      return this._divisionChange;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageDivisionChangeVO.prototype, "eventId", {
    get: function () {
      return this.eventID;
    },
    enumerable: true,
    configurable: true
  });
  return MessageDivisionChangeVO;
}(require("gge-module:export_AMessageVO").AMessageVO);
exports.MessageDivisionChangeVO = __s0local0;
