Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMailFilter = require("gge-module:export_ClientConstMailFilter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTypedInboxBattleAndSpyMessagesList(__s3param0, __s3param1, __s3param2 = null, __s3param3 = 0) {
    var __s3local0 = this;
    __s3local0._displayForwardedMessages = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._displayForwardedMessages = __s3param1;
    __s3local0._messageCountDisplay = __s3param2;
    __s3local0._maxMessages = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTypedInboxBattleAndSpyMessagesList, __s1param0);
  CastleTypedInboxBattleAndSpyMessagesList.prototype.updateTabMessageCounter = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = false) {
    __s5param2 = this._displayForwardedMessages ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadForwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY)) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadUnforwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    __s1param0.prototype.updateTabMessageCounter.call(this, __s5param0, __s5param1, __s5param2, __s5param3);
  };
  CastleTypedInboxBattleAndSpyMessagesList.prototype.getMessages = function (__s7param0, __s7param1) {
    if (this._displayForwardedMessages) {
      return __dep_export_CastleModel.CastleModel.messageData.getForwardedMessagesByPageAndFilter(__s7param0, this.FILTER[__s7param1]);
    } else {
      return __dep_export_CastleModel.CastleModel.messageData.getUnforwardedMessagesByPageAndFilter(__s7param0, this.FILTER[__s7param1]);
    }
  };
  CastleTypedInboxBattleAndSpyMessagesList.prototype.getMessageCount = function () {
    if (this._displayForwardedMessages) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countForwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnforwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    }
  };
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageCategory_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxBattleAndSpyMessagesList;
}(require("gge-module:export_CastleTypedInboxMessageList").CastleTypedInboxMessageList);
exports.CastleTypedInboxBattleAndSpyMessagesList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
