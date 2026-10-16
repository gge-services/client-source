Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_CastleMessageFoodFreezeStartDialog = require("gge-module:export_CastleMessageFoodFreezeStartDialog");
var __dep_export_CastleMessageFoodFreezeProperties = require("gge-module:export_CastleMessageFoodFreezeProperties");
var __dep_export_CastleMessageFoodFreezeEndDialog = require("gge-module:export_CastleMessageFoodFreezeEndDialog");
var __s0local0 = function (__s1param0) {
  function MessageDowntimeStatusVO() {
    var __s3local0 = this;
    __s3local0.downtimeStatus = 0;
    __s3local0.messageScope = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageDowntimeStatusVO, __s1param0);
  MessageDowntimeStatusVO.prototype.parseMessageHeader = function (__s5param0) {
    this.downtimeStatus = parseInt(__s5param0.split("+")[0]);
    this.messageScope = parseInt(__s5param0.split("+")[1]);
  };
  MessageDowntimeStatusVO.prototype.parseSubject = function () {
    switch (this.downtimeStatus) {
      case MessageDowntimeStatusVO.STATUS_FREEZE:
        if (this.messageScope == MessageDowntimeStatusVO.SCOPE_FOOD) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("message_productionDownTime_freeze_food_header");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("message_productionDownTime_freeze_foodmead_header");
        }
      case MessageDowntimeStatusVO.STATUS_UNFREEZE:
        if (this.messageScope == MessageDowntimeStatusVO.SCOPE_FOOD) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("message_productionDownTime_unfreeze_food_header");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("message_productionDownTime_unfreeze_foodmead_header");
        }
    }
    return "";
  };
  MessageDowntimeStatusVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageDowntimeStatusVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.downtimeStatus) {
        case MessageDowntimeStatusVO.STATUS_FREEZE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageFoodFreezeStartDialog.CastleMessageFoodFreezeStartDialog, new __dep_export_CastleMessageFoodFreezeProperties.CastleMessageFoodFreezeProperties(this.messageScope));
        case MessageDowntimeStatusVO.STATUS_UNFREEZE:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageFoodFreezeEndDialog.CastleMessageFoodFreezeEndDialog, new __dep_export_CastleMessageFoodFreezeProperties.CastleMessageFoodFreezeProperties(this.messageScope));
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageDowntimeStatusVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsFoodFreeze";
    },
    enumerable: true,
    configurable: true
  });
  MessageDowntimeStatusVO.STATUS_FREEZE = 1;
  MessageDowntimeStatusVO.STATUS_UNFREEZE = 0;
  MessageDowntimeStatusVO.SCOPE_FOOD_MEAD = 0;
  MessageDowntimeStatusVO.SCOPE_FOOD = 1;
  return MessageDowntimeStatusVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageDowntimeStatusVO = __s0local0;
