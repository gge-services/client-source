Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleFactionThankYouPackageDialogProperties = require("gge-module:export_CastleFactionThankYouPackageDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageThankYouPackageVO() {
    var __s3local0 = this;
    __s3local0.subtypePackage = 0;
    __s3local0.rewardAmount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageThankYouPackageVO, __s1param0);
  MessageThankYouPackageVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("-");
    this.subtypePackage = parseInt(__s5local0[0]);
    this.rewardAmount = parseInt(__s5local0[1]);
    var __s5local1 = __s5local0[2].split("#");
    this.unitArray = [];
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          this.unitArray.push([parseInt(__s5local4.split("+")[0]), parseInt(__s5local4.split("+")[1])]);
        }
      }
    }
  };
  MessageThankYouPackageVO.prototype.parseSubject = function () {
    if (this.subtypePackage == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("supportpacket_title");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("carepacket_title");
    }
  };
  MessageThankYouPackageVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageThankYouPackageVO.prototype, "dialogInfo", {
    get: function () {
      if (this.subtypePackage == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_THANK_YOU_PACKAGE_DESTROYED_FACTION_TOWERS) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFactionThankYouPackageDialog.CastleFactionThankYouPackageDialog, new __dep_export_CastleFactionThankYouPackageDialogProperties.CastleFactionThankYouPackageDialogProperties(this.rewardAmount, this.unitArray, "carepacket_copy", true));
      } else if (this.subtypePackage == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleFactionThankYouPackageDialog.CastleFactionThankYouPackageDialog, new __dep_export_CastleFactionThankYouPackageDialogProperties.CastleFactionThankYouPackageDialogProperties(this.rewardAmount, this.unitArray, "supportPackage_copy", false));
      } else {
        return null;
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageThankYouPackageVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageThankYouPackageVO = __s0local0;
var __dep_export_CastleFactionThankYouPackageDialog = require("gge-module:export_CastleFactionThankYouPackageDialog");
