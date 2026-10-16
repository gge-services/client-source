Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleFlaggedInboxMessageList(__s3param0, __s3param1 = null, __s3param2 = 0) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFlaggedInboxMessageList, __s1param0);
  CastleFlaggedInboxMessageList.prototype.updateTabMessageCounter = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = false) {
    __s5param0.visible = false;
  };
  CastleFlaggedInboxMessageList.prototype.getMessageCount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countArchivedMessages());
  };
  CastleFlaggedInboxMessageList.prototype.getMessages = function (__s9param0, __s9param1) {
    return __dep_export_CastleModel.CastleModel.messageData.getArchivedMessages(__s9param0);
  };
  Object.defineProperty(CastleFlaggedInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageArchived_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleFlaggedInboxMessageList;
}(require("gge-module:export_ACastleBaseInboxMessageList").ACastleBaseInboxMessageList);
exports.CastleFlaggedInboxMessageList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
