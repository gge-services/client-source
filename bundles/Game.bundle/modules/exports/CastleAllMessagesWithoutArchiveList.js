Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMailFilter = require("gge-module:export_ClientConstMailFilter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAllMessagesWithoutArchiveList(__s3param0, __s3param1 = null, __s3param2 = 0) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllMessagesWithoutArchiveList, __s1param0);
  CastleAllMessagesWithoutArchiveList.prototype.updateTabMessageCounter = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = false) {
    if (__s5param2 == -1) {
      __s5param2 = this.getUnreadMessageCount();
    }
    __s1param0.prototype.updateTabMessageCounter.call(this, __s5param0, __s5param1, __s5param2, __s5param3);
  };
  CastleAllMessagesWithoutArchiveList.prototype.getMessages = function (__s8param0, __s8param1) {
    return __dep_export_CastleModel.CastleModel.messageData.getMessagesByPageAndFilter(__s8param0, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_INBOX);
  };
  CastleAllMessagesWithoutArchiveList.prototype.getUnreadMessageCount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadUnarchivedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_INBOX));
  };
  CastleAllMessagesWithoutArchiveList.prototype.getMessageCount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countAllUnarchivedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_INBOX));
  };
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageReceived_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllMessagesWithoutArchiveList;
}(require("gge-module:export_ACastleBaseInboxMessageList").ACastleBaseInboxMessageList);
exports.CastleAllMessagesWithoutArchiveList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
