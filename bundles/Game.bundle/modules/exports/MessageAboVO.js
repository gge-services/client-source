Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastlePremiumAboReceivedDialogProperties = require("gge-module:export_CastlePremiumAboReceivedDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageAboVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAboVO, __s1param0);
  MessageAboVO.prototype.parseMessageHeader = function (__s5param0) {
    this._goods = new __dep_export_CollectableList.CollectableList();
    for (var __s5local0 = __s5param0.split("#"), __s5local1 = 0; __s5local1 < __s5local0.length; ++__s5local1) {
      __s5local0[__s5local1] = parseInt(__s5local0[__s5local1]);
    }
    this._goods = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5local0);
  };
  MessageAboVO.prototype.parseSubject = function () {
    var __s9local0 = this._goods.getItemByIndexSave(0);
    var __s9local1 = __s9local0 ? __s9local0.itemType : __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    var __s9local2 = this._subject;
    switch (__s9local1) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_abo_wood");
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_abo_stone");
        break;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_abo_food");
        break;
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_abo_c1");
        break;
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        __s9local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_abo_c2");
    }
    return __s9local2;
  };
  MessageAboVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageAboVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastlePremiumAboReceivedDialog.CastlePremiumAboReceivedDialog, new __dep_export_CastlePremiumAboReceivedDialogProperties.CastlePremiumAboReceivedDialogProperties(this));
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAboVO.prototype, "goods", {
    get: function () {
      return this._goods;
    },
    enumerable: true,
    configurable: true
  });
  return MessageAboVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageAboVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastlePremiumAboReceivedDialog = require("gge-module:export_CastlePremiumAboReceivedDialog");
