Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleRebuyBoosterDialogProperties = require("gge-module:export_CastleRebuyBoosterDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageRebuyVO() {
    var __s3local0 = this;
    __s3local0._boosterID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageRebuyVO, __s1param0);
  MessageRebuyVO.prototype.parseMessageHeader = function (__s5param0) {
    this._boosterID = parseInt(__s5param0);
  };
  MessageRebuyVO.prototype.parseSubject = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(this.boosterID);
    if (__s7local0 != null) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_rebuy_" + __s7local0.nonLocalizedHeroName + "_mailHeader");
    } else {
      return "";
    }
  };
  MessageRebuyVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageRebuyVO.prototype, "dialogInfo", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(this.boosterID) != null) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleRebuyBoosterDialog.CastleRebuyBoosterDialog, new __dep_export_CastleRebuyBoosterDialogProperties.CastleRebuyBoosterDialogProperties(__dep_export_CastleModel.CastleModel.boostData.getBoosterByID(this.boosterID), this.messageID));
      } else {
        return null;
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRebuyVO.prototype, "boosterID", {
    get: function () {
      return this._boosterID;
    },
    enumerable: true,
    configurable: true
  });
  return MessageRebuyVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageRebuyVO = __s0local0;
var __dep_export_CastleRebuyBoosterDialog = require("gge-module:export_CastleRebuyBoosterDialog");
