Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMailFilter = require("gge-module:export_ClientConstMailFilter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTypedInboxMessageList(__s3param0, __s3param1 = null, __s3param2 = 0) {
    var __s3local0 = this;
    __s3local0.FILTER = [__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_INBOX, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_OUTBOX, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_PLAYER, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SYSTEM, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SPY, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTypedInboxMessageList, __s1param0);
  CastleTypedInboxMessageList.prototype.updateTabMessageCounter = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = false) {
    if (this._messageCountDisplay) {
      if (__s5param2 == -1) {
        __s5param2 = this.getMessageCount();
      }
      __s1param0.prototype.updateTabMessageCounter.call(this, __s5param0, __s5param1, __s5param2, __s5param3);
    }
  };
  CastleTypedInboxMessageList.prototype.getMessages = function (__s9param0, __s9param1) {
    return __dep_export_CastleModel.CastleModel.messageData.getMessagesByPageAndFilter(__s9param0, this.FILTER[__s9param1]);
  };
  CastleTypedInboxMessageList.prototype.getMessageCount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnforwardedMessages(this.FILTER[this._currentCategory]));
  };
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageSent_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxMessageList;
}(require("gge-module:export_ACastleBaseInboxMessageList").ACastleBaseInboxMessageList);
exports.CastleTypedInboxMessageList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
