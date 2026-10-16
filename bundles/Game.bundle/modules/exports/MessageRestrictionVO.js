Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MessageRestrictionVO() {
    this.currentPlayerAmount = 0;
  }
  Object.defineProperty(MessageRestrictionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "messageType", {
    get: function () {
      return this._messageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "dailyLimit", {
    get: function () {
      return this._dailyLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "minLevel", {
    get: function () {
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
        return this._minLevelGlobalServer;
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  MessageRestrictionVO.prototype.fillFromParamXML = function (__s15param0) {
    this._id = parseInt(__s15param0.messageRestrictionID || "");
    this._messageType = parseInt(__s15param0.messageType || "");
    this._dailyLimit = parseInt(__s15param0.dailyLimitPerPlayer || "");
    this._minLevel = parseInt(__s15param0.minLevel || "-1");
    this._minLevelGlobalServer = parseInt(__s15param0.minLevelGlobalServer || "1");
  };
  return MessageRestrictionVO;
}();
exports.MessageRestrictionVO = __s0local0;
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
