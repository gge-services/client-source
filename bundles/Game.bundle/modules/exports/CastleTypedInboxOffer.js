Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstMailFilter = require("gge-module:export_ClientConstMailFilter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTypedInboxOffer(__s3param0, __s3param1 = null, __s3param2 = 0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._messageCountDisplay = __s3param1;
    __s3local0._maxMessages = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTypedInboxOffer, __s1param0);
  CastleTypedInboxOffer.prototype.updateTabMessageCounter = function (__s5param0, __s5param1, __s5param2 = -1, __s5param3 = false) {
    __s5param2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadUnforwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER));
    __s1param0.prototype.updateTabMessageCounter.call(this, __s5param0, __s5param1, __s5param2, __s5param3);
  };
  CastleTypedInboxOffer.prototype.getMessages = function (__s7param0, __s7param1) {
    return __dep_export_CastleModel.CastleModel.messageData.getUnforwardedMessagesByPageAndFilter(__s7param0, __dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER);
  };
  CastleTypedInboxOffer.prototype.getMessageCount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnforwardedMessages(__dep_export_ClientConstMailFilter.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER));
  };
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageCategory_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxOffer;
}(require("gge-module:export_CastleTypedInboxMessageList").CastleTypedInboxMessageList);
exports.CastleTypedInboxOffer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
