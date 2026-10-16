Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_CastleBreweryShortageDialog = require("gge-module:export_CastleBreweryShortageDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBreweryShortageDialogProperties = require("gge-module:export_CastleBreweryShortageDialogProperties");
var __s0local0 = function (__s1param0) {
  function MessageBuildingDisabledInfoVO() {
    var __s3local0 = this;
    __s3local0.wodID = -1;
    __s3local0.objectID = -1;
    __s3local0.areaType = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageBuildingDisabledInfoVO, __s1param0);
  MessageBuildingDisabledInfoVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this.resourceKey = __s5local0[0];
    this.kingdomID = parseInt(__s5local0[1]);
    this.areaID = parseInt(__s5local0[2]);
    this.wodID = parseInt(__s5local0[3]);
    this.objectID = parseInt(__s5local0[4]);
    this.areaName = __s5local0[5];
    this.areaType = parseInt(__s5local0[6]);
  };
  MessageBuildingDisabledInfoVO.prototype.parseSubject = function () {
    if (this.isBreweryMessage) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_relicBrewery_insufficientResources");
    } else {
      return null;
    }
  };
  MessageBuildingDisabledInfoVO.prototype.parseSender = function () {
    return this.areaName;
  };
  Object.defineProperty(MessageBuildingDisabledInfoVO.prototype, "dialogInfo", {
    get: function () {
      if (this.isBreweryMessage) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleBreweryShortageDialog.CastleBreweryShortageDialog, new __dep_export_CastleBreweryShortageDialogProperties.CastleBreweryShortageDialogProperties(this));
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
  Object.defineProperty(MessageBuildingDisabledInfoVO.prototype, "isBreweryMessage", {
    get: function () {
      var __s19local0 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this.wodID);
      return __dep_exact_81dacdf05bd32292.instanceOfClass(__s19local0, "RelicBreweryBuildingVO");
    },
    enumerable: true,
    configurable: true
  });
  return MessageBuildingDisabledInfoVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageBuildingDisabledInfoVO = __s0local0;
