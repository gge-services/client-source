Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function AMovementRenderStrategy() {}
  AMovementRenderStrategy.prototype.renderData = function (__s5param0, __s5param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AMovementRenderStrategy.prototype.reset = function (__s7param0, __s7param1) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s7param0.btn_destination, __s7param0.btn_spyInfo, __s7param0.btn_armyInfo, __s7param0.btn_retreat, __s7param0.btn_sendHome, __s7param0.btn_goods]);
    __s7param0.btn_destination.movementVO = __s7param1;
    __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addSymbolToMC(__s7param0.btn_destination.mc_kingdomBG.mc_icon, __s7param0.btn_destination.mc_kingdomBG.mc_bg, this.getKingdomID(__s7param1), new __s0local0(15, 15));
    __s7param0.btn_destination.mc_kingdomBG.mouseEnabled = false;
    __s7param0.btn_spyInfo.movementVO = __s7param1;
    __s7param0.btn_armyInfo.movementVO = __s7param1;
    __s7param0.btn_retreat.movementVO = __s7param1;
    __s7param0.btn_sendHome.movementVO = __s7param1;
    __s7param0.btn_goods.movementVO = __s7param1;
    __s7param0.mc_progress.toolTipText = "travelTime";
    __s7param0.mc_progress.mouseChildren = false;
    __s7param0.mc_progress.mouseEnabled = true;
    __s7param0.btn_spyInfo.toolTipText = "dialog_moveOverview_details";
    __s7param0.btn_goods.toolTipText = "dialog_moveOverview_details";
    __s7param0.btn_armyInfo.toolTipText = "dialog_moveOverview_details";
    __s7param0.fieldCastle = this.textFieldManager.registerTextField(__s7param0.btn_destination.txt_castleName, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldAction = this.textFieldManager.registerTextField(__s7param0.txt_action, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_TreasureHuntAttack"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldDestination = this.textFieldManager.registerTextField(__s7param0.txt_destination, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_destination"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldArrival = this.textFieldManager.registerTextField(__s7param0.txt_arival, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_moveOverview_arival"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldUnitCount = this.textFieldManager.registerTextField(__s7param0.btn_armyInfo.txt_units, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldToolCount = this.textFieldManager.registerTextField(__s7param0.btn_armyInfo.txt_tools, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldSpyCount = this.textFieldManager.registerTextField(__s7param0.btn_spyInfo.txt_spyAmount, new __dep_exact_92d05af59ee2ff30_1.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldSpyRisk = this.textFieldManager.registerTextField(__s7param0.btn_spyInfo.txt_spyRisk, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PERCENTAGE), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s7param0.fieldSpyEffect = this.textFieldManager.registerTextField(__s7param0.btn_spyInfo.txt_spyEffect, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PERCENTAGE), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    if (__s7param1.targetAreaPos.x != -1 && __s7param1.targetAreaPos.y != -1) {
      __s7param0.fieldCoords = this.textFieldManager.registerTextField(__s7param0.btn_destination.txt_coords, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_COORDS, [__s7param1.targetAreaPos.x, __s7param1.targetAreaPos.y]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    } else {
      __s7param0.fieldCoords = this.textFieldManager.registerTextField(__s7param0.btn_destination.txt_coords, new __dep_exact_92d05af59ee2ff30_1.TextVO("-"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    }
    __s7param0.fieldCastle.text = __s7param1.targetArea.areaNameString;
    __s7param0.fieldCastle.autoFitToBounds = true;
    __s7param0.btn_sendHome.visible = __s7param1.canBeSendHome;
    __s7param0.btn_sendHome.toolTipText = "dialog_moveOverview_sendHome";
    __s7param0.btn_retreat.visible = __s7param1.canBeRetreated;
    this.initRetreatButton(__s7param0.btn_retreat, __s7param1);
    __s7param0.fieldDestination.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BROWN;
    __s7param0.fieldAction.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BROWN;
    __s7param0.fieldArrival.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BROWN;
    __s7param0.btn_spyInfo.visible = false;
    __s7param0.btn_armyInfo.visible = false;
    __s7param0.btn_goods.visible = false;
    if (__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s7param1.kingdomID).isPaid) {
      __s7param0.btn_destination.toolTipText = "panel_action_jumpTo";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7param0.btn_destination, true);
    } else {
      __s7param0.btn_destination.toolTipText = "not_unlocked";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7param0.btn_destination, false);
    }
    var __s7local0 = __s7param1.isReturnHome && __s7param1.sourceArea ? __s7param1.sourceArea.areaType : __s7param1.targetArea.areaType;
    var __s7local1 = __s7param1.advisorType > 0 ? __s7param1.advisorType : __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(__s7local0);
    __s7param0.icon_advisor.visible = __s7param1.advisorType;
    __s7param0.icon_advisor.toolTipText = "title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(__s7local1);
    __s7param0.icon_advisor.gotoAndStop(__s7local1);
  };
  AMovementRenderStrategy.prototype.getKingdomID = function (__s13param0) {
    return __s13param0.kingdomID;
  };
  AMovementRenderStrategy.prototype.initRetreatButton = function (__s15param0, __s15param1) {
    if (!__s15param1.canBeRetreated || __s15param1.tooLateToBeRetreated || __s15param1.sourceArea.isUnderConquerControl) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15param0, false);
      __s15param0.toolTipText = "ringmenu_building_cantRetreat";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15param0, true);
      __s15param0.toolTipText = "dialog_moveOverview_retreat";
    }
  };
  AMovementRenderStrategy.prototype.updateContainer = function (__s19param0, __s19param1) {
    if (__s19param1) {
      __s19param0.mc_progress.bar.scaleX = __s19param1.currentProgress;
      var __s19local0 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(__s19param1.currentEndTimeInSeconds(), __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
      if (__s19local0) {
        this.textFieldManager.registerTextField(__s19param0.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s19local0));
      }
      if (__s19param0.btn_retreat.visible && __s19param0.btn_retreat.enabled) {
        this.initRetreatButton(__s19param0.btn_retreat, __s19param1);
      }
    }
  };
  AMovementRenderStrategy.setDecoFrame = function (__s24param0, __s24param1) {
    __s24param0.deco.gotoAndStop(__s24param1);
    switch (__s24param1) {
      case 6:
      case 5:
      case 4:
      case 1:
        __s24param0.fieldDestination.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
        __s24param0.fieldAction.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
        __s24param0.fieldArrival.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
        break;
      case 9:
      case 8:
      case 7:
      case 3:
      case 2:
        __s24param0.fieldDestination.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
        __s24param0.fieldAction.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
        __s24param0.fieldArrival.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
    }
  };
  Object.defineProperty(AMovementRenderStrategy.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AMovementRenderStrategy.__initialize_static_members = function () {
    AMovementRenderStrategy.FRAME_MY_ATTACK = 1;
    AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE = 2;
    AMovementRenderStrategy.FRAME_ENEMY_ATTACK = 7;
    AMovementRenderStrategy.FRAME_ALLIED_ATTACK = 1;
    AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE = 8;
    AMovementRenderStrategy.FRAME_OTHER_ATTACK = 9;
    AMovementRenderStrategy.FRAME_TRAVEL = 4;
    AMovementRenderStrategy.FRAME_MARKET = 6;
    AMovementRenderStrategy.FRAME_SPY = 3;
    AMovementRenderStrategy.FRAME_SUPPORT_DEFENSE = 5;
  };
  AMovementRenderStrategy.FRAME_MY_ATTACK = 1;
  AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE = 2;
  AMovementRenderStrategy.FRAME_ENEMY_ATTACK = 7;
  AMovementRenderStrategy.FRAME_ALLIED_ATTACK = 1;
  AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE = 8;
  AMovementRenderStrategy.FRAME_OTHER_ATTACK = 9;
  AMovementRenderStrategy.FRAME_TRAVEL = 4;
  AMovementRenderStrategy.FRAME_MARKET = 6;
  AMovementRenderStrategy.FRAME_SPY = 3;
  AMovementRenderStrategy.FRAME_SUPPORT_DEFENSE = 5;
  return AMovementRenderStrategy;
}();
exports.AMovementRenderStrategy = __s0local1;
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__s0local1.__initialize_static_members();
