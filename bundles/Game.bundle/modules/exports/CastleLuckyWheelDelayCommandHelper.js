Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __s0local0 = function () {
  function CastleLuckyWheelDelayCommandHelper() {}
  CastleLuckyWheelDelayCommandHelper.startCommandDelay = function () {
    __dep_exact_9e901e8e2483a22f.debug("starting command delay for lucky wheel");
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_CASTLE_RESOURCES, false);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_VIP_INFO_EVENT, false);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_ACHIEVEMENT_FINISHED);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_MESSAGES);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_UNIT_INVENTORY);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_CASTLE_PRODUCTION_DATA, false);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_POPUP);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_ARCHIVE_MESSAGE);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_BUY_EVENTPACKAGE);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_VIP_INFO_EVENT);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_DELETE_MESSAGE);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_EQUIPMENT_INVENTORY_SPACE_LEFT, false);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_POPOVER);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_NEW_RELIC_FLAG_EVENT, false);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_START);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_PROGRES);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_FINISHED);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_QUEST_LIST);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_DAILY_QUEST_LIST);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_ACHIEVEMENT_LIST);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_PRIVATE_OFFER_LIST);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_POINT_EVENT_POINTS);
    __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_INVENTORY);
  };
  CastleLuckyWheelDelayCommandHelper.stopCommandDelay = function () {
    __dep_export_CommandDelayController.CommandDelayController.getInstance().finishDelayOfAllCommands();
    __dep_exact_9e901e8e2483a22f.debug("---ending command delay for lucky wheel");
  };
  return CastleLuckyWheelDelayCommandHelper;
}();
exports.CastleLuckyWheelDelayCommandHelper = __s0local0;
