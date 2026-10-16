Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceCentersOfPowerDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceCentersOfPowerDialogItem, __s1param0);
  CastleAllianceCentersOfPowerDialogItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "MetropolMapobjectVO")) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    }
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.fill = function () {
    var __s10local0 = this.getItemMc();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s10local0.btn_goTo], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __s10local0.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.wmo, new __s0local0(78, 62), true, false, false));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s10local0.txt_areaName, new __dep_exact_92d05af59ee2ff30.TextVO(this.wmo.areaNameString));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s10local0.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(this.playerName));
    __s10local0.mc_collectionTime.toolTipText = "depletion_influence_tt";
    __s10local0.mc_allInfluence.toolTipText = "currency_name_AllianceInfluence";
    __s10local0.mc_attack.toolTipText = "kingstower_worldmap_tooltip_" + __dep_export_ABGHelper.ABGHelper.skinName;
    __s10local0.btn_goTo.toolTipText = "jumpTo";
    __s10local0.mc_collectionTime.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "MetropolMapobjectVO");
    __s10local0.mc_collectionTime.mouseChildren = false;
    __s10local0.mc_allInfluence.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "CapitalMapobjectVO");
    __s10local0.mc_allInfluence.mouseChildren = false;
    __s10local0.mc_attack.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "KingstowerMapobjectVO");
    __s10local0.mc_attack.mouseChildren = false;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "MetropolMapobjectVO")) {
      this.onUpdateTimer();
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "CapitalMapobjectVO")) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s10local0.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.additionalInformation));
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "KingstowerMapobjectVO")) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s10local0.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relicequip_dialog_relicIncrease_value_single", [this.additionalInformation]));
    }
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onUpdateTimer = function (__s15param0 = null) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinutesTimeString(Math.max(this.additionalInformation - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.dataGainTime) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC))));
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__s17param0.target == this.getItemMc().btn_goTo) {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.wmo);
    }
  };
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "wmo", {
    get: function () {
      if (this.data) {
        return this.data[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "playerName", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "additionalInformation", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "dataGainTime", {
    get: function () {
      return this.data[3];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceCentersOfPowerDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleAllianceCentersOfPowerDialogItem = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
