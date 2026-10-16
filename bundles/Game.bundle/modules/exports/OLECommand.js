Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_MysteryBoxOpeningDialog = require("gge-module:export_MysteryBoxOpeningDialog");
var __dep_export_MysteryBoxOpeningDialogProperties = require("gge-module:export_MysteryBoxOpeningDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __s0local0 = function (__s1param0) {
  function OLECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OLECommand, __s1param0);
  Object.defineProperty(OLECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_OPEN_LOOT_BOX;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  OLECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(__s9local0.LID);
        var __s9local2 = undefined;
        if (__s9local0.LTR) {
          __s9local2 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s9local0.LTR);
        }
        if (__s9local0.LTRR) {
          __s9local2 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s9local0.LTRR);
        }
        var __s9local3 = __s9local0.KBS;
        var __s9local4 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxTypeByID(__s9local1.lootBoxTypeID).keyProgress;
        __dep_export_CastleModel.CastleModel.lootBoxData.setKeyProgress(__s9local1.lootBoxTypeID, __s9local0.KBS);
        var __s9local5 = __s9local0.TBF;
        var __s9local6 = new __dep_export_CollectableList.CollectableList();
        for (var __s9local7 = 0, __s9local8 = __s9local0.KTR; __s9local7 < __s9local8.length; __s9local7++) {
          var __s9local9 = __s9local8[__s9local7];
          __s9local6.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s9local9.AMT, __s9local9.ID));
        }
        var __s9local10 = __s9local2.addList(__s9local6);
        var __s9local11 = __s9local0.UKI;
        var __s9local12 = __s9local0.LTR;
        var __s9local13 = new __dep_export_MysteryBoxOpeningDialogProperties.MysteryBoxOpeningDialogProperties(__s9local1, __s9local11, __s9local3, __s9local4, __s9local5, __s9local10, __s9local12);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_MysteryBoxOpeningDialog.MysteryBoxOpeningDialog, __s9local13);
        this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return OLECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.OLECommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
