Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DonationEventDialog = require("gge-module:export_DonationEventDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function DonationEventEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventEventVO, __s1param0);
  DonationEventEventVO.prototype.parseParamObject = function (__s5param0) {
    this._settingID = __s5param0.DSI;
    this._settingVO = __dep_export_CastleModel.CastleModel.donationEventData.getSettingVOByID(this._settingID);
    this._leaderBoardRewardSetID = __s5param0.LRSI;
  };
  Object.defineProperty(DonationEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return 2899;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_DonationEvent";
    },
    enumerable: true,
    configurable: true
  });
  DonationEventEventVO.prototype.openDialog = function (__s11param0 = true) {
    var __s11local0 = this.getEventTeaserMessageVO();
    if (__s11local0 && !__s11local0.read) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, __s11local0);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DonationEventDialog.DonationEventDialog);
    }
  };
  DonationEventEventVO.prototype.executeOpenDialog = function (__s15param0, __s15param1, __s15param2 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DonationEventDialog.DonationEventDialog);
  };
  Object.defineProperty(DonationEventEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARCHITECT;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var __s19local0 = 0, __s19local1 = __dep_export_CastleModel.CastleModel.messageData.incomingMails; __s19local0 < __s19local1.length; __s19local0++) {
      var __s19local2 = __s19local1[__s19local0];
      if (__s19local2 !== undefined && __dep_exact_81dacdf05bd32292.instanceOfClass(__s19local2, "MessageSpecialEventVO")) {
        var __s19local3 = __s19local2;
        if (__s19local3 && __s19local3.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && __s19local3.additionalInformation[0] == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION) {
          return __s19local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(DonationEventEventVO.prototype, "settingVO", {
    get: function () {
      return this._settingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEventVO.prototype, "leaderBoardRewardSetID", {
    get: function () {
      return this._leaderBoardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.DonationEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
